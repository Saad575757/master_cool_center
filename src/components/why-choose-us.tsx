import { Check } from "lucide-react";

import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Button } from "@/components/ui/button";
import { benefits, contactLinks, images, phoneLinks } from "@/lib/site";

export function WhyChooseUs() {
  return (
    <Section
      id="why-us"
      label="Why choose Master Cool Center"
      className="relative overflow-hidden bg-canvas"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 -left-24 size-[24rem] rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Image */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card-hover">
                <Photo
                  image={images.technician}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
              </div>

              {/* Overlapping stat-free trust card (facts only) */}
              <div className="absolute right-0 -bottom-6 left-4 rounded-2xl border border-ink-100 bg-white/95 p-4 shadow-card-hover backdrop-blur sm:left-auto sm:max-w-[17rem] sm:p-5">
                <p className="text-[0.6875rem] font-bold tracking-[0.12em] text-accent-600 uppercase">
                  Service coverage
                </p>
                <p className="mt-1.5 text-sm leading-snug font-bold text-ink-900">
                  Residential homes, shops, offices &amp; commercial units
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {["Split AC", "Refrigerator", "Dispenser"].map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-ink-50 px-2 py-1 text-[0.6875rem] font-semibold text-ink-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Benefits */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                eyebrow="Why choose us"
                title="Reliable Repair Services for Your Cooling Needs"
                description="Master Cool Center covers the repair work your cooling appliances need, from fitting and gas charging to compressor servicing."
              />
            </Reveal>

            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Reveal
                  key={benefit.title}
                  as="li"
                  delay={index * 70}
                  className="group rounded-xl border border-ink-100 bg-white p-4 shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover sm:p-5"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                    <benefit.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3.5 text-[0.9375rem] leading-snug font-bold text-ink-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-500">
                    {benefit.description}
                  </p>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <a href={phoneLinks.primary}>Call Now</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function BenefitCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-ink-700">
      <span className="mt-0.5 inline-flex size-4.5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
        <Check className="size-3" aria-hidden="true" strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}
