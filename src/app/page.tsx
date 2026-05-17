import { Areas } from "@/components/sections/Areas";
import { Cases } from "@/components/sections/Cases";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Areas />
        <Cases />
        <Faq />
        <FinalCta />
      </main>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd />
    </>
  );
}
