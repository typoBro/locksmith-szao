"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

const mobileRevealQuery = "(max-width: 767px), (any-pointer: coarse)";

type AnimatedRevealProps = PropsWithChildren<{
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  disableOnMobile?: boolean;
}>;

function subscribeToMobileReveal(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(mobileRevealQuery);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getMobileRevealSnapshot() {
  return typeof window !== "undefined" ? window.matchMedia(mobileRevealQuery).matches : true;
}

function getServerMobileRevealSnapshot() {
  return true;
}

export function AnimatedReveal({
  children,
  y = 18,
  delay = 0,
  duration = 0.42,
  once = true,
  className,
  disableOnMobile = true,
}: AnimatedRevealProps) {
  const reduceMotion = useReducedMotion();
  const isMobileRevealDisabled = useSyncExternalStore(
    subscribeToMobileReveal,
    getMobileRevealSnapshot,
    getServerMobileRevealSnapshot,
  );

  if (reduceMotion || (disableOnMobile && isMobileRevealDisabled)) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: isMobileRevealDisabled ? 0.94 : 0,
        y: isMobileRevealDisabled ? Math.min(y, 8) : y,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
