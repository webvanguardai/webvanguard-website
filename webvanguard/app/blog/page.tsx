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
    slug: 'why-your-premium-website-underperforms',
    title: 'Why Your Premium Website Is Losing You Customers (And How to Fix It)',
    excerpt: "You spent AED 15,000 on a stunning website. It looks great. But it\u2019s not bringing in clients. Here\u2019s the brutal truth about why beautiful websites fail \u2014 and what actually drives conversions.",
    date: '2026-03-23',
    readTime: '6 min read',
    category: 'Conversion',
    featured: true,
  },
]

export default function BlogPage() {
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

          {/* Featured post */}
          {posts.filter(p => p.featured).map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block mb-16"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start py-12 border-b border-border hover:border-accent transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted font-body">Featured</span>
                  </div>
                  <h2 className="font-display font-black text-3xl md:text-4xl text-text-primary group-hover:text-accent transition-colors duration-300 uppercase leading-tight mb-4">
                    {post.title}
                  </h2>
                </div>
                <div>
                  <p className="text-text-secondary font-body text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-text-muted font-body">{post.date}</span>
                    <span className="text-text-muted">·</span>
                    <span className="text-xs text-text-muted font-body">{post.readTime}</span>
                    <span className="ml-auto text-accent group-hover:translate-x-2 transition-transform duration-300 text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Coming soon */}
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
