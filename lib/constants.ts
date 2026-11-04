export const BUSINESS = {
  name: "Sculpted Beauty by Briana",
  owner: "Briana Scribner, BSN, RN",
  tagline: "Refined results. Personalized care.",
  city: "Melissa",
  state: "TX",
  serviceArea: ["Melissa", "Anna", "McKinney", "Prosper", "Celina", "Frisco"],
  phone: "(972) 658-2845",
  email: "hello@sculptedbeautybybriana.com",
  addressLine: "1521 McKinney St, Suite 300, Melissa, TX 75454",
  hours: [
    { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
    { day: "Friday", hours: "9:00 AM – 6:00 PM" },
  ],
  social: {
    instagram: "https://www.instagram.com/briana_rninjector",
    instagramHandle: "@briana_rninjector",
    facebook: "https://www.facebook.com/share/1DDAK2Q857/",
    googleReviews: "https://share.google/xJCXJsbLckfZ67MNp",
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
  | "skinpen-microneedling"
  | "medical-grade-skincare"
  | "hair-restoration"
  | "annual-plan";

export interface ServiceSummary {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  keywords: string[];
  href?: string;
}

export const SERVICES: ServiceSummary[] = [
  {
    slug: "wrinkle-relaxers",
    name: "Tox",
    shortDescription:
      "Jeuveau and Daxxify treatments that soften expression lines while preserving natural movement.",
    keywords: ["Botox Melissa TX", "Jeuveau Melissa TX", "Daxxify Melissa TX"],
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    shortDescription:
      "Lip, cheek, jawline, and chin filler for subtle facial balancing and natural-looking volume.",
    keywords: ["Lip Filler Melissa TX", "Cheek Filler Melissa TX", "Jawline Filler Melissa TX"],
  },
  {
    slug: "ultra-laser",
    name: "Ultra Laser",
    shortDescription:
      "Lutronic ULTRA skin renewal: corrective series of 3 for $1,200, or quarterly maintenance for $450.",
    keywords: ["Lutronic ULTRA Melissa TX", "Laser Skin Renewal Melissa TX"],
  },
  {
    slug: "skinpen-microneedling",
    name: "SkinPen Microneedling",
    shortDescription:
      "SkinPen microneedling, a second option after ULTRA for texture or scarring: a series of 3 for $900, or a single quarterly maintenance visit for $350.",
    keywords: ["SkinPen Melissa TX", "Microneedling Melissa TX"],
    href: "/#skin-first",
  },
  {
    slug: "medical-grade-skincare",
    name: "Medical Grade Skincare",
    shortDescription:
      "Epionce and Hydrinity regimens curated to extend and protect your in-office results.",
    keywords: ["Epionce Melissa TX", "Hydrinity Melissa TX", "Medical Grade Skincare Melissa TX"],
  },
  {
    slug: "hair-restoration",
    name: "Hair Restoration",
    shortDescription:
      "KeraFactor Hair Restoration, $299 per session, 6 sessions spaced 3-4 weeks apart, with LaseMD Ultra laser and KeraFactor serum.",
    keywords: ["Hair Restoration Melissa TX", "KeraFactor Melissa TX"],
  },
  {
    slug: "annual-plan",
    name: "Annual Plan",
    shortDescription:
      "A 12-month package of tox, skincare, laser, and filler, plus a free ULTRA package — see the Annual Plan section on the homepage.",
    keywords: ["Annual Plan Melissa TX"],
    href: "/#annual-plan",
  },
];
