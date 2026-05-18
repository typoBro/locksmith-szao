import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceGroups, services } from "@/data/services";

const priceRules = [
  ["Ориентир", "Сначала коротко описываете ситуацию: объект, район и что случилось."],
  ["Перед работой", "Финальную сумму мастер подтверждает до начала вскрытия."],
  ["Отдельно", "Замена, расходники и срочность согласуются заранее."],
];

export function Services() {
  return (
    <section id="services" className="relative border-y border-[var(--line)] bg-[var(--paper-warm)] py-12 md:py-16">
      <span id="prices" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Услуги"
          title="Что нужно открыть"
          description="Основные сценарии вызова. Полный список работ из Avito — ниже одним компактным блоком."
        />

        <AnimatedReveal>
          <div className="mt-7 grid gap-2 md:mt-9 md:grid-cols-2 md:gap-3">
            {services.map((service) => (
              <SpotlightCard key={service.title} className="px-4 py-4 md:p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold leading-none text-[var(--ink)] md:text-3xl">{service.title}</h3>
                </div>
                <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-[var(--graphite)] md:mt-4 md:text-base">
                  {service.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </AnimatedReveal>

        <p className="mt-5 border-y border-[var(--ink)] bg-white px-4 py-4 text-sm font-extrabold leading-6 text-[var(--ink)]">
          Ориентир по Avito: от 500 ₽. Итог зависит от замка, доступа и деталей на замену.
        </p>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <section key={group.title} className="border border-[var(--line)] bg-white p-4">
              <h3 className="font-display text-2xl font-bold leading-none text-[var(--ink)]">{group.title}</h3>
              <ul className="mt-4 divide-y divide-[var(--line)]">
                {group.items.map((item) => (
                  <li key={item} className="py-3 text-sm font-bold leading-5 text-[var(--graphite)]">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <details className="mt-5 border-y border-[var(--ink)] bg-white md:hidden">
          <summary className="cursor-pointer list-none px-4 py-4 text-sm font-extrabold text-[var(--ink)]">
            Как считаем стоимость
          </summary>
          <div className="grid gap-4 px-4 pb-4">
            {priceRules.map(([title, text], index) => (
              <div key={title} className="grid grid-cols-[36px_1fr] gap-3">
                <span className="font-display text-xl font-bold leading-none text-[var(--ink)]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                <h4 className="text-sm font-extrabold text-[var(--ink)]">{title}</h4>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </details>

        <div className="mt-6 hidden border-y border-[var(--ink)] bg-white p-5 md:block">
          <p className="text-sm font-extrabold text-[var(--ink)]">Как считаем стоимость</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {priceRules.map(([title, text], index) => (
              <div key={title} className="border-l border-[var(--line)] pl-4 first:border-l-0 first:pl-0">
                <p className="font-display text-2xl font-bold leading-none text-[var(--ink)]">{String(index + 1).padStart(2, "0")}</p>
                <h4 className="mt-3 text-sm font-extrabold text-[var(--ink)]">{title}</h4>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
