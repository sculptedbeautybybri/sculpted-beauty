import { BOOKING_URL } from "@/lib/constants";
import { ServicePageContent } from "@/lib/service-content";
import { FaqItem } from "@/components/FaqAccordion";
import FaqAccordion from "@/components/FaqAccordion";
import SectionHeading from "@/components/SectionHeading";
import LuxuryCta from "@/components/LuxuryCta";

export default function ServiceTemplate({
  content,
  faqs,
}: {
  content: ServicePageContent;
  faqs: FaqItem[];
}) {
  return (
    <>
      <section className="bg-paper pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="container-luxury max-w-2xl">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="h-display mt-5 text-5xl md:text-6xl">{content.name}</h1>
          <p className="mt-6 font-body text-base leading-relaxed text-stone">
            {content.intro}
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10 inline-flex">
            Book Now
          </a>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-luxury grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="h-display text-2xl md:text-3xl">Benefits</h2>
            <ul className="mt-6 space-y-4">
              {content.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 font-body text-sm text-ink">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h-display text-2xl md:text-3xl">Treatment Process</h2>
            <ol className="mt-6 space-y-4">
              {content.process.map((p, i) => (
                <li key={p} className="flex items-start gap-4 font-body text-sm text-ink">
                  <span className="font-display text-base text-stone">0{i + 1}</span>
                  <span className="pt-0.5">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="container-luxury mt-16 border-t border-ink/10 pt-12">
          <h2 className="h-display text-2xl md:text-3xl">Recovery</h2>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-stone">
            {content.recovery}
          </p>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-luxury">
          <SectionHeading eyebrow="Common Questions" title={`${content.name} FAQ`} align="left" />
          <div className="mt-12 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <LuxuryCta />
    </>
  );
}
