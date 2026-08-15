import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import JsonLd from "@/components/JsonLd";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "E-commerce Automation & Integration Engineer in Kenya",
  description:
    "Connect e-commerce payments, orders, inventory, fulfilment, CRM and reporting with reliable automation, M-Pesa, Shopify, n8n and custom APIs.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "E-commerce Automation & Integration Engineer in Kenya",
    description:
      "Reliable automation and API integrations for the operations behind growing e-commerce stores.",
    url: siteMetadata.siteUrl,
    type: "website",
  },
  twitter: {
    title: "E-commerce Automation & Integration Engineer in Kenya",
    description:
      "Reliable automation and API integrations for the operations behind growing e-commerce stores.",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "E-commerce Automation and Integration Engineer in Kenya",
  url: siteMetadata.siteUrl,
  description: siteMetadata.defaultDescription,
  isPartOf: { "@id": siteMetadata.websiteId },
  about: { "@id": siteMetadata.personId },
  potentialAction: {
    "@type": "ContactAction",
    target: `mailto:${siteMetadata.contactEmail}`,
    name: "Book a consultation with Sephan",
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        <Hero />
        <CaseStudies />
      </main>
      <JsonLd data={homeSchema} />
    </>
  );
}
