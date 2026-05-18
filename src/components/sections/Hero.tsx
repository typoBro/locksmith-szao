import { Phone } from "lucide-react";
import { Magnet } from "@/components/reactbits/Magnet";
import { CasePhotoSwap } from "@/components/reactbits/CasePhotoSwap";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="poster-grid relative overflow-hidden bg-[var(--paper)]">
      <div className="relative z-10 mx-auto grid max-w-[1440px] items-stretch gap-6 px-4 py-6 sm:px-6 md:min-h-[calc(70svh-4rem)] md:grid-cols-[1fr_minmax(380px,0.78fr)] md:py-8 lg:px-8">
        <div className="flex max-w-4xl flex-col justify-center">
          <p className="mb-4 w-fit border border-[var(--line)] bg-white/80 px-3 py-2 text-xs font-extrabold text-[var(--muted)]">
            Москва, СЗАО · выездной мастер
          </p>
          <h1 className="font-display max-w-4xl text-balance text-[2.8rem] font-bold uppercase leading-[1] text-[var(--ink)] sm:text-6xl md:leading-[0.94] lg:text-[4.65rem]">
            Аварийное вскрытие замков в СЗАО
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[var(--graphite)] md:text-xl">
            Частный мастер: двери, авто, гаражи, сейфы. Стоимость и право доступа — до начала работы.
          </p>

          <div className="mt-7 hidden flex-col gap-3 md:flex md:flex-row md:items-center">
            <Magnet>
              <ButtonLink href={siteConfig.phoneHref} size="lg" className="w-full sm:w-auto md:min-w-60">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Позвонить мастеру
              </ButtonLink>
            </Magnet>
          </div>

        </div>

        <CasePhotoSwap />
      </div>
    </section>
  );
}
