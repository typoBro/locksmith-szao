"use client";

import Image from "next/image";
import { ExternalLink, Phone } from "lucide-react";
import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { ButtonLink } from "@/components/ui/Button";
import { avitoProfileContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

export function AvitoProfile() {
  return (
    <section id="avito" className="mobile-section border-b border-[var(--line)] bg-[var(--paper-warm)] md:py-16" aria-label="Профиль мастера на Avito">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <AnimatedReveal
          disableOnMobile={false}
          y={12}
          duration={0.42}
          className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch"
        >
          <div className="relative hidden min-h-[520px] overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--paper)] shadow-[var(--surface-shadow)] lg:block">
            <Image
              src={siteConfig.heroImage}
              alt={avitoProfileContent.imageAlt}
              fill
              className="object-cover"
              sizes="42vw"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 via-black/26 to-transparent p-6 text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/65">Фото с выезда</p>
              <p className="mt-2 font-display text-4xl font-bold leading-none">Работа с замком</p>
            </div>
          </div>

          <div className="profile-card-like mobile-card min-w-0 rounded-[26px] bg-[var(--paper)] p-4 shadow-[var(--soft-shadow)] lg:p-8">
            <div className="flex items-center gap-3">
              <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-[22px] border border-[var(--line)] bg-white md:h-24 md:w-24">
                <Image
                  src={siteConfig.profileImage}
                  alt={avitoProfileContent.imageAlt}
                  fill
                  className="origin-top-right scale-[2.15] object-cover [object-position:100%_0%]"
                  sizes="96px"
                  loading="lazy"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">{avitoProfileContent.label}</p>
                <h2 className="mt-1 font-display text-[2.35rem] font-bold leading-none text-[var(--ink)] md:text-5xl">Сергей</h2>
                <p className="mt-1 text-sm font-extrabold leading-5 text-[var(--graphite)] md:text-base">
                  мастер по замкам в СЗАО
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[20px] border border-[var(--line)] bg-white/62 px-3 py-3 md:mt-6 md:px-4">
              <p className="text-sm font-extrabold leading-5 text-[var(--ink)] md:text-base">
                Avito {siteConfig.masterRating} · {siteConfig.masterReviews} · {siteConfig.masterSince.replace("на Avito ", "")}
              </p>
              <p className="mt-2 text-sm font-semibold leading-5 text-[var(--muted)] md:text-base md:leading-6">
                {avitoProfileContent.description}
              </p>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] md:mt-6">
              <ButtonLink
                href={siteConfig.phoneHref}
                size="md"
                onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
                className="min-h-[52px]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {avitoProfileContent.callCta}
              </ButtonLink>
              <ButtonLink
                href={siteConfig.avitoUrl}
                variant="ghost"
                size="md"
                className="min-h-[52px] border border-[var(--line)] bg-white/64 text-[var(--ink)] hover:border-[var(--line-strong)] hover:bg-white"
                onClick={() => reachGoal(siteConfig.metrikaGoalAvito)}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {avitoProfileContent.avitoCta}
              </ButtonLink>
            </div>

            <dl className="mt-4 overflow-hidden rounded-[20px] border border-[var(--line)] bg-white/58 md:mt-7">
              {avitoProfileContent.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[5.1rem_minmax(0,1fr)] gap-3 border-b border-[var(--line)] px-3 py-3 last:border-b-0 md:grid-cols-[7rem_minmax(0,1fr)] md:px-4"
                >
                  <dt className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[var(--muted)] md:text-[11px]">{fact.label}</dt>
                  <dd className="min-w-0 text-[13px] font-bold leading-5 text-[var(--ink)] md:text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
