import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { FloatingActions } from "@/components/floating-actions";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { contactLinks, images, site } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Canonical origin. Override per environment with NEXT_PUBLIC_SITE_URL.
 * Falls back to the Vercel-provided host so preview builds stay correct.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://mastercoolcenter.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Master Cool Center | AC, Refrigerator & Appliance Repair",
  description: site.description,
  applicationName: site.nameTitleCase,
  keywords: [
    "AC repair",
    "split AC fitting",
    "AC gas charging",
    "refrigerator repair",
    "refrigerator gas charging",
    "compressor replacement",
    "water dispenser repair",
    "water dispenser gas charging",
    "Master Cool Center",
  ],
  authors: [{ name: site.nameTitleCase }],
  creator: site.nameTitleCase,
  publisher: site.nameTitleCase,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.nameTitleCase,
    title: "Master Cool Center | AC, Refrigerator & Appliance Repair",
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Cool Center | AC, Refrigerator & Appliance Repair",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Home Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2455",
  colorScheme: "light",
};

/**
 * LocalBusiness structured data.
 * Contains ONLY information supplied by the business — no address,
 * opening hours, ratings or service-area data is asserted.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: site.nameTitleCase,
  legalName: site.nameTitleCase,
  slogan: site.tagline,
  description: site.description,
  url: siteUrl,
  image: `${siteUrl}${images.heroAcRepair.src}`,
  telephone: site.primaryPhone,
  email: site.email,
  sameAs: [site.facebook],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.primaryPhone,
      email: site.email,
      availableLanguage: ["en"],
      url: contactLinks.whatsapp,
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.secondaryPhone,
      availableLanguage: ["en"],
    },
  ],
  knowsAbout: [
    "Split AC fitting",
    "AC gas charging",
    "AC repairing",
    "Refrigeration gas charge",
    "Refrigerator compressor change",
    "Refrigerator compressor repairing",
    "Water dispenser gas charging",
    "Water dispenser repairing",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      url: `${siteUrl}/#split-ac`,
      itemOffered: {
        "@type": "Service",
        name: "Split AC Services",
        serviceType: "Air conditioner fitting, gas charging and repair",
      },
    },
    {
      "@type": "Offer",
      url: `${siteUrl}/#refrigerator`,
      itemOffered: {
        "@type": "Service",
        name: "Refrigerator Services",
        serviceType: "Refrigeration gas charging and compressor services",
      },
    },
    {
      "@type": "Offer",
      url: `${siteUrl}/#water-dispenser`,
      itemOffered: {
        "@type": "Service",
        name: "Water Dispenser Services",
        serviceType: "Water dispenser gas charging and repair",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh antialiased">
        <script
          type="application/ld+json"
          // Serialised with `<` escaped to prevent script injection.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to main content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingActions />

        {/* Clearance for the fixed mobile action bar. */}
        <div aria-hidden="true" className="h-[4.75rem] lg:hidden" />
      </body>
    </html>
  );
}
