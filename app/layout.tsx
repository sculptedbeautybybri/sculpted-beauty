import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
import { localBusinessSchema } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sculptedbeautybybriana.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sculpted Beauty by Briana | RN Aesthetic Injector in Melissa, TX",
    template: "%s | Sculpted Beauty by Briana",
  },
  description:
    "Boutique aesthetic injections by Briana, RN — 11 years of nursing experience specializing in Jeuveau, Daxxify, dermal fillers, and Ultra Laser. Serving Melissa, Anna, McKinney, Prosper, Celina, and Frisco, TX.",
  keywords: [
    "Botox Melissa TX",
    "Jeuveau Melissa TX",
    "Daxxify Melissa TX",
    "Dermal Fillers Melissa TX",
    "RN Injector Melissa TX",
    "IV Therapy Melissa TX",
    "Ultra Laser Melissa TX",
    "Keralase Melissa TX",
    "Hair Restoration Melissa TX",
    "Medical Aesthetics Melissa TX",
    "Epionce Melissa TX",
    "Hydrinity Melissa TX",
    "Medical Spa Melissa TX",
    "Aesthetic Injector Melissa TX",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Sculpted Beauty by Briana",
    title: "Sculpted Beauty by Briana | RN Aesthetic Injector in Melissa, TX",
    description:
      "Registered Nurse with 11 years of experience specializing in advanced aesthetic treatments that enhance—not change—your natural beauty.",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Sculpted Beauty by Briana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sculpted Beauty by Briana",
    description: "Expert Injectables. Naturally Beautiful Results.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingBookButton />
      </body>
    </html>
  );
}
