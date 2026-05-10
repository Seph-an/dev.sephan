import React from "react";
import Link from "next/link";
import { CaseStudyItem } from "@/lib/caseStudies";
import { ArrowRight, Tag } from "lucide-react";

interface RelatedStudiesProps {
  currentSlug: string;
  allStudies: CaseStudyItem[];
}

export default function RelatedStudies({ currentSlug, allStudies }: RelatedStudiesProps) {
  const currentStudy = allStudies.find(s => s.slug === currentSlug);
  if (!currentStudy) return null;

  // Logic: Find studies with the most overlapping tags, excluding the current one
  const currentTags = new Set(currentStudy.cardTags || []);
  
  const related = allStudies
    .filter(s => s.slug !== currentSlug)
    .map(s => {
      const overlap = (s.cardTags || []).filter(t => currentTags.has(t)).length;
      return { ...s, overlap };
    })
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 2); // Show top 2 matches

  if (related.length === 0) return null;

  return (
    <section className="mt-20 border-t border-white/10 pt-16">
      <h3 className="text-2xl font-semibold text-white mb-8">Related Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {related.map((study) => (
          <Link
            key={study.id}
            href={`/case-studies/${study.slug}`}
            className="group relative block rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/[0.08]"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Case Study</span>
              <ArrowRight className="h-4 w-4 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400" />
            </div>
            <h4 className="mt-3 text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
              {study.title}
            </h4>
            <p className="mt-2 text-sm text-white/60 line-clamp-2">
              {study.teaser}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(study.cardTags || []).slice(0, 3).map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 text-[10px] font-medium text-white/40">
                  <Tag className="h-3 w-3" /> {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
