import { MessageCircle, Phone } from "lucide-react";

import { contactLinks, phoneLinks } from "@/lib/site";

/**
 * Persistent contact affordances.
 *
 * - Mobile / small screens: fixed two-button action bar at the bottom.
 * - Desktop: a single, subtle floating WhatsApp button.
 *
 * Purely presentational, so it renders on the server with no JS.
 */
export function FloatingActions() {
  return (
    <>
      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_28px_-18px_rgba(10,24,48,0.55)] backdrop-blur-md sm:px-4 lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
          <a
            href={phoneLinks.primary}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent-500 text-sm font-bold text-white shadow-[0_8px_18px_-10px_rgba(224,27,45,0.9)] transition-colors hover:bg-accent-600"
          >
            <Phone className="size-[1.15rem]" aria-hidden="true" />
            Call Now
          </a>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] text-sm font-bold text-[#05320f] shadow-[0_8px_18px_-10px_rgba(37,211,102,0.9)] transition-colors hover:bg-[#1eb958]"
          >
            <MessageCircle className="size-[1.15rem]" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Desktop floating WhatsApp */}
      <a
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Master Cool Center on WhatsApp (opens in a new tab)"
        className="group fixed right-5 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-[#05320f] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.65)] transition-[transform,background-color] duration-300 ease-out hover:scale-105 hover:bg-[#1eb958] lg:flex"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
        />
        <MessageCircle
          className="relative size-7"
          aria-hidden="true"
          strokeWidth={2.2}
        />
        <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg bg-ink-900 px-3 py-2 text-xs font-bold whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 xl:block">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
}
