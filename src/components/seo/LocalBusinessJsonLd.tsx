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
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.profileImage),
    sameAs: [siteConfig.avitoUrl],
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
