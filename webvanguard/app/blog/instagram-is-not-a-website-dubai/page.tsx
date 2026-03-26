import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'

export const metadata: Metadata = {
  title: 'Why Instagram Is Not a Website | Web Vanguard Dubai',
  description: '4,800 followers and still losing customers to competitors. Here\'s why Instagram can\'t replace a website for Dubai businesses — and what to do instead.',
  keywords: [
    'website vs instagram dubai',
    'instagram not enough dubai business',
    'web design dubai',
    'instagram vs website dubai',
    'do i need a website dubai',
    'instagram business dubai',
    'local seo dubai',
    'google search dubai business',
    'web vanguard dubai',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/blog/instagram-is-not-a-website-dubai',
  },
  openGraph: {
    title: 'Why Instagram Is Not a Website | Web Vanguard Dubai',
    description: '4,800 followers and still losing customers to competitors. Here\'s why Instagram can\'t replace a website for Dubai businesses — and what to do instead.',
    url: 'https://webvanguard.co/blog/instagram-is-not-a-website-dubai',
    type: 'article',
    publishedTime: '2026-03-25',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Instagram Is Not a Website | Web Vanguard Dubai',
    description: '4,800 followers and still losing customers to competitors. Here\'s why Instagram can\'t replace a website for Dubai businesses.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Instagram Is Not a Website (And What It\'s Costing Your Dubai Business)',
  description: '4,800 followers and still losing customers to competitors. Here\'s why Instagram can\'t replace a website for Dubai businesses — and what to do instead.',
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
  datePublished: '2026-03-25',
  url: 'https://webvanguard.co/blog/instagram-is-not-a-website-dubai',
  inLanguage: 'en',
  keywords: 'website vs instagram dubai, instagram not enough dubai business, web design dubai',
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
            <span className="text-text-secondary">Why Instagram Is Not a Website</span>
          </nav>

          {/* Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                Lead Generation
              </span>
              <span className="text-xs text-text-muted font-body">6 min read</span>
              <span className="text-text-muted">·</span>
              <time className="text-xs text-text-muted font-body" dateTime="2026-03-25">March 25, 2026</time>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase leading-tight mb-6">
              Why Instagram Is Not a Website
              <span className="font-serif italic text-accent normal-case block mt-2">
                (And What It&apos;s Costing Your Dubai Business)
              </span>
            </h1>
            <p className="text-text-secondary font-body text-xl leading-relaxed">
              You have 4,800 followers. You post consistently. Your content looks great.
              And you&apos;re still losing customers to competitors every single day.
              Here&apos;s why — and what to do about it.
            </p>
          </header>

          {/* Article body */}
          <article className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-8">

            {/* Hook */}
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold text-lg">
                You have 4,800 Instagram followers. Last Tuesday at 9pm, someone in Dubai Marina
                searched &ldquo;best yoga studio near me.&rdquo; They found three results. None of them was you.
                They booked the competitor.
              </p>
              <p className="text-text-muted font-body mt-3">
                Your Instagram had nothing to do with that search. It never does.
              </p>
            </div>

            <p>
              This is happening to businesses all over Dubai — in Marina, JBR, DIFC, Downtown,
              Business Bay. Great Instagram accounts, loyal followers, beautiful content.
              And a slow leak of customers to competitors who simply have a website.
            </p>

            <p>
              The uncomfortable truth: if someone doesn&apos;t already follow you, Instagram doesn&apos;t
              exist for them. Google does.
            </p>

            {/* The myth */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              &ldquo;Instagram IS my website&rdquo; — The myth that&apos;s costing you bookings
            </h2>

            <p>
              It&apos;s one of the most common things we hear from Dubai business owners.
              And it makes complete sense — Instagram is where your customers are, it looks
              professional, it has your photos, your contact info, your location.
              Why would you need anything else?
            </p>

            <p>
              Because Instagram is a social network. Not a search engine. Not a booking platform.
              Not a sales tool. It&apos;s built for one thing: keeping people scrolling.
              That&apos;s great for Meta&apos;s revenue. It&apos;s not great for yours.
            </p>

            <p>
              Every day you run your business on Instagram alone, you&apos;re leaving a door unlocked
              for your competitors to walk through.
            </p>

            {/* 5 reasons */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              5 reasons Instagram can&apos;t replace a website
            </h2>

            {/* Reason 1 */}
            <h3 className="font-display font-bold text-xl text-text-primary uppercase mt-10 mb-4">
              1. Google can&apos;t index your Instagram content
            </h3>

            <p>
              When someone in DIFC types &ldquo;pilates studio near me&rdquo; at 10pm, Google shows them
              results based on websites — pages it has crawled, indexed, and ranked.
              Your Instagram posts? Not indexed. Your Instagram bio? Barely visible.
              Your 4,800 followers? Completely irrelevant to that search.
            </p>

            <p>
              Local SEO — showing up when people search for your service in your area —
              is entirely dependent on having a website. No website, no ranking.
              It&apos;s not a technicality. It&apos;s how search engines work.
            </p>

            <div className="my-8 border border-border rounded-sm overflow-hidden not-prose">
              <div className="bg-surface/50 px-6 py-4 border-b border-border">
                <p className="font-display font-black text-sm text-text-primary uppercase tracking-widest">
                  What you&apos;re missing without Google rankings
                </p>
              </div>
              {[
                { area: 'Yoga studio — Dubai Marina', volume: '~300 searches/month', lost: 'AED 2,400–4,800/month in missed bookings' },
                { area: 'Barber — JBR', volume: '~200 searches/month', lost: 'AED 1,500–3,000/month in missed appointments' },
                { area: 'Café — DIFC', volume: '~500 searches/month', lost: 'AED 5,000–10,000/month in invisible foot traffic' },
              ].map((row) => (
                <div key={row.area} className="px-6 py-5 border-b border-border last:border-0">
                  <p className="font-display font-bold text-text-primary text-sm">{row.area}</p>
                  <p className="font-body text-text-muted text-xs mt-1">{row.volume}</p>
                  <p className="font-body text-accent text-sm font-semibold mt-1">{row.lost}</p>
                </div>
              ))}
            </div>

            {/* Reason 2 */}
            <h3 className="font-display font-bold text-xl text-text-primary uppercase mt-10 mb-4">
              2. The algorithm decides who sees you — not you
            </h3>

            <p>
              You posted yesterday. Great photo. Relevant caption. Hashtags on point.
              And Instagram showed it to 3% of your followers. Because that&apos;s what the
              algorithm decided.
            </p>

            <p>
              Instagram&apos;s reach has been declining for years. What used to hit 20–30%
              of your audience now hits 3–8% on a good day. And there&apos;s nothing you can do
              about it — unless you pay for ads.
            </p>

            <p>
              A website is different. Every page you build, every service you describe, every
              location you mention — that content stays live and searchable permanently.
              No algorithm. No feed. No competition for attention. Just you and the person
              actively searching for what you offer.
            </p>

            {/* Reason 3 */}
            <h3 className="font-display font-bold text-xl text-text-primary uppercase mt-10 mb-4">
              3. No booking, no form, no WhatsApp in one tap — just DMs that get lost
            </h3>

            <p>
              Think about your current customer flow on Instagram:
            </p>

            <ul className="space-y-2 my-6">
              {[
                'They see your post in their feed',
                'They tap your profile',
                'They scroll through your photos',
                'They tap "Message"',
                'They send a DM',
                'You\'re asleep, in a session, or at capacity',
                'The DM sits unanswered for 6 hours',
                'They book someone else',
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>

            <p>
              That&apos;s not a sales funnel. That&apos;s a leak.
            </p>

            <p>
              A website with a WhatsApp button, a contact form, and a clear call to action
              captures that lead at 11pm — when you&apos;re not available — and delivers it
              straight to your inbox. You wake up with leads. Not missed DMs.
            </p>

            {/* Reason 4 */}
            <h3 className="font-display font-bold text-xl text-text-primary uppercase mt-10 mb-4">
              4. You don&apos;t own the platform — Meta can suspend you tomorrow
            </h3>

            <p>
              This one is uncomfortable but necessary.
            </p>

            <p>
              Your Instagram account is not yours. It&apos;s Meta&apos;s. They wrote the terms of service.
              They built the algorithm. They run the servers. And they can — and do — suspend,
              shadowban, or limit accounts without warning, without explanation, and without appeal.
            </p>

            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                A photography studio in Downtown Dubai had 12,000 followers and zero website.
                Their account was flagged for a copyright issue on a background track in a Reel.
                It took 47 days to restore. During that time: no leads, no bookings, no presence.
                Just a blank profile and a growing list of unanswered enquiries.
              </p>
            </div>

            <p>
              Your website is yours. Your domain, your content, your SEO rankings — nobody
              can take them away. It&apos;s the only digital asset you actually own.
            </p>

            {/* Reason 5 */}
            <h3 className="font-display font-bold text-xl text-text-primary uppercase mt-10 mb-4">
              5. You have zero data: no idea who visited, from where, at what time
            </h3>

            <p>
              Instagram gives you likes, reach, and profile visits. That&apos;s not data.
              That&apos;s vanity metrics.
            </p>

            <p>
              A website with Google Analytics tells you:
            </p>

            <ul className="space-y-2 my-6">
              {[
                'How many people visited your site this week — and from which area of Dubai',
                'Which of your services gets the most interest',
                'Where people drop off (before booking, before calling, before clicking)',
                'What exact search terms brought them to you',
                'Whether your Instagram is actually sending you conversions — or just vanity clicks',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <p>
              Without this, you&apos;re making marketing decisions blind. With it, you know exactly
              where to invest your time and money.
            </p>

            {/* The combo */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              The combo that actually works
            </h2>

            <p>
              This isn&apos;t about killing your Instagram. It&apos;s about understanding what each
              tool is built for.
            </p>

            <div className="space-y-4 my-8 not-prose">
              {[
                {
                  platform: 'Instagram',
                  job: 'Discovery',
                  desc: 'Brand awareness, community, showing your work. Instagram is where people encounter you. It\'s the top of the funnel.',
                },
                {
                  platform: 'Website',
                  job: 'Conversion',
                  desc: 'Booking, contact, trust-building, Google ranking. A website is where people become customers. It\'s the bottom of the funnel.',
                },
              ].map((item) => (
                <div key={item.platform} className="border border-border p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <p className="font-display font-black text-text-primary uppercase">{item.platform}</p>
                    <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-2 py-0.5 rounded-sm">
                      {item.job}
                    </span>
                  </div>
                  <p className="font-body text-text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <p>
              Each does one job. Neither replaces the other. Together, they create a system
              where Instagram attracts and your website converts. Right now, you only have half
              the system — and the weaker half at that.
            </p>

            {/* What a website actually does */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              What a website actually does for your business
            </h2>

            <p>
              Forget the tech jargon. Here&apos;s what it looks like in practice:
            </p>

            <div className="my-10 border border-border rounded-sm overflow-hidden not-prose">
              <div className="bg-surface/50 px-6 py-4 border-b border-border">
                <p className="font-display font-black text-sm text-text-primary uppercase tracking-widest">
                  A Tuesday night in Dubai Marina — with a website
                </p>
              </div>
              {[
                {
                  time: '11:04 PM',
                  action: 'Someone searches "yoga studio Dubai Marina" on Google',
                  result: 'They find you on the first page',
                },
                {
                  time: '11:06 PM',
                  action: 'They land on your website — class schedule, prices, photos',
                  result: 'They get the information they need in 90 seconds',
                },
                {
                  time: '11:07 PM',
                  action: 'They click the WhatsApp button',
                  result: 'You get a message instantly on your phone',
                },
                {
                  time: '11:08 PM',
                  action: 'Or they fill the contact form instead',
                  result: 'It lands in your inbox — you reply in the morning',
                },
                {
                  time: 'Next morning',
                  action: 'You check your inbox',
                  result: '3 new leads. Instagram got you 12 likes.',
                },
              ].map((row) => (
                <div key={row.time} className="px-6 py-5 border-b border-border last:border-0 grid grid-cols-[80px_1fr] gap-4 items-start">
                  <p className="font-mono text-xs text-accent shrink-0">{row.time}</p>
                  <div>
                    <p className="font-body text-text-secondary text-sm">{row.action}</p>
                    <p className="font-body text-text-muted text-xs mt-1">→ {row.result}</p>
                  </div>
                </div>
              ))}
            </div>

            <p>
              That&apos;s not a fantasy. That&apos;s what our clients experience within the first
              30 days of launching their site. The leads don&apos;t come from magic —
              they come from being findable when someone is actively searching.
            </p>

            <p>
              Instagram gets you likes at 9pm when people are scrolling. Google gets you
              customers at 11pm when they&apos;re ready to book.
            </p>

          </article>

          <BlogNav currentSlug="instagram-is-not-a-website-dubai" />

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-text-muted text-sm font-body mb-4 uppercase tracking-widest">Ready to be findable?</p>
            <h3 className="font-display font-black text-3xl md:text-4xl text-text-primary uppercase mb-6">
              Stop relying on the<br />
              <span className="font-serif italic text-accent normal-case">algorithm to feed you.</span>
            </h3>
            <p className="text-text-secondary font-body mb-8 max-w-lg">
              We&apos;ll build a live demo for your specific business before you commit to anything.
              A real website — designed, developed, live on the internet — so you can see it
              working before you pay a single dirham.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get a free demo</span>
              </Link>
              <a
                href="https://wa.me/971585324519?text=Hi%2C%20I%20read%20your%20article%20about%20Instagram%20vs%20website%20and%20want%20to%20know%20more"
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
