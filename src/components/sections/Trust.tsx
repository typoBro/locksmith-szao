import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { mobileProofItems, proofItems, proofMetricChips } from "@/data/proof";

export function Trust() {
  return (
    <section className="bg-white py-3 md:border-y md:border-[var(--line)] md:py-16" aria-label="Почему можно доверять">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <AnimatedReveal y={10} duration={0.4}>
          <div className="rounded-[24px] border border-[var(--line)] bg-[var(--paper)] p-4 shadow-[var(--soft-shadow)] md:hidden">
            <div className="grid grid-cols-3 gap-1.5 rounded-[18px] border border-[var(--line)] bg-white/70 p-1.5">
              {proofMetricChips.map((chip, index) => (
                <span
                  key={chip}
                  className="min-w-0 rounded-[14px] px-1.5 py-2 text-center text-[11px] font-extrabold leading-none text-[var(--ink)]"
                >
                  <span className={index === 0 ? "inline-block border-b-2 border-[var(--action)] pb-1" : undefined}>
                    {chip}
                  </span>
                </span>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              {mobileProofItems.map((item) => (
                <article key={item.title} className="rounded-[18px] border border-[var(--line)] bg-white/78 px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--action)]" aria-hidden="true" />
                    <h2 className="text-[13px] font-extrabold leading-tight text-[var(--ink)]">{item.title}</h2>
                  </div>
                  <p className="mt-1.5 text-[11px] font-semibold leading-4 text-[var(--muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal y={12} duration={0.42}>
          <div className="hidden gap-3 md:grid md:grid-cols-4">
            {proofItems.map((item, index) => (
              <SpotlightCard key={item.title} className="bg-[var(--paper)] p-4 md:min-h-36 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-2xl font-bold leading-none text-[var(--ink)] md:text-3xl">
                    {item.title}
                  </h2>
                  <span className="shrink-0 text-xs font-extrabold text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">{item.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
