import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type LogoProps = {
  /** `light` is for dark backgrounds, `dark` for light backgrounds. */
  tone?: "dark" | "light";
  className?: string;
  /** Renders only the mark, without the wordmark. */
  markOnly?: boolean;
  /** Stacks the tagline underneath the wordmark. */
  showTagline?: boolean;
};

/** Snowflake-in-hexagon mark. Purely typographic/vector — no image asset. */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn("size-10 shrink-0 sm:size-11", className)}
    >
      <defs>
        <linearGradient id="mcc-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f7bf0" />
          <stop offset="55%" stopColor="#0d3175" />
          <stop offset="100%" stopColor="#071a3d" />
        </linearGradient>
      </defs>
      <path
        d="M24 1.6 42.6 12v22.4L24 44.8 5.4 34.4V12z"
        fill="url(#mcc-mark)"
      />
      <path
        d="M24 1.6 42.6 12v22.4L24 44.8 5.4 34.4V12z"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.28"
        strokeWidth="1.1"
      />
      <g
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M24 12.5v23" />
        <path d="m13.9 18.2 20.2 11.6" />
        <path d="m34.1 18.2-20.2 11.6" />
      </g>
      <g stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round">
        <path d="M24 8.4v4.4M24 35.2v4.4" />
        <path d="m17.3 21.1 3.8 2.2M26.9 24.7l3.8 2.2" />
        <path d="m30.7 21.1-3.8 2.2M21.1 24.7l-3.8 2.2" />
      </g>
      <circle cx="24" cy="24" r="2.5" fill="#e01b2d" />
    </svg>
  );
}

/**
 * MASTER COOL CENTER wordmark.
 *
 * The original flyer artwork was not supplied to the build, so this is a
 * clean typographic lockup built around the brand palette. To use the real
 * logo, replace `<LogoMark />` with an `<Image>` of the extracted file.
 */
export function Logo({
  tone = "dark",
  className,
  markOnly = false,
  showTagline = false,
}: LogoProps) {
  if (markOnly) return <LogoMark className={className} />;

  return (
    <span className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}>
      <LogoMark />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "text-[0.9375rem] leading-[1.1] font-extrabold tracking-[0.02em] sm:text-lg",
            tone === "light" ? "text-white" : "text-ink-900",
          )}
        >
          MASTER COOL
          <span className={tone === "light" ? "text-brand-300" : "text-brand-700"}>
            {" "}
            CENTER
          </span>
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 text-[0.625rem] leading-tight font-semibold tracking-[0.08em] uppercase sm:text-[0.6875rem]",
              tone === "light" ? "text-brand-200/80" : "text-ink-400",
            )}
          >
            {site.tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
