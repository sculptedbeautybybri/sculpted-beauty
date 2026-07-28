import type { Metadata } from "next";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import LuxuryCta from "@/components/LuxuryCta";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "Browse before and after results from Sculpted Beauty by Briana's Jeuveau, Daxxify, filler, and Ultra Laser treatments in Melissa, TX.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-paper pb-4 pt-14 md:pt-20">
        <div className="container-luxury max-w-2xl">
          <p className="eyebrow">Real Results</p>
          <h1 className="h-display mt-5 text-5xl md:text-6xl">Before &amp; After</h1>
          <p className="mt-6 font-body text-base leading-relaxed text-stone">
            Every result reflects Briana's conservative, individualized approach.
            Photos are added with each patient's written consent.
          </p>
        </div>
      </section>
      <BeforeAfterGallery compact />
      <LuxuryCta />
    </>
  );
}
