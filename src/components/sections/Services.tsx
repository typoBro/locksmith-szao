"use client";

import { motion, useReducedMotion } from "motion/react";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesContent } from "@/data/content";
import { serviceGroups, services } from "@/data/services";

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="mobile-section relative border-y border-[var(--line)] bg-[var(--paper-warm)] md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={servicesContent.label}
          title={servicesContent.title}
          description={servicesContent.description}
        />

        <div>
          <motion.div
            className="mt-5 grid gap-3 md:mt-9 md:grid-cols-2 xl:grid-cols-4"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0.94, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard
                  className="min-h-[122px] rounded-[22px] bg-[var(--paper)] p-4 shadow-[0_10px_30px_rgba(17,17,17,0.055)] transition duration-200 active:translate-y-px active:scale-[0.995] md:min-h-52 md:p-5 md:hover:-translate-y-0.5 md:hover:border-[var(--line-strong)] md:hover:shadow-[var(--soft-shadow)]"
                >
                  <div className="flex h-full flex-col justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-[2rem] font-bold leading-none text-[var(--ink)] md:text-3xl">{service.title}</h3>
                      <p className="mt-2 max-w-xl overflow-hidden text-[13px] font-semibold leading-[18px] text-[var(--graphite)] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box] md:mt-4 md:block md:text-base md:leading-6">
                        {service.scenario}
                      </p>
                    </div>

                    <span className="w-fit shrink-0 rounded-full border border-[var(--line)] bg-white/72 px-2.5 py-1.5 text-[10px] font-extrabold uppercase leading-none text-[var(--muted)]">
                      {service.badge}
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          <details className="group mt-4 overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--paper)] md:mt-6">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-extrabold text-[var(--ink)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action)] md:px-5 md:text-base">
              <span>{servicesContent.fullListLabel}</span>
              <span className="text-xl leading-none text-[var(--muted)] transition group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>

            <div className="grid gap-0 border-t border-[var(--line)] md:grid-cols-3">
              {serviceGroups.map((group) => (
                <div key={group.title} className="border-b border-[var(--line)] p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">{group.title}</h3>
                  <ul className="mt-3 grid gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm font-semibold leading-5 text-[var(--graphite)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--action)]" aria-hidden="true" />
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
