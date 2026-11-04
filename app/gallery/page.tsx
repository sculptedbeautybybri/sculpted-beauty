import type { Metadata } from "next";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description: "Results shared on Instagram and Facebook by Sculpted Beauty by Briana in Melissa, TX.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-4xl font-semibold">Before &amp; After</h1>
      <p className="mt-4 text-base leading-relaxed text-neutral-700">Results are shared on Instagram and Facebook, with patient consent. See the latest posts below.</p>
      <ul className="mt-6 space-y-3">
        <li><a className="underline" href="https://www.instagram.com/p/DfTGDQiDyzv/">Lutronic ULTRA — “My secret weapon is out” — Instagram, Nov 3, 2026</a></li>
        <li><a className="underline" href="https://www.instagram.com/p/Ddj_HYdkSZ5/">Before &amp; after — restoring structure and volume — Instagram, Sep 21, 2026</a></li>
        <li><a className="underline" href="https://www.instagram.com/p/DdU2IW_DzDD/">Lips — two products, subtle volume and balance — Instagram, Sep 15, 2026</a></li>
        <li><a className="underline" href="https://www.instagram.com/reel/DerimsGiQmS/">Consultation reel — “Not sure whether to book a skin treatment, injectables, or just a consultation?” — Instagram, Oct 19, 2026</a></li>
      </ul>
      <div className="mt-8">
        <a href={BOOKING_URL} className="inline-block bg-black px-6 py-3 text-sm font-semibold text-white">Book a free consultation</a>
      </div>
    </main>
  );
}
