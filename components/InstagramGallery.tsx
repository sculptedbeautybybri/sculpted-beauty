"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

/**
 * Live-embed instructions:
 * 1. Create a Meta developer app and generate a long-lived Instagram Basic Display token.
 * 2. Add it to .env.local as INSTAGRAM_ACCESS_TOKEN.
 * 3. Replace the placeholder tiles below with a server component that fetches
 *    https://graph.instagram.com/me/media?fields=media_url,permalink,caption&access_token=...
 *    and maps the results into the same grid.
 * Until then, this component renders a responsive placeholder grid you can populate manually.
 */
const PLACEHOLDER_COUNT = 6;

export default function InstagramGallery() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Follow the Journey"
          title="Latest From Instagram"
          description={BUSINESS.social.instagramHandle}
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <motion.a
              key={i}
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden bg-paper"
            >
              <div className="flex h-full w-full items-center justify-center border border-ink/10 transition-transform duration-500 ease-luxury group-hover:scale-105">
                <Instagram size={20} className="text-ink/30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 text-paper opacity-0 transition-all duration-300 group-hover:bg-ink/60 group-hover:opacity-100">
                <Instagram size={22} />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={BUSINESS.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Instagram size={16} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
