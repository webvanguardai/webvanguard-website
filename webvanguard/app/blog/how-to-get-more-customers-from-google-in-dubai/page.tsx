import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'

export const metadata: Metadata = {
  title: 'How to Get More Customers From Google in Dubai (2026 Guide) | Web Vanguard',
  description: 'A practical, no-fluff guide for Dubai business owners: how to rank on Google, dominate local search, and turn clicks into customers without wasting budget on ads.',
  keywords: [
    'get more customers google dubai',
    'google ranking dubai business',
    'local seo dubai',
    'rank on google dubai',
    'google my business dubai',
    'seo dubai small business',
    'dubai google search',
    'how to get found on google dubai',
    'google maps dubai business',
    'seo tips dubai 2026',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/blog/how-to-get-more-customers-from-google-in-dubai',
  },
  openGraph: {
    title: 'How to Get More Customers From Google in Dubai (2026)',
    description: 'The practical playbook for Dubai business owners: rank on Google, own local search, convert clicks to customers.',
    url: 'https://webvanguard.co/blog/how-to-get-more-customers-from-google-in-dubai',
    type: 'article',
    publishedTime: '2026-03-24',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get More Customers From Google in Dubai (2026)',
    description: 'No-fluff guide: local SEO, Google Business Profile, and what actually drives rankings in Dubai.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Get More Customers From Google in Dubai (2026 Guide)',
  description: 'A practical guide for Dubai business owners on local SEO, Google Business Profile, and turning search traffic into real customers.',
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
  datePublished: '2026-03-24',
  url: 'https://webvanguard.co/blog/how-to-get-more-customers-from-google-in-dubai',
  inLanguage: 'en',
  keywords: 'local seo dubai, google ranking dubai, google my business dubai, rank on google dubai, seo dubai small business',
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
            <span className="text-text-secondary">How to Get More Customers From Google in Dubai</span>
          </nav>

          {/* Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                SEO
              </span>
              <span className="text-xs text-text-muted font-body">9 min read</span>
              <span className="text-text-muted">·</span>
              <time className="text-xs text-text-muted font-body" dateTime="2026-03-24">March 24, 2026</time>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase leading-tight mb-6">
              How to Get More Customers From Google
              <span className="font-serif italic text-accent normal-case block mt-2">
                in Dubai (2026 guide)
              </span>
            </h1>
            <p className="text-text-secondary font-body text-xl leading-relaxed">
              Most Dubai businesses are invisible on Google — not because the algorithm hates them,
              but because nobody told them the rules. This is the no-fluff playbook to fix that.
            </p>
          </header>

          {/* Article body */}
          <article className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-8">

            <p>
              Every month, tens of thousands of people in Dubai type things like
              &ldquo;best dentist near me,&rdquo; &ldquo;coffee shop JBR,&rdquo; or
              &ldquo;business setup consultant Dubai&rdquo; into Google. The businesses that
              show up in those results get the phone calls, the bookings, the walk-ins.
            </p>
            <p>
              The ones that don&apos;t show up? They&apos;re spending on Instagram ads and
              wondering why they&apos;re not growing.
            </p>
            <p>
              Here&apos;s the full playbook — what to do, in what order, with zero fluff.
            </p>

            {/* Step overview */}
            <div className="my-12 border border-border rounded-sm overflow-hidden not-prose">
              <div className="bg-surface/50 px-6 py-4 border-b border-border">
                <p className="font-display font-black text-sm text-text-primary uppercase tracking-widest">
                  The 6-Step Google Visibility Playbook
                </p>
              </div>
              {[
                { step: '01', title: 'Claim & optimise your Google Business Profile', time: '1–2 hours' },
                { step: '02', title: 'Fix your website\'s technical foundation', time: '1 day' },
                { step: '03', title: 'Target the right local keywords', time: 'Ongoing' },
                { step: '04', title: 'Build local citations & directory listings', time: '2–3 hours' },
                { step: '05', title: 'Generate and manage reviews actively', time: 'Ongoing' },
                { step: '06', title: 'Create content that answers real questions', time: 'Weekly' },
              ].map((row) => (
                <div key={row.step} className="flex items-center gap-6 px-6 py-4 border-b border-border last:border-0">
                  <span className="font-display font-black text-2xl text-accent/40 shrink-0 w-8">{row.step}</span>
                  <div className="flex-1">
                    <p className="font-display font-bold text-text-primary text-sm">{row.title}</p>
                  </div>
                  <span className="text-xs text-text-muted font-body shrink-0">{row.time}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              01. Google Business Profile — your most important asset
            </h2>
            <p>
              If your business shows up on Google Maps, that&apos;s your Google Business Profile (GBP)
              at work. If it doesn&apos;t — or if it shows incomplete information — you&apos;re losing
              customers to competitors who bothered to fill it in.
            </p>
            <p>
              GBP is free. It&apos;s also the single highest-ROI action most Dubai businesses can take
              in under two hours.
            </p>
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="font-display font-bold text-text-primary mb-2">What a fully optimised GBP looks like:</p>
              <ul className="space-y-2">
                {[
                  'Business name exactly as it appears on your signage/licence',
                  'Correct category (e.g. "Aesthetic clinic" not just "Health")',
                  'Full address with area (Business Bay, JBR, DIFC, etc.)',
                  'Accurate hours — including Friday/Saturday, public holidays',
                  'Phone number linked to WhatsApp',
                  '10+ photos: interior, exterior, team, product/service',
                  'Services listed individually with descriptions and prices',
                  'Questions answered in the Q&A section (add them yourself)',
                  'Posts updated weekly (offers, events, news)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary font-body text-sm">
                    <span className="text-accent shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p>
              Most Dubai businesses have a GBP with a name, a phone number, and two photos
              from 2021. That&apos;s not enough. Google rewards completeness. So do customers.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              02. Fix your website&apos;s technical foundation
            </h2>
            <p>
              Google won&apos;t rank a slow, broken, or mobile-unfriendly website — regardless of
              how good your content is. Before any SEO strategy, fix the foundation.
            </p>
            <div className="space-y-4 my-8 not-prose">
              {[
                {
                  issue: 'Mobile speed',
                  fix: 'Test at PageSpeed Insights. Dubai users are predominantly mobile. If your score is below 70, fix it before anything else.',
                  critical: true,
                },
                {
                  issue: 'HTTPS',
                  fix: 'Your site must be on HTTPS (the padlock). Google flags HTTP sites as "Not Secure." Free via Let\'s Encrypt or included with Vercel/Netlify hosting.',
                  critical: true,
                },
                {
                  issue: 'Crawlability',
                  fix: 'Submit your sitemap.xml to Google Search Console. If Google can\'t find your pages, they won\'t rank.',
                  critical: true,
                },
                {
                  issue: 'Title tags & meta descriptions',
                  fix: 'Every page needs a unique title (50–60 chars) and description (120–160 chars) containing your target keyword and location.',
                  critical: false,
                },
                {
                  issue: 'Structured data (schema)',
                  fix: 'Add LocalBusiness JSON-LD schema: tells Google your name, address, phone, hours, and service area in machine-readable format.',
                  critical: false,
                },
              ].map((row) => (
                <div key={row.issue} className="border border-border p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-display font-bold text-text-primary text-sm">{row.issue}</p>
                    {row.critical && (
                      <span className="text-xs text-accent border border-accent/30 px-2 py-0.5 font-body">Critical</span>
                    )}
                  </div>
                  <p className="font-body text-text-muted text-sm">{row.fix}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              03. Target the right local keywords
            </h2>
            <p>
              &ldquo;Dentist&rdquo; is a keyword. &ldquo;Dentist Dubai&rdquo; is a local keyword. 
              &ldquo;Cosmetic dentist Business Bay&rdquo; is a converting keyword.
            </p>
            <p>
              The more specific, the less competition — and the higher the intent.
              Someone searching &ldquo;cosmetic dentist Business Bay&rdquo; is about to book an
              appointment. Someone searching &ldquo;dentist&rdquo; is maybe just curious.
            </p>
            <p>
              How to find your keywords:
            </p>
            <ul className="space-y-3 my-6">
              {[
                'Type your service into Google and look at the autocomplete suggestions — these are real searches',
                'Scroll to the bottom: "People also search for" reveals related terms',
                'Check what keywords your competitors rank for (use Ubersuggest free tier or Semrush)',
                'Think neighbourhood: "JBR," "Downtown," "DIFC," "JLT," "Jumeirah" — Dubaiites search by area',
                'Think nationality: "Arabic wedding photographer," "Russian-speaking lawyer Dubai" — niche = less competition',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Once you have your keywords, place them naturally in: page titles, H1/H2 headings,
              first 100 words of body text, image alt text, URL slugs, and meta descriptions.
              Don&apos;t stuff — write for humans, optimise for machines.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              04. Build local citations
            </h2>
            <p>
              A &ldquo;citation&rdquo; is any mention of your business name, address, and phone number
              (NAP) on an external website. Google uses these as trust signals —
              the more consistent citations you have, the more it believes your business is real
              and established.
            </p>
            <p>
              Key directories for Dubai businesses:
            </p>
            <div className="grid grid-cols-2 gap-3 my-8 not-prose">
              {[
                'Google Business Profile',
                'Dubai Chamber of Commerce',
                'Yellow Pages UAE',
                'Foursquare',
                'Bing Places',
                'Apple Maps Connect',
                'TripAdvisor (F&B/hospitality)',
                'Zomato (restaurants)',
                'Dubizzle Business',
                'LinkedIn Company Page',
              ].map((dir) => (
                <div key={dir} className="border border-border px-4 py-3 font-body text-text-secondary text-sm">
                  {dir}
                </div>
              ))}
            </div>
            <p>
              Critical: your NAP must be <em>identical</em> across every listing.
              &ldquo;Business Bay, Dubai&rdquo; and &ldquo;Business Bay Dubai&rdquo; (no comma) are
              inconsistencies that confuse Google. Pick a format and stick to it everywhere.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              05. Reviews are your secret weapon
            </h2>
            <p>
              Google&apos;s local ranking algorithm weighs three things heavily: relevance, distance,
              and prominence. Reviews are the fastest way to build prominence.
            </p>
            <p>
              A business with 80 reviews at 4.7 stars will almost always outrank a competitor
              with 12 reviews at 4.9 stars — even if the second business is technically better.
              Volume and recency matter.
            </p>
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="font-display font-bold text-text-primary mb-3">How to get more Google reviews (that actually stick):</p>
              <ul className="space-y-2">
                {[
                  'Ask within 24 hours of a positive experience — timing is everything',
                  'Send a WhatsApp message with a direct link to your Google review page',
                  'Add a QR code at your reception desk or on receipts',
                  'Train your team to ask — "If you enjoyed your visit, we\'d love a Google review"',
                  'Respond to every review (positive and negative) within 48 hours',
                  'Never buy fake reviews — Google detects and removes them, and it can tank your ranking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary font-body text-sm">
                    <span className="text-accent shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p>
              Typical result: businesses that run an active review campaign for 90 days see
              their Google Maps position jump 3–8 spots for competitive terms.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              06. Content that answers real questions
            </h2>
            <p>
              Here&apos;s where most Dubai businesses give up — and where the biggest opportunity sits.
            </p>
            <p>
              Google&apos;s job is to answer questions. If your website answers the questions your
              customers are typing, Google sends those customers to you. It&apos;s that simple.
              And most of your competitors aren&apos;t doing it.
            </p>
            <p>
              You don&apos;t need 50 blog posts. Start with five:
            </p>
            <div className="space-y-3 my-8 not-prose">
              {[
                {
                  type: 'The "how much does X cost in Dubai" post',
                  why: 'Extremely high search volume. People want transparent pricing. Being honest earns trust before you\'ve spoken to anyone.',
                },
                {
                  type: 'The "best X in [neighbourhood]" post',
                  why: 'Hyper-local. Very low competition. Perfect for service businesses in specific areas.',
                },
                {
                  type: 'The "how to choose a good X in Dubai" post',
                  why: 'Captures people early in their decision. Positions you as the authority.',
                },
                {
                  type: 'The FAQ page',
                  why: 'Answer 10–15 real questions you get from customers. These often rank as featured snippets — the box at the very top of Google results.',
                },
                {
                  type: 'The "X vs Y" comparison post',
                  why: 'High intent. Someone comparing options is close to deciding. Put yourself in that content.',
                },
              ].map((row) => (
                <div key={row.type} className="border border-border p-5">
                  <p className="font-display font-bold text-text-primary text-sm mb-2">{row.type}</p>
                  <p className="font-body text-text-muted text-sm">{row.why}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              How long does it take?
            </h2>
            <p>
              Real talk:
            </p>
            <ul className="space-y-3 my-6">
              {[
                'Google Business Profile optimisation → results visible in 2–4 weeks',
                'Technical fixes → Google recrawls within days; ranking shifts in 4–8 weeks',
                'Local citations → trust builds over 2–3 months',
                'Reviews → cumulative; first meaningful jump at 20+ reviews',
                'Content → first rankings appear at 3–6 months; compound over 12+ months',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              SEO is not a campaign. It&apos;s infrastructure. The businesses that invest
              consistently for 6–12 months own their category on Google — and those rankings
              don&apos;t disappear when you stop paying, unlike ads.
            </p>

            {/* Summary */}
            <div className="mt-12 border border-accent/30 bg-accent/5 p-8 rounded-sm not-prose">
              <p className="font-display font-black text-text-primary text-lg uppercase mb-6">The quick checklist</p>
              <div className="space-y-3">
                {[
                  'Google Business Profile claimed, verified, and fully filled in',
                  'Website loads in under 3 seconds on mobile',
                  'Every page has a unique title tag with your location + service',
                  'LocalBusiness schema markup added',
                  'Listed on 5+ local directories with consistent NAP',
                  'Active review collection process running',
                  'At least one piece of content published this month',
                  'Google Search Console connected and sitemap submitted',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-accent shrink-0 mt-0.5 font-bold">☐</span>
                    <p className="font-body text-text-secondary text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </article>

          <BlogNav currentSlug="how-to-get-more-customers-from-google-in-dubai" />

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-text-muted text-sm font-body mb-4 uppercase tracking-widest">Want this done for you?</p>
            <h3 className="font-display font-black text-3xl md:text-4xl text-text-primary uppercase mb-6">
              We build sites that<br />
              <span className="font-serif italic text-accent normal-case">Google actually ranks.</span>
            </h3>
            <p className="text-text-secondary font-body mb-8 max-w-lg">
              Every Web Vanguard site ships with full local SEO, schema markup, Google Search
              Console integration, and a site speed score above 90. No extras, no upsells.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get a free demo</span>
              </Link>
              <a
                href="https://wa.me/971501234567?text=Hi%2C%20I%20want%20help%20ranking%20on%20Google%20in%20Dubai"
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
