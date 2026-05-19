"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(max-width: 767px), (hover: none)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--x", `${x.toFixed(2)}%`);
    event.currentTarget.style.setProperty("--y", `${y.toFixed(2)}%`);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden border border-[var(--line)] bg-[var(--paper)]",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,210,31,0.16),transparent_38%)] before:opacity-0 before:transition-opacity before:duration-300 md:hover:before:opacity-100",
        className,
      )}
      style={{ "--x": "50%", "--y": "50%" } as CSSProperties}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
