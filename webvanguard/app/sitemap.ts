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
      url: 'https://webvanguard.co/blog/how-much-does-a-website-cost-in-dubai',
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webvanguard.co/blog/why-your-premium-website-underperforms',
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webvanguard.co/blog/why-dubai-businesses-lose-customers-without-a-website',
      lastModified: new Date('2026-03-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webvanguard.co/blog/instagram-is-not-a-website-dubai',
      lastModified: new Date('2026-03-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webvanguard.co/blog/how-to-get-more-customers-from-google-in-dubai',
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webvanguard.co/blog/the-dubai-business-website-checklist',
      lastModified: new Date('2026-03-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webvanguard.co/blog/5-dubai-businesses-that-grew-with-seo',
      lastModified: new Date('2026-03-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webvanguard.co/blog/how-to-get-more-bookings-dubai-restaurant',
      lastModified: new Date('2026-03-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webvanguard.co/blog/how-dubai-real-estate-agents-get-more-leads',
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webvanguard.co/blog/google-business-profile-vs-website-dubai',
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
