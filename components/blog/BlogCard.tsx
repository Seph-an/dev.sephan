"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { BlogPost } from "@/lib/blog";

export default function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-15px_rgba(0,0,0,0.45)]"
      >
        {/* Image Provision */}
        <div className="relative h-48 w-full overflow-hidden border-b border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          <div className="absolute bottom-3 left-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-[11px] font-medium tracking-wide text-emerald-400 ring-1 ring-emerald-500/20 backdrop-blur-sm">
              {post.region}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-white/70">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-white group-hover:text-emerald-400 transition-colors">
              {post.title}
            </h3>
            <ArrowUpRight
              className="mt-1 h-4 w-4 shrink-0 text-white/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400"
              aria-hidden
            />
          </div>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/60">
            {post.excerpt}
          </p>
          
          <div className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-white/50 ring-1 ring-white/10"
              >
                <Tag className="h-3 w-3 opacity-70" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle Background Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 25px 25px, rgba(255,255,255,0.7) 1px, transparent 0)",
          }}
        />
      </Link>
    </motion.div>
  );
}
