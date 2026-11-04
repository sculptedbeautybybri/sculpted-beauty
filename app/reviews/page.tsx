import type { Metadata } from "next";
import { BUSINESS, BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description: "Sculpted Beauty by Briana in Melissa, TX — 5.0 stars from 43 Google reviews.",
};

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-4xl font-semibold">Reviews</h1>
      <p className="mt-4 text-base leading-relaxed text-neutral-700">Boutique care, built one patient relationship at a time.</p>
      <p className="mt-4 text-base leading-relaxed text-neutral-700">What clients say: 5.0 stars from 43 Google reviews.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href={BUSINESS.social.googleReviews} className="inline-block bg-black px-6 py-3 text-sm font-semibold text-white">Read all Google reviews</a>
        <a href={BOOKING_URL} className="inline-block border border-black px-6 py-3 text-sm font-semibold">Book a free consultation</a>
      </div>
    </main>
  );
}
