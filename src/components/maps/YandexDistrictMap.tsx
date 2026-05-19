"use client";

import { useEffect, useRef, useState } from "react";
import { serviceDistricts } from "@/data/areas";
import { mapContent } from "@/data/content";

type Coordinate = readonly [number, number];

type YandexMapInstance = {
  destroy: () => void;
  geoObjects: {
    add: (geoObject: unknown) => void;
  };
  controls: {
    remove: (controlName: string) => void;
  };
};

type YandexMapsNamespace = {
  ready: (callback: () => void) => void;
  Map: new (
    container: HTMLElement,
    state: { center: Coordinate; zoom: number; controls?: string[] },
    options?: Record<string, unknown>,
  ) => YandexMapInstance;
  Polygon: new (
    geometry: readonly [readonly Coordinate[]],
    properties?: Record<string, unknown>,
    options?: Record<string, unknown>,
  ) => unknown;
  Placemark: new (coordinates: Coordinate, properties?: Record<string, unknown>, options?: Record<string, unknown>) => unknown;
  templateLayoutFactory: {
    createClass: (template: string) => unknown;
  };
};

declare global {
  interface Window {
    ymaps?: YandexMapsNamespace;
    __szaoYandexMapsPromise?: Promise<YandexMapsNamespace>;
  }
}

function loadYandexMaps() {
  if (typeof window === "undefined") return Promise.reject(new Error("window is not available"));
  if (window.ymaps) return Promise.resolve(window.ymaps);
  if (window.__szaoYandexMapsPromise) return window.__szaoYandexMapsPromise;

  window.__szaoYandexMapsPromise = new Promise<YandexMapsNamespace>((resolve, reject) => {
    const params = new URLSearchParams({
      lang: "ru_RU",
      load: "package.full",
    });
    const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;

    if (apiKey) {
      params.set("apikey", apiKey);
    }

    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?${params.toString()}`;
    script.async = true;
    script.onload = () => {
      if (!window.ymaps) {
        reject(new Error("Yandex Maps API did not expose ymaps"));
        return;
      }

      window.ymaps.ready(() => resolve(window.ymaps as YandexMapsNamespace));
    };
    script.onerror = () => reject(new Error("Yandex Maps API failed to load"));
    document.head.appendChild(script);
  });

  return window.__szaoYandexMapsPromise;
}

function closePolygon(points: readonly Coordinate[]) {
  const [first] = points;
  const last = points[points.length - 1];

  if (!first || !last) return points;
  if (first[0] === last[0] && first[1] === last[1]) return points;

  return [...points, first] as const;
}

export function YandexDistrictMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<YandexMapInstance | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let isMounted = true;

    loadYandexMaps()
      .then((ymaps) => {
        if (!isMounted || !containerRef.current) return;

        const map = new ymaps.Map(
          containerRef.current,
          {
            center: [55.827, 37.43],
            zoom: 11,
            controls: ["zoomControl", "fullscreenControl"],
          },
          {
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
          },
        );

        map.controls.remove("searchControl");
        map.controls.remove("trafficControl");
        map.controls.remove("typeSelector");

        const labelLayout = ymaps.templateLayoutFactory.createClass(
          '<div class="szao-map-label">$[properties.name]</div>',
        );

        serviceDistricts.forEach((district, index) => {
          const polygon = new ymaps.Polygon(
            [closePolygon(district.polygon)],
            {
              hintContent: district.name,
              balloonContent: `<strong>${district.name}</strong><br/>${mapContent.districtBalloonSuffix}`,
            },
            {
              fillColor: index % 2 === 0 ? "#FFD21F" : "#111111",
              fillOpacity: index % 2 === 0 ? 0.28 : 0.14,
              strokeColor: "#111111",
              strokeOpacity: 0.9,
              strokeWidth: 2,
              interactivityModel: "default#geoObject",
            },
          );

          const label = new ymaps.Placemark(
            district.center,
            {
              name: district.name,
              iconCaption: district.name,
              hintContent: district.name,
            },
            {
              iconLayout: labelLayout,
              iconOffset: [-48, -14],
              iconShape: {
                type: "Rectangle",
                coordinates: [
                  [-48, -14],
                  [96, 28],
                ],
              },
            },
          );

          map.geoObjects.add(polygon);
          map.geoObjects.add(label);
        });

        mapRef.current = map;
        setStatus("ready");
      })
      .catch(() => {
        if (isMounted) setStatus("error");
      });

    return () => {
      isMounted = false;
      mapRef.current?.destroy();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative h-[320px] md:aspect-[16/10] md:h-auto md:min-h-[360px]" data-yandex-district-map>
      <div ref={containerRef} className="absolute inset-0" aria-label={mapContent.areaLabel} />

      {status === "loading" ? (
        <div className="absolute inset-0 grid place-items-center bg-[#eef4fb] px-5 text-center text-sm font-extrabold text-[var(--muted)]">
          {mapContent.loading}
        </div>
      ) : null}

      {status === "error" ? (
        <div className="absolute inset-0 grid place-items-center bg-[var(--paper)] px-5 text-center">
          <div>
            <p className="font-display text-2xl font-bold text-[var(--ink)]">{mapContent.errorTitle}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">
              {mapContent.errorDescription}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
