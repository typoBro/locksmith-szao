"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";
import { Children, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { cardStagger, motionDurations, smoothEase } from "@/lib/motion";

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
  y = 16,
  delay = 0,
  stagger = cardStagger,
  duration = motionDurations.section,
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
              opacity: isCoarsePointer ? 0.98 : 0,
              y: isCoarsePointer ? Math.min(y, 4) : y,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration,
              delay: delay + index * stagger,
              ease: smoothEase,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
