"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="container-luxury grid grid-cols-1 items-center gap-14 py-14 md:py-20 lg:grid-cols-2 lg:gap-10 lg:py-28">
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            Melissa, Texas · Boutique Aesthetic Injections
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="h-display mt-6 text-5xl sm:text-6xl lg:text-[64px]"
          >
            Expert Injectables.
            <br />
            <span className="italic text-stone">Naturally Beautiful</span> Results.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="my-8 h-px w-24 origin-left bg-ink/20"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="max-w-md font-body text-lg leading-relaxed text-stone"
          >
            Registered Nurse with 11 years of experience specializing in advanced
            aesthetic treatments that enhance — not change — your natural beauty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Consultation
            </a>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-ivory lg:max-w-none">
            <Image
              src="/images/briana-hero.jpg"
              alt="Briana, Registered Nurse and aesthetic injector at Sculpted Beauty by Briana"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
