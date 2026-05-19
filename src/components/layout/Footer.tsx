import { siteConfig } from "@/data/site";
import { footerContent } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p>{footerContent.copyright}</p>
        </div>
        <div className="hidden flex-wrap gap-x-5 gap-y-2 md:flex">
          <a
            href={siteConfig.avitoUrl}
            className="inline-flex min-h-12 items-center hover:text-[var(--ink)]"
          >
            Смотреть профиль Avito
          </a>
          {siteConfig.email ? (
            <a href={`mailto:${siteConfig.email}`} className="inline-flex min-h-12 items-center hover:text-[var(--ink)]">
              {siteConfig.email}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
