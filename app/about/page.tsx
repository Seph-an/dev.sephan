import type { Metadata } from "next";
import About from "@/components/About";
import JsonLd from "@/components/JsonLd";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "About Sephan",
  description:
    "Learn how Sephan blends electrical engineering roots, systems thinking, and security-first delivery to ship dependable software.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sephan",
    description:
      "Dive into Sephan’s background, guiding principles, and skill stack spanning UX, frontend, backend, automation, and DevOps.",
    url: `${siteMetadata.siteUrl}/about`,
    type: "profile",
  },
  twitter: {
    title: "About Sephan",
    description:
      "Systems thinker and e-commerce engineer rooted in electrical engineering and security-first platform delivery.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Sephan",
  description:
    "Story, principles, and e-commerce engineering skill set of Sephan, a Nairobi-based engineer building reliable high-conversion platforms.",
  mainEntity: {
    "@type": "Person",
    name: siteMetadata.siteAuthor,
    jobTitle: siteMetadata.brandTagline,
    email: siteMetadata.contactEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteMetadata.location.city,
      addressCountry: siteMetadata.location.country,
    },
    alumniOf: "Electrical & Electronic Engineering",
    worksFor: {
      "@type": "Organization",
      name: siteMetadata.siteName,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white pt-24 md:pt-28">
        <About />
      </main>
      <JsonLd data={aboutSchema} />
    </>
  );
}
