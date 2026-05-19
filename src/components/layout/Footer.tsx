import { siteConfig } from "@/data/site";
import { footerContent } from "@/data/content";

export function Footer() {
  const isPlaceholderEmail = siteConfig.email.endsWith("example.ru");

  return (
    <footer className="border-t border-[var(--line)] bg-white pb-[calc(var(--mobile-action-bar-space)+1rem)] md:pb-0">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p>{footerContent.copyright}</p>
          {isPlaceholderEmail ? (
            <p className="mt-1 text-xs font-semibold text-[var(--muted)]">
              E-mail и реквизиты будут добавлены перед публикацией.
            </p>
          ) : null}
        </div>
        <div className="hidden flex-wrap gap-x-5 gap-y-2 md:flex">
          <a href={siteConfig.phoneHref} className="inline-flex min-h-12 items-center hover:text-[var(--ink)]">
            {siteConfig.phone}
          </a>
          {!isPlaceholderEmail ? (
            <a href={`mailto:${siteConfig.email}`} className="inline-flex min-h-12 items-center hover:text-[var(--ink)]">
              {siteConfig.email}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
