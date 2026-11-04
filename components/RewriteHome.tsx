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
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-neutral-700">Sculpted Beauty by Briana has a boutique vibe, offering medspa services by a single provider, Briana Scribner, BSN, RN, with over 11 years as a registered nurse and also certified in advanced neuromodulator and filler techniques.</p>
        <h1 className="text-4xl font-semibold md:text-5xl">Sculpted Beauty by Briana — Melissa, TX</h1>
        <p className="mt-4 text-xl text-neutral-700">Refined results. Personalized care.</p>
        <div className="mt-8">
          <BookButton label="Book a free consultation" />
        </div>
      </section>
      <Section id="what-to-expect" eyebrow="What to expect at your visit" title="What to expect at your visit">
        <ol className="list-decimal space-y-4 pl-6">
          <li><strong>Let&apos;s talk about you.</strong> Tell me what&apos;s bothering you, what you&apos;d like to improve, and what you&apos;re hoping to achieve. I&apos;m here to listen and answer your questions.</li>
          <li><strong>We&apos;ll make a plan together.</strong> Whether your goal is clearer, brighter skin, smoother texture, or enhancing your natural features, I&apos;ll walk you through what makes sense for you. Your plan may combine treatments and at-home skincare, with your goals, budget, and comfort level in mind. We&apos;ll discuss pricing, timing, and what to expect before getting started.</li>
          <li><strong>You set the pace.</strong> Ready to get started? Same-day treatment may be available. Need time to think it over? That&apos;s okay, too.</li>
        </ol>
        <p>Your first step is a conversation. Consultations are free.</p>
        <div>
          <BookButton label="Book Your Consultation" />
        </div>
      </Section>
      <Section id="skin-first" eyebrow="Skin first" title="Skin first">
        <p>Good injectable work shows up better on healthy skin, so skin is where this menu starts — not an afterthought at the bottom.</p>
        <h3 className="text-2xl font-semibold text-neutral-900">Lutronic ULTRA — the signature treatment</h3>
        <p>A complete skin-renewal appointment, not just a laser pass. The laser session is paired with boosting serums chosen for your skin, a Hydrinity mask for deep hydration, and Epionce products to take home for barrier support while you heal.</p>
        <p>Lutronic ULTRA — “My secret weapon for glowing skin.” — a Google reviewer.</p>
        <PriceList items={[{ name: "Corrective Series, 3 treatments", price: "$1,200 total" }, { name: "Quarterly Maintenance, 1 treatment", price: "$450" }]} />
        <h3 className="text-2xl font-semibold text-neutral-900">SkinPen microneedling</h3>
        <PriceList items={[{ name: "SkinPen microneedling", price: "$450", note: "A series of 3 for $900, or a single quarterly maintenance visit for $350. Worth considering when texture or scarring is the main concern." }]} />
      </Section>
      <Section id="by-goal" eyebrow="By goal, not by product list" title="Tox and filler, by goal">
        <p>Instead of one long list, this menu is grouped by what most people actually ask for. It starts with the most-requested goals — smoother lines and fuller lips — then moves through the rest.</p>
        <p>Two neuromodulators are offered — Jeuveau and Daxxify — at the same price per area. If you have a preference, say so when you book; otherwise Briana will choose what fits the area and your goals.</p>
        <p>A note on how long results last: neuromodulators usually last 3–4 months, while filler longevity varies by product and placement. Exact timing is discussed at your visit.</p>
        <h3 className="text-2xl font-semibold text-neutral-900">Smooth lines and expression lines</h3>
        <PriceList items={[{ name: "Forehead", price: "$300" }, { name: "Glabella (11s)", price: "$275" }, { name: "Crow's feet", price: "$275" }, { name: "Lip flip", price: "$150" }, { name: "Bunny lines", price: "$125" }, { name: "Chin", price: "$150" }, { name: "Brow lift", price: "$150" }, { name: "Gummy smile", price: "$150" }, { name: "Jelly roll (under-eye)", price: "$125" }, { name: "Full face", price: "$750" }, { name: "Neck bands", price: "$750" }, { name: "Masseter (TMJ/slimming)", price: "$500" }, { name: "Shoulder (trapezius)", price: "$750" }, { name: "Underarm (hyperhidrosis)", price: "$750" }]} />
        <h3 className="text-2xl font-semibold text-neutral-900">Add volume and shape</h3>
        <PriceList items={[{ name: "Lips", price: "$650", note: "Lip filler is a single-syringe visit. If you want more than one syringe in a session, that is priced as a separate visit." }, { name: "Cheeks", price: "$750" }, { name: "Chin", price: "$750" }, { name: "Jawline", price: "$750" }, { name: "Temples", price: "$750" }, { name: "Under-eye (tear trough)", price: "$750" }, { name: "Nasolabial folds", price: "$750" }, { name: "Marionette lines", price: "$750" }, { name: "Hands", price: "$750" }]} />
        <h3 className="text-2xl font-semibold text-neutral-900">Skin quality and biostimulators</h3>
        <PriceList items={[{ name: "SkinVive (skin quality)", price: "$750", note: "SkinVive can be added at a visit." }, { name: "Sculptra", price: "$800" }, { name: "Radiesse", price: "$800" }, { name: "Hyperdilute Radiesse", price: "$800" }]} />
        <p>More products are available — Evolysse, Restylane, and RHA are offered at the same price as Juvederm, and you can ask about them at your visit.</p>
      </Section>
      <Section id="skincare" eyebrow="Skincare" title="Skincare">
        <p>The full Hydrinity line and the full Epionce line are carried in-office. Your visit includes guidance on what fits your skin — no need to guess from a shelf.</p>
      </Section>
      <Section id="hair-restoration" eyebrow="Hair Restoration" title="Hair Restoration">
        <p>Hair thinning needs a different kind of care — a plan that treats the scalp and the hair follicles, not just the strands.</p>
        <h3 className="text-2xl font-semibold text-neutral-900">KeraFactor hair restoration</h3>
        <PriceList items={[{ name: "KeraFactor hair restoration", price: "$400", note: "A series of 6 sessions is recommended, spaced 3–4 weeks apart. LaseMD Ultra laser plus KeraFactor serum, aimed at healthier-looking hair and scalp and fuller-looking hair over time. Additional retail products for at-home use to boost results are also available for purchase." }]} />
      </Section>
      <Section id="annual-plan" eyebrow="The Annual Plan" title="The Annual Plan">
        <p>The 12-Month Plan is an option for purchasing a total 12-month package of tox, skincare, laser, and filler for the ultimate transformation, plus a free ULTRA package.</p>
        <p>Cherry financing: <a href={CHERRY} className="underline" target="_blank" rel="noreferrer">Cherry financing</a> — 0% APR plans available, no impact to credit to apply.</p>
        <div>
          <BookButton label="Ask about the Annual Plan" />
        </div>
      </Section>
      <Section id="payment-options" eyebrow="Payment options" title="Payment options">
        <p><a href={CHERRY} className="underline" target="_blank" rel="noreferrer">Cherry financing</a>, Affirm, Klarna, Afterpay, Apple Pay, Venmo, and Cash are all accepted. For Affirm, Klarna, and Afterpay, a payment link will be sent to you at checkout. You can also use your available purchasing power for those methods with Tap to Pay.</p>
      </Section>
      <Section id="plan-your-visit" eyebrow="Plan your visit" title="Plan your visit">
        <p><strong>About:</strong> Sculpted Beauty by Briana has a boutique vibe, offering medspa services by a single provider, Briana Scribner, BSN, RN, with over 11 years as a registered nurse and also certified in advanced neuromodulator and filler techniques.</p>
        <p><strong>Hours:</strong> Tuesday through Friday, 9am to 6pm, at 1521 McKinney St, Suite 300, Melissa, TX 75454. Phone: <a href="tel:+19726582845" className="underline">(972) 658-2845</a>.</p>
        <p><strong>After-hours:</strong> visits are possible when availability allows, with an additional $100 charge.</p>
        <p><strong>Booking:</strong> free consultation, same-day treatment often possible — <a href={BOOK} className="underline">Book a visit</a>.</p>
        <p><strong>Downtime, honestly:</strong> tox usually means minimal to no downtime. Filler swelling and bruising are normal, lips especially — it usually settles within a few days, but full settling can take up to 2 weeks. ULTRA laser: you can wear makeup 24 hours after treatment, and expect sandpaper texture skin for 1 week.</p>
        <p><strong>Lip filler and consultations:</strong> for lip filler, the full face is considered — proportions, chin, and how the lips fit the face, not just lip size. Consultations are free, and you can book a visit to talk through the options.</p>
        <p><strong>Cancelling:</strong> you can cancel or reschedule up to 48 hours before your visit without a charge. Inside 48 hours, there is a $50 charge.</p>
        <p><strong>Deposit:</strong> none required at this time.</p>
        <p><strong>What clients say:</strong> 5.0 stars from 43 Google reviews — <a href="https://www.google.com/search?q=Sculpted+Beauty+by+Briana+Melissa+TX" className="underline" target="_blank" rel="noreferrer">Google reviews</a>.</p>
      </Section>
      <Section id="social" eyebrow="From Instagram & Facebook" title="From Instagram & Facebook">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <a href="https://www.instagram.com/p/Ddj_HYdkSZ5/" target="_blank" rel="noreferrer">
              <img src="https://scontent-hou1-1.cdninstagram.com/v/t39.30808-6/794459941_122257045514552867_8368893670242357056_n.jpg?stp=c0.1.1024.1021a_dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzk5MTMxMTI2Mzk4MDQ0NDIwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTAyNC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=sRBDcE72RY8Q7kNvwGTH0Hk&_nc_oc=AdpIdJvSZkiCdrJTC27wM84OFRn736c4G5ejXuBZ_9JBPEP0PjvIPZrfnDin6sV4GFtTeLDKyem2xj4JZy3HATen&_nc_zt=23&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_gid=UUmuTtsMaUK2eXppYzYSmw&_nc_ss=7b689&oh=00_AQTlSZyNM38tmCSjp9IvGGNIq4nDPJFy-7K2GPUHMNmvVg&oe=6AF13BC8" alt="Before and after, Sep 21, 2026" className="w-full rounded-2xl border border-neutral-200" />
            </a>
            <p className="mt-2">Before &amp; after — Sep 21, 2026</p>
          </div>
          <div>
            <a href="https://www.instagram.com/p/DdU2IW_DzDD/" target="_blank" rel="noreferrer">
              <img src="https://scontent-hou1-1.cdninstagram.com/v/t39.30808-6/795809367_122256023852552867_7573724708257665463_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzk4NzA0OTYyMzc0MzA4ODk1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTAyNC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=NTwfXZEZxf4Q7kNvwGL3VVo&_nc_oc=AdovAUDhKU8YSE8of8gjuf97a21ZcyhgUFFuGswBz7SCm6dmj8jl_xtODlHZRnHPMQA3FETWEqiNjvCPGeNojngq&_nc_zt=23&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_gid=9DF0pEIKL8KwPtDZ_D4QGg&_nc_ss=7b289&oh=00_AQRGN2ksOgqBeyGhN1eSbIcX03cbnt4Uoaa2oanFJKElHw&oe=6AF1363E" alt="Lips, Sep 15, 2026" className="w-full rounded-2xl border border-neutral-200" />
            </a>
            <p className="mt-2">Lips — Sep 15, 2026</p>
          </div>
          <a href="https://www.instagram.com/p/DfTGDQiDyzv/" className="underline" target="_blank" rel="noreferrer">ULTRA — Nov 3, 2026</a>
          <a href="https://www.instagram.com/reel/DerimsGiQmS/" className="underline" target="_blank" rel="noreferrer">Consultation reel — Oct 19, 2026</a>
        </div>
      </Section>
    </main>
  );
}
