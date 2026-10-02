import { Mail, Phone } from "lucide-react";

import { FacebookIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import {
  contactLinks,
  navLinks,
  phoneLinks,
  serviceCategories,
  site,
} from "@/lib/site";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brand-700/20 blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-100/70">
              {site.tagline}. Professional repair support for air conditioners,
              refrigerators and water dispensers.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.nameTitleCase} on Facebook (opens in a new tab)`}
              className="mt-6 inline-flex size-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-brand-100 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>

          {/* Quick links */}
          <nav aria-labelledby="footer-quick-links" className="lg:col-span-2">
            <h2
              id="footer-quick-links"
              className="text-xs font-bold tracking-[0.14em] text-brand-300 uppercase"
            >
              Quick Links
            </h2>
            <ul className="mt-3 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex py-1.5 text-sm font-medium text-brand-100/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2
              id="footer-services"
              className="text-xs font-bold tracking-[0.14em] text-brand-300 uppercase"
            >
              Services
            </h2>
            <ul className="mt-3 flex flex-col">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="inline-flex py-1.5 text-sm font-medium text-brand-100/75 transition-colors hover:text-white"
                  >
                    {category.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold tracking-[0.14em] text-brand-300 uppercase">
              Contact
            </h2>
            <ul className="mt-3 flex flex-col gap-1">
              <li>
                <a
                  href={phoneLinks.primary}
                  className="flex items-center gap-2.5 py-1.5 text-sm font-semibold text-brand-100/85 transition-colors hover:text-white"
                >
                  <Phone
                    className="size-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <span className="tabular-nums">{site.primaryPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={phoneLinks.secondary}
                  className="flex items-center gap-2.5 py-1.5 text-sm font-semibold text-brand-100/85 transition-colors hover:text-white"
                >
                  <Phone
                    className="size-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <span className="tabular-nums">{site.secondaryPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactLinks.email}
                  className="flex items-start gap-2.5 py-1.5 text-sm font-medium break-words text-brand-100/75 transition-colors hover:text-white"
                >
                  <Mail
                    className="mt-0.5 size-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-brand-100/55">
            &copy; {year} {site.nameTitleCase}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
