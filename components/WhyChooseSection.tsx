"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Sparkles, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Every treatment is grounded in clinical judgment from an experienced Registered Nurse.",
  },
  {
    icon: GraduationCap,
    title: "Patient Education",
    text: "You'll understand every option, every step — no pressure, no guesswork.",
  },
  {
    icon: Sparkles,
    title: "Natural Results",
    text: "Conservative, tailored treatments designed to enhance, never overdo.",
  },
  {
    icon: HeartHandshake,
    title: "Boutique Experience",
    text: "One-on-one care and long-term relationships, not rushed appointments.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Why Sculpted Beauty"
          title="Care Built on Trust"
          description="Boutique aesthetics led by clinical expertise, an artistic eye, and a genuine commitment to your comfort."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-ink/15">
                <reason.icon size={22} strokeWidth={1.4} />
              </div>
              <h3 className="h-display mt-6 text-xl">{reason.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
