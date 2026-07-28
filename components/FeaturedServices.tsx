"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function FeaturedServices() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Signature Treatments"
          title="Curated Aesthetic Care"
          description="Every treatment plan begins with a conversation about your goals — followed by a conservative, artfully judged approach to achieving them."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="group relative flex min-h-[280px] flex-col justify-between bg-paper p-8 transition-colors duration-500 hover:bg-ink"
            >
              <div>
                <span className="font-display text-sm text-stone group-hover:text-paper/50">
                  0{i + 1}
                </span>
                <h3 className="h-display mt-6 text-2xl group-hover:text-paper">
                  {service.name}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-stone group-hover:text-paper/70">
                  {service.shortDescription}
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="mt-8 inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest2 text-ink group-hover:text-paper"
              >
                Learn More <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
