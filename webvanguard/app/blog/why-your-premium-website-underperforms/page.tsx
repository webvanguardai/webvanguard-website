import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'

export const metadata: Metadata = {
  title: 'Why Your Premium Website Is Losing You Customers | Web Vanguard',
  description: 'You paid for a beautiful website but it\'s not bringing clients. We break down the 5 real reasons premium websites fail to convert — and how to fix each one.',
  keywords: [
    'website conversion dubai',
    'why website not converting',
    'website losing customers',
    'improve website performance dubai',
    'web design conversion tips',
    'business website dubai',
    'seo dubai',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/blog/why-your-premium-website-underperforms',
  },
  openGraph: {
    title: 'Why Your Premium Website Is Losing You Customers',
    description: 'The brutal truth about why beautiful websites fail to bring in clients — and what actually converts.',
    url: 'https://webvanguard.co/blog/why-your-premium-website-underperforms',
    type: 'article',
    publishedTime: '2026-03-23',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Premium Website Is Losing You Customers',
    description: 'The brutal truth about why beautiful websites fail — and what actually converts.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Your Premium Website Is Losing You Customers (And How to Fix It)',
  description: 'The 5 real reasons premium websites fail to convert visitors into paying customers — with actionable fixes for each.',
  author: {
    '@type': 'Organization',
    name: 'Web Vanguard',
    url: 'https://webvanguard.co',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Web Vanguard',
    url: 'https://webvanguard.co',
  },
  datePublished: '2026-03-23',
  url: 'https://webvanguard.co/blog/why-your-premium-website-underperforms',
  inLanguage: 'en',
  keywords: 'website conversion, web design dubai, SEO dubai, conversion rate optimization',
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-bg pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-text-muted font-body mb-12">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-text-secondary">Why Your Premium Website Underperforms</span>
          </nav>

          {/* Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                Conversion
              </span>
              <span className="text-xs text-text-muted font-body">6 min read</span>
              <span className="text-text-muted">·</span>
              <time className="text-xs text-text-muted font-body" dateTime="2026-03-23">March 23, 2026</time>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase leading-tight mb-6">
              Why Your Premium Website Is Losing You Customers
              <span className="font-serif italic text-accent normal-case block mt-2">
                (And How to Fix It)
              </span>
            </h1>
            <p className="text-text-secondary font-body text-xl leading-relaxed">
              You spent AED 15,000 on a stunning website. It looks great on your phone.
              Your friends say it looks professional. But three months later — barely a call.
              Here&apos;s the brutal truth most agencies won&apos;t tell you.
            </p>
          </header>

          {/* Article body */}
          <article className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-8">

            <p>
              Every week, business owners in Dubai come to us with the same problem: a website
              they paid good money for that simply isn&apos;t working. Not broken — just silent.
              No inquiries. No bookings. No WhatsApp pings from new customers.
            </p>

            <p>
              After building sites for spas, restaurants, real estate agencies, barbers, and more,
              we&apos;ve identified five patterns that explain almost every underperforming website.
              Not one of them is about aesthetics.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              01. You&apos;re invisible to Google
            </h2>
            <p>
              A beautiful website that Google can&apos;t find is like a luxury restaurant with no sign
              outside. In Dubai, searches like &ldquo;best spa Dubai Marina&rdquo; or &ldquo;barber near DIFC&rdquo;
              happen thousands of times per day. If your site isn&apos;t ranking for those terms,
              your ideal customer doesn&apos;t know you exist.
            </p>
            <p>
              Most design agencies optimize for visual appeal, not search engines. They&apos;ll deliver
              a gorgeous Figma file and hand you a site with no meta descriptions, no keyword
              structure, no local SEO, and no schema markup. Google sees an empty shell.
            </p>
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                Fix: Every page needs a unique title, meta description, and local keywords.
                Your business needs a JSON-LD schema telling Google exactly what you do and where.
                And your site must be listed on Google Business Profile.
              </p>
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              02. No clear call to action
            </h2>
            <p>
              Visitors don&apos;t think. They scan. And when they scan your site, the question
              they&apos;re subconsciously asking is: &ldquo;What do I do next?&rdquo;
            </p>
            <p>
              If the answer isn&apos;t obvious in under 3 seconds, they leave. This is the single
              most common mistake in &ldquo;premium&rdquo; design. The designer falls in love with whitespace
              and minimalism — and forgets that someone needs to book an appointment.
            </p>
            <p>
              In Dubai specifically, WhatsApp is king. People don&apos;t fill out forms —
              they tap a button and start a chat. If your site doesn&apos;t have a floating
              WhatsApp button, you&apos;re losing potential clients every hour.
            </p>
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                Fix: One primary CTA per section. A sticky WhatsApp button on every page.
                Make it embarrassingly obvious what you want visitors to do.
              </p>
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              03. It loads slowly on mobile
            </h2>
            <p>
              Over 70% of web traffic in the UAE comes from mobile phones. And attention spans
              are brutal — if your site takes more than 3 seconds to load, nearly half
              of those visitors are gone before they even see your homepage.
            </p>
            <p>
              Heavy JavaScript frameworks, unoptimized images, and bloated animations kill
              mobile performance. That video background your designer loved? It&apos;s costing
              you customers.
            </p>
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                Fix: Compress images. Use modern formats (WebP). Test your site on Google
                PageSpeed Insights. Aim for a score above 80 on mobile. Most sites we inherit
                score under 40.
              </p>
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              04. No social proof where it matters
            </h2>
            <p>
              People don&apos;t trust businesses they don&apos;t know. Especially in Dubai, where
              competition is fierce and every other business claims to be &ldquo;the best.&rdquo;
              Reviews, ratings, and testimonials are the shortcut to trust.
            </p>
            <p>
              But placement matters. Most sites bury testimonials at the bottom of a page nobody
              scrolls to. The highest-impact position is immediately after your hero section —
              before you even explain what you do. Hit them with social proof first.
            </p>
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                Fix: 3–5 real testimonials with names and photos near the top of your page.
                Your Google rating displayed prominently. A client count or key metric
                (&ldquo;2,400+ happy clients&rdquo;) in your hero section.
              </p>
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              05. You&apos;re not tracking anything
            </h2>
            <p>
              If you don&apos;t know how many people visit your site, which pages they read,
              and where they drop off — you&apos;re flying blind. You can&apos;t improve what you
              don&apos;t measure.
            </p>
            <p>
              Google Analytics 4 is free. Setting it up takes 10 minutes. And yet the majority
              of small business websites in Dubai have zero tracking. This means every design
              or content decision is a guess.
            </p>
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                Fix: Install GA4. Set up a conversion event for form submissions and
                WhatsApp clicks. Check it weekly. Let data drive every decision.
              </p>
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              The bottom line
            </h2>
            <p>
              A good-looking website and a high-converting website are not the same thing.
              The first impresses. The second grows your business.
            </p>
            <p>
              Every site Web Vanguard builds includes all five fixes above as standard:
              full local SEO, WhatsApp integration, performance-optimized code, social proof
              placement, and GA4 analytics — before we ever hand you the keys.
            </p>
            <p>
              If your current site isn&apos;t performing, we&apos;ll build you a better one.
              We can show you a working demo before you commit to anything.
            </p>

          </article>

          <BlogNav currentSlug="why-your-premium-website-underperforms" />

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-text-muted text-sm font-body mb-4 uppercase tracking-widest">Ready to fix it?</p>
            <h3 className="font-display font-black text-3xl md:text-4xl text-text-primary uppercase mb-6">
              We already built<br />
              <span className="font-serif italic text-accent normal-case">your next site.</span>
            </h3>
            <p className="text-text-secondary font-body mb-8 max-w-lg">
              We&apos;ll show you a live demo of what your business could look like online.
              No commitment, no tech jargon. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get a free proposal</span>
              </Link>
              <a
                href="https://wa.me/971585324519?text=Hi%2C%20I%20read%20your%20article%20and%20want%20to%20fix%20my%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 text-sm font-body uppercase tracking-wider"
              >
                WhatsApp us →
              </a>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-16">
            <Link href="/blog" className="text-text-muted hover:text-accent transition-colors text-sm font-body">
              ← Back to blog
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
