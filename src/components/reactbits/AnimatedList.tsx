"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";
import { Children, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

const coarsePointerQuery = "(max-width: 767px), (any-pointer: coarse)";

type AnimatedListProps = PropsWithChildren<{
  className?: string;
  itemClassName?: string;
  y?: number;
  delay?: number;
  stagger?: number;
  duration?: number;
  disableOnMobile?: boolean;
}>;

function subscribeToCoarsePointer(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(coarsePointerQuery);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getCoarsePointerSnapshot() {
  return typeof window !== "undefined" ? window.matchMedia(coarsePointerQuery).matches : true;
}

function getServerCoarsePointerSnapshot() {
  return true;
}

export function AnimatedList({
  children,
  className,
  itemClassName,
  y = 8,
  delay = 0,
  stagger = 0.055,
  duration = 0.38,
  disableOnMobile = true,
}: AnimatedListProps) {
  const reduceMotion = useReducedMotion();
  const isCoarsePointer = useSyncExternalStore(
    subscribeToCoarsePointer,
    getCoarsePointerSnapshot,
    getServerCoarsePointerSnapshot,
  );
  const items = Children.toArray(children);
  const shouldAnimate = !reduceMotion && !(disableOnMobile && isCoarsePointer);

  return (
    <div className={className}>
      {items.map((child, index) => {
        const itemKey = typeof child === "object" && "key" in child && child.key ? child.key : index;

        if (!shouldAnimate) {
          return (
            <div key={itemKey} className={cn(itemClassName)}>
              {child}
            </div>
          );
        }

        return (
          <motion.div
            key={itemKey}
            className={cn(itemClassName)}
            initial={{
              opacity: isCoarsePointer ? 0.96 : 0,
              y: isCoarsePointer ? Math.min(y, 5) : y,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration,
              delay: delay + index * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
