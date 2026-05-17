import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

const priceRules = [
  ["Сначала ориентир", "По телефону уточняем объект, район и срочность."],
  ["Итог до работы", "Перед началом мастер подтверждает финальную сумму."],
  ["Доплаты заранее", "Детали, ночной выезд и замена согласуются отдельно."],
];

export function Services() {
  return (
    <section id="services" className="relative border-y border-[var(--line)] bg-[var(--paper-warm)] py-12 md:py-16">
      <span id="prices" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Услуги"
          title="Что нужно открыть"
          description="Четыре частых сценария. Точные цены из Avito добавим после подтверждения объявления."
        />

        <AnimatedReveal>
          <div className="mt-7 grid gap-2 md:mt-9 md:grid-cols-2 md:gap-3">
            {services.map((service) => (
              <article key={service.title} className="border border-[var(--line)] bg-white px-4 py-4 md:p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold leading-none text-[var(--ink)] md:text-3xl">{service.title}</h3>
                  <p className="shrink-0 bg-[var(--paper-warm)] px-2.5 py-1 text-xs font-extrabold text-[var(--muted)] md:text-sm">
                    {service.status}
                  </p>
                </div>
                <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-[var(--graphite)] md:mt-4 md:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </AnimatedReveal>

        <details className="mt-5 border-y border-[var(--ink)] bg-white md:hidden">
          <summary className="cursor-pointer list-none px-4 py-4 text-sm font-extrabold text-[var(--ink)]">
            Как считаем стоимость
          </summary>
          <div className="grid gap-4 px-4 pb-4">
            {priceRules.map(([title, text]) => (
              <div key={title}>
                <h4 className="text-sm font-extrabold text-[var(--ink)]">{title}</h4>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </details>

        <div className="mt-6 hidden border-y border-[var(--ink)] bg-white p-5 md:block">
          <p className="text-sm font-extrabold text-[var(--ink)]">Как считаем стоимость</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {priceRules.map(([title, text]) => (
              <div key={title}>
                <h4 className="text-sm font-extrabold text-[var(--ink)]">{title}</h4>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
          Замена личинки, новый замок и расходники согласуются отдельно. Цены из Avito перенесём после скриншотов или текста объявления.
        </p>
      </div>
    </section>
  );
}
