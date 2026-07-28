import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sculpted Beauty by Briana in Melissa, TX. Book a consultation, ask a question, or find our hours, phone, and location.",
};

export default function ContactPage() {
  return (
    <section className="pt-14 md:pt-20">
      <div className="container-luxury max-w-2xl">
        <p className="eyebrow">We'd Love to Hear From You</p>
        <h1 className="h-display mt-5 text-5xl md:text-6xl">Contact</h1>
      </div>
      <ContactSection />
    </section>
  );
}
