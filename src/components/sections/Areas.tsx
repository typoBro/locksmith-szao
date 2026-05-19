"use client";

import { ExternalLink, Map, Phone } from "lucide-react";
import { useState } from "react";
import { YandexDistrictMap } from "@/components/maps/YandexDistrictMap";
import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { ButtonLink } from "@/components/ui/Button";
import { areas, serviceArea } from "@/data/areas";
import { areasContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

const visibleAreas = ["Митино", "Строгино", "Щукино", "Тушино", "Куркино", "Хорошёво-Мнёвники"];

function AreaMap({ isMapVisible, onShowMap }: { isMapVisible: boolean; onShowMap: () => void }) {
  return (
    <div className="mobile-card min-w-0 rounded-[24px] bg-[var(--paper)] p-4 shadow-[var(--soft-shadow)] md:p-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
        <div className="min-w-0">
          <h2 className="font-display text-[2.6rem] font-bold leading-none text-[var(--ink)] md:text-5xl">
            {serviceArea.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base font-semibold leading-6 text-[var(--muted)] md:text-lg md:leading-7">
            {serviceArea.description}
          </p>

          <div className="mt-4 flex max-h-[5.9rem] min-w-0 flex-wrap gap-1.5 overflow-hidden md:max-h-none md:gap-2">
            {visibleAreas.map((area) => (
              <span
                key={area}
                className="mobile-chip min-w-0 px-2.5 py-1.5 text-[12px] font-extrabold leading-5 text-[var(--graphite)] md:px-3 md:py-2 md:text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <ButtonLink
              href={siteConfig.phoneHref}
              size="md"
              className="min-h-14"
              onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {serviceArea.checkAreaPhoneLabel}
            </ButtonLink>
            <ButtonLink
              href={serviceArea.yandexMapHref}
              variant="secondary"
              size="md"
              className="min-h-14"
              aria-label={areasContent.mapAriaLabel}
              onClick={() => reachGoal(siteConfig.metrikaGoalMap)}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {areasContent.yandexMapsButton}
            </ButtonLink>
          </div>

          {!isMapVisible ? (
            <button
              type="button"
              onClick={() => {
                reachGoal(siteConfig.metrikaGoalMap);
                onShowMap();
              }}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[16px] border border-[var(--line)] bg-transparent px-4 text-sm font-extrabold text-[var(--muted)] transition hover:bg-white active:translate-y-px active:scale-[0.99]"
            >
              <Map className="h-4 w-4" aria-hidden="true" />
              {serviceArea.showMapLabel}
            </button>
          ) : null}

          {isMapVisible ? (
            <div className="mt-3 min-w-0 overflow-hidden rounded-[22px] border border-[var(--line-strong)] bg-white md:mt-4">
              <div className="max-h-[320px] overflow-hidden md:max-h-none">
                <YandexDistrictMap />
              </div>
            </div>
          ) : null}

          <div className="mt-4 hidden min-w-0 flex-wrap gap-1.5 lg:flex" aria-label={areasContent.districtsLabel}>
            {areas.map((area) => (
              <span key={area} className="mobile-chip px-2.5 py-1.5 text-[12px] font-bold leading-5 text-[var(--muted)]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Areas() {
  const [isMapVisible, setIsMapVisible] = useState(false);

  return (
    <section id="areas" className="mobile-section bg-white md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <AnimatedReveal disableOnMobile={false} y={16} duration={0.38}>
          <AreaMap isMapVisible={isMapVisible} onShowMap={() => setIsMapVisible(true)} />
        </AnimatedReveal>
      </div>
    </section>
  );
}
