import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/lib/servicePages";
import { siteMetadata } from "@/lib/siteMetadata";

const service = servicePages.n8n;
export const metadata: Metadata = {
  title: "n8n E-commerce Automation Consultant",
  description: service.description,
  alternates: { canonical: service.path },
  openGraph: { title: "n8n E-commerce Automation Consultant", description: service.description, url: `${siteMetadata.siteUrl}${service.path}`, type: "website" },
  twitter: { card: "summary_large_image", title: "n8n E-commerce Automation Consultant", description: service.description },
};
export default function Page() { return <ServiceLandingPage service={service} />; }
