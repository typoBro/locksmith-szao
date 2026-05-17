import { ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceArea } from "@/data/areas";
import { siteConfig } from "@/data/site";

function AreaMap() {
  return (
    <div className="relative overflow-hidden border border-[var(--line)] bg-[var(--paper-warm)] p-3 md:p-4">
      <div className="relative aspect-[4/3] min-h-[260px] overflow-hidden bg-white md:aspect-[16/10]">
        <iframe
          src={serviceArea.yandexMapSrc}
          title="Яндекс-карта зоны выезда по СЗАО Москвы"
          className="h-full w-full border-0 grayscale-[0.15]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-2 border border-[var(--line)] bg-white/95 px-3 py-2 text-xs font-extrabold text-[var(--ink)] shadow-[0_8px_28px_rgba(17,17,17,0.08)] backdrop-blur">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          Москва · СЗАО
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold leading-5 text-[var(--muted)]">{serviceArea.mapDisclaimer}</p>
        <div className="grid gap-2 sm:flex sm:shrink-0">
          <ButtonLink href={serviceArea.yandexMapHref} variant="secondary" size="sm" aria-label="Открыть зону в Яндекс Картах">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Яндекс Карты
          </ButtonLink>
          <ButtonLink href={serviceArea.checkAreaHref} size="sm" aria-label="Проверить район в WhatsApp">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Проверить район
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function ContactCard() {
  const rows = [
    ["Статус", siteConfig.statusLabel],
    ["Зона", siteConfig.address],
    ["Режим", siteConfig.hours],
  ];

  return (
    <aside className="border-y border-[var(--ink)] py-5">
      <p className="font-display text-3xl font-bold leading-none text-[var(--ink)]">{siteConfig.masterLabel}</p>
      <p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">{siteConfig.contactNote}</p>

      <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        <ButtonLink href={siteConfig.phoneHref} size="md" className="w-full">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {siteConfig.phone}
        </ButtonLink>
        <ButtonLink href={siteConfig.whatsappHref} variant="secondary" size="md" className="w-full">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </ButtonLink>
      </div>

      <dl className="mt-5 divide-y divide-[var(--line)]">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 py-3 sm:grid-cols-[108px_1fr]">
            <dt className="text-xs font-bold uppercase text-[var(--muted)]">{label}</dt>
            <dd className="text-sm font-bold leading-5 text-[var(--graphite)]">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function Areas() {
  return (
    <section id="areas" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Зона"
          title={serviceArea.title}
          description="Карта и контакты помогают быстро понять, есть ли смысл звонить именно этому мастеру."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <AreaMap />
          <ContactCard />
        </div>

        <div className="mt-6 border-t border-[var(--line)] pt-4">
          <p className="text-sm font-extrabold text-[var(--ink)]">Районы выезда</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">{serviceArea.primary.join(", ")} и соседние районы.</p>
        </div>
      </div>
    </section>
  );
}
