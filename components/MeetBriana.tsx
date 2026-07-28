"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CREDENTIALS = [
  "Registered Nurse — 11 Years of Nursing Experience",
  "Advanced Certification in Cosmetic Injectables",
  "2+ Years Performing Aesthetic Injections",
  "Ongoing Continuing Education in Facial Anatomy",
];

export default function MeetBriana() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-luxury grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden"
        >
          <Image
            src="/images/briana-hero.jpg"
            alt="Briana, RN, founder of Sculpted Beauty by Briana"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
        </motion.div>

        <div>
          <p className="eyebrow">Meet Your Injector</p>
          <h2 className="h-display mt-5 text-4xl md:text-5xl">
            Artistry Rooted in
            <br />
            <span className="italic text-stone">Nursing Expertise</span>
          </h2>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-stone">
            With 11 years of nursing experience and advanced certification in cosmetic
            injectables, Briana approaches every treatment as both a clinician and an
            artist. Her philosophy is simple: enhance your natural beauty while
            preserving what makes you distinctly you.
          </p>

          <ul className="mt-8 space-y-4">
            {CREDENTIALS.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-ink">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/about" className="btn-secondary mt-10 inline-flex">
            Read Briana's Story
          </Link>
        </div>
      </div>
    </section>
  );
}
