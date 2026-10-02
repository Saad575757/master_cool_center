import { Check } from "lucide-react";

import { Logo } from "@/components/logo";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  about,
  contactLinks,
  images,
  phoneLinks,
  site,
} from "@/lib/site";

export function About() {
  return (
    <Section
      id="about"
      label="About Master Cool Center"
      className="relative overflow-hidden bg-ink-950 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 -z-10 size-[30rem] rounded-full bg-brand-600/25 blur-3xl"
      />

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Copy */}
          <div>
            <Reveal>
              <SectionHeading
                tone="dark"
                eyebrow="About us"
                title={about.heading}
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-6 flex flex-col gap-4">
                {about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-base leading-relaxed text-brand-100/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-snug font-medium text-brand-100/90"
                  >
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                      <Check className="size-3" aria-hidden="true" strokeWidth={3} />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Brand plate */}
            <Reveal delay={140}>
              <div className="mt-9 flex flex-col gap-5 rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <Logo tone="light" showTagline />
                <div className="flex flex-col gap-2.5 sm:shrink-0">
                  <Button asChild size="md" className="w-full sm:w-auto">
                    <a href={phoneLinks.primary}>Call Now</a>
                  </Button>
                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center py-1.5 text-center text-[0.8125rem] font-semibold text-brand-300 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    or message us on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal delay={100} className="order-first lg:order-last">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/12 bg-ink-900 shadow-[0_32px_64px_-32px_rgba(0,0,0,0.75)]">
                <Photo
                  image={images.aboutService}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] border border-white/8"
              />
            </div>
          </Reveal>
        </div>

        {/* Closing statement */}
        <Reveal>
          <p className="mt-14 text-center text-sm font-semibold tracking-[0.12em] text-brand-300/80 uppercase sm:mt-16">
            {site.tagline} &middot; {site.nameTitleCase}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
