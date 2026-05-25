import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { getBlogPosts, getPostBySlug } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { siteMetadata } from "@/lib/siteMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteMetadata.siteUrl}/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: "article",
      images: [
        {
          url: `${siteMetadata.siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteMetadata.siteUrl}${post.image}`],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteMetadata.siteUrl}${post.image}`,
    author: {
      "@type": "Person",
      name: siteMetadata.siteAuthor,
      url: siteMetadata.siteUrl,
      jobTitle: "E-commerce Systems Engineer",
    },
    publisher: {
      "@type": "Organization",
      name: siteMetadata.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadata.siteUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteMetadata.siteUrl}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white pt-24 md:pt-28 pb-20">
        <article className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="mb-6 flex items-center gap-4">
              <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-emerald-400 ring-1 ring-emerald-500/20">
                {post.region}
              </span>
              <div className="flex items-center gap-1.5 text-sm font-medium text-white/50">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 italic border-l-4 border-emerald-500/30 pl-6">
              {post.excerpt}
            </p>
          </header>

          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert prose-emerald max-w-none">
            {/* Simple Markdown Rendering Logic */}
            <div className="blog-content leading-relaxed text-white/80 space-y-6">
              {post.content.split('\n\n').map((block, i) => {
                if (block.startsWith('### ')) {
                  return <h3 key={i} className="text-2xl font-bold text-white mt-12 mb-4">{block.replace('### ', '')}</h3>;
                }
                if (block.startsWith('## ')) {
                  return <h2 key={i} className="text-3xl font-bold text-white mt-16 mb-6">{block.replace('## ', '')}</h2>;
                }
                // Handle basic links [text](url)
                const parts = block.split(/(\[.*?\]\(.*?\))/g);
                return (
                  <p key={i} className="text-lg">
                    {parts.map((part, j) => {
                      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                      if (linkMatch) {
                        return (
                          <Link key={j} href={linkMatch[2]} className="text-emerald-400 hover:underline decoration-emerald-400/30 underline-offset-4">
                            {linkMatch[1]}
                          </Link>
                        );
                      }
                      return part;
                    })}
                  </p>
                );
              })}
            </div>
          </div>

          <footer className="mt-16 border-t border-white/10 pt-10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white/60 ring-1 ring-white/10"
                >
                  <Tag className="h-4 w-4 opacity-70" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-12 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
              <h3 className="text-xl font-semibold text-white">Ready to implement these systems?</h3>
              <p className="mt-3 text-white/70">
                I specialize in high-performance e-commerce engineering and automation.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-500 px-6 text-sm font-semibold text-[#0a0a0a] transition hover:bg-emerald-400"
                >
                  Explore Services
                </Link>
                <Link
                  href="mailto:sephan@sephanly.com"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Consult on a project
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </main>
      <JsonLd data={articleSchema} />
    </>
  );
}
