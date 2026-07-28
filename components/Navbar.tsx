"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BOOKING_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-luxury ${
        scrolled ? "bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_rgba(17,17,17,0.08)]" : "bg-paper/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-luxury flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="flex items-center gap-3" aria-label="Sculpted Beauty by Briana home">
          <Image
            src="/images/logo.png"
            alt="Sculpted Beauty by Briana logo"
            width={44}
            height={44}
            className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11"
            priority
          />
          <span className="font-display text-lg tracking-wide text-ink md:text-xl">
            Sculpted Beauty <span className="italic text-stone">by Briana</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[13px] uppercase tracking-widest2 text-ink/80 transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Now
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
          >
            <div className="container-luxury flex flex-col gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2 w-full">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
