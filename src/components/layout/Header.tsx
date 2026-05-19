"use client";

import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { mobileNavItems, navItems, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { reachGoal } from "@/lib/analytics";

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
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/94 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="grid min-h-12 content-center leading-tight" aria-label="На первый экран">
            <span className="text-base font-extrabold text-[var(--ink)] sm:text-lg">{siteConfig.shortName}</span>
            <span className="text-[11px] font-bold text-[var(--muted)] md:hidden">{siteConfig.masterLabel}</span>
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
              {siteConfig.phone}
            </ButtonLink>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-12 items-center justify-center gap-2 border border-[var(--line)] bg-white px-3 text-sm font-extrabold leading-none text-[var(--ink)] transition active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action)] md:hidden"
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
              className="absolute inset-0 bg-[var(--ink)]/34"
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
              className="fixed inset-x-0 bottom-0 max-h-[82dvh] overflow-y-auto rounded-t-[24px] border-t border-[var(--ink)] bg-white px-4 pb-[calc(16px_+_env(safe-area-inset-bottom))] pt-3 shadow-[0_-22px_60px_rgba(17,17,17,0.26)]"
              initial={reduceMotion ? false : { y: "100%" }}
              animate={{ y: 0 }}
              exit={reduceMotion ? { y: "100%" } : { y: "100%" }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[var(--line)]" aria-hidden="true" />

              <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-4">
                <div>
                  <p className="text-base font-extrabold text-[var(--ink)]">{siteConfig.shortName}</p>
                  <p className="mt-1 text-xs font-bold text-[var(--muted)]">{siteConfig.masterLabel}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-12 w-12 shrink-0 place-items-center border border-[var(--line)] text-[var(--ink)] transition active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action)]"
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
                    className="grid min-h-[62px] border-b border-[var(--line)] py-3 transition active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--action)]"
                  >
                    <span className="text-xl font-extrabold leading-tight text-[var(--ink)]">{item.label}</span>
                    <span className="mt-1 text-sm font-semibold leading-5 text-[var(--muted)]">{item.description}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-5 grid grid-cols-[1fr_0.78fr] gap-2">
                <a
                  href={siteConfig.phoneHref}
                  onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
                  className="inline-flex min-h-[56px] items-center justify-center gap-2 bg-[var(--action)] px-4 text-sm font-extrabold text-[var(--ink)] transition active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Позвонить
                </a>
                <a
                  href={siteConfig.whatsappHref}
                  onClick={() => reachGoal(siteConfig.metrikaGoalWhatsapp)}
                  className="inline-flex min-h-[56px] items-center justify-center gap-2 border border-[var(--whatsapp)] bg-white px-3 text-sm font-extrabold text-[var(--ink)] transition active:translate-y-px active:bg-[var(--whatsapp-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--whatsapp)]"
                >
                  <MessageCircle className="h-4 w-4 text-[var(--whatsapp)]" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
