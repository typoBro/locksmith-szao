import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesContent } from "@/data/content";
import { serviceGroups, services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative border-y border-[var(--line)] bg-[var(--paper-warm)] py-10 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={servicesContent.label}
          title={servicesContent.title}
          description={servicesContent.description}
        />

        <AnimatedReveal>
          <div className="mt-5 grid gap-2 md:mt-9 md:grid-cols-2 md:gap-3 xl:grid-cols-4">
            {services.map((service) => (
              <SpotlightCard
                key={service.title}
                className="min-h-[104px] bg-white p-3 transition duration-200 active:translate-y-px min-[380px]:min-h-[108px] md:min-h-52 md:p-5 md:hover:-translate-y-0.5 md:hover:border-[var(--ink)]"
              >
                <div className="flex h-full flex-col justify-between gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-[1.75rem] font-bold leading-none text-[var(--ink)] md:text-3xl">{service.title}</h3>
                    <span className="shrink-0 border border-[var(--line)] bg-[var(--paper)] px-1.5 py-1 text-[9px] font-extrabold uppercase leading-3 text-[var(--muted)] md:hidden">
                      {service.badge}
                    </span>
                  </div>

                  <p className="max-w-xl overflow-hidden text-[13px] font-semibold leading-[18px] text-[var(--graphite)] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box] md:mt-4 md:block md:text-base md:leading-6">
                    {service.scenario}
                  </p>

                  <span className="hidden w-fit shrink-0 border border-[var(--line)] bg-[var(--paper)] px-2 py-1 text-[10px] font-extrabold uppercase leading-4 text-[var(--muted)] md:block">
                    {service.badge}
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <details className="group mt-4 border border-[var(--line)] bg-white md:mt-6">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-extrabold text-[var(--ink)] transition hover:bg-[var(--paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] md:px-5 md:text-base">
              <span>+ {servicesContent.fullListLabel}</span>
              <span className="text-xl leading-none text-[var(--muted)] transition group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>

            <div className="grid gap-0 border-t border-[var(--line)] md:grid-cols-3">
              {serviceGroups.map((group) => (
                <section key={group.title} className="border-b border-[var(--line)] p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">{group.title}</h3>
                  <ul className="mt-3 grid gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm font-semibold leading-5 text-[var(--graphite)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--action)]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </details>
        </AnimatedReveal>
      </div>
    </section>
  );
}
