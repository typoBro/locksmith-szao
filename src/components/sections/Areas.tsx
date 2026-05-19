"use client";

import { ExternalLink, Map, Phone } from "lucide-react";
import { useState } from "react";
import { YandexDistrictMap } from "@/components/maps/YandexDistrictMap";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { areasContent } from "@/data/content";
import { areas, serviceArea } from "@/data/areas";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

function AreaMap({ isMapVisible, onShowMap }: { isMapVisible: boolean; onShowMap: () => void }) {
  return (
    <div className="min-w-0 border border-[var(--line)] bg-[var(--paper)] p-3 sm:p-5">
      <div>
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">{areasContent.districtsLabel}</p>
        <div className="flex min-w-0 flex-wrap gap-1.5 md:gap-2">
          {areas.map((area) => (
            <span
              key={area}
              className="min-w-0 break-words border border-[var(--line)] bg-white px-2.5 py-1.5 text-[13px] font-bold leading-5 text-[var(--graphite)] md:px-3 md:py-2 md:text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-2 md:flex md:flex-wrap">
        <ButtonLink href={siteConfig.phoneHref} size="sm" onClick={() => reachGoal(siteConfig.metrikaGoalCall)}>
          <Phone className="h-4 w-4" aria-hidden="true" />
          {serviceArea.checkAreaPhoneLabel}
        </ButtonLink>
        <ButtonLink
          href={serviceArea.yandexMapHref}
          variant="secondary"
          size="sm"
          aria-label={areasContent.mapAriaLabel}
          onClick={() => reachGoal(siteConfig.metrikaGoalMap)}
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          {areasContent.yandexMapsButton}
        </ButtonLink>
        {!isMapVisible ? (
          <button
            type="button"
            onClick={() => {
              reachGoal(siteConfig.metrikaGoalMap);
              onShowMap();
            }}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--ink)] bg-[var(--ink)] px-4 text-sm font-bold text-white transition active:translate-y-px"
          >
            <Map className="h-4 w-4" aria-hidden="true" />
            {serviceArea.showMapLabel}
          </button>
        ) : null}
      </div>

      <div className="mt-4 min-w-0 overflow-hidden border border-[var(--ink)] bg-white">
        {isMapVisible ? (
          <div className="max-h-[320px] overflow-hidden md:max-h-none">
            <YandexDistrictMap />
          </div>
        ) : (
          <div className="grid min-h-[128px] place-items-center bg-[var(--paper-warm)] px-4 text-center md:min-h-[260px] md:px-5">
            <div>
              <p className="font-display text-2xl font-bold leading-none text-[var(--ink)] md:text-3xl">{areasContent.mapPreviewTitle}</p>
              <p className="mt-2 max-w-lg text-xs font-semibold leading-5 text-[var(--muted)] md:mt-3 md:text-sm md:leading-6">{areasContent.mapPreviewDescription}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Areas() {
  const [isMapVisible, setIsMapVisible] = useState(false);

  return (
    <section id="areas" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={areasContent.label}
          title={serviceArea.title}
          description={areasContent.description}
        />

        <div className="mt-7 md:mt-8">
          <AreaMap isMapVisible={isMapVisible} onShowMap={() => setIsMapVisible(true)} />
        </div>
      </div>
    </section>
  );
}
