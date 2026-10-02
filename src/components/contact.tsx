import { Mail, MessageCircle, Phone } from "lucide-react";

import { FacebookIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Button } from "@/components/ui/button";
import { contactLinks, phoneLinks, serviceCategories, site } from "@/lib/site";

const channels = [
  {
    label: "Call now",
    value: site.primaryPhone,
    href: phoneLinks.primary,
    icon: Phone,
    note: "Primary line",
  },
  {
    label: "Alternate line",
    value: site.secondaryPhone,
    href: phoneLinks.secondary,
    icon: Phone,
    note: "Secondary line",
  },
  {
    label: "Email us",
    value: site.email,
    href: contactLinks.email,
    icon: Mail,
    note: "Send repair details",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: contactLinks.whatsapp,
    icon: MessageCircle,
    note: "Quick message",
    external: true,
  },
] as const;

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact Master Cool Center"
      className="relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-brand-50 to-transparent"
      />

      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-950 shadow-[0_2px_4px_rgba(10,24,48,0.05),0_40px_80px_-40px_rgba(5,13,28,0.7)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-dark opacity-70"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-0 size-[28rem] rounded-full bg-brand-600/25 blur-3xl"
          />

          <div className="relative grid gap-10 p-6 sm:p-9 lg:grid-cols-12 lg:gap-12 lg:p-12">
            {/* Heading + CTAs */}
            <div className="lg:col-span-6">
              <Reveal>
                <SectionHeading
                  tone="dark"
                  eyebrow="Get in touch"
                  title="Need a Repair?"
                  description="Contact Master Cool Center for AC, refrigerator or water dispenser repair services."
                />
              </Reveal>

              <Reveal delay={90}>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {serviceCategories.map((category) => (
                    <li key={category.id}>
                      <a
                        href={`#${category.id}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.8125rem] font-semibold text-brand-100 transition-colors hover:border-white/35 hover:bg-white/10 hover:text-white"
                      >
                        <category.icon className="size-4" aria-hidden="true" />
                        {category.shortName}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                  <Button asChild size="xl" variant="outlineLight" className="w-full sm:w-auto">
                    <a href={contactLinks.email}>
                      <Mail aria-hidden="true" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-brand-200/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  <FacebookIcon className="size-4" />
                  Visit Facebook Page
                </a>
              </Reveal>
            </div>

            {/* Channel cards */}
            <div className="lg:col-span-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {channels.map((channel, index) => (
                  <Reveal
                    key={channel.label + channel.value}
                    as="li"
                    delay={index * 80}
                  >
                    <a
                      href={channel.href}
                      {...("external" in channel && channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex h-full flex-col rounded-xl border border-white/12 bg-white/[0.05] p-4 backdrop-blur-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 sm:p-5"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-brand-200 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                        <channel.icon className="size-5" aria-hidden="true" />
                      </span>

                      <span className="mt-3.5 text-[0.6875rem] font-bold tracking-[0.12em] text-brand-300/80 uppercase">
                        {channel.label}
                      </span>

                      <span className="mt-1 text-base leading-snug font-extrabold break-words text-white">
                        {channel.value}
                      </span>

                      <span className="mt-auto pt-3 text-xs font-medium text-brand-100/60">
                        {channel.note}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
