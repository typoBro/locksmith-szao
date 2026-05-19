"use client";

import { MessageCircle, Phone } from "lucide-react";
import { GradualBlur } from "@/components/reactbits/GradualBlur";
import { mobileDockContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

export function MobileActionDock() {
  return (
    <div data-mobile-action-dock className="mobile-action-dock fixed inset-x-3 bottom-0 z-50 transition duration-200 lg:hidden">
      <GradualBlur className="-inset-x-3 h-20" />
      <nav
        className="relative rounded-[22px] border border-[var(--line)] bg-[color:rgb(255_255_255_/_0.94)] px-3 pb-[calc(10px_+_env(safe-area-inset-bottom))] pt-3 shadow-[0_-16px_34px_rgba(17,17,17,0.16)] backdrop-blur-xl transition duration-200"
        aria-label={mobileDockContent.ariaLabel}
      >
        <div className="grid grid-cols-[1fr_0.78fr] gap-2">
          <a
            href={siteConfig.phoneHref}
            onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
            className="inline-flex min-h-[58px] touch-manipulation items-center justify-center gap-2 rounded-[14px] bg-[var(--action)] px-3 text-base font-extrabold text-[var(--ink)] shadow-[inset_0_-2px_0_rgba(17,17,17,0.14)] transition active:translate-y-px active:bg-[var(--action-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
            aria-label={mobileDockContent.callAriaLabel}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>{mobileDockContent.callLabel}</span>
          </a>
          <a
            href={siteConfig.whatsappHref}
            onClick={() => reachGoal(siteConfig.metrikaGoalWhatsapp)}
            className="inline-flex min-h-[58px] touch-manipulation items-center justify-center gap-2 rounded-[14px] border border-[var(--whatsapp)] bg-white px-3 text-sm font-extrabold text-[var(--ink)] transition active:translate-y-px active:bg-[var(--whatsapp-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--whatsapp)]"
            aria-label={mobileDockContent.whatsappAriaLabel}
          >
            <MessageCircle className="h-5 w-5 text-[var(--whatsapp)]" aria-hidden="true" />
            <span>{mobileDockContent.whatsappLabel}</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
