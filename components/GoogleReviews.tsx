"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

// Placeholder testimonials — clearly marked. Replace with live Google Reviews
// via the Google Places API (see GOOGLE_PLACES_API_KEY in .env.example) once connected.
const REVIEWS = [
  {
    name: "Placeholder Patient — A.M.",
    quote:
      "Sample review copy: Briana took the time to explain every step and the results looked completely natural.",
  },
  {
    name: "Placeholder Patient — J.T.",
    quote:
      "Sample review copy: I felt genuinely cared for from consultation through follow-up. Highly recommend.",
  },
  {
    name: "Placeholder Patient — R.K.",
    quote:
      "Sample review copy: A conservative, thoughtful approach — exactly what I was looking for in an injector.",
  },
];

export default function GoogleReviews() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Patient Reviews"
          title="Trusted by Our Patients"
          light
        />

        <p className="mx-auto mt-4 max-w-lg text-center font-body text-xs uppercase tracking-widest2 text-paper/40">
          Sample testimonials shown below — connect Google Reviews for live content
        </p>

        <div className="mx-auto mt-12 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="mb-5 flex justify-center gap-1 text-ivory">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-display text-2xl italic leading-relaxed text-paper/90 md:text-3xl">
                &ldquo;{REVIEWS[index].quote}&rdquo;
              </p>
              <p className="mt-6 font-body text-xs uppercase tracking-widest2 text-paper/50">
                {REVIEWS[index].name}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button aria-label="Previous review" onClick={prev} className="text-paper/60 transition-colors hover:text-paper">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${i === index ? "w-5 bg-paper" : "bg-paper/30"}`}
                />
              ))}
            </div>
            <button aria-label="Next review" onClick={next} className="text-paper/60 transition-colors hover:text-paper">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a href={BUSINESS.social.googleReviews} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex">
            Read All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
