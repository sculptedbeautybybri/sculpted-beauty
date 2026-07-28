export const BUSINESS = {
  name: "Sculpted Beauty by Briana",
  owner: "Briana, RN",
  tagline: "Expert Injectables. Naturally Beautiful Results.",
  city: "Melissa",
  state: "TX",
  serviceArea: ["Melissa", "Anna", "McKinney", "Prosper", "Celina", "Frisco"],
  phone: "(972) 555-0148", // placeholder — replace with real number
  email: "hello@sculptedbeautybybriana.com", // placeholder — replace with real inbox
  addressLine: "Melissa, TX", // placeholder — replace with real suite address
  hours: [
    { day: "Monday", hours: "By Appointment" },
    { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
    { day: "Friday", hours: "9:00 AM – 4:00 PM" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Closed" },
  ],
  social: {
    instagram: "https://www.instagram.com/briana_rninjector",
    instagramHandle: "@briana_rninjector",
    facebook: "https://www.facebook.com/share/1DDAK2Q8S7/",
    googleReviews: "https://share.google/xJCXJsbLcKfZ67MNp",
  },
};

export const BOOKING_URL =
  "https://www.joinblvd.com/b/sculpted-beauty-by-briana/widget#/visit-type";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type ServiceSlug =
  | "wrinkle-relaxers"
  | "dermal-fillers"
  | "ultra-laser"
  | "hair-restoration"
  | "iv-therapy"
  | "medical-grade-skincare";

export interface ServiceSummary {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  keywords: string[];
}

export const SERVICES: ServiceSummary[] = [
  {
    slug: "wrinkle-relaxers",
    name: "Wrinkle Relaxers",
    shortDescription:
      "Jeuveau and Daxxify treatments that soften expression lines while preserving natural movement.",
    keywords: ["Botox Melissa TX", "Jeuveau Melissa TX", "Daxxify Melissa TX"],
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    shortDescription:
      "Lip, cheek, jawline, and chin filler for subtle facial balancing and natural-looking volume.",
    keywords: ["Dermal Fillers Melissa TX", "Lip Filler Melissa TX"],
  },
  {
    slug: "ultra-laser",
    name: "Ultra Laser",
    shortDescription:
      "Advanced laser rejuvenation for texture, tone, and pigmentation with minimal downtime.",
    keywords: ["Ultra Laser Melissa TX", "Laser Skin Rejuvenation Melissa TX"],
  },
  {
    slug: "hair-restoration",
    name: "Hair Restoration",
    shortDescription:
      "KeraLase — KeraFactor paired with Ultra and red light therapy — to help support fuller, healthier-looking hair.",
    keywords: ["Keralase Melissa TX", "Hair Restoration Melissa TX", "KeraFactor Melissa TX"],
  },
  {
    slug: "iv-therapy",
    name: "IV Therapy",
    shortDescription:
      "Physician-formulated IV blends for hydration, energy, recovery, and immune support.",
    keywords: ["IV Therapy Melissa TX", "IV Hydration Melissa TX"],
  },
  {
    slug: "medical-grade-skincare",
    name: "Medical Grade Skincare",
    shortDescription:
      "Epionce and Hydrinity regimens curated to extend and protect your in-office results.",
    keywords: ["Epionce Melissa TX", "Hydrinity Melissa TX"],
  },
];
