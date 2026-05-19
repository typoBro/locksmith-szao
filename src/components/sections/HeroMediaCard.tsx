"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { heroContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { cardStagger, motionDurations, smoothEase } from "@/lib/motion";

export function HeroMediaCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      className="relative isolate mb-5 overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--ink)] shadow-[var(--surface-shadow)] lg:hidden"
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : motionDurations.heroImage, ease: smoothEase }}
    >
      <div className="relative aspect-[16/11] min-h-[292px] min-[390px]:min-h-[312px] sm:aspect-[16/9]">
        <Image
          src={siteConfig.heroImage}
          alt="Сергей - мастер по замкам на выезде"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1023px) calc(100vw - 32px), 0vw"
          priority
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/18 to-transparent" aria-hidden="true" />
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
        <motion.div
          className="mb-3 flex flex-wrap gap-1.5"
          initial={false}
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: cardStagger, delayChildren: 0.12 } },
          }}
        >
          {heroContent.mediaChips.map((chip) => (
            <motion.span
              key={chip}
              className="rounded-full border border-white/24 bg-white/16 px-2.5 py-1 text-[11px] font-extrabold leading-none text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: reduceMotion ? 0 : motionDurations.heroText, ease: smoothEase }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/72">{heroContent.mediaCaption}</p>
      </figcaption>
    </motion.figure>
  );
}
