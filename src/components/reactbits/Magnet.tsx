"use client";

import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { useReducedMotion } from "motion/react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnet({ children, className, strength = 0.12 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element || reduceMotion || window.matchMedia("(max-width: 767px), (hover: none)").matches) return;

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
    <div
      ref={ref}
      className={className}
      style={{ transition: reduceMotion ? undefined : "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
