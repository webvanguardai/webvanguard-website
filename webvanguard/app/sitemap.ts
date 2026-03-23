import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://webvanguard.co',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://webvanguard.co/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://webvanguard.co/blog/why-your-premium-website-underperforms',
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
