import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { priceRules, priceSummary } from "@/data/prices";

export function Pricing() {
  return (
    <section id="prices" className="border-b border-[var(--line)] bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title={priceSummary.title} description={priceSummary.subtitle} />

        <div className="mt-5 md:hidden">
          <article className="border border-[var(--ink)] bg-[var(--paper)] p-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">{priceSummary.label}</p>
            <div className="mt-2 flex items-end justify-between gap-3 border-b border-[var(--line)] pb-3">
              <strong className="font-display text-5xl font-bold leading-none text-[var(--ink)]">{priceSummary.value}</strong>
              <span className="mb-1 h-3 w-3 bg-[var(--action)]" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm font-semibold leading-5 text-[var(--graphite)]">{priceSummary.description}</p>
            <p className="mt-2 text-sm font-extrabold leading-5 text-[var(--ink)]">{priceSummary.note}</p>
          </article>

          <ol className="mt-3 border-y border-[var(--line)] bg-white">
            {priceRules.map((rule, index) => (
              <li key={rule.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-[var(--line)] px-3 py-3 last:border-b-0">
                <span className="font-display text-2xl font-bold leading-none text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-extrabold leading-tight text-[var(--ink)]">{rule.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold leading-5 text-[var(--muted)]">{rule.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-9 hidden gap-3 md:grid md:grid-cols-3">
          {priceRules.map((rule, index) => (
            <SpotlightCard key={rule.title} className="bg-[var(--paper)] p-4 md:min-h-44 md:p-5">
              <span className="font-display text-2xl font-bold leading-none text-[var(--ink)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-extrabold leading-tight text-[var(--ink)] md:text-xl">{rule.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">{rule.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
