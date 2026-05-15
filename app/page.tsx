import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import JsonLd from "@/components/JsonLd";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "E-commerce Systems Engineer specializing in API integrations and automation",
  description:
    "Expert technical solutions for high-performance E-commerce systems, API integrations, and automated workflows with measurable business outcomes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "E-commerce Systems Engineer specializing in API integrations and automation",
    description:
      "Specialized engineering for resilient e-commerce platforms, high-volume automation, and secure API integrations.",
    url: siteMetadata.siteUrl,
    type: "website",
  },
  twitter: {
    title: "E-commerce Systems Engineer specializing in API integrations and automation",
    description:
      "Specialized engineering for resilient e-commerce platforms, high-volume automation, and secure API integrations.",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteMetadata.siteName} Portfolio`,
  url: siteMetadata.siteUrl,
  description:
    "Sephan is an e-commerce systems engineer blending hardware discipline, AI-driven automations, and modern web craft to launch high-conversion platforms.",
  publisher: {
    "@type": "Person",
    name: siteMetadata.siteAuthor,
    jobTitle: "E-commerce Systems Engineer & Automation Expert",
    email: siteMetadata.contactEmail,
    url: siteMetadata.siteUrl,
    sameAs: [
      "https://github.com/Seph-an",
      "https://linkedin.com/in/sephan-an"
    ],
    knowsAbout: [
      "E-commerce Systems",
      "Shopify & WooCommerce",
      "API Integrations",
      "Workflow Automation",
      "Next.js",
      "Technical SEO"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteMetadata.location.city,
      addressCountry: siteMetadata.location.country,
    },
  },
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
