import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/lib/servicePages";
import { siteMetadata } from "@/lib/siteMetadata";

const service = servicePages.shopify;
export const metadata: Metadata = {
  title: "Shopify Automation Consultant",
  description: service.description,
  alternates: { canonical: service.path },
  openGraph: { title: "Shopify Automation Consultant", description: service.description, url: `${siteMetadata.siteUrl}${service.path}`, type: "website" },
  twitter: { card: "summary_large_image", title: "Shopify Automation Consultant", description: service.description },
};
export default function Page() { return <ServiceLandingPage service={service} />; }
