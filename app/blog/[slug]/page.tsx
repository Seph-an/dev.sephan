import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { getBlogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import MarkdownContent from "@/components/blog/MarkdownContent";
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
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteMetadata.siteAuthor],
      tags: post.tags,
      images: [
        {
          url: `${siteMetadata.siteUrl}${post.image}`,
          width: 1200,
          height: 675,
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
  const relatedPosts = await getRelatedPosts(post);
  const serviceHref = post.tags.some((tag) => tag.toLowerCase().includes("m-pesa"))
    ? "/ke/mpesa-ecommerce-integration"
    : post.tags.some((tag) => tag.toLowerCase() === "n8n")
      ? "/services/n8n-ecommerce-automation"
      : post.tags.some((tag) => tag.toLowerCase() === "shopify")
        ? "/services/shopify-automation"
        : "/ke/ecommerce-automation";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteMetadata.siteUrl}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@id": siteMetadata.personId },
    publisher: { "@id": siteMetadata.personId },
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
              {post.publishedAt && (
                <time dateTime={post.publishedAt} className="flex items-center gap-1.5 text-sm text-white/50">
                  <CalendarDays className="h-4 w-4" />
                  {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(post.publishedAt))}
                </time>
              )}
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
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          <MarkdownContent content={post.content} />

          <footer className="mt-16 border-t border-white/10 pt-10">
            <div className="mb-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <Image src="/Sephan-new.jpg" alt="Sephan" width={64} height={64} className="h-16 w-16 rounded-xl object-cover" />
              <div>
                <p className="font-semibold text-white">Written by {post.author}</p>
                <p className="mt-1 text-sm text-white/60">E-commerce automation and integration engineer based in Nairobi, Kenya.</p>
                {post.updatedAt && <p className="mt-1 text-xs text-white/40">Reviewed and updated {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(post.updatedAt))}</p>}
              </div>
            </div>
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
                  href={serviceHref}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-500 px-6 text-sm font-semibold text-[#0a0a0a] transition hover:bg-emerald-400"
                >
                  Explore the relevant service
                </Link>
                <Link
                  href="/contact/ecommerce-automation-audit"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request an automation audit
                </Link>
              </div>
            </div>
            {relatedPosts.length > 0 && (
              <section className="mt-14" aria-labelledby="related-articles">
                <h2 id="related-articles" className="text-2xl font-semibold text-white">Continue exploring</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                      <span className="text-xs font-semibold text-emerald-400">{related.region}</span>
                      <h3 className="mt-2 font-semibold leading-6 text-white group-hover:text-emerald-300">{related.title}</h3>
                      <span className="mt-4 inline-flex items-center text-sm text-white/55">Read article <ArrowRight className="ml-1.5 h-4 w-4" /></span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </footer>
        </article>
      </main>
      <JsonLd data={articleSchema} />
    </>
  );
}
