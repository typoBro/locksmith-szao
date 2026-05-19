"use client";

import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Magnet } from "@/components/reactbits/Magnet";
import { CasePhotoSwap } from "@/components/reactbits/CasePhotoSwap";
import { ButtonLink } from "@/components/ui/Button";
import { heroCasePhotos } from "@/data/cases";
import { heroContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="poster-grid relative overflow-hidden bg-[var(--paper)]">
      <div className="relative z-10 mx-auto grid max-w-[1440px] items-stretch gap-5 px-4 py-6 sm:px-6 md:py-8 lg:min-h-[68svh] lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.78fr)] lg:gap-7 lg:px-8 lg:py-10">
        <div className="flex min-w-0 max-w-4xl flex-col justify-center">
          <p className="mb-3 w-fit max-w-full border border-[var(--line)] bg-white/80 px-3 py-2 text-xs font-extrabold text-[var(--muted)] lg:mb-4">
            {heroContent.badge}
          </p>
          <h1 className="font-display max-w-4xl text-balance text-[clamp(2.05rem,9.8vw,3.22rem)] font-bold uppercase leading-[0.98] text-[var(--ink)] sm:text-6xl lg:text-[clamp(4rem,6.2vw,4.85rem)] lg:leading-[0.94]">
            {heroContent.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] font-medium leading-6 text-[var(--graphite)] sm:text-lg lg:mt-5 lg:text-xl lg:leading-8">
            {heroContent.description}
          </p>

          <div className="mt-5 grid min-w-0 grid-cols-1 gap-2 lg:mt-7 lg:flex lg:flex-row lg:items-center">
            <Magnet className="min-w-0 lg:w-auto">
              <ButtonLink
                href={siteConfig.phoneHref}
                size="lg"
                className="min-h-[54px] w-full px-3 text-[15px] lg:min-h-[56px] lg:w-auto lg:min-w-60 lg:px-7 lg:text-base"
                onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {heroContent.primaryCta}
              </ButtonLink>
            </Magnet>
            <ButtonLink
              href={siteConfig.whatsappHref}
              variant="secondary"
              size="lg"
              className="min-h-[54px] w-full border-[var(--whatsapp)] px-3 text-[15px] lg:min-h-[56px] lg:w-auto lg:min-w-36 lg:px-7 lg:text-base"
              onClick={() => reachGoal(siteConfig.metrikaGoalWhatsapp)}
            >
              <MessageCircle className="h-5 w-5 text-[var(--whatsapp)]" aria-hidden="true" />
              {heroContent.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 lg:mt-5">
            {heroContent.proofChips.map((chip) => (
              <span key={chip} className="border border-[var(--line)] bg-white/86 px-2.5 py-1.5 text-[11px] font-extrabold text-[var(--graphite)] lg:px-3 lg:py-2 lg:text-xs">
                {chip}
              </span>
            ))}
          </div>

          <ul className="mt-3 grid grid-cols-3 gap-2 text-[12px] font-extrabold leading-4 text-[var(--ink)] lg:mt-4 lg:text-sm lg:leading-5">
            {heroContent.trustItems.map((item) => (
              <li key={item} className="border-l-2 border-[var(--ink)] pl-2 lg:pl-3">
                {item}
              </li>
            ))}
          </ul>

          <figure className="mt-5 overflow-hidden border border-[var(--ink)] bg-white shadow-[6px_6px_0_rgba(17,17,17,0.08)] lg:hidden">
            <div className="relative aspect-[16/10]">
              <Image
                src={heroCasePhotos[0].src}
                alt={heroCasePhotos[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 0vw"
                priority
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 border-t border-[var(--line)] bg-white px-3 py-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">Фото из Avito</span>
              <span className="border border-[var(--line)] bg-[var(--paper)] px-2 py-1 text-[10px] font-extrabold text-[var(--muted)]">
                {heroCasePhotos[0].label}
              </span>
            </figcaption>
          </figure>
        </div>

        <CasePhotoSwap />
      </div>
    </section>
  );
}
