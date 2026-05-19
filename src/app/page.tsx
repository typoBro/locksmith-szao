import { Areas } from "@/components/sections/Areas";
import { AvitoProfile } from "@/components/sections/AvitoProfile";
import { Cases } from "@/components/sections/Cases";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { PrepareCall } from "@/components/sections/PrepareCall";
import { Pricing } from "@/components/sections/Pricing";
import { Services } from "@/components/sections/Services";
import { Trust } from "@/components/sections/Trust";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Trust />
        <Services />
        <Pricing />
        <AvitoProfile />
        <Areas />
        <Cases />
        <PrepareCall />
        <Faq />
        <FinalCta />
      </main>
      <LocalBusinessJsonLd />
      <FaqJsonLd />
      <BreadcrumbJsonLd />
    </>
  );
}
