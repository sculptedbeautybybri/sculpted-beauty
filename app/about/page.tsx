import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import LuxuryCta from "@/components/LuxuryCta";

export const metadata: Metadata = {
  title: "About Briana, RN | Aesthetic Injector in Melissa, TX",
  description:
    "Meet Briana, a Registered Nurse with over 11 years as a Registered Nurse and certified in advanced neuromodulator and filler techniques, serving Melissa, TX and the surrounding area.",
};

const HIGHLIGHTS = [
  "Registered Nurse — over 11 years as a Registered Nurse",
  "Certified in advanced neuromodulator and filler techniques",
  "2+ years performing aesthetic injections",
  "Committed to ongoing continuing education",
  "Boutique, one-on-one patient care",
  "Personalized treatment plans for every patient",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="container-luxury grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About Briana</p>
            <h1 className="h-display mt-5 text-5xl md:text-6xl">
              Nursing Expertise.
              <br />
              <span className="italic text-stone">Artistic Eye.</span>
            </h1>
            <div className="my-8 h-px w-24 bg-ink/20" />
            <p className="font-body text-base leading-relaxed text-stone">
              Briana is a Registered Nurse with over 11 years as a Registered Nurse and also certified in advanced neuromodulator and filler techniques.
              With a background in emergency medicine and more than two years dedicated to aesthetic injections, she brings both clinical precision and a genuine artistic eye to every appointment.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-stone">
              Her philosophy is to enhance natural beauty while preserving each patient's unique facial features — never chasing trends, always prioritizing safety, education, and results that look like you, only refreshed. Every treatment plan is built individually, with an emphasis on conservative technique and long-term patient relationships over one-off transactions.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10 inline-flex">
              Book a Consultation
            </a>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
            <Image
              src="/images/briana-hero.jpg"
              alt="Briana, RN, performing an aesthetic consultation"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-luxury">
          <SectionHeading eyebrow="Credentials" title="Why Patients Trust Briana" />
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-ink/10 bg-paper p-5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                <span className="font-body text-sm text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="container-luxury max-w-3xl text-center">
          <p className="eyebrow">Our Philosophy</p>
          <h2 className="h-display mt-5 text-3xl md:text-4xl">
            "Enhance natural beauty while preserving each patient's unique facial features."
          </h2>
          <p className="mt-8 font-body text-base leading-relaxed text-stone">
            Patients should leave looking refreshed — not overdone. That standard guides every recommendation, every product choice, and every unit of product used at Sculpted Beauty by Briana.
          </p>
          <Link href="/services" className="btn-secondary mt-10 inline-flex">
            Explore Our Services
          </Link>
        </div>
      </section>
      <LuxuryCta />
    </>
  );
}
