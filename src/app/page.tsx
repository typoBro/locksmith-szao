import { Areas } from "@/components/sections/Areas";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { PrepareCall } from "@/components/sections/PrepareCall";
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
        <PrepareCall />
        <Faq />
        <FinalCta />
      </main>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd />
    </>
  );
}
