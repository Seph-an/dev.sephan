import { MetadataRoute } from 'next'
import { siteMetadata } from '@/lib/siteMetadata'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/', '/_next/'],
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  }
}
