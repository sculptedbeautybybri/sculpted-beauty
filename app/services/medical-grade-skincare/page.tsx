import type { Metadata } from "next";
import ServiceTemplate from "@/components/ServiceTemplate";
import { SERVICE_CONTENT } from "@/lib/service-content";
import { SERVICE_FAQS } from "@/lib/faq-data";

const content = SERVICE_CONTENT["medical-grade-skincare"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function MedicalGradeSkincarePage() {
  return <ServiceTemplate content={content} faqs={SERVICE_FAQS["medical-grade-skincare"]} />;
}
