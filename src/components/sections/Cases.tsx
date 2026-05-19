import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cases, casesContent } from "@/data/cases";

export function Cases() {
  return (
    <section id="cases" className="mobile-section border-b border-[var(--line)] bg-[var(--paper-warm)] md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader label={casesContent.label} title={casesContent.title} description={casesContent.description} />

        <div className="mt-5 md:mt-9">
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
            {cases.map((item, index) => (
              <article
                key={item.src}
                className="story-card min-w-[84vw] snap-start overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--paper)] shadow-[0_14px_36px_rgba(17,17,17,0.08)] transition duration-200 active:scale-[0.995] min-[420px]:min-w-[82vw] lg:min-w-0 lg:shadow-[var(--soft-shadow)] lg:hover:-translate-y-1 lg:hover:border-[var(--line-strong)]"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-[var(--paper-warm)] lg:aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 86vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 bg-gradient-to-b from-black/52 to-transparent p-3 text-white">
                    <span className="rounded-full bg-black/42 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.1em] backdrop-blur-md">
                      {item.label}
                    </span>
                    <span className="rounded-full bg-[var(--action)] px-2.5 py-1 text-[11px] font-extrabold leading-none text-[var(--ink)]">
                      {index + 1} / {cases.length}
                    </span>
                  </div>
                </div>

                <div className="p-4 lg:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[2rem] font-bold leading-none text-[var(--ink)] lg:text-3xl">{item.title}</h3>
                    <span className="mobile-chip shrink-0 px-2.5 py-1 text-[10px] font-extrabold uppercase text-[var(--muted)]">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm font-semibold leading-5 text-[var(--graphite)] lg:line-clamp-none lg:leading-6">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-1 flex justify-center gap-1.5 lg:hidden" aria-hidden="true">
            {cases.map((item, index) => (
              <span
                key={item.src}
                className={index === 0 ? "h-1.5 w-6 rounded-full bg-[var(--ink)]" : "h-1.5 w-1.5 rounded-full bg-[var(--line-strong)]"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
