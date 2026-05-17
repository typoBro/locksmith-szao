"use client";

import { useId, useState } from "react";
import { faq } from "@/data/faq";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section id="faq" className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-[1120px] gap-9 px-4 sm:px-6 lg:px-8">
        <div>
          <SectionHeader
            label="FAQ"
            title="Право доступа и FAQ"
            description="Работа начинается только после подтверждения, что объект ваш или вы действуете законно."
            className="lg:block"
          />

          <div className="mt-9 border-y border-[var(--line)]">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;
              const triggerId = `${baseId}-trigger-${index}`;
              const panelId = `${baseId}-panel-${index}`;

              return (
                <div key={item.question} className="border-b border-[var(--line)] last:border-b-0">
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="grid w-full cursor-pointer grid-cols-[1fr_34px] items-center gap-3 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--action)]"
                  >
                    <span className="text-lg font-extrabold leading-tight text-[var(--ink)] md:text-xl">{item.question}</span>
                    <span className="grid h-8 w-8 place-items-center border border-[var(--line)] text-lg font-bold text-[var(--ink)] transition">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className="max-w-3xl pb-6 text-sm leading-6 text-[var(--muted)] md:text-base"
                    >
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <aside id="requisites" className="scroll-mt-24">
          <div className="border-y border-[var(--line)] py-5">
            <p className="text-sm font-extrabold text-[var(--ink)]">Данные исполнителя будут добавлены перед публикацией</p>
            <dl className="mt-4 divide-y divide-[var(--line)]">
              {siteConfig.requisites.slice(1).map(([label, value]) => (
                <div key={label} className="grid gap-1 py-3 sm:grid-cols-[132px_1fr]">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">{label}</dt>
                  <dd className="text-sm font-bold text-[var(--graphite)]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
