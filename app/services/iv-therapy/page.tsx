import type { Metadata } from "next";
import ServiceTemplate from "@/components/ServiceTemplate";
import { SERVICE_CONTENT } from "@/lib/service-content";
import { SERVICE_FAQS } from "@/lib/faq-data";

const content = SERVICE_CONTENT["iv-therapy"];

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function IvTherapyPage() {
  return <ServiceTemplate content={content} faqs={SERVICE_FAQS["iv-therapy"]} />;
}
