"use client";

import Image from "next/image";
import { ExternalLink, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { avitoProfileContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

export function AvitoProfile() {
  return (
    <section id="avito" className="border-b border-[var(--line)] bg-white py-8 md:py-16" aria-label="Профиль мастера на Avito">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden border border-[var(--ink)] bg-[var(--paper)] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="min-w-0 p-3 sm:p-4 lg:order-2 lg:p-8 lg:pb-4">
            <p className="hidden w-fit border border-[var(--line)] bg-white px-3 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted)] md:block">
              {avitoProfileContent.label}
            </p>
            <h2 className="font-display text-[2rem] font-bold leading-none text-[var(--ink)] md:mt-5 md:text-5xl">
              {avitoProfileContent.title}
            </h2>
            <p className="mt-2 text-sm font-extrabold leading-5 text-[var(--graphite)] md:mt-3 md:text-base md:leading-6">
              Avito {siteConfig.masterRating} · {siteConfig.masterReviews} · {siteConfig.masterSince.replace("на Avito ", "")}
            </p>
            <p className="mt-3 hidden text-base font-extrabold leading-6 text-[var(--graphite)] md:block">{avitoProfileContent.status}</p>
            <p className="mt-5 hidden max-w-2xl text-base font-semibold leading-7 text-[var(--graphite)] md:block">
              {avitoProfileContent.description}
            </p>
          </div>

          <div className="relative aspect-[16/10] border-y border-[var(--ink)] bg-white lg:order-1 lg:row-span-2 lg:aspect-auto lg:min-h-[520px] lg:border-y-0 lg:border-r">
            <Image
              src={siteConfig.profileImage}
              alt={avitoProfileContent.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 42vw"
              loading="lazy"
            />
          </div>

          <div className="min-w-0 p-3 sm:p-4 lg:order-2 lg:p-8 lg:pt-2">
            <div className="grid grid-cols-[1fr_0.9fr] gap-2 lg:grid-cols-3">
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
                href={siteConfig.whatsappHref}
                variant="secondary"
                size="md"
                onClick={() => reachGoal(siteConfig.metrikaGoalWhatsapp)}
                className="min-h-[52px] border-[var(--whatsapp)] hover:bg-[var(--whatsapp-soft)]"
              >
                <MessageCircle className="h-4 w-4 text-[var(--whatsapp)]" aria-hidden="true" />
                {avitoProfileContent.whatsappCta}
              </ButtonLink>
              <ButtonLink
                href={siteConfig.avitoUrl}
                variant="dark"
                size="md"
                className="col-span-2 min-h-[52px] lg:col-span-1"
                onClick={() => reachGoal(siteConfig.metrikaGoalAvito)}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {avitoProfileContent.avitoCta}
              </ButtonLink>
            </div>

            <dl className="mt-3 border-y border-[var(--line)] bg-white md:mt-7 md:grid md:grid-cols-2 md:border-0 md:bg-transparent md:gap-2">
              {avitoProfileContent.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[4.7rem_minmax(0,1fr)] gap-2 border-b border-[var(--line)] px-2.5 py-2.5 last:border-b-0 md:block md:border md:bg-white md:px-4 md:py-4"
                >
                  <dt className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[var(--muted)] md:text-[11px]">{fact.label}</dt>
                  <dd className="min-w-0 text-[13px] font-bold leading-5 text-[var(--ink)] md:mt-2 md:text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}
