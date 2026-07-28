import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import MeetBriana from "@/components/MeetBriana";
import WhyChooseSection from "@/components/WhyChooseSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import InstagramGallery from "@/components/InstagramGallery";
import GoogleReviews from "@/components/GoogleReviews";
import SkincareSection from "@/components/SkincareSection";
import FaqAccordion from "@/components/FaqAccordion";
import LuxuryCta from "@/components/LuxuryCta";
import ContactSection from "@/components/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import { GENERAL_FAQS } from "@/lib/faq-data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <MeetBriana />
      <WhyChooseSection />
      <BeforeAfterGallery compact />
      <InstagramGallery />
      <GoogleReviews />
      <SkincareSection />

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-luxury">
          <SectionHeading eyebrow="Questions" title="Frequently Asked" />
          <div className="mx-auto mt-14 max-w-3xl">
            <FaqAccordion items={GENERAL_FAQS.slice(0, 5)} />
          </div>
        </div>
      </section>

      <LuxuryCta />
      <ContactSection />
    </>
  );
}
