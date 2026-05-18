"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { heroCasePhotos } from "@/data/casePhotos";

const stackPositions = [
  { x: 0, y: 0, rotate: -1.5, scale: 1 },
  { x: 34, y: 24, rotate: 2.25, scale: 0.95 },
  { x: 68, y: 48, rotate: -2.75, scale: 0.9 },
  { x: 102, y: 72, rotate: 3.25, scale: 0.85 },
];

export function CasePhotoSwap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroCasePhotos.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="mt-7 md:mt-0 md:min-h-full">
      <div className="mx-auto grid max-w-[320px] grid-cols-2 gap-2 md:hidden" aria-label="Фото примера работы">
        {heroCasePhotos.map((photo) => (
          <figure key={photo.src} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white">
            <div className="relative aspect-square">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="50vw" />
            </div>
          </figure>
        ))}
      </div>

      <div className="relative hidden h-full min-h-[520px] overflow-hidden border border-[var(--ink)] bg-[var(--ink)] p-5 text-white shadow-[10px_10px_0_rgba(17,17,17,0.08)] md:block">
        <div className="relative z-20 max-w-sm">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white/55">Пример решения</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-none">Входная дверь</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-white/68">
            Вскрытие, диагностика механизма и аккуратная работа с замком.
          </p>
        </div>

        <div className="absolute inset-x-5 bottom-5 top-[11rem]" aria-label="Фото работ из Avito">
          {heroCasePhotos.map((photo, index) => {
            const order = (index - activeIndex + heroCasePhotos.length) % heroCasePhotos.length;
            const position = stackPositions[order];

            return (
              <motion.figure
                key={photo.src}
                className="absolute left-0 top-0 h-[min(100%,420px)] w-[72%] overflow-hidden rounded-[22px] border border-white/18 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.35)]"
                style={{ zIndex: heroCasePhotos.length - order }}
                animate={{
                  x: position.x,
                  y: position.y,
                  rotate: position.rotate,
                  scale: position.scale,
                  opacity: order === heroCasePhotos.length - 1 ? 0.82 : 1,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="34vw" priority={index === 0} />
                <figcaption className="absolute bottom-3 left-3 bg-[var(--action)] px-3 py-2 text-xs font-extrabold text-[var(--ink)]">
                  {photo.label}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
