import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cases, casesContent } from "@/data/cases";

export function Cases() {
  return (
    <section id="cases" className="border-b border-[var(--line)] bg-[var(--paper-warm)] py-10 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader label={casesContent.label} title={casesContent.title} description={casesContent.description} />

        <div className="-mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:mt-9 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {cases.map((item) => (
            <article
              key={item.src}
              className="min-w-[82vw] snap-start border border-[var(--line)] bg-white transition duration-200 hover:border-[var(--ink)] sm:min-w-[84vw] lg:min-w-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--line)] bg-[var(--paper)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 86vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">{item.label}</p>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold leading-none text-[var(--ink)]">{item.title}</h3>
                  <span className="shrink-0 border border-[var(--line)] bg-[var(--paper)] px-2 py-1 text-[10px] font-extrabold uppercase text-[var(--muted)]">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-[var(--graphite)]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
