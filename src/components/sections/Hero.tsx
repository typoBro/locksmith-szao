"use client";

import { ExternalLink, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Magnet } from "@/components/reactbits/Magnet";
import { CasePhotoSwap } from "@/components/reactbits/CasePhotoSwap";
import { HeroMediaCard } from "@/components/sections/HeroMediaCard";
import { ButtonLink } from "@/components/ui/Button";
import { heroContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="poster-grid relative overflow-hidden bg-[var(--paper)]">
      <div className="relative z-10 mx-auto grid max-w-[1440px] items-stretch gap-5 px-4 py-3 sm:px-6 md:py-8 lg:min-h-[68svh] lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.78fr)] lg:gap-7 lg:px-8 lg:py-10">
        <div className="flex min-w-0 max-w-4xl flex-col justify-center">
          <HeroMediaCard />

          <p className="mobile-chip mb-3 hidden w-fit max-w-full px-3 py-2 text-xs font-extrabold text-[var(--muted)] lg:block lg:mb-4">
            {heroContent.badge}
          </p>

          <motion.h1
            className="font-display max-w-4xl text-balance text-[clamp(2rem,9.2vw,3.05rem)] font-bold uppercase leading-[0.98] text-[var(--ink)] sm:text-6xl lg:text-[clamp(4rem,6.2vw,4.85rem)] lg:leading-[0.94]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.42, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroContent.title}
          </motion.h1>

          <p className="mt-4 max-w-2xl text-[15px] font-medium leading-6 text-[var(--graphite)] sm:text-lg lg:mt-5 lg:text-xl lg:leading-8">
            {heroContent.description}
          </p>

          <div className="mt-5 grid min-w-0 grid-cols-1 gap-2 lg:mt-7 lg:flex lg:flex-row lg:items-center">
            <Magnet className="min-w-0 lg:w-auto">
              <ButtonLink
                href={siteConfig.phoneHref}
                size="lg"
                data-hero-call-cta
                className="min-h-[54px] w-full px-3 text-[15px] lg:min-h-[56px] lg:w-auto lg:min-w-60 lg:px-7 lg:text-base"
                onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {heroContent.primaryCta}
              </ButtonLink>
            </Magnet>
            <ButtonLink
              href={siteConfig.avitoUrl}
              variant="secondary"
              size="lg"
              className="min-h-[52px] w-full bg-transparent px-3 text-[14px] shadow-none lg:min-h-[56px] lg:w-auto lg:min-w-36 lg:bg-[var(--paper)] lg:px-7 lg:text-base"
              onClick={() => reachGoal(siteConfig.metrikaGoalAvito)}
            >
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
              <span className="lg:hidden">{heroContent.secondaryCtaShort}</span>
              <span className="hidden lg:inline">{heroContent.secondaryCta}</span>
            </ButtonLink>
          </div>

          <div className="mt-4 hidden flex-wrap gap-2 lg:mt-5 lg:flex">
            {heroContent.proofChips.map((chip) => (
              <span key={chip} className="mobile-chip px-2.5 py-1.5 text-[11px] font-extrabold text-[var(--graphite)] lg:px-3 lg:py-2 lg:text-xs">
                {chip}
              </span>
            ))}
          </div>

          <motion.ul
            className="mt-4 grid grid-cols-3 gap-1.5 text-[11px] font-extrabold leading-4 text-[var(--ink)] lg:mt-4 lg:gap-2 lg:text-sm lg:leading-5"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.18 } },
            }}
          >
            {heroContent.trustItems.map((item) => (
              <motion.li
                key={item}
                className="mobile-chip flex min-h-10 items-center justify-center px-2 text-center lg:block lg:min-h-0 lg:justify-start lg:rounded-none lg:border-0 lg:border-l-2 lg:border-[var(--line-strong)] lg:bg-transparent lg:pl-3 lg:text-left"
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <CasePhotoSwap />
      </div>
    </section>
  );
}
