import type { Metadata } from "next";
import GoogleReviews from "@/components/GoogleReviews";
import LuxuryCta from "@/components/LuxuryCta";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read what patients are saying about their experience at Sculpted Beauty by Briana in Melissa, TX.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-paper pb-4 pt-14 md:pt-20">
        <div className="container-luxury max-w-2xl">
          <p className="eyebrow">Patient Experience</p>
          <h1 className="h-display mt-5 text-5xl md:text-6xl">Reviews</h1>
          <p className="mt-6 font-body text-base leading-relaxed text-stone">
            Boutique care, built one patient relationship at a time.
          </p>
        </div>
      </section>
      <GoogleReviews />
      <LuxuryCta />
    </>
  );
}
