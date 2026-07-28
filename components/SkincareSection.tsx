"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const BRANDS = [
  {
    name: "Epionce",
    text: "Clinically formulated to restore the skin's natural barrier and support long-term skin health.",
  },
  {
    name: "Hydrinity",
    text: "Advanced hydration technology that extends and protects your in-office results at home.",
  },
];

export default function SkincareSection() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Wellness & Skincare"
          title="Medical Grade Skincare"
          description="In-office treatments perform best alongside a professional-grade regimen. Briana curates each patient's routine to protect and prolong their results."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border border-ink/10 p-10 md:p-12"
            >
              <h3 className="h-display text-3xl">{brand.name}</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-stone">{brand.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services/medical-grade-skincare" className="btn-secondary inline-flex">
            Explore Skincare
          </Link>
        </div>
      </div>
    </section>
  );
}
