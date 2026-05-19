import type { Locksmith, WithContext } from "schema-dts";
import { areas } from "@/data/areas";
import { seoContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export function LocalBusinessJsonLd() {
  const jsonLd: WithContext<Locksmith> = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: siteConfig.name,
    description: seoContent.localBusinessDescription,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.profileImage),
    sameAs: [siteConfig.avitoUrl],
    areaServed: ["Москва", "СЗАО", ...areas],
    priceRange: "₽₽",
  };

  if (siteConfig.phone) {
    jsonLd.telephone = siteConfig.phone;
  }

  if (siteConfig.email) {
    jsonLd.email = siteConfig.email;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
