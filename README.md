# Sculpted Beauty by Briana

A production-ready Next.js 14 (App Router) marketing site for a boutique
aesthetic nursing practice in Melissa, TX — built with React, TypeScript,
Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

## ⚠️ Before you launch — replace these placeholders

This is a complete, working site, but a few pieces of real business
information were not provided in the brief and were filled with clearly
labeled placeholders so nothing here is ever passed off as real data to a
site visitor:

| Placeholder | Where | Replace with |
|---|---|---|
| Logo image | `public/images/logo.png` | **The uploaded logo file didn't come through in this handoff — only the professional photo did.** Drop your logo file in at this exact path (same filename) and it will automatically appear in the navbar, footer, and Open Graph tags. |
| Phone number | `lib/constants.ts` → `BUSINESS.phone` | Your real practice phone number |
| Email | `lib/constants.ts` → `BUSINESS.email` | Your real inbox |
| Street address | `lib/constants.ts` → `BUSINESS.addressLine` | Your real suite/address (currently just "Melissa, TX") |
| Business hours | `lib/constants.ts` → `BUSINESS.hours` | Your real hours |
| Before/after photos | `components/BeforeAfterGallery.tsx` | Real, consented before/after photography (see below) |
| Testimonials | `components/GoogleReviews.tsx` | Live Google Reviews (see below) |
| Instagram grid | `components/InstagramGallery.tsx` | Live Instagram embeds (see below) |
| `NEXT_PUBLIC_SITE_URL` | `.env.local` | Your live domain once purchased/deployed |

Nothing above will break the build — the site runs and looks complete with
placeholders in place, so you can launch the structure today and swap in
real assets as they're ready.

## Connecting live data sources

### Instagram
`components/InstagramGallery.tsx` currently renders a responsive placeholder
grid. To pull live posts:
1. Create a Meta developer app and generate a long-lived **Instagram Basic
   Display API** token.
2. Add it to `.env.local` as `INSTAGRAM_ACCESS_TOKEN`.
3. Convert the component to a server component that fetches
   `https://graph.instagram.com/me/media?fields=media_url,permalink,caption&access_token=...`
   and maps the results into the existing grid markup.

### Google Reviews
`components/GoogleReviews.tsx` currently shows clearly labeled sample
testimonials. To pull live reviews:
1. Create a **Google Places API** key and locate your Place ID.
2. Add both to `.env.local` (`GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`).
3. Fetch reviews server-side via the Places Details API and pass them into
   the existing carousel component in place of the `REVIEWS` array.

### Contact form
The form in `components/ContactSection.tsx` currently simulates a submit.
Wire it to a real inbox by adding a Next.js API route (`app/api/contact/route.ts`)
that sends via a provider like Resend, or by pointing the form at a service
like Formspree.

### Booking
Every "Book Now" / "Book Consultation" button already links directly to
your Boulevard widget:
`https://www.joinblvd.com/b/sculpted-beauty-by-briana/widget#/visit-type`
Update this in one place — `lib/constants.ts` → `BOOKING_URL` — if it ever
changes.

## Project Structure

```
app/                    Next.js App Router pages
  page.tsx              Homepage
  about/                About page
  services/              Services index + 5 individual treatment pages
  gallery/               Before & After gallery page
  reviews/                Reviews page
  faq/                     FAQ page (with FAQ schema)
  contact/                Contact page
  sitemap.ts              Auto-generated sitemap.xml
  robots.ts                Auto-generated robots.txt
  layout.tsx               Root layout: fonts, nav, footer, floating CTA
  globals.css               Tailwind + design tokens

components/              Reusable UI components (Navbar, Footer, Hero,
                          FeaturedServices, MeetBriana, WhyChooseSection,
                          BeforeAfterGallery, InstagramGallery,
                          GoogleReviews, SkincareSection, FaqAccordion,
                          LuxuryCta, ContactSection, ServiceTemplate, etc.)

lib/                     Content & config
  constants.ts            Business info, nav links, service summaries
  service-content.ts      Long-form copy for each service page
  faq-data.ts               FAQ content (general + per-service)
  schema.ts                 JSON-LD (LocalBusiness + FAQ) generators

public/images/            Static images (logo, hero photo, gallery)
```

## Design System

- **Colors:** White `#FAFAFA`, Black `#111111`, Warm Ivory `#EAE3DC`, Soft
  Gray `#6B6B6B` — defined as Tailwind tokens `paper`, `ink`, `ivory`, `stone`
  in `tailwind.config.ts`.
- **Type:** Cormorant Garamond (display/headlines) + Inter (body), loaded via
  `next/font/google` for zero layout shift.
- **Motion:** Framer Motion scroll reveals throughout, tuned to a shared
  luxury easing curve. Respects `prefers-reduced-motion`.

## SEO

- Per-page metadata (titles, descriptions, Open Graph) via the App Router
  `metadata` export on every page.
- `LocalBusiness` and `FAQPage` JSON-LD structured data (`lib/schema.ts`).
- Auto-generated `sitemap.xml` and `robots.txt`.
- Target keywords woven into page copy and metadata: Botox Melissa TX,
  Jeuveau Melissa TX, Daxxify Melissa TX, Dermal Fillers Melissa TX, RN
  Injector Melissa TX, IV Therapy Melissa TX, Ultra Laser Melissa TX,
  Medical Aesthetics Melissa TX, Epionce Melissa TX, Hydrinity Melissa TX.

## Future Features (structured for, not yet built)

The codebase is intentionally modular so these can be added without a
rewrite: Blog (`app/blog/`), Membership Program, Gift Cards, Online Store,
Promotions, Patient Intake/Consent Forms, Patient Portal, Email Marketing.

## Deployment

This project deploys cleanly to **Vercel** (recommended, zero-config for
Next.js) or any Node.js host that supports Next.js 14. Set the environment
variables from `.env.example` in your hosting provider's dashboard before
going live.
