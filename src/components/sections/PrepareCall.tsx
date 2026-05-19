import { Phone } from "lucide-react";
import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { ButtonLink } from "@/components/ui/Button";
import { prepareCallContent } from "@/data/content";
import { prepareCallItems } from "@/data/proof";
import { siteConfig } from "@/data/site";

export function PrepareCall() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">{prepareCallContent.label}</p>
            <h2 className="mt-2 font-display text-[2.35rem] font-bold leading-none text-[var(--ink)] md:mt-3 md:text-5xl">
              {prepareCallContent.title}
            </h2>
            <p className="mt-3 hidden max-w-xl text-base font-semibold leading-7 text-[var(--graphite)] md:block">
              {prepareCallContent.description}
            </p>
          </div>

          <AnimatedReveal disableOnMobile>
            <div className="mt-5 border-y border-[var(--ink)] bg-[var(--paper)] md:mt-0 md:py-3">
              {prepareCallItems.map((item, index) => (
                <div key={item} className="grid min-h-14 grid-cols-[42px_1fr] items-center gap-3 border-b border-[var(--line)] py-2 last:border-b-0 md:py-4">
                  <span className="font-display text-xl font-bold leading-none text-[var(--ink)]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-[15px] font-bold leading-5 text-[var(--graphite)] md:text-sm md:leading-6">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-3 border border-[var(--line)] bg-[var(--paper)] px-3 py-2 text-sm font-bold leading-5 text-[var(--muted)] md:hidden">
              {prepareCallContent.photoHint}
            </p>

            <div className="mt-5 hidden gap-2 md:grid md:grid-cols-2">
              <ButtonLink href={siteConfig.phoneHref} size="md">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {prepareCallContent.cta}
              </ButtonLink>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
