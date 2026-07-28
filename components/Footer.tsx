import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Star } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-luxury grid grid-cols-1 gap-12 py-20 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Sculpted Beauty by Briana logo"
              width={44}
              height={44}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-xl">Sculpted Beauty <span className="italic text-ivory">by Briana</span></span>
          </div>
          <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-paper/70">
            Boutique aesthetic injections led by a Registered Nurse with 11 years of
            nursing experience. Enhancing natural beauty, one personalized treatment
            plan at a time.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
            >
              <Instagram size={17} />
            </a>
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
            >
              <Facebook size={17} />
            </a>
            <a
              href={BUSINESS.social.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read Google Reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
            >
              <Star size={17} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-paper/50">Explore</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-paper/80 transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-paper/50">Services</h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="font-body text-sm text-paper/80 transition-colors hover:text-paper">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-luxury flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="font-body text-xs text-paper/50">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="font-body text-xs text-paper/50">
            Serving {BUSINESS.serviceArea.join(", ")}, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
