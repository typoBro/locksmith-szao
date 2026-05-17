import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cases } from "@/data/cases";

const areasLine = "Митино, Строгино, Щукино, Тушино, Куркино, Хорошёво-Мнёвники и соседние районы.";

export function Cases() {
  return (
    <section id="cases" className="border-y border-[var(--line)] bg-[var(--paper-warm)] py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Выезды"
          title="Последние выезды"
          description="Короткие примеры без отзывов и лишней галереи: район, ситуация, что сделали."
        />

        <div className="mt-9 grid gap-3 md:grid-cols-2">
          {cases.slice(0, 2).map((item, index) => (
            <AnimatedReveal key={`${item.district}-${item.moment}`} delay={index * 0.035}>
              <article className="min-h-full border border-[var(--line)] bg-white p-5">
                <h3 className="text-base font-extrabold text-[var(--ink)]">
                  {item.district} · {item.moment} · {item.object}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}.</p>
              </article>
            </AnimatedReveal>
          ))}
        </div>

        <p className="mt-5 max-w-4xl text-sm font-semibold leading-6 text-[var(--muted)]">
          География: {areasLine}
        </p>
      </div>
    </section>
  );
}
