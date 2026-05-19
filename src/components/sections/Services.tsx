"use client";

import { AnimatedList } from "@/components/reactbits/AnimatedList";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesContent } from "@/data/content";
import { serviceGroups, services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="mobile-section relative border-y border-[var(--line)] bg-[var(--paper-warm)] md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={servicesContent.label}
          title={servicesContent.title}
          description={servicesContent.description}
        />

        <div>
          <AnimatedList
            className="mt-5 grid gap-2.5 md:mt-9 md:grid-cols-2 md:gap-3 xl:grid-cols-4"
            y={16}
            disableOnMobile={false}
          >
            {services.map((service) => (
              <div key={service.title}>
                <SpotlightCard
                  className="min-h-[108px] rounded-[24px] bg-[var(--paper)] p-4 shadow-none transition duration-200 active:translate-y-px active:scale-[0.995] md:min-h-48 md:p-5 md:hover:-translate-y-0.5 md:hover:border-[var(--line-strong)] md:hover:shadow-[var(--soft-shadow)]"
                >
                  <article className="flex h-full min-w-0 flex-col justify-between gap-3">
                    <div className="flex min-w-0 items-start justify-between gap-3">
                      <h3 className="font-display text-[2rem] font-bold leading-none text-[var(--ink)] md:text-3xl">{service.title}</h3>
                      <span className="mt-0.5 w-fit shrink-0 rounded-full border border-[var(--line)] bg-white/72 px-2.5 py-1 text-[10px] font-bold leading-none text-[var(--muted)] md:hidden">
                        {service.badge}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="max-w-xl overflow-hidden text-[13px] font-semibold leading-[18px] text-[var(--graphite)] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box] md:block md:text-base md:leading-6">
                        {service.scenario}
                      </p>
                      <span className="mt-4 hidden w-fit shrink-0 rounded-full border border-[var(--line)] bg-white/72 px-2.5 py-1.5 text-[11px] font-bold leading-none text-[var(--muted)] md:inline-flex">
                        {service.badge}
                      </span>
                    </div>
                  </article>
                </SpotlightCard>
              </div>
            ))}
          </AnimatedList>

          <details className="group mt-4 overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--paper)] md:mt-6">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-extrabold text-[var(--ink)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action)] md:px-5 md:text-base">
              <span>{servicesContent.fullListLabel}</span>
              <span className="text-xl leading-none text-[var(--muted)] transition group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>

            <div className="grid gap-0 border-t border-[var(--line)] md:grid-cols-3">
              {serviceGroups.map((group) => (
                <div key={group.title} className="border-b border-[var(--line)] px-4 py-3 last:border-b-0 md:border-b-0 md:border-r md:p-4 md:last:border-r-0">
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">{group.title}</h3>
                  <ul className="mt-2 grid gap-0.5 md:mt-3 md:gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 py-1 text-[13px] font-semibold leading-5 text-[var(--graphite)] md:py-0 md:text-sm">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--action)] md:h-1.5 md:w-1.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
