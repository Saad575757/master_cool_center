# Images — replacing the placeholders

Every image path used by the site is declared in **one place**:

```
src/lib/site.ts  →  export const images = { ... }
```

Right now each entry's `src` points at a **branded vector scene** in
`public/images/placeholders/`. They are committed, on-brand and load
instantly, so the layout is complete out of the box with zero broken
images and zero failed requests.

---

## How to add a real photo

1. Save the photo into `public/images/` using a filename from the table below.
2. In `src/lib/site.ts`, change that one entry's `src`:

   ```ts
   // before
   src: "/images/placeholders/hero-ac-repair.svg",
   // after
   src: "/images/hero-ac-repair.jpg",
   ```

That is the **only** edit required — every component reads from this map.

If the new file is ever missing or misspelled, `Photo` automatically falls
back to `/images/placeholder.svg`, so the page degrades gracefully instead
of showing a broken image.

| Slot key              | Suggested file                        | Content to supply                                        | Aspect |
| --------------------- | ------------------------------------- | -------------------------------------------------------- | ------ |
| `heroAcRepair`        | `/images/hero-ac-repair.jpg`          | Technician servicing a wall-mounted split AC indoor unit  | 1:1    |
| `acService`           | `/images/ac-service.jpg`              | Split AC service / maintenance work in progress           | 4:3    |
| `refrigeratorService` | `/images/refrigerator-service.jpg`    | Refrigerator repair, compressor area                      | 4:3    |
| `dispenserService`    | `/images/water-dispenser-service.jpg` | Water dispenser being serviced                            | 4:3    |
| `technician`          | `/images/technician.jpg`              | Technician working on an AC unit                          | 4:5    |
| `aboutService`        | `/images/about-service.jpg`           | Technician repairing a home air conditioner               | 4:5    |

### Guidance

- **Landscape or square, never portrait** for the first four. A mismatched
  orientation gets cropped by `object-cover`.
- Minimum useful width **1200px**; the hero renders up to ~700 CSS px wide,
  so 1600px+ stays crisp on retina displays. Next.js re-encodes to AVIF/WebP.
- JPEG quality 80–85 is plenty.
- Keep the subject out of the outer ~8% of the frame — the hero overlay and
  the 4:3 / 4:5 crops differ between breakpoints.
- No baked-in text, watermarks or logos. No identifiable client faces.
- `heroAcRepair` is the tightest crop (1:1), so centre the technician and the
  AC unit in the middle of the frame.

---

## Logo

The flyer artwork was not supplied when this site was built, so
`src/components/logo.tsx` renders a typographic lockup — a snowflake in a
hexagon plus the "MASTER COOL CENTER" wordmark — in the brand palette.

To use the logo from the flyer:

1. Crop it at 2× and save as `public/images/logo.png` (transparent background).
2. In `src/components/logo.tsx`, swap `<LogoMark />` for an `<Image>`:

   ```tsx
   import Image from "next/image";

   <Image
     src="/images/logo.png"
     alt="Master Cool Center"
     width={44}
     height={44}
     className="size-10 shrink-0 sm:size-11"
   />
   ```

   Keep the `size-*` classes so the header, footer and About plate stay aligned.

### Generated brand assets

These were generated from the brand palette and can be regenerated or
replaced at any time:

| File                          | Purpose                        |
| ----------------------------- | ------------------------------ |
| `src/app/favicon.ico`         | Browser tab icon (multi-size)  |
| `src/app/icon.png`            | 512×512 app icon               |
| `src/app/apple-icon.png`      | iOS home-screen icon           |
| `src/app/opengraph-image.png` | 1200×630 social share card     |
| `src/app/twitter-image.png`   | 1200×630 X/Twitter card        |

---

## Brand palette

| Role             | Hex       |
| ---------------- | --------- |
| Navy (dark)      | `#071A3D` |
| Navy             | `#0A2455` |
| Brand blue       | `#1350C4` |
| Brand blue light | `#4183EF` |
| Accent red       | `#E01B2D` |
| Accent red dark  | `#A30F1C` |
| Canvas           | `#F6F8FC` |
| Body text        | `#0A1830` |
| Muted text       | `#2B4370` |

All tokens live in `src/app/globals.css` under `@theme`.
