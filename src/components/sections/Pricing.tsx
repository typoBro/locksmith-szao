import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { priceRules, priceSummary } from "@/data/prices";

export function Pricing() {
  return (
    <section id="prices" className="mobile-section border-b border-[var(--line)] bg-[var(--paper)] md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title={priceSummary.title} description={priceSummary.subtitle} />

        <AnimatedReveal disableOnMobile={false} y={10} duration={0.4} className="mt-5 md:mt-9">
          <article className="overflow-hidden rounded-[24px] border border-black/10 bg-[var(--ink)] p-5 text-white shadow-[var(--surface-shadow)] md:grid md:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] md:items-end md:gap-8 md:p-7">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/55">{priceSummary.label}</p>
              <strong className="mt-3 block font-display text-[4.25rem] font-bold leading-none text-[var(--action)] md:text-[5.5rem]">
                {priceSummary.value}
              </strong>
            </div>

            <div className="mt-4 border-t border-white/15 pt-4 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="text-base font-bold leading-6 text-white md:text-lg md:leading-7">{priceSummary.description}</p>
              <p className="mt-3 rounded-[18px] border border-white/12 bg-white/8 px-3 py-3 text-sm font-extrabold leading-5 text-white/88 md:inline-block md:px-4">
                {priceSummary.note}
              </p>
            </div>
          </article>

          <ol className="mt-3 grid gap-3 md:mt-4 md:grid-cols-3">
            {priceRules.map((rule, index) => (
              <li
                key={rule.title}
                className="rounded-[22px] border border-[var(--line)] bg-[var(--paper)] p-4 shadow-[0_8px_26px_rgba(17,17,17,0.055)] md:min-h-44 md:p-5 md:shadow-[var(--soft-shadow)]"
              >
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[var(--action)] px-2 font-display text-xl font-bold leading-none text-[var(--ink)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 min-w-0 md:mt-5">
                  <h3 className="text-lg font-extrabold leading-tight text-[var(--ink)] md:text-xl">{rule.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold leading-5 text-[var(--muted)]">{rule.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </AnimatedReveal>
      </div>
    </section>
  );
}
