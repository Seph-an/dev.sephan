"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Tag } from "lucide-react";

type CaseStudy = {
  href: string;
  iconSrc?: string;
  title: string;
  teaser: string;
  tags: string[];
  ctaLabel?: string;
  iconFallback?: string;
};

export default function CaseStudiesAnimatedShell({
  featuredCaseStudies,
  showCta = true,
  label = "Selected Work",
}: {
  featuredCaseStudies: CaseStudy[];
  showCta?: boolean;
  label?: string;
}) {
  return (
    <section id="case-studies" className="relative isolate overflow-hidden bg-transparent py-16 text-white md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/70">
            {label}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Case studies built for resilience and polish.
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Production stories spanning platform rebuilds, performance engineering, and security-first launches.
          </p>
        </motion.div>
        {showCta && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              View More
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 md:px-8">
        {featuredCaseStudies.map((study, index) => (
          <AnimatedCaseStudyCard key={study.title} {...study} transitionDelay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}

function AnimatedCaseStudyCard({
  href,
  iconSrc,
  title,
  teaser,
  tags = [],
  ctaLabel,
  iconFallback,
  transitionDelay = 0,
}: CaseStudy & { transitionDelay?: number }) {
  return (
    <motion.a
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-15px_rgba(0,0,0,0.45)]"
      aria-label={title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: transitionDelay }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {iconSrc ? (
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              width={40}
              height={40}
              unoptimized
              className="h-10 w-10 shrink-0 object-contain"
            />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-xs font-semibold uppercase text-white/80">
              {iconFallback ?? "CS"}
            </div>
          )}
          <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium tracking-wide text-white/80 ring-1 ring-white/10">
            Case Study
          </span>
        </div>
        <ArrowUpRight
          className="h-5 w-5 text-emerald-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
          aria-hidden
        />
      </div>
      <h3 className="mt-4 line-clamp-2 text-xl font-semibold leading-tight text-white">{title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70">{teaser}</p>
      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <li
              key={`${t}-${i}`}
              className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/75 ring-1 ring-white/10"
            >
              <Tag className="h-3.5 w-3.5 opacity-70" />
              {t}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors group-hover:text-emerald-200">
        <span>{ctaLabel}</span>
        <ArrowUpRight className="h-4 w-4 text-emerald-400 group-hover:text-emerald-200" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 25px 25px, rgba(255,255,255,0.7) 1px, transparent 0)",
        }}
      />
    </motion.a>
  );
}
