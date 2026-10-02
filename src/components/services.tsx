import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { serviceCategories } from "@/lib/site";

const ctaLabels = [
  "Request AC Service",
  "Request Refrigerator Service",
  "Request Dispenser Service",
] as const;

export function ServicesOverview() {
  return (
    <Section id="services" label="Our repair services" className="bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Our Repair Services"
            description="Professional repair and maintenance solutions for your essential cooling and refrigeration appliances."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 90}>
              <ServiceCard
                category={category}
                ctaLabel={ctaLabels[index] ?? "Contact Us"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
