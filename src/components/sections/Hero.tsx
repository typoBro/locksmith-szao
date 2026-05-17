import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig, trustLine } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="poster-grid relative overflow-hidden bg-[var(--paper)]">
      <div className="relative z-10 mx-auto grid max-w-[1440px] items-stretch gap-6 px-4 py-6 sm:px-6 md:min-h-[calc(70svh-4rem)] md:grid-cols-[1fr_minmax(380px,0.78fr)] md:py-8 lg:px-8">
        <div className="flex max-w-4xl flex-col justify-center">
          <h1 className="font-display max-w-4xl text-balance text-[2.8rem] font-bold uppercase leading-[1] text-[var(--ink)] sm:text-6xl md:leading-[0.94] lg:text-[4.65rem]">
            Частный мастер по замкам в СЗАО
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[var(--graphite)] md:text-xl">
            Открою дверь, авто, гараж или сейф. Стоимость и право доступа — до начала работы.
          </p>

          <div className="mt-7 hidden flex-col gap-3 sm:flex sm:flex-row sm:items-center">
            <ButtonLink href={siteConfig.phoneHref} size="lg" className="w-full sm:w-auto md:min-w-60">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Позвонить мастеру
            </ButtonLink>
            <ButtonLink href={siteConfig.whatsappHref} variant="ghost" size="lg" className="w-full border border-[var(--line)] bg-white sm:w-auto">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
          </div>

          <p className="mt-5 max-w-2xl border-t border-[var(--line)] pt-4 text-sm font-bold text-[var(--muted)]">
            {trustLine}
          </p>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden border border-[var(--ink)] bg-[var(--steel)] md:aspect-auto md:min-h-full">
          <Image
            src="/images/hero-locksmith-photo.png"
            alt="Мастер по аварийному вскрытию замков у входной двери"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}
