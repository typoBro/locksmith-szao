"use client";

import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnet({ children, className, strength = 0.12 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element || window.matchMedia("(max-width: 767px)").matches) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function handleLeave() {
    const element = ref.current;
    if (!element) return;
    element.style.transform = "translate3d(0, 0, 0)";
  }

  return (
    <div ref={ref} className={className} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  );
}
