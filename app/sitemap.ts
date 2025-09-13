import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  return [
    {
      url: absoluteUrl('/'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    { url: absoluteUrl('#o-znacce'), lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: absoluteUrl('#sluzby'), lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: absoluteUrl('#vybava'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: absoluteUrl('#galerie'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: absoluteUrl('#partneri'), lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: absoluteUrl('#hodnoceni'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: absoluteUrl('#faq'), lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: absoluteUrl('#o-nas'), lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]
}
