"use client";

import { Phone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { smartCallFabContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";
import { smoothEase } from "@/lib/motion";

function isMenuOpen() {
  return document.body.dataset.mobileMenuOpen === "true";
}

export function SmartCallFab() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!siteConfig.features.smartCallFab || !siteConfig.phoneHref) return;

    const heroCta = document.querySelector("[data-hero-call-cta]");
    const hero = document.querySelector("#top");
    const finalCta = document.querySelector("[data-final-cta]");
    const footer = document.querySelector("footer");

    const update = () => {
      const heroRect = heroCta?.getBoundingClientRect();
      const heroSectionRect = hero?.getBoundingClientRect();
      const finalCtaRect = finalCta?.getBoundingClientRect();
      const footerRect = footer?.getBoundingClientRect();
      const isHeroCtaGone = heroRect ? heroRect.bottom < 0 : false;
      const isHeroGone = heroSectionRect ? heroSectionRect.bottom < 0 : false;
      const isFinalCtaInView = finalCtaRect ? finalCtaRect.top < window.innerHeight - 8 : false;
      const isFooterInView = footerRect ? footerRect.top < window.innerHeight - 8 : false;

      setIsVisible((isHeroCtaGone || isHeroGone) && !isFinalCtaInView && !isFooterInView && !isMenuOpen());
    };

    const menuObserver = new MutationObserver(update);
    menuObserver.observe(document.body, { attributes: true, attributeFilter: ["data-mobile-menu-open"] });

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      menuObserver.disconnect();
    };
  }, []);

  if (!siteConfig.features.smartCallFab || !siteConfig.phoneHref) return null;

  return (
    <AnimatePresence initial={false}>
      {isVisible ? (
        <motion.div
          data-smart-call-fab
          className="smart-call-fab fixed bottom-[calc(14px+env(safe-area-inset-bottom))] right-3 z-50 transition duration-200 sm:right-4 lg:hidden"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: reduceMotion ? 0 : 0.18, ease: smoothEase }}
        >
          <a
            href={siteConfig.phoneHref}
            onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
            className="inline-flex h-14 touch-manipulation items-center justify-center gap-2 rounded-[20px] border border-[rgba(17,17,17,0.14)] bg-[var(--action)] px-5 text-base font-extrabold text-[var(--ink)] shadow-[var(--surface-shadow)] backdrop-blur-xl transition active:translate-y-px active:scale-[0.98] active:bg-[var(--action-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
            aria-label={smartCallFabContent.ariaLabel}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {smartCallFabContent.label}
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
