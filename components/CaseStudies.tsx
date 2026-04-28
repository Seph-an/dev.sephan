import React from "react";
import { fetchCaseStudies } from "@/lib/caseStudies";
import CaseStudiesAnimatedShell from "@/components/CaseStudiesAnimatedShell";

type CaseStudy = {
  href: string;
  iconSrc?: string;
  title: string;
  teaser: string;
  tags: string[];
  ctaLabel?: string;
  iconFallback?: string;
};

export default async function CaseStudies() {
  const studies = await fetchCaseStudies();
  const usedTags = new Set<string>();
  const featuredCaseStudies = studies.slice(0, 3).map((item) => {
    const uniqueTags: string[] = [];
    for (const tag of item.cardTags ?? []) {
      if (!tag || usedTags.has(tag)) continue;
      uniqueTags.push(tag);
      usedTags.add(tag);
      if (uniqueTags.length === 4) break;
    }

    return {
      href: `/case-studies/${item.slug}`,
      iconSrc: item.cardIcon ?? undefined,
      title: item.title,
      teaser: item.teaser,
      tags: uniqueTags,
      ctaLabel: "View project",
      iconFallback:
        item.cardIconText ??
        item.title?.split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase() ??
        "CS",
    } satisfies CaseStudy;
  });

  return <CaseStudiesAnimatedShell featuredCaseStudies={featuredCaseStudies} label="Featured Work" />;
}
