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
    "inline-flex items-center justify-center gap-2 rounded-none font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--action)]",
    "active:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55 disabled:active:translate-y-0",
    size === "sm" && "min-h-12 px-4 text-sm",
    size === "md" && "min-h-12 px-5 text-sm md:text-base",
    size === "lg" && "min-h-14 px-7 text-base md:text-lg",
    variant === "primary" && "bg-[var(--action)] text-[var(--ink)] hover:bg-[var(--action-strong)]",
    variant === "secondary" && "border border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--ink)]",
    variant === "ghost" && "text-[var(--muted)] hover:text-[var(--ink)]",
    variant === "dark" && "bg-[var(--ink)] text-white hover:bg-[var(--graphite)]",
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
