import { MetadataRoute } from 'next'
import { fetchCaseStudies } from '@/lib/caseStudies'
import { siteMetadata } from '@/lib/siteMetadata'
import { getBlogPosts } from '@/lib/blog'

const siteUpdatedAt = new Date('2026-08-16')
const caseStudiesUpdatedAt = new Date('2025-11-11T13:07:51Z')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const studies = await fetchCaseStudies()
  const posts = await getBlogPosts()
  
  const caseStudyEntries: MetadataRoute.Sitemap = studies.map((study) => ({
    url: `${siteMetadata.siteUrl}/case-studies/${study.slug}`,
    lastModified: caseStudiesUpdatedAt,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: siteMetadata.siteUrl,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteMetadata.siteUrl}/about`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteMetadata.siteUrl}/services`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteMetadata.siteUrl}/case-studies`,
      lastModified: caseStudiesUpdatedAt,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteMetadata.siteUrl}/blog`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteMetadata.siteUrl}/faqs`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteMetadata.siteUrl}/ke/ecommerce-automation`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteMetadata.siteUrl}/ke/mpesa-ecommerce-integration`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteMetadata.siteUrl}/services/n8n-ecommerce-automation`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteMetadata.siteUrl}/services/shopify-automation`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteMetadata.siteUrl}/contact/ecommerce-automation-audit`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...caseStudyEntries,
    ...blogEntries,
  ]
}
