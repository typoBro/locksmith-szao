import { Phone } from "lucide-react";
import { AnimatedList } from "@/components/reactbits/AnimatedList";
import { ButtonLink } from "@/components/ui/Button";
import { prepareCallContent } from "@/data/content";
import { prepareCallItems } from "@/data/proof";
import { siteConfig } from "@/data/site";

export function PrepareCall() {
  return (
    <section className="mobile-section bg-[var(--paper-warm)] md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mobile-card overflow-hidden rounded-[24px] bg-[var(--paper)] p-4 shadow-[var(--soft-shadow)] md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-8 md:p-6">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
              {prepareCallContent.label}
            </p>
            <h2 className="mt-2 font-display text-[2.55rem] font-bold leading-none text-[var(--ink)] md:mt-3 md:text-5xl">
              {prepareCallContent.title}
            </h2>
            <p className="mt-3 max-w-xl text-base font-semibold leading-6 text-[var(--muted)] md:text-lg md:leading-7">
              {prepareCallContent.description}
            </p>

            <div className="mt-5 hidden gap-2 md:grid md:max-w-sm md:grid-cols-1">
              <ButtonLink href={siteConfig.phoneHref} size="md">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {prepareCallContent.cta}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-5 md:mt-0">
            <AnimatedList
              disableOnMobile={false}
              className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-white/58"
              itemClassName="border-b border-[var(--line)] last:border-b-0"
              y={7}
              duration={0.38}
            >
              {prepareCallItems.map((item, index) => (
                <div
                  key={item}
                  className="grid min-h-14 grid-cols-[3rem_minmax(0,1fr)] items-center gap-3 px-3 py-3 md:min-h-16 md:px-4"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--action)] font-display text-lg font-bold leading-none text-[var(--ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] font-extrabold leading-5 text-[var(--graphite)] md:text-base md:leading-6">{item}</p>
                </div>
              ))}
            </AnimatedList>

            <p className="mt-3 rounded-[18px] border border-[var(--line)] bg-white/58 px-3 py-3 text-sm font-bold leading-5 text-[var(--muted)]">
              {prepareCallContent.photoHint}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
