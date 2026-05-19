"use client";

import { ExternalLink, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { mobileNavItems, navItems, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { reachGoal } from "@/lib/analytics";
import { smoothEase } from "@/lib/motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.dataset.mobileMenuOpen = isOpen ? "true" : "false";
    return () => {
      delete document.body.dataset.mobileMenuOpen;
    };
  }, [isOpen]);

  useEffect(() => {
    const openMenu = () => setIsOpen(true);
    window.addEventListener("open-mobile-menu", openMenu);
    return () => window.removeEventListener("open-mobile-menu", openMenu);
  }, []);

  function handleMobileNavClick(href: string) {
    setIsOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }, 90);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:rgb(255_253_247_/_0.86)] backdrop-blur-xl">
        <div className="mx-auto flex h-[60px] max-w-[1440px] items-center justify-between px-4 sm:px-6 md:h-16 lg:px-8">
          <a href="#top" className="grid min-h-12 content-center leading-tight" aria-label="На первый экран">
            <span className="text-base font-extrabold text-[var(--ink)] sm:text-lg">{siteConfig.shortName}</span>
            <span className="text-[11px] font-bold text-[var(--muted)] md:hidden">Сергей · СЗАО</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Основная навигация">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="inline-flex min-h-12 min-w-12 items-center justify-center text-sm font-bold text-[var(--muted)] transition hover:text-[var(--ink)]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <ButtonLink
              href={siteConfig.phoneHref}
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phoneLabel}
            </ButtonLink>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[16px] border border-[var(--line)] bg-[color:rgb(255_253_247_/_0.74)] px-3 text-sm font-extrabold leading-none text-[var(--ink)] shadow-[0_6px_18px_rgba(17,17,17,0.06)] transition active:translate-y-px active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action)] md:hidden"
              aria-label="Открыть меню"
              aria-expanded={isOpen}
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
              Меню
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <div className="fixed inset-0 z-[60] md:hidden">
            <motion.button
              type="button"
              className="absolute inset-0 bg-[var(--ink)]/22 backdrop-blur-[2px]"
              aria-label="Закрыть меню"
              onClick={() => setIsOpen(false)}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Мобильное меню"
              className="fixed inset-x-0 bottom-0 max-h-[82dvh] overflow-y-auto rounded-t-[28px] border-t border-[var(--line-strong)] bg-[color:rgb(255_253_247_/_0.98)] px-4 pb-[calc(16px_+_env(safe-area-inset-bottom))] pt-3 shadow-[0_-18px_54px_rgba(17,17,17,0.18)]"
              initial={reduceMotion ? false : { y: "100%" }}
              animate={{ y: 0 }}
              exit={reduceMotion ? { y: "100%" } : { y: "100%" }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: smoothEase }}
            >
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-[var(--line-strong)]" aria-hidden="true" />

              <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-4">
                <div>
                  <p className="text-base font-extrabold text-[var(--ink)]">{siteConfig.shortName}</p>
                  <p className="mt-1 text-xs font-bold text-[var(--muted)]">Сергей · СЗАО</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] border border-[var(--line)] bg-white text-[var(--ink)] transition active:translate-y-px active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action)]"
                  aria-label="Закрыть меню"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav className="grid" aria-label="Мобильная навигация">
                {mobileNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleMobileNavClick(item.href);
                    }}
                    className="grid min-h-[68px] border-b border-[var(--line)] py-3.5 transition active:translate-y-px active:scale-[0.995] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--action)]"
                  >
                    <span className="text-[1.35rem] font-extrabold leading-tight text-[var(--ink)]">{item.label}</span>
                    <span className="mt-1 text-sm font-semibold leading-5 text-[var(--muted)]">{item.description}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-5 grid grid-cols-1 gap-2">
                <a
                  href={siteConfig.phoneHref}
                  onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
                  className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[var(--radius-button)] bg-[var(--action)] px-4 text-sm font-extrabold text-[var(--ink)] shadow-[var(--soft-shadow)] transition active:translate-y-px active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Позвонить
                </a>
                <a
                  href={siteConfig.avitoUrl}
                  onClick={() => reachGoal(siteConfig.metrikaGoalAvito)}
                  className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[var(--line-strong)] bg-white px-3 text-sm font-extrabold text-[var(--ink)] transition active:translate-y-px active:scale-[0.99] active:bg-[var(--paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action)]"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Профиль Avito
                </a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
