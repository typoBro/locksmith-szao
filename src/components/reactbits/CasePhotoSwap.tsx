"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { heroCase, heroCasePhotos } from "@/data/cases";

const stackPositions = [
  { x: 0, y: 0, rotate: -0.6, scale: 1 },
  { x: 28, y: 22, rotate: 0.9, scale: 0.955 },
  { x: 56, y: 44, rotate: -1.05, scale: 0.91 },
  { x: 84, y: 66, rotate: 1.15, scale: 0.865 },
];

export function CasePhotoSwap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroCasePhotos.length);
    }, 4300);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="hidden lg:mt-0 lg:block lg:min-h-full">
      <div className="relative hidden h-full min-h-[520px] overflow-hidden rounded-[28px] border border-[var(--ink)] bg-[var(--ink)] p-5 text-white shadow-[var(--surface-shadow)] lg:block">
        <div className="relative z-20 max-w-sm">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white/55">{heroCase.label}</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-none">{heroCase.title}</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-white/68">
            {heroCase.description}
          </p>
        </div>

        <div className="absolute inset-x-5 bottom-5 top-[11rem]" aria-label={heroCase.ariaLabel}>
          {heroCasePhotos.map((photo, index) => {
            const order = (index - activeIndex + heroCasePhotos.length) % heroCasePhotos.length;
            const position = stackPositions[order];

            return (
              <motion.figure
                key={photo.src}
                className="absolute left-0 top-0 aspect-[4/5] w-[72%] overflow-hidden rounded-[22px] border border-white/18 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.35)]"
                style={{ zIndex: heroCasePhotos.length - order }}
                animate={{
                  x: position.x,
                  y: position.y,
                  rotate: position.rotate,
                  scale: position.scale,
                  opacity: order === heroCasePhotos.length - 1 ? 0.82 : 1,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 34vw, 0vw"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <figcaption className="absolute bottom-3 left-3 bg-[var(--action)] px-3 py-2 text-xs font-extrabold text-[var(--ink)]">
                  Фото из Avito · {photo.label}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
