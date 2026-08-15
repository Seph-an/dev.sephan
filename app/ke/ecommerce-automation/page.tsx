import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/lib/servicePages";
import { siteMetadata } from "@/lib/siteMetadata";

const service = servicePages.kenyaAutomation;
export const metadata: Metadata = {
  title: "E-commerce Automation Kenya",
  description: service.description,
  alternates: { canonical: service.path },
  openGraph: { title: "E-commerce Automation in Kenya", description: service.description, url: `${siteMetadata.siteUrl}${service.path}`, type: "website" },
  twitter: { card: "summary_large_image", title: "E-commerce Automation in Kenya", description: service.description },
};
export default function Page() { return <ServiceLandingPage service={service} />; }
