"use client";

import { Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

const mobileNavItems = [
  { label: "Услуги", href: "#services", description: "дверь, авто, гараж, сейф" },
  { label: "Зона выезда", href: "#areas", description: "районы СЗАО и проверка адреса" },
  { label: "FAQ", href: "#faq", description: "цена, документы, повреждения" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/94 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <a href="#top" className="grid leading-tight" aria-label="На первый экран">
          <span className="text-base font-extrabold text-[var(--ink)] sm:text-lg">{siteConfig.shortName}</span>
          <span className="text-[11px] font-bold text-[var(--muted)] md:hidden">{siteConfig.masterLabel}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-[var(--muted)] transition hover:text-[var(--ink)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <ButtonLink href={siteConfig.phoneHref} size="sm" className="hidden md:inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </ButtonLink>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="grid h-12 w-12 place-items-center border border-[var(--line)] bg-white text-2xl font-extrabold leading-none text-[var(--ink)] md:hidden"
            aria-label="Открыть меню"
            aria-expanded={isOpen}
          >
            ⋯
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label="Мобильное меню">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--ink)]/30"
            aria-label="Закрыть меню"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-dvh w-[min(320px,86vw)] flex-col border-l border-[var(--line)] bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-extrabold text-[var(--ink)]">{siteConfig.shortName}</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-12 w-12 place-items-center border border-[var(--line)] text-[var(--ink)]"
                aria-label="Закрыть меню"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-8 grid gap-1" aria-label="Мобильная навигация">
              {mobileNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleMobileNavClick(item.href);
                  }}
                  className="grid border-b border-[var(--line)] py-4"
                >
                  <span className="text-xl font-extrabold text-[var(--ink)]">{item.label}</span>
                  <span className="mt-1 text-sm font-semibold leading-5 text-[var(--muted)]">{item.description}</span>
                </a>
              ))}
            </nav>

            <div className="mt-auto grid gap-3 pt-8">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--action)] px-4 text-sm font-extrabold text-[var(--ink)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
