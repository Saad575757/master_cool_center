import type { LucideIcon } from "lucide-react";
import {
  AirVent,
  Droplets,
  Gauge,
  Home,
  MessagesSquare,
  Package,
  Refrigerator,
  Repeat,
  Snowflake,
  ThermometerSnowflake,
  Wrench,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Brand + contact                                                            */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "MASTER COOL CENTER",
  nameTitleCase: "Master Cool Center",
  tagline: "Residential & Commercial Unit Repairings",
  description:
    "Master Cool Center provides residential and commercial AC, refrigerator and water dispenser repair services, including AC fitting, gas charging, compressor services and repairs.",
  /** Primary number — used for the header CTA and the WhatsApp deep link. */
  primaryPhone: "0333-2583-344",
  secondaryPhone: "0314-2068-983",
  whatsappNumber: "923332583344",
  email: "mastercoolcenter@gmail.com",
  facebook: "https://web.facebook.com/MasterCoolCenter/",
} as const;

/** E.164 / dialable strings. `tel:` hrefs strip spaces for maximum compatibility. */
export const phoneLinks = {
  primary: `tel:${site.primaryPhone}`,
  secondary: `tel:${site.secondaryPhone}`,
} as const;

export const contactLinks = {
  whatsapp: `https://wa.me/${site.whatsappNumber}`,
  email: `mailto:${site.email}`,
} as const;

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Images                                                                     */
/* -------------------------------------------------------------------------- */

export type ImageSlot = {
  /**
   * Path currently rendered. This always points at a file that exists, so
   * the site never requests a missing image.
   */
  src: string;
  /**
   * Last-resort stand-in. Used only if `src` ever 404s after being
   * repointed at a real photograph.
   */
  fallback: string;
  alt: string;
  width: number;
  height: number;
  /** Intrinsic aspect ratio of the intended photograph, e.g. `"4 / 3"`. */
  ratio: string;
};

/** Shared by every slot; used if a repointed `src` fails to load. */
const IMAGE_FALLBACK = "/images/placeholder.svg";

/**
 * Every image on the site is declared here — the single source of truth.
 *
 * ## Using real photography
 * Right now each `src` points at a branded vector scene in
 * `public/images/placeholders/`, so the layout is complete and on-brand out
 * of the box with zero broken images.
 *
 * To swap in a real photo:
 *   1. Save it in `public/images/` using the filename in the table below.
 *   2. Change that entry's `src` from the `.svg` to your new file:
 *
 *        src: "/images/hero-ac-repair.jpg",
 *
 *   That is the only edit required — every component reads from this map.
 *
 * See `public/images/README.md` for framing and sizing guidance.
 */
export const images = {
  heroAcRepair: {
    src: "/images/placeholders/hero-ac-repair.svg",
    fallback: IMAGE_FALLBACK,
    alt: "Air conditioner technician servicing a wall-mounted split AC indoor unit",
    width: 1280,
    height: 1280,
    ratio: "1 / 1",
  },
  acService: {
    src: "/images/placeholders/ac-service.svg",
    fallback: IMAGE_FALLBACK,
    alt: "Split air conditioner service and maintenance work in progress",
    width: 1200,
    height: 900,
    ratio: "4 / 3",
  },
  refrigeratorService: {
    src: "/images/placeholders/refrigerator-service.svg",
    fallback: IMAGE_FALLBACK,
    alt: "Refrigerator repair work focused on the compressor at the rear of the unit",
    width: 1200,
    height: 900,
    ratio: "4 / 3",
  },
  dispenserService: {
    src: "/images/placeholders/water-dispenser-service.svg",
    fallback: IMAGE_FALLBACK,
    alt: "Water dispenser being serviced with its cooling compartment open",
    width: 1200,
    height: 900,
    ratio: "4 / 3",
  },
  technician: {
    src: "/images/placeholders/technician.svg",
    fallback: IMAGE_FALLBACK,
    alt: "Repair technician working on an air conditioning unit",
    width: 1200,
    height: 1500,
    ratio: "4 / 5",
  },
  aboutService: {
    src: "/images/placeholders/about-service.svg",
    fallback: IMAGE_FALLBACK,
    alt: "Master Cool Center technician repairing a home air conditioner",
    width: 1200,
    height: 1500,
    ratio: "4 / 5",
  },
} as const satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** `id` matches the per-category detailed-services block in the markup. */
export type ServiceCategory = {
  id: string;
  name: string;
  shortName: string;
  /** One-line summary used on the overview cards. */
  summary: string;
  icon: LucideIcon;
  accent: "brand" | "accent" | "ink";
  image: ImageSlot;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "split-ac",
    name: "Split AC Services",
    shortName: "Split AC",
    summary:
      "Fitting, refrigerant charging and fault repair for split air conditioner units.",
    icon: AirVent,
    accent: "brand",
    image: images["acService"],
    services: [
      {
        title: "AC Fitting",
        description:
          "Split AC fitting support for new installations and unit replacements.",
        icon: Package,
      },
      {
        title: "AC Gas Charging",
        description:
          "Refrigerant gas charging to restore correct cooling performance.",
        icon: Gauge,
      },
      {
        title: "AC Repairing",
        description:
          "Troubleshooting and repair work for split AC indoor and outdoor units.",
        icon: Wrench,
      },
    ],
  },
  {
    id: "refrigerator",
    name: "Refrigerator Services",
    shortName: "Refrigerator",
    summary:
      "Gas charging and compressor replacement or repair for refrigerators.",
    icon: Refrigerator,
    accent: "accent",
    image: images["refrigeratorService"],
    services: [
      {
        title: "Refrigeration Gas Charge",
        description:
          "Refrigerant gas charging for refrigerators that have stopped cooling.",
        icon: Snowflake,
      },
      {
        title: "Compressor Change",
        description:
          "Replacement of faulty refrigerator compressors with a suitable unit.",
        icon: Repeat,
      },
      {
        title: "Compressor Repairing",
        description:
          "Compressor repair work to restore refrigeration performance.",
        icon: Wrench,
      },
    ],
  },
  {
    id: "water-dispenser",
    name: "Water Dispenser Services",
    shortName: "Water Dispenser",
    summary:
      "Gas charging and repair service for household and commercial dispensers.",
    icon: Droplets,
    accent: "ink",
    image: images["dispenserService"],
    services: [
      {
        title: "Dispenser Gas Charge",
        description:
          "Cooling gas charging for water dispensers that are not chilling.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Dispenser Repairing",
        description:
          "Repairing for water dispenser cooling faults and general breakdown.",
        icon: Wrench,
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Why choose us                                                              */
/* -------------------------------------------------------------------------- */

export const benefits = [
  {
    title: "Residential & Commercial Service",
    description:
      "One repair team for homes, shops, offices and other commercial units.",
    icon: Home,
  },
  {
    title: "AC & Cooling Appliance Expertise",
    description:
      "Split AC, refrigerator and water dispenser repair handled together.",
    icon: Snowflake,
  },
  {
    title: "Gas Charging & Repair",
    description:
      "Refrigerant charging and fault repair for under-performing cooling units.",
    icon: Gauge,
  },
  {
    title: "Compressor Services",
    description:
      "Compressor replacement and compressor repairing for refrigerators.",
    icon: Repeat,
  },
  {
    title: "Easy Phone & WhatsApp Contact",
    description:
      "Reach Master Cool Center directly on the phone or over WhatsApp.",
    icon: MessagesSquare,
  },
  {
    title: "Service-Focused Approach",
    description:
      "Attention on the specific repair requirement you describe to us.",
    icon: Wrench,
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Repair process                                                             */
/* -------------------------------------------------------------------------- */

export const processSteps = [
  {
    step: "01",
    title: "Contact Us",
    description:
      "Call or WhatsApp Master Cool Center with your repair requirement.",
    icon: MessagesSquare,
  },
  {
    step: "02",
    title: "Describe the Problem",
    description:
      "Tell us whether you need AC, refrigerator or water dispenser service.",
    icon: Wrench,
  },
  {
    step: "03",
    title: "Get Service",
    description: "Arrange the repair service with Master Cool Center.",
    icon: Snowflake,
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  heading: "About Master Cool Center",
  paragraphs: [
    "Master Cool Center provides residential and commercial repair services for air conditioners, refrigerators and water dispensers.",
    "Our services cover AC fitting, gas charging, repairs and compressor-related work, helping customers keep their cooling appliances operating properly.",
  ],
  highlights: [
    "Residential & commercial units",
    "AC fitting, charging and repair",
    "Refrigerator compressor work",
    "Water dispenser servicing",
  ],
} as const;
