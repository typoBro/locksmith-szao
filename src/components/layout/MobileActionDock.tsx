"use client";

import { Phone } from "lucide-react";
import { GradualBlur } from "@/components/reactbits/GradualBlur";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

export function MobileActionDock() {
  return (
    <div data-mobile-action-dock className="mobile-action-dock fixed inset-x-0 bottom-0 z-50 transition duration-200 md:hidden">
      <GradualBlur className="h-16" />
      <nav
        className="relative border-t border-[var(--line)] bg-[color:rgb(255_254_250_/_0.96)] px-3 pb-[calc(0.7rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-16px_34px_rgba(17,17,17,0.12)] backdrop-blur-xl transition duration-200"
        aria-label="Быстрые действия"
      >
        <a
          href={siteConfig.phoneHref}
          onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
          className="inline-flex min-h-[58px] w-full touch-manipulation items-center justify-center gap-2 bg-[var(--action)] px-3 text-base font-extrabold text-[var(--ink)] shadow-[inset_0_-2px_0_rgba(17,17,17,0.14)] transition active:translate-y-px active:bg-[var(--action-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
          aria-label="Позвонить мастеру"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span>Позвонить мастеру</span>
        </a>
      </nav>
    </div>
  );
}
