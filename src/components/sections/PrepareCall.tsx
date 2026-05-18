import { Phone } from "lucide-react";
import { AnimatedReveal } from "@/components/reactbits/AnimatedReveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/site";

const prepareItems = [
  "район или адрес",
  "что нужно открыть: дверь, авто, гараж или сейф",
  "что случилось: ключ потерян, сломан или замок заклинил",
  "есть ли подтверждение доступа",
];

export function PrepareCall() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeader
          label="Перед звонком"
          title="Что подготовить"
          description="Четырёх коротких деталей достаточно, чтобы быстрее понять сложность выезда."
        />

        <AnimatedReveal>
          <div className="border-y border-[var(--ink)] bg-[var(--paper)] py-3">
            {prepareItems.map((item, index) => (
              <div key={item} className="grid grid-cols-[42px_1fr] gap-3 border-b border-[var(--line)] py-4 last:border-b-0">
                <span className="font-display text-xl font-bold leading-none text-[var(--ink)]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm font-bold leading-6 text-[var(--graphite)]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 hidden gap-2 md:grid md:grid-cols-2">
            <ButtonLink href={siteConfig.phoneHref} size="md">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Позвонить
            </ButtonLink>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
