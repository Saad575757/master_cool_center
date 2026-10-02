import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Heading level — keeps the document outline correct per section. */
  as?: "h1" | "h2";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase",
            dark ? "text-brand-300" : "text-brand-700",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-6",
              dark ? "bg-brand-400/70" : "bg-brand-300",
            )}
          />
          {eyebrow}
        </p>
      ) : null}

      <Tag
        id={id}
        className={cn(
          "text-[1.75rem] leading-[1.12] font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </Tag>

      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:mt-5 sm:text-lg",
            dark ? "text-brand-100/75" : "text-ink-500",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** `nav` offset target for in-page anchor links. */
  label?: string;
};

export function Section({ id, children, className, label }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("scroll-mt-24 py-16 sm:py-20 lg:py-28", className)}
    >
      {children}
    </section>
  );
}
