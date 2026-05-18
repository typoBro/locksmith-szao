import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function FinalCta() {
  return (
    <section className="bg-[var(--ink)] py-10 text-white md:py-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">Нужно открыть замок?</h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-white/65">
            Позвоните Сергею: мастер уточнит ситуацию и ориентир по цене.
          </p>
        </div>
        <div className="hidden md:flex md:shrink-0">
          <ButtonLink href={siteConfig.phoneHref} size="lg">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Позвонить мастеру
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
