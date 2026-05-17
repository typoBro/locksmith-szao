import type { Locksmith, WithContext } from "schema-dts";
import { areas } from "@/data/areas";
import { siteConfig } from "@/data/site";

export function LocalBusinessJsonLd() {
  const jsonLd: WithContext<Locksmith> = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: siteConfig.name,
    description:
      "Вскрытие дверных, автомобильных, гаражных замков и сейфов в СЗАО Москвы.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    areaServed: ["Москва", "СЗАО", ...areas],
    priceRange: "₽₽",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
