"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState, useSyncExternalStore } from "react";
import { AnimatedList } from "@/components/reactbits/AnimatedList";
import { faq } from "@/data/faq";
import { faqContent } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

const desktopQuery = "(min-width: 768px)";

function subscribeToDesktop(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQueryList = window.matchMedia(desktopQuery);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return typeof window !== "undefined" ? window.matchMedia(desktopQuery).matches : false;
}

function getServerDesktopSnapshot() {
  return false;
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null | undefined>(undefined);
  const reduceMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(subscribeToDesktop, getDesktopSnapshot, getServerDesktopSnapshot);
  const baseId = useId();

  return (
    <section id="faq" className="mobile-section bg-white md:py-16">
      <div className="mx-auto grid max-w-[1120px] gap-6 px-4 sm:px-6 md:gap-9 lg:px-8">
        <div>
          <SectionHeader
            label={faqContent.label}
            title={faqContent.title}
            description={faqContent.description}
            className="lg:block"
          />

          <AnimatedList
            disableOnMobile={false}
            className="mobile-card mt-5 overflow-hidden bg-white md:mt-9"
            itemClassName="border-b border-[var(--line)] last:border-b-0"
            y={6}
            duration={0.38}
          >
            {faq.map((item, index) => {
              const isManuallyOpen = openIndex === index;
              const isDesktopDefaultOpen = isDesktop && openIndex === undefined && index === 0;
              const isOpen = isManuallyOpen || isDesktopDefaultOpen;
              const triggerId = `${baseId}-trigger-${index}`;
              const panelId = `${baseId}-panel-${index}`;

              return (
                <div
                  key={item.question}
                  className={cn(
                    "border-l-4 bg-white transition-colors",
                    isOpen ? "border-l-[var(--action)]" : "border-l-transparent",
                  )}
                >
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="grid min-h-[58px] w-full cursor-pointer grid-cols-[1fr_42px] items-center gap-3 px-3 py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--action)] md:min-h-16 md:px-4 md:py-5"
                  >
                    <span className="text-base font-extrabold leading-tight text-[var(--ink)] md:text-xl">{item.question}</span>
                    <span className="grid h-9 w-9 place-items-center justify-self-end rounded-[14px] border border-[var(--line)] bg-[var(--paper)] text-3xl font-bold leading-none text-[var(--ink)] transition md:h-10 md:w-10">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={reduceMotion ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={reduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl px-3 pb-4 text-[13px] font-semibold leading-5 text-[var(--muted)] md:px-4 md:pb-6 md:text-base md:leading-6">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
