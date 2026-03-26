import Link from 'next/link'

const posts = [
  {
    slug: 'how-dubai-real-estate-agents-get-more-leads',
    title: 'How Dubai Real Estate Agents Get More Leads From Their Website',
  },
  {
    slug: 'how-to-get-more-bookings-dubai-restaurant',
    title: 'How Dubai Restaurants Get More Bookings Online (Without Paying for Ads)',
  },
  {
    slug: 'instagram-is-not-a-website-dubai',
    title: 'Why Instagram Is Not a Website (And What It\'s Costing Your Dubai Business)',
  },
  {
    slug: 'why-dubai-businesses-lose-customers-without-a-website',
    title: 'Why Dubai Businesses Lose Customers Every Day Without a Website',
  },
  {
    slug: 'the-dubai-business-website-checklist',
    title: 'The Dubai Business Website Checklist (2026): 15 Things Killing Your Online Revenue',
  },
  {
    slug: 'how-to-get-more-customers-from-google-in-dubai',
    title: 'How to Get More Customers From Google in Dubai (Without Paid Ads)',
  },
  {
    slug: '5-dubai-businesses-that-grew-with-seo',
    title: '5 Types of Dubai Businesses That Transformed Their Revenue With SEO',
  },
  {
    slug: 'how-much-does-a-website-cost-in-dubai',
    title: 'How Much Does a Website Cost in Dubai? (2026 Honest Breakdown)',
  },
  {
    slug: 'why-your-premium-website-underperforms',
    title: 'Why Your Premium Website Is Losing You Customers (And How to Fix It)',
  },
]

interface BlogNavProps {
  currentSlug: string
}

export default function BlogNav({ currentSlug }: BlogNavProps) {
  const currentIndex = posts.findIndex((p) => p.slug === currentSlug)
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  if (!prevPost && !nextPost) return null

  return (
    <nav className="mt-16 border-t border-border pt-12 grid grid-cols-1 sm:grid-cols-2 gap-0">
      {/* Previous (newer) */}
      <div className="border border-border p-6 hover:border-accent transition-colors duration-300 group">
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="flex flex-col h-full">
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-body mb-3 flex items-center gap-2">
              ← Previous
            </span>
            <span className="font-display font-bold text-sm text-text-primary group-hover:text-accent transition-colors duration-300 uppercase leading-snug">
              {prevPost.title}
            </span>
          </Link>
        ) : (
          <div className="flex flex-col h-full opacity-30 cursor-default">
            <span className="text-xs tracking-[0.2em] uppercase text-text-muted font-body mb-3">
              ← Previous
            </span>
            <span className="font-display font-bold text-sm text-text-muted uppercase">
              You&apos;re at the beginning
            </span>
          </div>
        )}
      </div>

      {/* Next (older) */}
      <div className="border border-border border-l-0 sm:border-l-0 p-6 hover:border-accent transition-colors duration-300 group text-right">
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="flex flex-col h-full items-end">
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-body mb-3 flex items-center gap-2">
              Next →
            </span>
            <span className="font-display font-bold text-sm text-text-primary group-hover:text-accent transition-colors duration-300 uppercase leading-snug text-right">
              {nextPost.title}
            </span>
          </Link>
        ) : (
          <div className="flex flex-col h-full items-end opacity-30 cursor-default">
            <span className="text-xs tracking-[0.2em] uppercase text-text-muted font-body mb-3">
              Next →
            </span>
            <span className="font-display font-bold text-sm text-text-muted uppercase">
              You&apos;re at the end
            </span>
          </div>
        )}
      </div>
    </nav>
  )
}
