import type { ReactNode } from "react";
import { BUSINESS, BOOKING_URL } from "@/lib/constants";

const BOOK = BOOKING_URL;
const CHERRY = "https://pay.withcherry.com/sculpted-beauty-by-briana";

function BookButton({ label }: { label: string }) {
  return (
    <a href={BOOK} className="inline-block bg-black px-6 py-3 text-sm font-semibold tracking-wide text-white">
      {label}
    </a>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-neutral-700">{children}</div>
    </section>
  );
}

function PriceList({ items }: { items: { name: string; price: string; note?: string }[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.name} className="border border-neutral-200 bg-white p-4">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-semibold text-neutral-900">{item.name}</span>
            <span className="whitespace-nowrap font-semibold">{item.price}</span>
          </div>
          {item.note ? <p className="mt-1 text-sm text-neutral-600">{item.note}</p> : null}
        </li>
      ))}
    </ul>
  );
}

export default function RewriteHome() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl font-semibold md:text-5xl">Sculpted Beauty by Briana — Melissa, TX</h1>
        <p className="mt-4 text-xl text-neutral-700">Refined results. Personalized care.</p>
        <div className="mt-8">
          <BookButton label="Book a free consultation" />
        </div>
      </section>

      <Section id="how-a-visit-works" eyebrow="How a visit works here" title="How a visit works here">
        <ol className="list-decimal space-y-4 pl-6">
          <li><strong>Talk.</strong> Tell me what you are noticing in the mirror and what you would like to feel better about. No rush, no pressure to add on.</li>
          <li><strong>Talk through the options.</strong> We will walk through recommendations for the area you are concerned about, as well as treatments that support facial harmony as a whole. You will get the cost up front, along with a recommended schedule and timeline to reach your results. I use different treatment modalities to target the different causes of aging, with quality skincare products always being at the foundation — know that these services require commitment for a continuous journey, because we are continuously aging.</li>
          <li><strong>No rush to decide.</strong> Same-day treatment is often possible, but there is no pressure to decide on the spot.</li>
        </ol>
        <p>Consultations are free.</p>
      </Section>

      <Section id="skin-first" eyebrow="Skin first" title="Skin first">
        <p>Good injectable work shows up better on healthy skin, so skin is where this menu starts — not an afterthought at the bottom.</p>
        <h3 className="text-2xl font-semibold text-neutral-900">Lutronic ULTRA — the signature treatment</h3>
        <p>A complete skin-renewal appointment, not just a laser pass. The laser session is paired with boosting serums chosen for your skin, a Hydrinity mask for deep hydration, and Epionce products to take home for barrier support while you heal. The skincare used in treatment and recommended at home comes from Hydrinity and Epionce — the two lines carried in-studio, and the foundation of the plan. The aim: smoother texture, pores that look smaller, and a brighter, more even complexion.</p>
        <PriceList items={[{ name: "Corrective Series, 3 treatments", price: "$1,200 total" }, { name: "Quarterly Maintenance, 1 treatment", price: "$450" }]} />
        <div><BookButton label="Book ULTRA" /></div>
        <h3 className="text-2xl font-semibold text-neutral-900">Other skin options</h3>
        <PriceList items={[{ name: "SkinPen Microneedling", price: "$900 series / $350 maintenance", note: "A series of 3 for $900, or a single quarterly maintenance visit for $350. Worth considering when texture or scarring is the main concern." }]} />
        <div><BookButton label="Book a skin treatment" /></div>
      </Section>

      <Section id="hair-restoration" eyebrow="Hair Restoration" title="Hair Restoration">
        <p>Hair thinning needs its own plan, separate from skin and injectables.</p>
        <PriceList items={[{ name: "KeraFactor Hair Restoration", price: "$299 per session", note: "A series of 6 sessions is recommended, spaced 3–4 weeks apart. LaseMD Ultra laser plus KeraFactor serum, aimed at healthier-looking hair and scalp and fuller-looking hair over time. Additional retail products for at-home use to boost results are also available for purchase." }]} />
        <div><BookButton label="Book hair restoration" /></div>
      </Section>

      <Section id="by-goal" eyebrow="By goal, not by product list" title="By goal, not by product list">
        <p>Instead of one long injectables menu, here is what each treatment is actually for. Two neuromodulators are offered — Jeuveau and Daxxify — at the same price per area, so the choice is about fit and how long you want it to last (Daxxify typically 3–5 months, Jeuveau about 3 months). Two filler lines are offered — Evolysse and RHA — chosen by area and movement.</p>
        <h3 className="text-2xl font-semibold text-neutral-900">Smooth lines that come from expression</h3>
        <PriceList items={[{ name: "Forehead Lines", price: "$225" }, { name: "Glabella (11s)", price: "$275" }, { name: "Crow's Feet", price: "$250" }, { name: "Upper Face (forehead, glabella, crow's feet)", price: "$660" }, { name: "Bunny Lines", price: "$125" }, { name: "Chin Dimpling", price: "$100" }, { name: "Lip Flip", price: "$100" }]} />
        <h3 className="text-2xl font-semibold text-neutral-900">Areas to treat for a subtle lift or release of tension</h3>
        <PriceList items={[{ name: "Masseter, for TMJ or facial slimming", price: "$440" }, { name: "Neck Bands", price: "$375" }, { name: "Nefertiti lift", price: "$100" }, { name: "Brow Lift", price: "$100" }, { name: "DAO (downturned mouth corners)", price: "$125" }, { name: "Lip Flip", price: "$100" }]} />
        <h3 className="text-2xl font-semibold text-neutral-900">Sweat control</h3>
        <PriceList items={[{ name: "Hyperhidrosis, underarms", price: "$900" }]} />
        <div><BookButton label="Book tox" /></div>
        <h3 className="text-2xl font-semibold text-neutral-900">Restore softness and shape, gently</h3>
        <p>Filler is $600 for a full syringe and $350 for a half syringe, across all areas below.</p>
        <PriceList items={[{ name: "Lips, full syringe", price: "$600" }, { name: "Lip Refresh, half syringe", price: "$350" }, { name: "Cheeks / Midface", price: "$1,200", note: "Typically 2 syringes" }, { name: "Jawline", price: "$1,200–$2,400", note: "2–4 syringes" }, { name: "Chin", price: "$600" }, { name: "Nasolabial Folds", price: "$800" }, { name: "Marionette Lines", price: "$600" }, { name: "Under Eyes, Tear Trough", price: "$550–$700", note: "Candidacy for tear trough filler is decided at the appointment, and not everyone is a candidate." }, { name: "Temples", price: "$600" }, { name: "Lip lines / smoker's lines", price: "$550" }, { name: "Facial Balancing, multiple areas", price: "$2,400–$3,600", note: "4–6 syringes" }]} />
        <div><BookButton label="Book filler" /></div>
      </Section>

      <Section id="annual-plan" eyebrow="The Annual Plan" title="The Annual Plan — one price for a year of care">
        <p>Starts at $7,984, paid up front. It covers tox every 3–4 months, a Lutronic ULTRA treatment every quarter, a skincare visit every quarter, and the skincare products for the year. Filler can be added along the way at the regular filler rate.</p>
        <p>Pay up front and the plan also includes 3 corrective ULTRA sessions free.</p>
        <p>Cherry financing: <a className="underline" href={CHERRY}>Cherry financing</a> — 0% APR plans available, no impact to credit to apply.</p>
        <div><BookButton label="Ask about the Annual Plan" /></div>
      </Section>

      <Section id="skincare" eyebrow="Skincare in the studio" title="Skincare in the studio">
        <p>The full Hydrinity line and the full Epionce line are carried in-office. Your visit includes guidance on what fits your skin — no need to guess from a shelf.</p>
      </Section>

      <Section id="plan-your-visit" eyebrow="Plan your visit" title="Plan your visit">
        <p><strong>About:</strong> Sculpted Beauty by Briana has a boutique vibe, offering medspa services by a single provider, Briana Scribner, BSN, RN, with over 11 years as a registered nurse and also certified in advanced neuromodulator and filler techniques.</p>
        <p><strong>Hours:</strong> Tuesday through Friday, 9am to 6pm, at 1521 McKinney St, Suite 300, Melissa, TX 75454. Phone: <a className="underline" href="tel:+19726582845">(972) 658-2845</a>.</p>
        <p><strong>After-hours:</strong> visits are possible when availability allows, with an additional $100 charge.</p>
        <p><strong>Booking:</strong> free consultation, same-day treatment often possible — <a className="underline" href={BOOK}>Book a visit</a>.</p>
        <p><strong>Downtime, honestly:</strong> tox usually means minimal to no downtime. Filler swelling and bruising are normal, lips especially — give yourself at least two weeks before photos or a big event.</p>
        <p><strong>Lip filler and consultations:</strong> a consultation is not required for lips, but looking at the whole face first often leads to a softer, more balanced result.</p>
        <p><strong>Cancelling:</strong> “In order to maintain the highest quality experience for all of our clients, we enforce a 50% service charge for all appointments canceled less than 24 hours in advance. We kindly ask that you cancel your appointment online or by phone more than 24 hours in advance to avoid the cancellation fee. Your signature on this form indicates your agreement to comply with this policy. Thank you for understanding and we look forward to helping you achieve your beauty goals.”</p>
        <p><strong>Deposit:</strong> none required at this time.</p>
        <p><strong>What clients say:</strong> 5.0 stars from 43 Google reviews — <a className="underline" href={BUSINESS.social.googleReviews}>Google reviews</a>.</p>
      </Section>

      <Section id="social" eyebrow="From Instagram & Facebook" title="From Instagram & Facebook">
        <ul className="space-y-3">
          <li><a className="underline" href="https://www.instagram.com/p/DfTGDQiDyzv/">Lutronic ULTRA — “My secret weapon is out” — Instagram, Nov 3, 2026</a></li>
          <li><a className="underline" href="https://www.instagram.com/p/Ddj_HYdkSZ5/">Before &amp; after — restoring structure and volume — Instagram, Sep 21, 2026</a></li>
          <li><a className="underline" href="https://www.instagram.com/p/DdU2IW_DzDD/">Lips — two products, subtle volume and balance — Instagram, Sep 15, 2026</a></li>
          <li><a className="underline" href="https://www.instagram.com/reel/DerimsGiQmS/">Consultation reel — “Not sure whether to book a skin treatment, injectables, or just a consultation?” — Instagram, Oct 19, 2026</a></li>
        </ul>
      </Section>
    </main>
  );
}
