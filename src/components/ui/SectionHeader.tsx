import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  title: string;
  description?: string;
  label?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionHeader({ title, description, label, align = "left", className, dark = false }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "grid max-w-5xl gap-4 md:grid-cols-[0.95fr_1fr] md:gap-8",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div>
        {label ? (
          <p className={cn("mb-3 text-xs font-extrabold uppercase tracking-[0.16em]", dark ? "text-[var(--action)]" : "text-[var(--muted)]")}>
            {label}
          </p>
        ) : null}
        <h2 className={cn("font-display text-3xl font-bold leading-[1.08] md:text-4xl", dark ? "text-white" : "text-[var(--ink)]")}>
          {title}
        </h2>
      </div>
      {description ? (
        <p className={cn("max-w-xl text-base leading-7 md:pt-4", dark ? "text-white/70" : "text-[var(--muted)]")}>{description}</p>
      ) : null}
    </div>
  );
}
