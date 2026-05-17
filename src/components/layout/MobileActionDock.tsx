"use client";

import { MapPinned, MessageCircle, MoreHorizontal, Phone } from "lucide-react";
import { GradualBlur } from "@/components/reactbits/GradualBlur";
import { siteConfig } from "@/data/site";
import { reachGoal } from "@/lib/analytics";

function openMobileMenu() {
  window.dispatchEvent(new CustomEvent("open-mobile-menu"));
}

export function MobileActionDock() {
  return (
    <div className="mobile-action-dock fixed inset-x-0 bottom-0 z-50 transition duration-200 md:hidden">
      <GradualBlur className="h-16" />
      <nav
        className="relative grid grid-cols-4 border-t border-[var(--line)] bg-white/96 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_26px_rgba(17,17,17,0.08)] backdrop-blur-xl transition duration-200"
        aria-label="Быстрые действия"
      >
        <a
          href={siteConfig.phoneHref}
          onClick={() => reachGoal(siteConfig.metrikaGoalCall)}
          className="relative inline-flex min-h-[68px] flex-col items-center justify-center gap-1 px-1 text-[11px] font-extrabold leading-none text-[var(--ink)] active:bg-[var(--paper-warm)]"
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-[var(--action)]" aria-hidden="true" />
          <span className="grid h-7 w-7 place-items-center bg-[var(--action)]">
            <Phone className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>Звонок</span>
        </a>
        <a
          href={siteConfig.whatsappHref}
          onClick={() => reachGoal(siteConfig.metrikaGoalWhatsapp)}
          className="inline-flex min-h-[68px] flex-col items-center justify-center gap-1 px-1 text-[11px] font-extrabold leading-none text-[var(--muted)] active:bg-[var(--paper-warm)] active:text-[var(--ink)]"
          aria-label="Написать в WhatsApp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#areas"
          className="inline-flex min-h-[68px] flex-col items-center justify-center gap-1 px-1 text-[11px] font-extrabold leading-none text-[var(--muted)] active:bg-[var(--paper-warm)] active:text-[var(--ink)]"
          aria-label="Открыть карту зоны выезда"
        >
          <MapPinned className="h-5 w-5" aria-hidden="true" />
          <span>Карта</span>
        </a>
        <button
          type="button"
          onClick={openMobileMenu}
          className="inline-flex min-h-[68px] flex-col items-center justify-center gap-1 px-1 text-[11px] font-extrabold leading-none text-[var(--muted)] active:bg-[var(--paper-warm)] active:text-[var(--ink)]"
          aria-label="Открыть меню"
        >
          <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
          <span>Меню</span>
        </button>
      </nav>
    </div>
  );
}
