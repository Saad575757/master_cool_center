"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import type { ImageSlot } from "@/lib/site";
import { cn } from "@/lib/utils";

type PhotoProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  /** Slot declared in `lib/site.ts`. */
  image: ImageSlot;
  /** Above-the-fold images load eagerly at high priority. */
  eager?: boolean;
  /** Overrides the slot's alt text. */
  alt?: string;
  className?: string;
};

/**
 * Renders an `ImageSlot` from `lib/site.ts`.
 *
 * Attempts the real photograph first and transparently swaps to the branded
 * vector stand-in if that file has not been supplied yet, so the page never
 * shows a broken image while photos are being added.
 */
export function Photo({
  image,
  eager = false,
  alt,
  className,
  sizes = "100vw",
  ...rest
}: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const usingVector = failed;

  return (
    <Image
      src={usingVector ? image.fallback : image.src}
      alt={alt ?? image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      unoptimized={usingVector}
      onError={() => setFailed(true)}
      className={cn("size-full object-cover", className)}
      data-placeholder={usingVector ? "true" : undefined}
      {...rest}
    />
  );
}
