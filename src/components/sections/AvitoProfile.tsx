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
    <section id="avito" className="border-b border-[var(--line)] bg-[var(--paper-warm)] py-4 md:py-16" aria-label="Профиль мастера на Avito">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <AnimatedReveal
          disableOnMobile={false}
          y={16}
          duration={0.38}
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

          <div className="profile-card-like min-w-0 rounded-[26px] border border-[var(--line)] bg-[var(--paper)] p-4 shadow-[var(--soft-shadow)] lg:p-8">
            <div className="flex items-center gap-3">
              <div className="relative h-[64px] w-[64px] shrink-0 overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_rgba(17,17,17,0.08)] md:h-24 md:w-24 md:rounded-[24px]">
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
                <h2 className="font-display text-[2.35rem] font-bold leading-none text-[var(--ink)] md:text-5xl">Сергей</h2>
                <p className="mt-1 text-sm font-extrabold leading-5 text-[var(--graphite)] md:text-base">
                  мастер по замкам в СЗАО
                </p>
                <p className="mt-1.5 text-xs font-extrabold leading-4 text-[var(--muted)] md:text-sm">
                  {siteConfig.masterRating} на Avito · {siteConfig.masterReviews} · {siteConfig.masterSince.replace("на Avito ", "")}
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm font-semibold leading-5 text-[var(--muted)] md:mt-6 md:text-base md:leading-6">
              {avitoProfileContent.description}
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] md:mt-6">
              <ButtonLink
                href={siteConfig.phoneHref}
                size="md"
                onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
                className="min-h-[56px]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {avitoProfileContent.callCta}
              </ButtonLink>
              <ButtonLink
                href={siteConfig.avitoUrl}
                variant="ghost"
                size="md"
                className="min-h-[56px] border-0 bg-transparent text-[var(--ink)] shadow-none hover:bg-white/64 md:border md:border-[var(--line)] md:bg-white/64 md:hover:border-[var(--line-strong)] md:hover:bg-white"
                onClick={() => reachGoal(siteConfig.metrikaGoalAvito)}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {avitoProfileContent.avitoCta}
              </ButtonLink>
            </div>

            <dl className="mt-4 border-t border-[var(--line)] md:mt-7">
              {avitoProfileContent.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[5.1rem_minmax(0,1fr)] gap-3 border-b border-[var(--line)] py-3 md:grid-cols-[7rem_minmax(0,1fr)]"
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
