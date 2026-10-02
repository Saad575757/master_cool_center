"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger, in milliseconds, applied via a CSS custom property. */
  delay?: number;
  as?: ElementType;
};

/**
 * Fades content up the first time it scrolls into view.
 *
 * Deliberately state-free: the effect writes a `data-reveal` attribute on
 * the node and lets CSS own the transition. That avoids cascading renders
 * and means the page renders fully visible when JavaScript is unavailable.
 *
 * Elements already on screen at load are left alone, so nothing flashes.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const supportsObserver =
      typeof window !== "undefined" && "IntersectionObserver" in window;

    // No animation for reduced-motion users or browsers without the observer.
    if (
      !supportsObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Anything already visible on first paint should not animate in.
    if (node.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    node.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.dataset.reveal = "shown";
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
