import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { priceRules, priceSummary } from "@/data/prices";

export function Pricing() {
  return (
    <section id="prices" className="mobile-section border-b border-[var(--line)] bg-[var(--paper)] md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title={priceSummary.title} description={priceSummary.subtitle} />

        <AnimatedReveal disableOnMobile={false} y={16} duration={0.38} className="mt-5 md:mt-9">
          <article className="overflow-hidden rounded-[24px] border border-black/10 bg-[var(--ink)] p-4 text-white shadow-[var(--soft-shadow)] md:grid md:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] md:items-end md:gap-8 md:p-7 md:shadow-[var(--surface-shadow)]">
            <div className="flex items-end justify-between gap-4 md:block">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/55 md:text-xs">{priceSummary.label}</p>
                <strong className="mt-2 block font-display text-[3.45rem] font-bold leading-none text-[var(--action)] md:mt-3 md:text-[5.5rem]">
                  {priceSummary.value}
                </strong>
              </div>
              <span className="mb-1 rounded-full border border-white/14 bg-white/8 px-2.5 py-1 text-[10px] font-extrabold text-white/64 md:hidden">
                из объявления
              </span>
            </div>

            <div className="mt-3 border-t border-white/12 pt-3 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="text-sm font-bold leading-5 text-white/92 md:text-lg md:leading-7">{priceSummary.description}</p>
            </div>
          </article>

          <ol className="mt-3 overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--paper)] md:mt-4 md:grid md:grid-cols-3 md:gap-3 md:overflow-visible md:border-0 md:bg-transparent">
            {priceRules.map((rule, index) => (
              <li
                key={rule.title}
                className="grid min-h-14 grid-cols-[2.7rem_minmax(0,1fr)] items-center gap-2 border-b border-[var(--line)] px-3 py-3 last:border-b-0 md:block md:min-h-40 md:rounded-[22px] md:border md:bg-[var(--paper)] md:p-5 md:shadow-[var(--soft-shadow)]"
              >
                <span className="font-display text-xl font-bold leading-none text-[var(--muted)] md:inline-flex md:h-9 md:min-w-9 md:items-center md:justify-center md:rounded-full md:bg-[var(--action)] md:px-2 md:text-[var(--ink)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 md:mt-5">
                  <h3 className="text-[15px] font-extrabold leading-5 text-[var(--ink)] md:text-xl md:leading-tight">{rule.title}</h3>
                  <p className="mt-1 hidden text-[13px] font-semibold leading-5 text-[var(--muted)] md:block">{rule.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </AnimatedReveal>
      </div>
    </section>
  );
}
