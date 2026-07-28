"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";

export default function FloatingBookButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 hidden items-center gap-2 border border-ink bg-ink px-6 py-4 font-body text-xs uppercase tracking-widest2 text-paper shadow-xl transition-all duration-500 ease-luxury hover:bg-paper hover:text-ink sm:flex ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Book a consultation"
    >
      Book Consultation
    </a>
  );
}
