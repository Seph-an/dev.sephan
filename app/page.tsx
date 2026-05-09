import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import JsonLd from "@/components/JsonLd";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "Full stack engineer specializing in API integrations and DevOps",
  description:
    "Expert technical solutions for API integrations, automated workflows, and robust DevOps systems with measurable business outcomes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Full stack engineer specializing in API integrations and DevOps",
    description:
      "Specialized engineering for resilient API integrations, high-volume automation, and secure DevOps systems.",
    url: siteMetadata.siteUrl,
    type: "website",
  },
  twitter: {
    title: "Full stack engineer specializing in API integrations and DevOps",
    description:
      "Specialized engineering for resilient API integrations, high-volume automation, and secure DevOps systems.",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteMetadata.siteName} Portfolio`,
  url: siteMetadata.siteUrl,
  description:
    "Sephan is a full-stack engineer blending hardware discipline, AI-driven automations, and modern web craft to launch resilient products.",
  publisher: {
    "@type": "Person",
    name: siteMetadata.siteAuthor,
    email: siteMetadata.contactEmail,
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
