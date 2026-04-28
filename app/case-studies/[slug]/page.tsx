import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { fetchCaseStudies, getCaseStudyBySlug } from "@/lib/caseStudies";
import { siteMetadata } from "@/lib/siteMetadata";

export const revalidate = false;

export async function generateStaticParams() {
  const studies = await fetchCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case study not found",
      robots: { index: false, follow: false },
    };
  }

  const description = study.HeroSummary ?? study.teaser ?? siteMetadata.defaultDescription;
  const defaultOgImage = `${siteMetadata.siteUrl}/Sephan-new.jpg`;
  const ogImage = study.preview ? `${siteMetadata.siteUrl}${study.preview}` : defaultOgImage;

  return {
    title: `${study.title} · Case Study`,
    description,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: `${study.title} · Case Study`,
      description,
      url: `${siteMetadata.siteUrl}/case-studies/${slug}`,
      type: "article",
      tags: study.cardTags,
      images: [{ url: ogImage }],
    },
    twitter: {
      title: `${study.title} · Case Study`,
      description,
      images: [ogImage],
      card: "summary_large_image",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const {
    title,
    HeroSummary,
    url,
    cardTags = [],
    highlights = [],
    Problem,
    Process,
    Outcome,
    TechStack = [],
    Metrics,
    preview,
  } = study;

  const processBlocks = (Process ?? "").split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const problemBlocks = (Problem ?? "").split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const outcomeBlocks = (Outcome ?? "").split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const metricsEntries = Object.entries(Metrics ?? {});

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: title,
    description: HeroSummary ?? study.teaser,
    url: `${siteMetadata.siteUrl}/case-studies/${slug}`,
    keywords: cardTags,
    image: preview ? `${siteMetadata.siteUrl}${preview}` : `${siteMetadata.siteUrl}/Sephan-new.jpg`,
    author: {
      "@type": "Person",
      name: siteMetadata.siteAuthor,
      email: siteMetadata.contactEmail,
    },
    inLanguage: "en",
    mainEntityOfPage: `${siteMetadata.siteUrl}/case-studies/${slug}`,
    isBasedOn: highlights.length ? highlights : undefined,
    articleSection: ["Problem", "Process", "Outcome"],
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
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to case studies
            </Link>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
              {preview && (
                <div className="w-full lg:max-w-[420px]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-emerald-500/20">
                    <Image
                      src={preview}
                      alt={`${title} preview`}
                      fill
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="object-cover"
                      priority
                    />
                    {url && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/15 to-transparent">
                        <Link
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
                        >
                          <Globe className="h-4 w-4" />
                          Visit website
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="max-w-3xl space-y-4 lg:flex-1">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wide text-white/70">
                  Case Study
                </p>
                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
                <p className="text-lg text-white/75">{HeroSummary}</p>
              </div>
            </div>
            {cardTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {cardTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-12 md:px-8">
          {highlights.length > 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">Highlights</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-1">
              <h3 className="text-lg font-semibold text-white">Problem</h3>
              <div className="mt-3 space-y-3 text-white/75">
                {problemBlocks.map((paragraph, idx) => (
                  <p key={`problem-${idx}`}>{paragraph}</p>
                ))}
              </div>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-1">
              <h3 className="text-lg font-semibold text-white">Process</h3>
              <div className="mt-3 space-y-3 text-white/75">
                {processBlocks.map((paragraph, idx) => (
                  <p key={`process-${idx}`}>{paragraph}</p>
                ))}
              </div>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-1">
              <h3 className="text-lg font-semibold text-white">Outcome</h3>
              <div className="mt-3 space-y-3 text-white/75">
                {outcomeBlocks.map((paragraph, idx) => (
                  <p key={`outcome-${idx}`}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>

          {TechStack.length > 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">Tech stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {TechStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {metricsEntries.length > 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">Metrics</h3>
              <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {metricsEntries.map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs uppercase tracking-wide text-white/50">{label.replace(/_/g, " ")}</dt>
                    <dd className="mt-1 text-lg font-semibold text-white">{String(value)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-white/70 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/case-studies"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all case studies
            </Link>
            {url && (
              <Link
                href={url}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-400/20 sm:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="h-4 w-4" />
                Visit website
              </Link>
            )}
            <Link
              href="mailto:sephan@sephanly.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20 sm:w-auto"
            >
              Discuss a similar build
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <JsonLd data={caseStudySchema} />
    </>
  );
}
