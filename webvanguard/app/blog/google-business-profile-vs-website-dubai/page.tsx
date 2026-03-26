import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'

export const metadata: Metadata = {
  title: 'Google Business Profile vs Website: What Every Dubai Business Needs in 2026 | Web Vanguard',
  description: "You're on Google Maps. But are customers actually calling? Here's why Google Business Profile and a website aren't competitors — they're a system. And why Dubai businesses need both.",
  keywords: [
    'google business profile dubai',
    'do I need a website if I\'m on Google Maps Dubai',
    'google listing dubai business',
    'google my business dubai',
    'gbp vs website dubai',
    'google maps dubai business',
    'local seo dubai',
    'website vs google listing uae',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/blog/google-business-profile-vs-website-dubai',
  },
  openGraph: {
    title: 'Google Business Profile vs Website: What Every Dubai Business Needs in 2026',
    description: "You're on Google Maps. Customers can find you. So why aren't they calling? Here's the real answer.",
    url: 'https://webvanguard.co/blog/google-business-profile-vs-website-dubai',
    type: 'article',
    publishedTime: '2026-03-26',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Business Profile vs Website: Dubai 2026',
    description: "GBP gets you found. A website gets you chosen. Here's why you need both.",
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Business Profile vs Website: What Every Dubai Business Needs in 2026',
  description: "Why Google Business Profile and a website aren't alternatives — they're a system. And why Dubai businesses that skip one are leaving leads on the table.",
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
  datePublished: '2026-03-26',
  url: 'https://webvanguard.co/blog/google-business-profile-vs-website-dubai',
  inLanguage: 'en',
  keywords: 'google business profile dubai, google my business dubai, local seo dubai, website vs google listing',
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
            <span className="text-text-secondary">Google Business Profile vs Website Dubai</span>
          </nav>

          {/* Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                SEO
              </span>
              <span className="text-xs text-text-muted font-body">7 min read</span>
              <span className="text-text-muted">·</span>
              <time className="text-xs text-text-muted font-body" dateTime="2026-03-26">March 26, 2026</time>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase leading-tight mb-6">
              Google Business Profile vs Website
              <span className="font-serif italic text-accent normal-case block mt-2">
                What every Dubai business needs in 2026
              </span>
            </h1>
            <p className="text-text-secondary font-body text-xl leading-relaxed">
              You&apos;re on Google Maps. Customers can find you. So why aren&apos;t they calling?
              Because being discoverable and being chosen are two completely different things —
              and you need two different tools to achieve both.
            </p>
          </header>

          {/* Article body */}
          <article className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-8">

            <p>
              Every week, a Dubai business owner tells us some version of the same thing:
              &ldquo;I&apos;m already on Google. I have reviews. People can find me on Maps.
              Do I really need to pay for a website too?&rdquo;
            </p>

            <p>
              It&apos;s a fair question. Google Business Profile is free, it shows up in search,
              and it looks professional. But here&apos;s what&apos;s actually happening when
              someone finds your listing — and why that&apos;s only half the story.
            </p>

            {/* Quick comparison */}
            <div className="my-12 border border-border rounded-sm overflow-hidden not-prose">
              <div className="bg-surface/50 px-6 py-4 border-b border-border">
                <p className="font-display font-black text-sm text-text-primary uppercase tracking-widest">
                  GBP vs Website — At a Glance
                </p>
              </div>
              {[
                { label: 'Job', gbp: 'Get you found', web: 'Get you chosen' },
                { label: 'Controls', gbp: 'Google', web: 'You' },
                { label: 'Content limit', gbp: 'Photos, hours, reviews', web: 'Unlimited' },
                { label: 'Can rank for long-tail search?', gbp: 'Rarely', web: 'Yes' },
                { label: 'Builds trust/credibility?', gbp: 'Partially', web: 'Fully' },
                { label: 'Captures leads directly?', gbp: 'Limited', web: 'Yes' },
                { label: 'Can be suspended?', gbp: 'Yes, by Google', web: 'No' },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-border last:border-0">
                  <p className="font-body text-text-muted text-xs">{row.label}</p>
                  <p className="font-display font-bold text-text-secondary text-xs">{row.gbp}</p>
                  <p className="font-display font-bold text-accent text-xs">{row.web}</p>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-4 px-6 py-3 bg-surface/30">
                <p className="font-body text-text-muted text-xs"></p>
                <p className="font-display font-bold text-text-muted text-xs uppercase tracking-wider">GBP</p>
                <p className="font-display font-bold text-accent text-xs uppercase tracking-wider">Website</p>
              </div>
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              01. What Google Business Profile actually does well
            </h2>
            <p>
              Let&apos;s be clear: GBP is powerful. For local intent searches — &ldquo;barber near me,&rdquo;
              &ldquo;dentist JLT,&rdquo; &ldquo;best shawarma Deira&rdquo; — Google shows a map pack of 3 local
              results before anything else. If you&apos;re in that pack, you get visibility that
              money can&apos;t easily buy.
            </p>
            <p>
              A well-maintained Google Business Profile gives you:
            </p>
            <ul className="space-y-2 my-6">
              {[
                'Instant visibility in local "near me" searches',
                'A place to collect and display Google Reviews',
                'Your hours, address, phone number in one place',
                'Photos of your business, team, or work',
                'Direct calls and directions with one tap',
                'Posts and updates that appear in search results',
                'Q&A section where customers ask questions publicly',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              That&apos;s genuinely useful. Businesses with optimised GBP profiles get significantly
              more calls and direction requests than those with bare listings. In a market
              like Dubai, where foot traffic and local search intent are high, this matters.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              02. But here&apos;s where GBP runs out of road
            </h2>
            <p>
              Google Business Profile was designed to answer one question: &ldquo;Where is this
              business and how do I reach them?&rdquo; That&apos;s it. Everything beyond that is
              either unavailable, limited, or controlled by Google — not you.
            </p>

            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                The hard limit: Google can suspend your listing at any time — a policy flag,
                a competitor&apos;s spam report, a verification issue. Businesses have lost their
                entire Google presence overnight. If your GBP is your only web presence,
                that&apos;s an existential risk.
              </p>
            </div>

            <p>
              Beyond the suspension risk, the practical limits hit fast:
            </p>
            <ul className="space-y-2 my-6">
              {[
                'You can\'t tell your full story — no services page, no about, no portfolio',
                'You can\'t capture email addresses or run a lead form',
                'You can\'t rank for non-local searches (industry terms, expertise queries)',
                'You can\'t publish blog content that builds authority over time',
                'You can\'t show pricing, packages, or booking flows',
                'You can\'t A/B test your messaging or track conversion behaviour',
                'You can\'t integrate with WhatsApp, Calendly, or your CRM',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-text-muted shrink-0 mt-0.5">×</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              A customer finds you on Google Maps at 10pm. They want to know if you offer
              the specific treatment they need, what your prices are, and whether you look
              legitimate. Your GBP can&apos;t answer those questions properly.
              So they bounce — and book someone else who has a website.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              03. What a website does that GBP never can
            </h2>
            <p>
              A website isn&apos;t just a digital brochure. Done right, it&apos;s the place where
              discovery becomes decision. Here&apos;s what it adds to your GBP:
            </p>

            <div className="space-y-4 my-8 not-prose">
              {[
                {
                  title: 'Credibility at scale',
                  desc: "Customers are skeptical. A GBP listing tells them you exist. A well-designed website tells them you're serious, professional, and worth trusting with their money.",
                },
                {
                  title: 'SEO beyond local',
                  desc: "GBP ranks you for \"near me\" searches. A website ranks you for everything else: \"best interior designer dubai\", \"how much does a deep cleaning cost in uae\", \"logo design for restaurant\". These are high-intent searches your GBP will never capture.",
                },
                {
                  title: 'Lead capture on your terms',
                  desc: "A contact form, a WhatsApp button, a booking widget — these convert browsers into leads. GBP has a \"contact\" button, but it's a thin interface. Your website owns the full conversion experience.",
                },
                {
                  title: 'Content that compounds',
                  desc: "Every blog post, case study, or service page you add to your website builds authority over time. It gets indexed, shared, linked to. GBP posts disappear after a few days.",
                },
                {
                  title: 'Your brand, your rules',
                  desc: "Google decides how your GBP looks. Your website is yours — the colours, the copy, the photography, the story. That's the difference between renting space and owning it.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-border p-6">
                  <p className="font-display font-bold text-text-primary text-sm mb-2">{item.title}</p>
                  <p className="font-body text-text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              04. The real answer: they feed each other
            </h2>
            <p>
              This isn&apos;t GBP vs website. It&apos;s GBP + website. They&apos;re a system,
              and each makes the other stronger.
            </p>
            <p>
              Here&apos;s how the loop works when both are set up properly:
            </p>

            <div className="my-10 border border-border rounded-sm overflow-hidden not-prose">
              <div className="bg-surface/50 px-6 py-4 border-b border-border">
                <p className="font-display font-black text-sm text-text-primary uppercase tracking-widest">
                  The Discovery → Conversion Loop
                </p>
              </div>
              {[
                { step: '01', action: 'Customer searches "hair salon Business Bay"', where: 'Google Maps' },
                { step: '02', action: 'Your GBP appears in the local pack with 4.8★ reviews', where: 'GBP' },
                { step: '03', action: 'They tap your listing, see photos and hours', where: 'GBP' },
                { step: '04', action: 'They click "Website" to check your prices and services', where: 'Your Website' },
                { step: '05', action: 'They read your services page, see real before/afters', where: 'Your Website' },
                { step: '06', action: 'They tap your WhatsApp button and book', where: 'Your Website' },
                { step: '07', action: 'They leave a Google Review after their visit', where: 'GBP' },
                { step: '08', action: 'Your GBP rating improves, boosting local ranking', where: 'GBP → SEO' },
              ].map((row) => (
                <div key={row.step} className="grid grid-cols-[auto_1fr_auto] gap-4 items-start px-6 py-4 border-b border-border last:border-0">
                  <span className="font-display font-black text-text-muted/30 text-xl">{row.step}</span>
                  <p className="font-body text-text-secondary text-sm">{row.action}</p>
                  <span className="text-xs text-accent font-body border border-accent/20 px-2 py-0.5 rounded-sm shrink-0 text-right">{row.where}</span>
                </div>
              ))}
            </div>

            <p>
              Your GBP listing also gets a ranking boost when it links to a high-quality,
              fast-loading website. Google treats a verified GBP linked to a solid site
              as a more trustworthy business than one with no website at all.
              It&apos;s a signal — and signals compound.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              05. How to set up both the right way in Dubai
            </h2>
            <p>
              Most businesses in Dubai have one or the other — and usually neither is
              optimised properly. Here&apos;s what &ldquo;done right&rdquo; looks like:
            </p>

            <p className="font-display font-bold text-text-primary text-lg uppercase mt-10 mb-4">
              Google Business Profile — Dubai checklist
            </p>
            <ul className="space-y-2 my-6">
              {[
                'Verify your listing (postcard or video verification)',
                'Complete every field: category, description, hours, website URL',
                'Add 10+ high-quality photos (interior, exterior, team, work)',
                'Set your service area correctly — don\'t just put "Dubai", be specific',
                'Add all services with descriptions and prices where possible',
                'Enable messaging and respond within 24 hours',
                'Ask every happy customer for a review — and reply to all of them',
                'Post updates regularly (Google Posts have a short shelf life, but they signal activity)',
                'Use your primary keyword in your business description naturally',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="font-display font-bold text-text-primary text-lg uppercase mt-10 mb-4">
              Website — what Dubai businesses actually need
            </p>
            <ul className="space-y-2 my-6">
              {[
                'Mobile-first design (80%+ of Dubai searches are on mobile)',
                'WhatsApp click-to-chat button — non-negotiable in this market',
                'Clear services page with local keywords embedded naturally',
                'Contact form that routes to your WhatsApp or email',
                'Google Maps embed so your address is instantly visible',
                'Fast load time — under 3 seconds on mobile (affects both UX and Google ranking)',
                'Schema markup so Google understands your business type and location',
                'Link to your GBP in the footer for credibility signals',
                'At least one trust element: reviews, client count, years in operation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <p>
              Want to know what a properly-built website should cost?{' '}
              <Link href="/blog/how-much-does-a-website-cost-in-dubai" className="text-accent hover:underline underline-offset-4">
                We broke down Dubai web design pricing honestly here.
              </Link>
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              The businesses losing the most right now
            </h2>
            <p>
              Two types of Dubai businesses are consistently leaving leads on the table:
            </p>
            <div className="border-l-2 border-border pl-6 my-8 space-y-6">
              <div>
                <p className="font-display font-bold text-text-primary">The GBP-only business</p>
                <p className="text-text-muted font-body text-sm mt-1">
                  Gets found on Maps but can&apos;t convert. No website means no credibility check,
                  no pricing info, no lead form. Competitors with websites win the booking every time.
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-text-primary">The website-only business</p>
                <p className="text-text-muted font-body text-sm mt-1">
                  Has a great site but zero local Maps presence. Missing the entire local intent
                  search traffic — customers who are nearby, ready to buy, searching right now.
                  Often these are businesses that built a website years ago and forgot about GBP.
                </p>
              </div>
            </div>
            <p>
              Both scenarios cost real money. The fix for either is straightforward — but
              most businesses don&apos;t realise the gap exists until they see a competitor
              consistently outranking them on both fronts.
            </p>

            {/* CTA block */}
            <div className="mt-12 border border-accent/30 bg-accent/5 p-8 rounded-sm not-prose">
              <p className="font-display font-black text-text-primary text-lg uppercase mb-4">
                Web Vanguard sets up both
              </p>
              <p className="font-body text-text-secondary text-sm mb-6 leading-relaxed">
                We build your website and optimise your Google Business Profile together —
                so your local discovery and your conversion are working as a system from day one.
                Packages start from <span className="text-accent font-bold">AED 2,000</span>.
                No long retainers. No upsells. Just a setup that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>Let&apos;s talk →</span>
                </Link>
                <a
                  href="https://wa.me/971585324519?text=Hi%2C%20I%20read%20your%20article%20on%20Google%20Business%20Profile%20vs%20website%20and%20want%20to%20set%20up%20both"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 text-sm font-body uppercase tracking-wider"
                >
                  WhatsApp us →
                </a>
              </div>
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              Bottom line
            </h2>
            <p>
              If you only have a Google Business Profile, you&apos;re getting found but not
              chosen. If you only have a website, you&apos;re invisible to people searching
              locally right now. You need both — and they work best when they&apos;re
              built to work together.
            </p>
            <p>
              The good news: for most Dubai businesses, getting both set up properly
              doesn&apos;t require a big agency budget. It requires the right setup,
              done once, done well.
            </p>

          </article>

          <BlogNav currentSlug="google-business-profile-vs-website-dubai" />

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-text-muted text-sm font-body mb-4 uppercase tracking-widest">Get found. Get chosen.</p>
            <h3 className="font-display font-black text-3xl md:text-4xl text-text-primary uppercase mb-6">
              GBP + website,<br />
              <span className="font-serif italic text-accent normal-case">set up as a system.</span>
            </h3>
            <p className="text-text-secondary font-body mb-8 max-w-lg">
              We handle everything — from your Google Business Profile optimisation to a
              fast, conversion-focused website. Starting from AED 2,000.
              No fluff, no retainers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get started</span>
              </Link>
              <a
                href="https://wa.me/971585324519?text=Hi%2C%20I%20want%20to%20set%20up%20both%20my%20Google%20Business%20Profile%20and%20website"
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
