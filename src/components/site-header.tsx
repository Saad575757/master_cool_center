"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { navLinks, phoneLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and close the sheet on Escape while the menu is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled || open
          ? "border-b border-ink-100 bg-white/95 shadow-header backdrop-blur-md"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between gap-3 transition-[height] duration-300",
          scrolled ? "h-16" : "h-[4.5rem] sm:h-20",
        )}
      >
        <a
          href="#home"
          className="shrink-0 rounded-md"
          aria-label={`${site.nameTitleCase} — home`}
        >
          <Logo />
          <span className="sr-only">{site.nameTitleCase}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-md px-3.5 py-2 text-[0.9375rem] font-semibold text-ink-600 transition-colors hover:text-brand-700 xl:px-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneLinks.primary}
            className="hidden items-center gap-2.5 rounded-lg border border-ink-100 bg-white px-3 py-2 text-right transition-colors hover:border-brand-300 hover:bg-brand-50 xl:flex"
          >
            <span className="flex size-8 items-center justify-center rounded-md bg-brand-50 text-brand-700">
              <Phone className="size-4" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[0.625rem] font-semibold tracking-[0.1em] text-ink-400 uppercase">
                Call now
              </span>
              <span className="mt-1 text-sm font-bold text-ink-900 tabular-nums">
                {site.primaryPhone}
              </span>
            </span>
          </a>

          <Button asChild size="md" className="hidden sm:inline-flex">
            <a href={phoneLinks.primary}>
              <Phone aria-hidden="true" />
              Call Now
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-800 transition-colors hover:border-brand-300 hover:bg-brand-50 lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        hidden={!open}
        className="lg:hidden"
      >
        <div className="border-t border-ink-100 bg-white">
          <nav aria-label="Mobile" className="container-page py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-800"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="text-ink-400"
                    >
                      &rsaquo;
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-1 gap-2.5 border-t border-ink-100 pt-4 sm:grid-cols-2">
              <Button asChild size="lg" variant="primary" className="w-full">
                <a href={phoneLinks.primary}>
                  <Phone aria-hidden="true" />
                  Call {site.primaryPhone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <a href={phoneLinks.secondary}>
                  <Phone aria-hidden="true" />
                  {site.secondaryPhone}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
