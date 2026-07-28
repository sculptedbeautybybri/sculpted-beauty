"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const CATEGORIES = ["All", "Jeuveau", "Daxxify", "Fillers", "Ultra Laser", "Hair Restoration", "Skin Rejuvenation"];

// Placeholder gallery items — replace `image` paths with real before/after photography.
const ITEMS = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  category: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1],
  label: `${CATEGORIES[(i % (CATEGORIES.length - 1)) + 1]} — Case ${i + 1}`,
}));

export default function BeforeAfterGallery({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <section className={`bg-paper ${compact ? "py-24 md:py-32" : "py-20"}`}>
      <div className="container-luxury">
        {!compact && (
          <SectionHeading
            eyebrow="Real Results"
            title="Before & After Gallery"
            description="A conservative, natural approach — captured. Photos are added with each patient's consent."
          />
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`border px-5 py-2.5 font-body text-xs uppercase tracking-widest2 transition-colors duration-300 ${
                active === cat
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative flex aspect-[4/5] flex-col items-center justify-center gap-2 border border-ink/10 bg-ivory text-center"
            >
              <span className="eyebrow px-6">Placeholder — Add Photo</span>
              <span className="font-display text-lg text-ink/70">{item.label}</span>
              <span className="px-8 font-body text-xs text-stone">
                Replace this tile in /public/images/gallery
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
