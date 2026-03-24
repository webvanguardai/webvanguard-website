import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost in Dubai? (2026 Honest Breakdown) | Web Vanguard',
  description: 'Honest pricing breakdown for websites in Dubai: what agencies charge, what you actually need, and how to avoid paying too much for too little. Starting from AED 1,500.',
  keywords: [
    'website cost dubai',
    'how much website dubai',
    'website price dubai',
    'web design pricing dubai',
    'affordable website dubai',
    'website development cost uae',
    'web agency dubai pricing',
    'small business website dubai',
    'website quote dubai',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/blog/how-much-does-a-website-cost-in-dubai',
  },
  openGraph: {
    title: 'How Much Does a Website Cost in Dubai? (2026 Honest Breakdown)',
    description: 'What Dubai agencies actually charge — and what you really need to grow your business online.',
    url: 'https://webvanguard.co/blog/how-much-does-a-website-cost-in-dubai',
    type: 'article',
    publishedTime: '2026-03-24',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Website Cost in Dubai? (2026)',
    description: 'Honest pricing breakdown — what agencies charge vs. what you actually need.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Much Does a Website Cost in Dubai? (2026 Honest Breakdown)',
  description: 'Honest pricing breakdown for websites in Dubai: what agencies charge, what you actually need, and how to avoid overpaying.',
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
  url: 'https://webvanguard.co/blog/how-much-does-a-website-cost-in-dubai',
  inLanguage: 'en',
  keywords: 'website cost dubai, web design pricing dubai, affordable website dubai, website development uae',
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
            <span className="text-text-secondary">How Much Does a Website Cost in Dubai?</span>
          </nav>

          {/* Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                Pricing
              </span>
              <span className="text-xs text-text-muted font-body">7 min read</span>
              <span className="text-text-muted">·</span>
              <time className="text-xs text-text-muted font-body" dateTime="2026-03-24">March 24, 2026</time>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase leading-tight mb-6">
              How Much Does a Website Cost in Dubai?
              <span className="font-serif italic text-accent normal-case block mt-2">
                (2026 honest breakdown)
              </span>
            </h1>
            <p className="text-text-secondary font-body text-xl leading-relaxed">
              You&apos;ve gotten quotes ranging from AED 500 to AED 50,000 for the same project.
              Both feel wrong. Here&apos;s what websites actually cost in Dubai — and what
              each price point actually gets you.
            </p>
          </header>

          {/* Article body */}
          <article className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-8">

            <p>
              Dubai&apos;s web design market is wild. You can find a freelancer on Instagram
              offering a &ldquo;professional website&rdquo; for AED 300. You can also find an agency
              charging AED 80,000 for the same type of business. Neither number tells
              you anything useful.
            </p>

            <p>
              After building dozens of websites for Dubai businesses — spas, restaurants,
              real estate agencies, coffee shops, barbers — we&apos;ve seen every tier of the market.
              Here&apos;s an honest breakdown of what you&apos;re actually paying for at each level.
            </p>

            {/* Pricing Table */}
            <div className="my-12 border border-border rounded-sm overflow-hidden not-prose">
              <div className="bg-surface/50 px-6 py-4 border-b border-border">
                <p className="font-display font-black text-sm text-text-primary uppercase tracking-widest">
                  Dubai Website Pricing — 2026
                </p>
              </div>
              {[
                { tier: 'Freelancer (basic)', range: 'AED 300–1,500', what: 'Template + logo swap. No SEO, no strategy, no support.', verdict: '⚠️ Risk' },
                { tier: 'Starter agency', range: 'AED 1,500–4,000', what: 'Multi-page site, mobile responsive, basic SEO, contact form.', verdict: '✅ Good value' },
                { tier: 'Mid-range agency', range: 'AED 4,000–12,000', what: 'Custom design, full SEO, analytics, ongoing support.', verdict: '✅ Solid' },
                { tier: 'Premium agency', range: 'AED 15,000–50,000+', what: 'Full brand strategy + digital marketing + enterprise build.', verdict: '💼 Enterprise' },
              ].map((row) => (
                <div key={row.tier} className="grid grid-cols-[1fr_auto] items-start gap-4 px-6 py-5 border-b border-border last:border-0">
                  <div>
                    <p className="font-display font-bold text-text-primary text-sm">{row.tier}</p>
                    <p className="font-body text-text-muted text-xs mt-1">{row.what}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-display font-black text-accent text-sm">{row.range}</p>
                    <p className="text-xs text-text-muted mt-1">{row.verdict}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              01. The AED 300–1,500 freelancer
            </h2>
            <p>
              This exists, and sometimes it&apos;s fine — if you&apos;re a side project
              or testing an idea. But for a serious business? The risk is high.
            </p>
            <p>
              At this price, you&apos;re almost always getting a modified template with your
              logo slapped in. No local SEO (Google won&apos;t rank you). No proper mobile
              optimization. No analytics. And critically — no ongoing support when something
              breaks (and it will break).
            </p>
            <p>
              The hidden cost: you&apos;ll likely rebuild it in 12–18 months. Or worse, you&apos;ll
              keep a broken site that actively loses you customers.
            </p>
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                Real story: A restaurant in JBR paid AED 600 for a &ldquo;website.&rdquo; It had no
                Google Maps embed, the menu was a blurry PDF scan, and it scored 18/100
                on mobile speed. They were invisible online for 2 years.
              </p>
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              02. The AED 1,500–4,000 range (smart money)
            </h2>
            <p>
              This is where most Dubai SMEs should be. At this price point, a professional
              agency can deliver everything a small-to-medium business actually needs:
            </p>
            <ul className="space-y-2 my-6">
              {[
                'Mobile-first responsive design',
                'Contact form that sends inquiries to your email',
                'WhatsApp click-to-chat button (critical for Dubai market)',
                'Full local SEO (meta tags, schema markup, Google keywords)',
                'Google Analytics GA4 tracking',
                'Google Maps embed',
                'Social proof section (reviews, client count)',
                'Fast load times — optimized for UAE mobile users',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              That&apos;s what Web Vanguard&apos;s Starter (AED 1,500) and Launch (AED 2,500)
              plans cover. No hidden fees, no &ldquo;SEO package sold separately.&rdquo;
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              03. The AED 4,000–12,000 mid-range
            </h2>
            <p>
              At this level you start getting custom design work — not templates — plus
              content strategy, ongoing support contracts, and deeper integrations
              (booking systems, CRMs, multilingual sites).
            </p>
            <p>
              Worth it for established businesses with higher traffic and more complex needs.
              A hotel, a dental clinic with multiple branches, a real estate agency with
              property listings — these businesses benefit from the extra investment.
            </p>
            <p>
              The trap: many mid-range agencies charge these prices but deliver template
              work. Always ask to see their actual code or development process — not just
              their portfolio screenshots.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              04. AED 15,000+ — when does it make sense?
            </h2>
            <p>
              Enterprise pricing is justified when you need:
            </p>
            <ul className="space-y-2 my-6">
              {[
                'Full brand identity (logo, photography, brand guidelines)',
                'Custom web application (user accounts, payments, dashboards)',
                'E-commerce with inventory management',
                'Multilingual site (Arabic + English + others)',
                'Ongoing monthly digital marketing management',
                'Integration with enterprise CRM or ERP systems',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              If you&apos;re a boutique spa, a barber shop, a restaurant, or a small consulting firm?
              You don&apos;t need this. You need a focused, fast, beautiful site that converts —
              not a digital empire.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              What no agency tells you upfront
            </h2>
            <p>
              The price of the website is rarely the biggest cost. Hidden costs to ask about:
            </p>
            <div className="space-y-4 my-8">
              {[
                { item: 'Domain name', note: 'AED 50–200/year. Ask if it&apos;s included.' },
                { item: 'Hosting', note: 'AED 100–500/year. Some charge monthly for "managed hosting" that&apos;s just Vercel free tier.' },
                { item: 'Updates', note: 'Changing your menu, prices, photos — is that included or AED 500/change?' },
                { item: 'SEO ongoing', note: 'Initial SEO ≠ ranking. Ongoing content is separate. Make sure you know what&apos;s included.' },
                { item: 'Who owns the code?', note: 'Some agencies hold your site hostage. You must own the code and domain from day one.' },
              ].map((row) => (
                <div key={row.item} className="border border-border p-5">
                  <p className="font-display font-bold text-text-primary text-sm">{row.item}</p>
                  <p className="font-body text-text-muted text-sm mt-1" dangerouslySetInnerHTML={{ __html: row.note.replace(/&apos;/g, "'") }} />
                </div>
              ))}
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              The Web Vanguard approach
            </h2>
            <p>
              We don&apos;t pitch you. We build first.
            </p>
            <p>
              When we identify a business that could use a better web presence, we build
              a working demo — designed specifically for their brand and industry — and
              show it to them before we ever ask for a dirham. You see the product before
              you decide.
            </p>
            <p>
              No commitment. No design fees. No &ldquo;discovery calls&rdquo; that go nowhere.
              Just: here&apos;s what your business could look like online. Want to put your
              name on it?
            </p>

            {/* Pricing summary */}
            <div className="mt-12 border border-accent/30 bg-accent/5 p-8 rounded-sm">
              <p className="font-display font-black text-text-primary text-lg uppercase mb-6">Our plans</p>
              <div className="space-y-4">
                {[
                  { plan: 'Starter', price: 'AED 1,500', desc: 'Landing page · WhatsApp button · Basic SEO · Mobile responsive' },
                  { plan: 'Launch', price: 'AED 2,500', desc: 'Multi-page · Contact form · Full SEO · GA4 · Maps embed' },
                  { plan: 'Growth', price: 'AED 4,500', desc: 'Launch + blog · 3 months support · Analytics setup · AI SEO' },
                  { plan: 'Premium', price: 'AED 8,000+', desc: 'Everything + Google Ads setup · Content strategy · Monthly reporting' },
                ].map((row) => (
                  <div key={row.plan} className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-display font-bold text-text-primary text-sm">{row.plan}</span>
                      <span className="text-text-muted font-body text-xs ml-3">{row.desc}</span>
                    </div>
                    <span className="font-display font-black text-accent text-sm shrink-0">{row.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-muted text-xs font-body mt-6">
                All plans include: domain setup, Vercel hosting, full SEO, WhatsApp integration, GA4, and you own 100% of the code.
              </p>
            </div>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              Bottom line
            </h2>
            <p>
              For most Dubai small businesses, AED 1,500–2,500 is the right budget for a
              website that actually works. Spending less usually means rebuilding sooner.
              Spending more usually means paying for things you don&apos;t need.
            </p>
            <p>
              The best investment you can make isn&apos;t in a more expensive website.
              It&apos;s in one that&apos;s built with conversion in mind from the first pixel.
            </p>

          </article>

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-text-muted text-sm font-body mb-4 uppercase tracking-widest">See before you decide</p>
            <h3 className="font-display font-black text-3xl md:text-4xl text-text-primary uppercase mb-6">
              We&apos;ll show you<br />
              <span className="font-serif italic text-accent normal-case">a live demo first.</span>
            </h3>
            <p className="text-text-secondary font-body mb-8 max-w-lg">
              No quote calls. No mockups. A working website, built for your business,
              live on the internet — before you pay a single dirham.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get a free demo</span>
              </Link>
              <a
                href="https://wa.me/971501234567?text=Hi%2C%20I%20read%20your%20pricing%20article%20and%20want%20to%20see%20a%20demo"
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
