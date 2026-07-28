import { BUSINESS } from "./constants";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sculptedbeautybybriana.com";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: BUSINESS.name,
    image: `${SITE_URL}/images/logo.png`,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: "US",
    },
    areaServed: BUSINESS.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    founder: {
      "@type": "Person",
      name: "Briana",
      jobTitle: "Registered Nurse, Aesthetic Injector",
    },
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
    openingHoursSpecification: BUSINESS.hours
      .filter((h) => h.hours !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        description: h.hours,
      })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
