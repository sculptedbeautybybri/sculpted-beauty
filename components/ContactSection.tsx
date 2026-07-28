"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire this up to your provider of choice (e.g. Resend, Formspree, or a
    // Next.js API route) using CONTACT_FORM_TO_EMAIL from your environment variables.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-luxury">
        <SectionHeading eyebrow="Get In Touch" title="Contact Sculpted Beauty" />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={18} className="mt-1 text-stone" />
                <div>
                  <p className="font-body text-xs uppercase tracking-widest2 text-stone">Phone</p>
                  <a href={`tel:${BUSINESS.phone}`} className="font-display text-xl text-ink">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="mt-1 text-stone" />
                <div>
                  <p className="font-body text-xs uppercase tracking-widest2 text-stone">Email</p>
                  <a href={`mailto:${BUSINESS.email}`} className="font-display text-xl text-ink">
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 text-stone" />
                <div>
                  <p className="font-body text-xs uppercase tracking-widest2 text-stone">Location</p>
                  <p className="font-display text-xl text-ink">{BUSINESS.addressLine}</p>
                  <p className="mt-1 font-body text-sm text-stone">
                    Serving {BUSINESS.serviceArea.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-body text-xs uppercase tracking-widest2 text-stone">Hours</p>
              <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
                {BUSINESS.hours.map((h) => (
                  <li key={h.day} className="flex justify-between py-2.5 font-body text-sm">
                    <span className="text-ink">{h.day}</span>
                    <span className="text-stone">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-ink"
              >
                <Instagram size={17} />
              </a>
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-ink"
              >
                <Facebook size={17} />
              </a>
              <a
                href={BUSINESS.social.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-ink"
              >
                <Star size={17} />
              </a>
            </div>

            <div className="mt-10 aspect-video w-full overflow-hidden border border-ink/10">
              <iframe
                title="Map showing Melissa, Texas service area"
                src="https://www.google.com/maps?q=Melissa,+TX&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="space-y-6 border border-ink/10 p-8 md:p-10"
          >
            <div>
              <label htmlFor="name" className="font-body text-xs uppercase tracking-widest2 text-stone">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                className="mt-2 w-full border-b border-ink/20 bg-transparent py-2.5 font-body text-ink outline-none focus:border-ink"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-body text-xs uppercase tracking-widest2 text-stone">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                className="mt-2 w-full border-b border-ink/20 bg-transparent py-2.5 font-body text-ink outline-none focus:border-ink"
              />
            </div>
            <div>
              <label htmlFor="phone" className="font-body text-xs uppercase tracking-widest2 text-stone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-2 w-full border-b border-ink/20 bg-transparent py-2.5 font-body text-ink outline-none focus:border-ink"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-body text-xs uppercase tracking-widest2 text-stone">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full border-b border-ink/20 bg-transparent py-2.5 font-body text-ink outline-none focus:border-ink"
              />
            </div>
            <button type="submit" disabled={status !== "idle"} className="btn-primary w-full">
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "Message Sent"}
            </button>
            {status === "sent" && (
              <p className="text-center font-body text-sm text-stone">
                Thank you — we'll be in touch shortly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
