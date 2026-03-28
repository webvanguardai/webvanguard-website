import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'

export const metadata: Metadata = {
  title: 'Why Your Dubai Business Needs an Arabic Website (And How to Get One Fast) | Web Vanguard',
  description: 'More than 40% of UAE residents speak Arabic as their first language. If your website is English-only, you\'re invisible to half the market. Here\'s how a bilingual Arabic+English website changes that — for AED 500.',
  keywords: [
    'arabic website dubai',
    'bilingual website dubai',
    'arabic english website uae',
    'arabic website design dubai',
    'rtl website dubai',
    'arabic translation website dubai',
    'bilingual website uae',
    'arabic seo dubai',
    'dubai business arabic website',
    'arabic website add-on dubai',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/blog/arabic-website-dubai',
  },
  openGraph: {
    title: 'Why Your Dubai Business Needs an Arabic Website (And How to Get One Fast)',
    description: 'More than 40% of UAE residents speak Arabic as their first language. If your website is English-only, you\'re invisible to half the market. Here\'s how a bilingual Arabic+English website changes that — for AED 500.',
    url: 'https://webvanguard.co/blog/arabic-website-dubai',
    type: 'article',
    publishedTime: '2026-03-28',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Dubai Business Needs an Arabic Website (And How to Get One Fast)',
    description: 'English-only websites miss half of Dubai\'s market. An Arabic+English bilingual site opens the door to millions of Arabic-speaking customers — for AED 500.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Your Dubai Business Needs an Arabic Website (And How to Get One Fast)',
  description: 'More than 40% of UAE residents speak Arabic as their first language. If your website is English-only, you\'re invisible to half the market. Here\'s how a bilingual Arabic+English website changes that — for AED 500.',
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
  datePublished: '2026-03-28',
  url: 'https://webvanguard.co/blog/arabic-website-dubai',
  inLanguage: 'en',
  keywords: 'arabic website dubai, bilingual website dubai, arabic english website UAE, RTL website dubai, arabic SEO dubai',
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
            <span className="text-text-secondary">Arabic Website Dubai</span>
          </nav>

          {/* Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                Bilingual & Arabic
              </span>
              <span className="text-xs text-text-muted font-body">8 min read</span>
              <span className="text-text-muted">·</span>
              <time className="text-xs text-text-muted font-body" dateTime="2026-03-28">March 28, 2026</time>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase leading-tight mb-6">
              Why Your Dubai Business Needs an Arabic Website
              <span className="font-serif italic text-accent normal-case block mt-2">
                And How to Get One Fast
              </span>
            </h1>
            <p className="text-text-secondary font-body text-xl leading-relaxed">
              More than 40% of UAE residents speak Arabic as their first language.
              When they search Google in Arabic and land on an English-only page,
              they leave. Every single time. Here&apos;s what a bilingual website actually does
              for a Dubai business — and why it costs less than you think.
            </p>
          </header>

          {/* Article body */}
          <article className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-8">

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              The Arabic-speaking customer your website is ignoring
            </h2>
            <p>
              Picture this: a business owner in Deira types <em>&ldquo;تصميم مواقع دبي&rdquo;</em> (web design Dubai)
              into Google. She&apos;s looking for a local agency. She clicks the first result — your
              competitor — because their site appears in Arabic. You rank second, but your website
              is English-only. She doesn&apos;t stay long enough to find out your prices.
            </p>
            <p>
              This isn&apos;t a niche scenario. The UAE has one of the highest smartphone penetration
              rates in the world, and Arabic-speaking residents — Emiratis, Egyptians, Jordanians,
              Lebanese, Syrians, Saudis — represent a massive, underserved segment of the consumer
              market. They search in Arabic. They trust websites in Arabic. And they convert at
              dramatically higher rates when the experience speaks their language.
            </p>
            <p>
              Most Dubai businesses haven&apos;t added Arabic to their website yet. Which means the
              opportunity is still wide open.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              Arabic SEO is a category most businesses have entirely abandoned
            </h2>
            <p>
              In English, competition on Google for Dubai business keywords is fierce. &ldquo;Restaurant
              Downtown Dubai,&rdquo; &ldquo;accountant Dubai,&rdquo; &ldquo;salon JBR&rdquo; — these are contested terms with
              dozens of businesses optimising hard for them.
            </p>
            <p>
              In Arabic? The competition drops off a cliff. Very few Dubai SMBs have Arabic content
              on their websites. Fewer still have proper Arabic metadata — titles, descriptions,
              and alt text — that Google can index. That means Arabic-language searches for your
              exact services often return thin, irrelevant results. The businesses that show up are
              the ones who made even a minimal effort to be there.
            </p>
            <p>
              A properly built Arabic+English website lets you rank for terms your competitors
              haven&apos;t even thought about. You&apos;re not fighting for scraps in an oversaturated
              English search landscape — you&apos;re walking into a near-empty room.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              Why trust doubles when you speak the customer&apos;s language
            </h2>
            <p>
              Language isn&apos;t just communication. It&apos;s trust. When an Arabic-speaking potential
              client lands on a website that greets them in their language — reads right to left,
              uses familiar typography, doesn&apos;t feel like a translation afterthought — something
              shifts. They relax. They stay. They explore.
            </p>
            <p>
              Studies consistently show that consumers are significantly more likely to make a
              purchase when product or service information is available in their native language —
              even when they&apos;re fluent in English. In a market as competitive as Dubai, where
              trust is everything, this isn&apos;t a minor advantage. It&apos;s a conversion lever that
              most businesses have left completely unpulled.
            </p>
            <p>
              For service businesses — lawyers, clinics, consultants, designers, contractors —
              where the sale is relationship-dependent, this effect is even stronger. People hire
              who they trust. And they trust what feels familiar.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              What makes a good Arabic website — it&apos;s not just translation
            </h2>
            <p>
              Throwing your English content into Google Translate and slapping it on a page is
              not a bilingual website. It&apos;s worse than nothing, because it signals disrespect —
              you made a half-hearted effort and it shows.
            </p>
            <p>
              A genuinely effective Arabic website requires four things:
            </p>

            <h3 className="font-display font-bold text-xl text-text-primary uppercase mt-10 mb-4">
              1. Proper RTL layout
            </h3>
            <p>
              Arabic is read right to left. That means the entire layout flips: navigation aligns
              to the right, text flows from right to left, buttons and icons mirror, and the visual
              hierarchy reverses. A website that displays Arabic text in a left-to-right layout
              looks broken — and it is broken. RTL (right-to-left) layout isn&apos;t a CSS afterthought;
              it needs to be built into the structure of the page.
            </p>

            <h3 className="font-display font-bold text-xl text-text-primary uppercase mt-10 mb-4">
              2. Human-quality translation
            </h3>
            <p>
              Arabic has regional dialects and formal variants. For a business website, Modern
              Standard Arabic (MSA) is the safe, professional choice — understood universally
              across the Arab world, from Cairo to Riyadh to Dubai. The translation needs to be
              accurate, natural, and reviewed by a native speaker. Not a machine output with a
              light edit.
            </p>

            <h3 className="font-display font-bold text-xl text-text-primary uppercase mt-10 mb-4">
              3. Arabic-optimised typography
            </h3>
            <p>
              Arabic script requires specific fonts. Not every Latin web font has an Arabic
              counterpart — and when it doesn&apos;t, the browser falls back to a default system font
              that looks nothing like your brand. A properly built bilingual site specifies Arabic
              font families explicitly, ensures consistent rendering across devices, and maintains
              the visual quality of the design in both languages.
            </p>

            <h3 className="font-display font-bold text-xl text-text-primary uppercase mt-10 mb-4">
              4. Language-specific SEO metadata
            </h3>
            <p>
              For Google to surface your Arabic pages to Arabic-speaking searchers, it needs Arabic
              metadata: titles, descriptions, and structured data in Arabic. It also needs the
              correct <code>hreflang</code> tags so it knows which version of your page to show
              to which user. Without this, even perfect Arabic content can end up invisible to
              the audience it was written for.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              The sectors where Arabic websites matter most in Dubai
            </h2>
            <p>
              Not every business in Dubai has equal urgency here — but many do. The sectors where
              a bilingual Arabic+English website delivers the clearest ROI:
            </p>
            <ul className="list-none space-y-3 my-6">
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span><strong className="text-text-primary">Retail &amp; e-commerce:</strong> Arabic-speaking shoppers are the backbone of Dubai&apos;s consumer market. Product pages, pricing, and checkout in Arabic remove the final barrier to purchase.</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span><strong className="text-text-primary">Medical &amp; health clinics:</strong> Patients want to understand procedures, costs, and credentials in their native language before they book. Trust is non-negotiable in healthcare.</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span><strong className="text-text-primary">Real estate:</strong> Emirati and Arab expat buyers research properties intensively online. Arabic listings reach an entirely different — and often higher-budget — buyer profile.</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span><strong className="text-text-primary">Legal &amp; financial services:</strong> High-stakes decisions require high-trust communication. Arabic content signals credibility to clients who need it most.</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span><strong className="text-text-primary">Restaurants &amp; hospitality:</strong> Dubai&apos;s Arab dining community is vocal, loyal, and active on Google. An Arabic menu and booking experience converts at rates English-only sites can&apos;t match.</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span><strong className="text-text-primary">Beauty &amp; wellness:</strong> Salons, spas, and clinics serving Emirati and Arab expat clientele see direct booking uplift from Arabic websites — especially combined with WhatsApp.</span></li>
            </ul>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              How Web Vanguard does it — AED 500 add-on, fully done for you
            </h2>
            <p>
              Most agencies treat Arabic websites as a major project: custom quote, weeks of back
              and forth, five-figure price tag. We&apos;ve packaged it differently.
            </p>
            <p>
              When you build your website with Web Vanguard, you can add a fully bilingual
              Arabic+English version for <strong className="text-text-primary">AED 500</strong>. That includes:
            </p>
            <ul className="list-none space-y-3 my-6">
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span><span>Full RTL layout — every section properly mirrored and structured</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span><span>Human-quality Arabic translation of all website copy</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span><span>Arabic-optimised typography with proper font fallbacks</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span><span>Language switcher built into the header — one tap to switch</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span><span>Arabic SEO metadata: titles, descriptions, hreflang tags</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">✓</span><span>Arabic Google Business Profile optimisation included</span></li>
            </ul>
            <p>
              We build the Arabic version in parallel with the English site. By the time your
              website goes live, both languages are ready — not &ldquo;coming soon.&rdquo; You show up to
              both markets from day one.
            </p>
            <p>
              This isn&apos;t a template swap. It&apos;s a properly built bilingual experience — the kind
              that actually earns trust from Arabic-speaking customers and ranks on Arabic-language
              Google searches.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              The window is open — but not forever
            </h2>
            <p>
              Right now, Arabic SEO in Dubai is undercompetitive. Most businesses haven&apos;t done
              it. The ones that do are building search authority that will compound for years.
            </p>
            <p>
              In two years, that gap will close. The businesses that act now will own the Arabic
              search rankings for their niche and location. The ones who wait will pay a much
              higher cost to compete later — if they can break in at all.
            </p>
            <p>
              A bilingual website isn&apos;t just about reaching more people. It&apos;s about owning a
              market before your competitors realise it exists. In Dubai, in 2026, that market
              is wide open.
            </p>

            <div className="mt-16 p-8 border border-accent/30 bg-accent/5">
              <p className="font-display font-black text-xl text-text-primary uppercase mb-3">
                Add Arabic to your website for AED 500
              </p>
              <p className="text-text-secondary font-body mb-6">
                Fully bilingual. Proper RTL. Human translation. Arabic SEO. Done for you — and
                live alongside your English site, from day one. Message us on WhatsApp and we&apos;ll
                show you exactly how it works for your business.
              </p>
              <a
                href="https://wa.me/971585324519"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-bg-primary px-6 py-3 font-display font-black uppercase text-sm tracking-wider hover:bg-accent/90 transition-colors"
              >
                WhatsApp us now <span>→</span>
              </a>
            </div>

            <p className="text-text-muted text-sm mt-10">
              Want to explore more ways to grow your Dubai business online?{' '}
              <Link href="/blog" className="text-accent hover:underline underline-offset-4">
                Browse all our guides →
              </Link>
            </p>

          </article>

          <BlogNav currentSlug="arabic-website-dubai" />
        </div>
      </main>
      <Footer />
    </>
  )
}
