import type { Metadata } from "next";
import Link from "next/link";
import CaseStudiesAnimatedShell from "@/components/CaseStudiesAnimatedShell";
import JsonLd from "@/components/JsonLd";
import { fetchCaseStudies } from "@/lib/caseStudies";
import { siteMetadata } from "@/lib/siteMetadata";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Project portfolio",
  description:
    "Browse detailed case studies that showcase how Sephan migrates platforms, boosts performance, and automates workflows end-to-end.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Project portfolio",
    description:
      "Deep-dives covering resilient platform builds, DevOps hardening, and automation wins delivered by Sephan.",
    url: `${siteMetadata.siteUrl}/case-studies`,
    type: "website",
    images: [{ url: `${siteMetadata.siteUrl}/Sephan-new.jpg` }],
  },
  twitter: {
    title: "Project portfolio",
    description:
      "Explore how Sephan ships reliable systems through migration, optimization, and automation projects.",
    images: [`${siteMetadata.siteUrl}/Sephan-new.jpg`],
    card: "summary_large_image",
  },
};

export default async function CaseStudiesPage() {
  const studies = await fetchCaseStudies();
  const toAbsolute = (url?: string | null) => {
    if (!url) return undefined;
    return url.startsWith("http") ? url : `${siteMetadata.siteUrl}${url}`;
  };
  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sephan project portfolio",
    url: `${siteMetadata.siteUrl}/case-studies`,
    about: "Case studies highlighting resilient software, automation, and DevOps engagements delivered by Sephan.",
    hasPart: studies.map((study) => ({
      "@type": "CaseStudy",
      name: study.title,
      url: `${siteMetadata.siteUrl}/case-studies/${study.slug}`,
      description: study.teaser || study.HeroSummary,
      image: toAbsolute(study.preview),
    })),
  };
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        <section className="relative isolate overflow-hidden px-6 pb-16 pt-28 md:px-8">
          {/* Background layers */}
          <div className="hero__bg">
            <div className="hero__glow"></div>
            <div className="hero__mesh"></div>
            <div className="hero__grain"></div>
          </div>
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wide text-white/70">
                Portfolio
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Case Studies</h1>
              <p className="mt-3 max-w-2xl text-base text-white/75 md:text-lg">
                Deep-dives into platforms I architected end-to-end: hardening infra, taming content workflows, and delivering measurable outcomes.
              </p>
            </div>
            <Link
              href="#case-study-grid"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Jump to projects
            </Link>
          </div>
        </section>

        <section id="case-study-grid">
          <CaseStudiesAnimatedShell
            featuredCaseStudies={studies.map((study) => ({
              href: `/case-studies/${study.slug}`,
              iconSrc: study.cardIcon ?? undefined,
              title: study.title,
              teaser: study.teaser,
              tags: (study.cardTags ?? []).slice(0, 4),
              ctaLabel: "View details",
              iconFallback:
                study.cardIconText ??
                study.title?.split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase() ??
                "CS",
            }))}
            showCta={false}
          />
        </section>
      </main>
      <JsonLd data={listingSchema} />
    </>
  );
}
