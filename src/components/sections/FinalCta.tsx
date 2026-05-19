"use client";

import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { finalCtaContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section data-final-cta className="bg-[var(--ink)] py-12 text-white md:py-16">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">{finalCtaContent.title}</h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-white/65">
            {finalCtaContent.description}
          </p>
        </div>
        <div className="hidden md:flex md:shrink-0">
          <ButtonLink href={siteConfig.phoneHref} size="lg" onClick={() => reachGoal(siteConfig.metrikaGoalCall)}>
            <Phone className="h-5 w-5" aria-hidden="true" />
            {finalCtaContent.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
