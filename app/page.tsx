import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import JsonLd from "@/components/JsonLd";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "Full-stack engineer & AI-ready problem solver",
  description:
    "Work with Sephan to design, build, and operate resilient full-stack platforms—covering UI, APIs, automations, and DevOps with measurable outcomes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Full-stack engineer & AI-ready problem solver",
    description:
      "Sephan designs and ships resilient web platforms with measurable outcomes for founders and product teams worldwide.",
    url: siteMetadata.siteUrl,
    type: "website",
  },
  twitter: {
    title: "Full-stack engineer & AI-ready problem solver",
    description:
      "Sephan designs and ships resilient web platforms with measurable outcomes for founders and product teams worldwide.",
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
