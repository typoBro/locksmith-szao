import { siteConfig } from "@/data/site";

const trustItems = [
  {
    label: "Avito",
    value: `${siteConfig.masterRating} · ${siteConfig.masterReviews}`,
  },
  {
    label: "Стоимость",
    value: "до начала работы",
  },
  {
    label: "Доступ",
    value: "проверяем",
  },
  {
    label: "Зона",
    value: "Москва, СЗАО",
  },
];

export function Trust() {
  return (
    <section className="hidden border-b border-[var(--line)] bg-[var(--paper)] md:block" aria-label="Краткие гарантии">
      <div className="mx-auto grid max-w-[1440px] grid-cols-4 divide-x divide-[var(--line)] px-8">
        {trustItems.map((item) => (
          <div key={item.label} className="py-4 first:pl-0 last:pr-0 md:px-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">{item.label}</p>
            <p className="mt-1 text-sm font-extrabold leading-5 text-[var(--ink)]">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
