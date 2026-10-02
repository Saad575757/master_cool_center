import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactLinks, type ServiceCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

const accentStyles = {
  brand: {
    icon: "bg-brand-50 text-brand-700 ring-brand-100",
    bar: "bg-brand-600",
    cta: "text-brand-700 group-hover:text-brand-800",
    glow: "from-brand-500/12",
  },
  accent: {
    icon: "bg-accent-100 text-accent-600 ring-accent-100",
    bar: "bg-accent-500",
    cta: "text-accent-600 group-hover:text-accent-700",
    glow: "from-accent-500/12",
  },
  ink: {
    icon: "bg-ink-50 text-ink-700 ring-ink-100",
    bar: "bg-ink-700",
    cta: "text-ink-800 group-hover:text-ink-900",
    glow: "from-ink-700/10",
  },
} as const;

type ServiceCardProps = {
  category: ServiceCategory;
  ctaLabel: string;
};

export function ServiceCard({ category, ctaLabel }: ServiceCardProps) {
  const styles = accentStyles[category.accent];
  const Icon = category.icon;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-[box-shadow,border-color,transform] duration-300 ease-out",
        "hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover",
        "focus-within:-translate-y-1 focus-within:border-brand-200 focus-within:shadow-card-hover",
      )}
    >
      {/* Accent hairline + hover wash */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
          styles.bar,
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
          styles.glow,
        )}
      />

      <span
        className={cn(
          "inline-flex size-13 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105",
          styles.icon,
        )}
      >
        <Icon className="size-6" aria-hidden="true" />
      </span>

      <h3 className="mt-5 text-lg font-extrabold tracking-tight text-ink-900 sm:text-xl">
        <a href={`#${category.id}`} className="after:absolute after:inset-0 after:content-['']">
          {category.name}
        </a>
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-ink-500">
        {category.summary}
      </p>

      <ul className="mt-5 flex flex-col gap-2.5">
        {category.services.map((service) => (
          <li
            key={service.title}
            className="flex items-start gap-2.5 text-[0.9375rem] font-medium text-ink-700"
          >
            <span
              className={cn(
                "mt-0.5 inline-flex size-4.5 shrink-0 items-center justify-center rounded-full",
                styles.icon,
              )}
            >
              <Check className="size-3" aria-hidden="true" strokeWidth={3} />
            </span>
            {service.title}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink-100 pt-5">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-bold transition-colors",
            styles.cta,
          )}
        >
          {ctaLabel}
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>

        <Button
          asChild
          size="sm"
          variant="ghost"
          className="relative z-10 -mr-2 shrink-0 text-ink-400 hover:bg-ink-50"
          tabIndex={-1}
          aria-hidden="true"
        >
          <a href={contactLinks.whatsapp} tabIndex={-1}>
            Request
          </a>
        </Button>
      </div>
    </article>
  );
}
