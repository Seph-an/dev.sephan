"use client";

import { useMemo, useRef, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import PaginationControls from "@/components/content/PaginationControls";

const PAGE_SIZE = 6;

export default function BlogBrowser({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");
  const [page, setPage] = useState(1);
  const browserRef = useRef<HTMLDivElement>(null);
  const tags = useMemo(
    () => Array.from(new Set(posts.flatMap((post) => post.tags))).sort((a, b) => a.localeCompare(b)),
    [posts],
  );
  const filteredPosts = useMemo(() => {
    const term = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = tag === "all" || post.tags.includes(tag);
      const searchable = [post.title, post.excerpt, post.region, ...post.tags].join(" ").toLowerCase();
      return matchesTag && (!term || searchable.includes(term));
    });
  }, [posts, query, tag]);
  const visiblePosts = filteredPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hasFilters = query.length > 0 || tag !== "all";

  const updatePage = (nextPage: number) => {
    setPage(nextPage);
    browserRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const reset = () => {
    setQuery("");
    setTag("all");
    setPage(1);
  };

  return (
    <div ref={browserRef} className="scroll-mt-28">
      <div className="mb-8 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,0.35fr)_auto]">
        <label className="relative block">
          <span className="sr-only">Search articles</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setPage(1); }}
            placeholder="Search articles"
            className="min-h-11 w-full rounded-xl border border-white/10 bg-slate-950/60 py-2 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/15"
          />
        </label>
        <label className="relative block">
          <span className="sr-only">Filter articles by topic</span>
          <select
            value={tag}
            onChange={(event) => { setTag(event.target.value); setPage(1); }}
            className="min-h-11 w-full appearance-none rounded-xl border border-white/10 bg-slate-950 py-2 pl-3 pr-10 text-sm text-white outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/15"
          >
            <option value="all">All topics</option>
            {tags.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" aria-hidden />
        </label>
        <button
          type="button"
          onClick={reset}
          disabled={!hasFilters}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 text-sm font-medium text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
        >
          <X className="h-4 w-4" aria-hidden /> Reset
        </button>
      </div>

      <p className="mb-5 text-sm text-white/55" aria-live="polite">
        {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
      </p>
      {visiblePosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/15 py-16 text-center">
          <h2 className="text-xl font-semibold text-white">No matching articles</h2>
          <p className="mt-2 text-white/50">Try another search or clear the filters.</p>
          {hasFilters && <button type="button" onClick={reset} className="mt-5 text-sm font-semibold text-emerald-400 hover:text-emerald-300">Clear filters</button>}
        </div>
      )}
      <PaginationControls currentPage={page} totalItems={filteredPosts.length} pageSize={PAGE_SIZE} onPageChange={updatePage} />
    </div>
  );
}
