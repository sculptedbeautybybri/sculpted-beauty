import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import LuxuryCta from "@/components/LuxuryCta";
import { GENERAL_FAQS, SERVICE_FAQS } from "@/lib/faq-data";
import { faqSchema } from "@/lib/schema";
import { SERVICE_CONTENT } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Jeuveau, Daxxify, dermal fillers, Ultra Laser, IV therapy, pricing, recovery, and booking at Sculpted Beauty by Briana.",
};

export default function FaqPage() {
  const allFaqs = [
    ...GENERAL_FAQS,
    ...Object.values(SERVICE_FAQS).flat(),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqs)) }}
      />

      <section className="bg-paper pb-4 pt-14 md:pt-20">
        <div className="container-luxury max-w-2xl">
          <p className="eyebrow">Here to Help</p>
          <h1 className="h-display mt-5 text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-luxury max-w-3xl">
          <h2 className="h-display text-2xl md:text-3xl">General</h2>
          <div className="mt-8">
            <FaqAccordion items={GENERAL_FAQS} />
          </div>
        </div>
      </section>

      {Object.entries(SERVICE_FAQS).map(([slug, items]) => (
        <section key={slug} className="bg-ivory py-16 md:py-24">
          <div className="container-luxury max-w-3xl">
            <h2 className="h-display text-2xl md:text-3xl">
              {SERVICE_CONTENT[slug].name}
            </h2>
            <div className="mt-8">
              <FaqAccordion items={items} />
            </div>
          </div>
        </section>
      ))}

      <LuxuryCta />
    </>
  );
}
