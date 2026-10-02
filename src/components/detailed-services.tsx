import { ArrowRight } from "lucide-react";

import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { contactLinks, serviceCategories } from "@/lib/site";
import { cn } from "@/lib/utils";

const panelStyles = {
  brand: {
    chip: "bg-brand-600 text-white",
    icon: "bg-brand-50 text-brand-700 ring-brand-100",
    wash: "from-brand-500/[0.07]",
  },
  accent: {
    chip: "bg-accent-500 text-white",
    icon: "bg-accent-100 text-accent-600 ring-accent-100",
    wash: "from-accent-500/[0.07]",
  },
  ink: {
    chip: "bg-ink-800 text-white",
    icon: "bg-ink-50 text-ink-700 ring-ink-100",
    wash: "from-ink-700/[0.06]",
  },
} as const;

export function DetailedServices() {
  return (
    <Section
      id="detailed-services"
      label="Detailed repair services"
      className="bg-white"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Service detail"
            title="Repair Services in Detail"
            description="Every service Master Cool Center provides for split AC, refrigerators and water dispensers."
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          {serviceCategories.map((category, categoryIndex) => {
            const styles = panelStyles[category.accent];
            const Icon = category.icon;

            return (
              <Reveal key={category.id} delay={categoryIndex * 80}>
                <article
                  id={category.id}
                  className="scroll-mt-28 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                >
                  <div className="grid lg:grid-cols-12">
                    {/* Panel image */}
                    <div
                      className={cn(
                        "relative lg:col-span-4",
                        styles.wash,
                        "bg-gradient-to-br to-transparent",
                      )}
                    >
                      <div className="relative h-56 sm:h-72 lg:h-full lg:min-h-[22rem]">
                        <Photo
                          image={category.image}
                          sizes="(min-width: 1024px) 34vw, 100vw"
                          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out hover:scale-[1.05]"
                        />
                        <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-ink-900 shadow-sm backdrop-blur">
                          <Icon className="size-3.5 text-brand-600" aria-hidden="true" />
                          {category.shortName}
                        </span>
                      </div>
                    </div>

                    {/* Service list */}
                    <div className="lg:col-span-8">
                      <header className="flex items-center gap-3 border-b border-ink-100 px-5 py-5 sm:px-7">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-md px-2.5 py-1 text-[0.6875rem] font-bold tracking-[0.1em] uppercase",
                            styles.chip,
                          )}
                        >
                          {category.name}
                        </span>
                      </header>

                      <ul className="grid gap-px bg-ink-100 sm:grid-cols-3">
                        {category.services.map((service) => (
                          <li
                            key={service.title}
                            className="group/svc flex flex-col bg-white p-5 transition-colors duration-300 hover:bg-brand-50/40 sm:p-6"
                          >
                            <span
                              className={cn(
                                "inline-flex size-11 items-center justify-center rounded-lg ring-1 transition-transform duration-300 group-hover/svc:scale-105",
                                styles.icon,
                              )}
                            >
                              <service.icon className="size-5" aria-hidden="true" />
                            </span>

                            <h3 className="mt-4 text-[0.9375rem] leading-snug font-bold text-ink-900">
                              {service.title}
                            </h3>

                            <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-ink-500">
                              {service.description}
                            </p>

                            <a
                              href={contactLinks.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center gap-1.5 self-start py-2 text-[0.8125rem] font-bold text-brand-700 transition-colors hover:text-brand-900"
                            >
                              Contact Us
                              <ArrowRight
                                className="size-3.5 transition-transform duration-300 group-hover/svc:translate-x-1"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
