import { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import BlogBrowser from "@/components/blog/BlogBrowser";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "Engineering Blog · E-commerce Systems & Automation",
  description: "Technical insights on building high-performance e-commerce platforms, M-Pesa integrations, and automated business workflows in East Africa.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "E-commerce Automation Engineering Insights",
    description: "Practical guides to M-Pesa, n8n, Shopify, commerce integrations and reliable operations.",
    url: `${siteMetadata.siteUrl}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Automation Engineering Insights",
    description: "Practical guides to M-Pesa, n8n, Shopify, commerce integrations and reliable operations.",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white pt-24 md:pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog" }]} />
        
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            E-commerce automation <span className="text-emerald-500">insights</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Practical guides to payments, integrations and reliable workflows for the operations behind online stores.
          </p>
        </header>

        {posts.length > 0 ? <BlogBrowser posts={posts} /> : (
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
