import { Building2, MessageCircle, Phone, Snowflake, Wrench } from "lucide-react";

import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import {
  contactLinks,
  images,
  phoneLinks,
  serviceCategories,
  site,
} from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Master Cool Center — AC and appliance repair services"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-brand-50 via-white to-canvas pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -right-24 size-[34rem] rounded-full bg-brand-200/45 blur-3xl" />
        <div className="absolute top-40 -left-32 size-[26rem] rounded-full bg-accent-100/50 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas to-transparent" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* ------------------------------------------------ Copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Trust badge */}
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-brand-800 shadow-sm sm:text-[0.8125rem]">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-600 text-white">
                <Building2 className="size-3.5" aria-hidden="true" />
              </span>
              Residential &amp; Commercial Services
            </p>

            <h1 className="mt-5 text-[2.125rem] leading-[1.08] font-extrabold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              AC &amp; Appliance Repair Services{" "}
              <span className="relative whitespace-nowrap text-brand-700">
                You Can Count On
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-accent-500/70"
                >
                  <path
                    d="M2 8c60-6 120-6 148-4s88 4 148-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Professional air conditioning, refrigerator and water dispenser
              repair services for residential and commercial units.
            </p>

            {/* Appliance chips */}
            <ul className="mt-7 flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-[0.8125rem] font-semibold text-ink-700 transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-800"
                  >
                    <category.icon
                      className="size-4 text-brand-600"
                      aria-hidden="true"
                    />
                    {category.shortName}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="xl" className="w-full sm:w-auto">
                <a href={phoneLinks.primary}>
                  <Phone aria-hidden="true" />
                  Call Now
                </a>
              </Button>

              <Button asChild size="xl" variant="whatsapp" className="w-full sm:w-auto">
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Phone strip */}
            <div className="mt-8 flex flex-col gap-3 border-t border-ink-100 pt-6 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-xs font-bold tracking-[0.12em] text-ink-400 uppercase">
                Call us today
              </p>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <li>
                  <a
                    href={phoneLinks.primary}
                    className="inline-flex items-center gap-2 py-1 text-lg font-extrabold text-ink-900 tabular-nums transition-colors hover:text-accent-600"
                  >
                    <Phone className="size-4 text-accent-500" aria-hidden="true" />
                    {site.primaryPhone}
                  </a>
                </li>
                <li aria-hidden="true" className="hidden h-5 w-px bg-ink-200 sm:block" />
                <li>
                  <a
                    href={phoneLinks.secondary}
                    className="inline-flex items-center gap-2 py-1 text-lg font-extrabold text-ink-900 tabular-nums transition-colors hover:text-accent-600"
                  >
                    <Phone className="size-4 text-accent-500" aria-hidden="true" />
                    {site.secondaryPhone}
                  </a>
                </li>

              </ul>
            </div>
          </div>

          {/* ------------------------------------------------ Visual */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Soft glow behind the artwork */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-glow blur-2xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-[0_2px_4px_rgba(10,24,48,0.04),0_32px_64px_-32px_rgba(10,24,48,0.45)]">
                <Photo
                  image={images.heroAcRepair}
                  eager
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="aspect-square w-full object-cover"
                />

                {/* Status strip */}
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-ink-950/85 via-ink-950/45 to-transparent px-4 pt-10 pb-4 sm:px-5 sm:pb-5">
                  <Snowflake
                    className="size-5 shrink-0 text-brand-300"
                    aria-hidden="true"
                  />
                  <p className="text-[0.8125rem] leading-snug font-semibold text-white sm:text-sm">
                    Split AC &middot; Refrigerator &middot; Water Dispenser
                  </p>
                </div>
              </div>

              {/* Floating service card */}
              <div className="absolute -bottom-5 -left-2 hidden max-w-[15rem] rounded-2xl border border-ink-100 bg-white/95 p-4 shadow-card-hover backdrop-blur sm:block lg:-left-6">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600">
                  <Wrench className="size-[1.15rem]" aria-hidden="true" />
                </span>
                <p className="mt-3 text-sm leading-snug font-bold text-ink-900">
                  Fitting &middot; Charging &middot; Repairing
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-500">
                  One call for AC, refrigerator and dispenser work.
                </p>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-2 hidden items-center gap-2 rounded-full border border-ink-100 bg-white/95 py-2 pr-4 pl-2 shadow-card-hover backdrop-blur sm:inline-flex lg:-right-5">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-600 text-white">
                  <Snowflake className="size-4" aria-hidden="true" />
                </span>
                <span className="text-xs leading-tight font-bold text-ink-900">
                  AC &amp; Refrigeration
                  <span className="block font-semibold text-ink-400">
                    Repair Specialists
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
