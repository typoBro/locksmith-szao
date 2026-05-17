import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white pb-24 md:pb-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 {siteConfig.name}. Выездной сервис, работа после подтверждения доступа.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={siteConfig.phoneHref} className="hover:text-[var(--ink)]">
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--ink)]">
            {siteConfig.email}
          </a>
          <a href="#requisites" className="hover:text-[var(--ink)]">
            Реквизиты
          </a>
        </div>
      </div>
    </footer>
  );
}
