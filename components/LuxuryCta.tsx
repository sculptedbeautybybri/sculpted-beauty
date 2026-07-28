"use client";

import { motion } from "framer-motion";
import { BOOKING_URL } from "@/lib/constants";

export default function LuxuryCta() {
  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="container-luxury text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-paper/50"
        >
          Begin Your Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="h-display mx-auto mt-5 max-w-2xl text-4xl text-paper md:text-5xl"
        >
          Your Most Natural Self, Thoughtfully Enhanced
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10"
        >
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Book Your Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
