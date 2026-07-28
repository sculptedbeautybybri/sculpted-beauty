import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import LuxuryCta from "@/components/LuxuryCta";

export const metadata: Metadata = {
  title: "Aesthetic Services in Melissa, TX",
  description:
    "Explore Sculpted Beauty by Briana's boutique menu of aesthetic services: Jeuveau, Daxxify, dermal fillers, Ultra Laser, IV therapy, and medical grade skincare.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-paper pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="container-luxury max-w-2xl">
          <p className="eyebrow">Our Menu</p>
          <h1 className="h-display mt-5 text-5xl md:text-6xl">Services</h1>
          <p className="mt-6 font-body text-base leading-relaxed text-stone">
            Every treatment plan at Sculpted Beauty is customized to your anatomy
            and goals. Select a treatment below to learn more about the process,
            what to expect, and how to prepare.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-24 md:pb-32">
        <div className="container-luxury grid grid-cols-1 gap-px overflow-hidden bg-ink/10 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex min-h-[260px] flex-col justify-between bg-paper p-10 transition-colors duration-500 hover:bg-ink md:p-12"
            >
              <div>
                <span className="font-display text-sm text-stone group-hover:text-paper/50">
                  0{i + 1}
                </span>
                <h2 className="h-display mt-6 text-3xl group-hover:text-paper">
                  {service.name}
                </h2>
                <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-stone group-hover:text-paper/70">
                  {service.shortDescription}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest2 text-ink group-hover:text-paper">
                View Treatment <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <LuxuryCta />
    </>
  );
}
