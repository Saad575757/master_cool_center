import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Button } from "@/components/ui/button";
import { contactLinks, phoneLinks, processSteps } from "@/lib/site";

export function Process() {
  return (
    <Section
      id="process"
      label="How the repair process works"
      className="bg-canvas"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Our Repair Process"
            description="Three simple steps to get your cooling appliance serviced."
          />
        </Reveal>

        <ol className="relative mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {/* Connector rail (desktop only) */}
          <span
            aria-hidden="true"
            className="absolute top-11 right-[16%] left-[16%] hidden h-px border-t-2 border-dashed border-ink-200 lg:block"
          />

          {processSteps.map((item, index) => (
            <Reveal
              key={item.step}
              as="li"
              delay={index * 110}
              className="group relative flex flex-col items-center rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-card transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover sm:p-7"
            >
              <span className="relative z-10 inline-flex size-[4.5rem] items-center justify-center rounded-full bg-white ring-1 ring-ink-100">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
              </span>

              <span className="mt-4 text-xs font-extrabold tracking-[0.16em] text-accent-500">
                Step {item.step}
              </span>

              <h3 className="mt-1.5 text-lg font-extrabold tracking-tight text-ink-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-12">
            <Button asChild size="lg">
              <a href={phoneLinks.primary}>Start With a Call</a>
            </Button>
            <Button asChild size="lg" variant="whatsapp">
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
    </Section>
  );
}
