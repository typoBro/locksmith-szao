import type { BreadcrumbList, WithContext } from "schema-dts";
import { seoContent } from "@/data/content";
import { siteConfig } from "@/data/site";

export function BreadcrumbJsonLd() {
  const jsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: seoContent.breadcrumbHome,
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: seoContent.breadcrumbCurrent,
        item: siteConfig.url,
      },
    ],
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
