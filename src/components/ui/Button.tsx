import Link from "next/link";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
  }
>;

export function getButtonClasses({
  className,
  size = "md",
  variant = "primary",
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] font-extrabold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--action)]",
    "active:translate-y-px active:scale-[0.99] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55 disabled:active:translate-y-0 disabled:active:scale-100",
    size === "sm" && "min-h-12 px-4 text-sm md:min-h-12",
    size === "md" && "min-h-14 px-5 text-sm md:min-h-12 md:text-base",
    size === "lg" && "min-h-14 px-7 text-base md:text-lg",
    variant === "primary" && "bg-[var(--action)] text-[var(--ink)] shadow-[var(--soft-shadow)] hover:bg-[var(--action-strong)]",
    variant === "secondary" && "border border-[var(--line-strong)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--ink)]",
    variant === "ghost" && "text-[var(--muted)] hover:text-[var(--ink)]",
    variant === "dark" && "bg-[var(--ink)] text-white shadow-[var(--soft-shadow)] hover:bg-[var(--graphite)]",
    className,
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = getButtonClasses({ className, size, variant });

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
