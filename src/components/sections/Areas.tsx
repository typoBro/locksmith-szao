import Image from "next/image";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import { YandexDistrictMap } from "@/components/maps/YandexDistrictMap";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { areas, serviceArea } from "@/data/areas";
import { siteConfig } from "@/data/site";

function AreaMap() {
  return (
    <div className="order-2 min-w-0 border border-[var(--line)] bg-[var(--paper)] p-4 sm:p-5 lg:order-1">
      <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-5">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 border border-[var(--line)] bg-white px-3 py-2 text-xs font-extrabold text-[var(--ink)]">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Москва · СЗАО
          </div>
          <p className="mt-4 max-w-lg break-words text-sm font-semibold leading-6 text-[var(--muted)]">
            {serviceArea.description}
          </p>
        </div>
        <p className="hidden font-display text-5xl font-bold leading-none text-[var(--ink)] md:block">СЗАО</p>
      </div>

      <div className="mt-5 min-w-0 overflow-hidden border border-[var(--ink)] bg-white">
        <YandexDistrictMap />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="break-words text-xs font-semibold leading-5 text-[var(--muted)]">{serviceArea.mapDisclaimer}</p>
        <div className="grid gap-2 sm:flex sm:shrink-0">
          <ButtonLink href={serviceArea.yandexMapHref} variant="secondary" size="sm" aria-label="Открыть зону в Яндекс Картах">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Яндекс Карты
          </ButtonLink>
        </div>
      </div>

      <div className="mt-5 border-t border-[var(--line)] pt-5">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">Районы выезда</p>
        <div className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3">
          {areas.slice(0, 11).map((area) => (
            <span
              key={area}
              className="min-w-0 break-words border border-[var(--line)] bg-white px-3 py-3 text-sm font-bold leading-5 text-[var(--graphite)]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactCard() {
  const rows = [
    ["Avito", `${siteConfig.masterRating} · ${siteConfig.masterReviews} · ${siteConfig.masterSince}`],
    ["Локация", siteConfig.avitoLocation],
    ["Метро", siteConfig.metro.join(" · ")],
  ];

  return (
    <aside className="order-1 border-y border-[var(--ink)] py-5 lg:order-2">
      <div className="relative mb-5 aspect-[4/3] overflow-hidden border border-[var(--line)] bg-white sm:aspect-[16/9] lg:aspect-[4/3]">
        <Image
          src={siteConfig.profileImage}
          alt="Сергей - мастер по замкам из Avito"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 38vw"
        />
      </div>
      <p className="font-display text-3xl font-bold leading-none text-[var(--ink)]">{siteConfig.avitoProfile}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="border border-[var(--ink)] bg-[var(--action)] px-2.5 py-1 text-xs font-extrabold text-[var(--ink)]">
          {siteConfig.masterRating} · {siteConfig.masterReviews}
        </span>
        <span className="border border-[var(--line)] bg-white px-2.5 py-1 text-xs font-extrabold text-[var(--muted)]">
          {siteConfig.masterStatus}
        </span>
      </div>
      <p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">
        Выездной мастер из Avito. Работает без офиса и приёма клиентов, заявку удобнее уточнять по телефону.
      </p>

      <div className="mt-5 hidden md:grid">
        <ButtonLink href={siteConfig.phoneHref} size="md" className="w-full">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {siteConfig.phone}
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
          description="Карта показывает СЗАО и соседние районы, куда удобно уточнить выезд."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <AreaMap />
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
