import { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Engineering Blog · E-commerce Systems & Automation",
  description: "Technical insights on building high-performance e-commerce platforms, M-Pesa integrations, and automated business workflows in East Africa.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white pt-24 md:pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog" }]} />
        
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Engineering <span className="text-emerald-500">Blog</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            A repository of technical guides, architectural deep-dives, and regional e-commerce strategies.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <span className="text-4xl">📚</span>
            </div>
            <h2 className="text-xl font-semibold text-white">No articles found</h2>
            <p className="mt-2 text-white/50">Check back soon for new insights.</p>
          </div>
        )}
      </div>
    </main>
  );
}
