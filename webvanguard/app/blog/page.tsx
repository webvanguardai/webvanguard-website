import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog — Web Design Insights for Dubai Businesses',
  description: 'Practical web design, SEO, and digital growth insights for business owners in Dubai and the UAE. Learn how to turn your website into a revenue machine.',
  keywords: ['web design blog dubai', 'website tips dubai', 'seo tips dubai', 'digital marketing uae', 'web vanguard blog'],
  alternates: {
    canonical: 'https://webvanguard.co/blog',
  },
  openGraph: {
    title: 'Blog — Web Design Insights | Web Vanguard',
    description: 'Practical insights on web design, SEO, and digital growth for Dubai businesses.',
    url: 'https://webvanguard.co/blog',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'why-dubai-businesses-lose-customers-without-a-website',
    title: 'Why Dubai Businesses Lose Customers Every Day Without a Website (And Don\'t Even Know It)',
    excerpt: "Every night, people in Dubai search Google for your service. They find your competitor. Not because your competitor is better — because they have a website and you don't. Here are the 5 problems costing Dubai businesses real money.",
    date: '2026-03-25',
    readTime: '7 min read',
    category: 'Lead Generation',
  },
  {
    slug: 'the-dubai-business-website-checklist',
    title: 'The Dubai Business Website Checklist (2026): 15 Things Killing Your Online Revenue',
    excerpt: "Most Dubai business websites are quietly losing money every month. Not because they look bad — because they fail on basics Google and real customers care about. Run through this 15-point checklist to find exactly where the leaks are.",
    date: '2026-03-25',
    readTime: '8 min read',
    category: 'Conversion',
    featured: true,
  },
  {
    slug: 'how-to-get-more-customers-from-google-in-dubai',
    title: 'How to Get More Customers From Google in Dubai (Without Paid Ads)',
    excerpt: "Every day, thousands of people in Dubai search Google for exactly what you sell. Most of them never find you. Here are 5 practical steps to rank on Google and attract customers — without spending on ads.",
    date: '2026-03-24',
    readTime: '7 min read',
    category: 'SEO',
    featured: false,
  },
  {
    slug: '5-dubai-businesses-that-grew-with-seo',
    title: '5 Types of Dubai Businesses That Transformed Their Revenue With SEO (And What They Did)',
    excerpt: "Aesthetic clinics, law firms, real estate agencies, restaurants, and B2B consultancies — these are the Dubai businesses winning with SEO. Here\u2019s exactly what they did and what results they got.",
    date: '2026-03-24',
    readTime: '8 min read',
    category: 'SEO',
    featured: false,
  },
  {
    slug: 'how-much-does-a-website-cost-in-dubai',
    title: 'How Much Does a Website Cost in Dubai? (2026 Honest Breakdown)',
    excerpt: "You've gotten quotes ranging from AED 500 to AED 50,000 for the same project. Both feel wrong. Here's what websites actually cost in Dubai — and what each price point really gets you.",
    date: '2026-03-24',
    readTime: '7 min read',
    category: 'Pricing',
    featured: false,
  },
  {
    slug: 'why-your-premium-website-underperforms',
    title: 'Why Your Premium Website Is Losing You Customers (And How to Fix It)',
    excerpt: "You spent AED 15,000 on a stunning website. It looks great. But it\u2019s not bringing in clients. Here\u2019s the brutal truth about why beautiful websites fail \u2014 and what actually drives conversions.",
    date: '2026-03-23',
    readTime: '6 min read',
    category: 'Conversion',
    featured: false,
  },
]

const POSTS_PER_PAGE = 4

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const currentPage = Math.max(1, parseInt(params.page ?? '1', 10))
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const safePage = Math.min(currentPage, totalPages)

  const startIndex = (safePage - 1) * POSTS_PER_PAGE
  const pagePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const featuredPost = null
  const regularPosts = pagePosts

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="mb-16 border-b border-border pb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted font-body mb-4">Resources</p>
            <h1 className="font-display font-black text-5xl md:text-7xl text-text-primary uppercase leading-none mb-6">
              The<br />
              <span className="font-serif italic text-accent normal-case">Playbook.</span>
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-xl">
              No fluff. Just what works for businesses in Dubai trying to grow online.
            </p>
          </div>



          {/* Rest of posts */}
          <div className="space-y-0">
            {regularPosts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-center py-8 border-b border-border hover:border-accent transition-colors duration-300">
                  <span className="font-display font-black text-4xl md:text-5xl text-text-muted/20 group-hover:text-accent/30 transition-colors duration-300 hidden md:block">
                    {String(startIndex + idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-2 py-0.5 rounded-sm">
                        {post.category}
                      </span>
                      <span className="text-xs text-text-muted font-body">{post.date}</span>
                      <span className="text-text-muted text-xs">·</span>
                      <span className="text-xs text-text-muted font-body">{post.readTime}</span>
                    </div>
                    <h2 className="font-display font-bold text-xl md:text-2xl text-text-primary group-hover:text-accent transition-colors duration-300 uppercase leading-tight">
                      {post.title}
                    </h2>
                  </div>
                  <span className="text-accent group-hover:translate-x-2 transition-transform duration-300 text-lg shrink-0 hidden md:block">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
              <div>
                {safePage > 1 ? (
                  <Link
                    href={safePage - 1 === 1 ? '/blog' : `/blog?page=${safePage - 1}`}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-border text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 text-xs font-body uppercase tracking-widest"
                  >
                    ← Newer posts
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-3 border border-border/30 text-text-muted/30 text-xs font-body uppercase tracking-widest cursor-default">
                    ← Newer posts
                  </span>
                )}
              </div>

              <span className="text-xs text-text-muted font-body uppercase tracking-widest">
                Page {safePage} of {totalPages}
              </span>

              <div>
                {safePage < totalPages ? (
                  <Link
                    href={`/blog?page=${safePage + 1}`}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-border text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 text-xs font-body uppercase tracking-widest"
                  >
                    Older posts →
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-3 border border-border/30 text-text-muted/30 text-xs font-body uppercase tracking-widest cursor-default">
                    Older posts →
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Footer CTA */}
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-text-muted text-sm font-body text-center">
              More articles coming soon.{' '}
              <Link href="/#contact" className="text-accent hover:underline underline-offset-4">
                Have a question? Ask us →
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
