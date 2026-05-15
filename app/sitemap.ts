import { MetadataRoute } from 'next'
import { fetchCaseStudies } from '@/lib/caseStudies'
import { siteMetadata } from '@/lib/siteMetadata'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const studies = await fetchCaseStudies()
  
  const caseStudyEntries: MetadataRoute.Sitemap = studies.map((study) => ({
    url: `${siteMetadata.siteUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: siteMetadata.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteMetadata.siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteMetadata.siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteMetadata.siteUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...caseStudyEntries,
  ]
}
