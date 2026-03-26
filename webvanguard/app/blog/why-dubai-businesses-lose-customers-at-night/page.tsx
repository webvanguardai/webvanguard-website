import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'

export const metadata: Metadata = {
  title: 'Why Dubai Businesses Lose Customers at Night | Web Vanguard',
  description: 'It\'s 11pm. Someone in Dubai Marina is searching for your service. Your website is nowhere to be found. Here\'s the hidden cost of going offline after dark — and how to fix it.',
  keywords: [
    'website Dubai business',
    'online presence Dubai',
    'WhatsApp website Dubai',
    'lose customers Dubai',
    'website after hours Dubai',
    'lead generation Dubai',
    'digital presence Dubai',
    'web design Dubai',
    'web vanguard dubai',
    'Dubai business website 2026',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/blog/why-dubai-businesses-lose-customers-at-night',
  },
  openGraph: {
    title: 'Why Dubai Businesses Lose Customers at Night | Web Vanguard',
    description: 'It\'s 11pm. Someone in Dubai is searching for your service. Here\'s why you\'re losing them — and how to capture leads while you sleep.',
    url: 'https://webvanguard.co/blog/why-dubai-businesses-lose-customers-at-night',
    type: 'article',
    publishedTime: '2026-03-26',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Dubai Businesses Lose Customers at Night | Web Vanguard',
    description: 'It\'s 11pm. Someone in Dubai is searching for your service. Here\'s why you\'re losing them.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Dubai Businesses Lose Customers at Night',
  description: 'It\'s 11pm. Someone in Dubai Marina is searching for your service. Your website is nowhere to be found. Here\'s the hidden cost of going offline after dark — and how to fix it.',
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
  url: 'https://webvanguard.co/blog/why-dubai-businesses-lose-customers-at-night',
  inLanguage: 'en',
  keywords: 'website Dubai business, online presence Dubai, WhatsApp website Dubai, lose customers Dubai night',
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
            <span className="text-text-secondary">Why Dubai Businesses Lose Customers at Night</span>
          </nav>

          {/* Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                Lead Generation
              </span>
              <span className="text-xs text-text-muted font-body">7 min read</span>
              <span className="text-text-muted">·</span>
              <time className="text-xs text-text-muted font-body" dateTime="2026-03-26">March 26, 2026</time>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase leading-tight mb-6">
              Why Dubai Businesses Lose Customers
              <span className="font-serif italic text-accent normal-case block mt-2">
                at Night
              </span>
            </h1>
            <p className="text-text-secondary font-body text-xl leading-relaxed">
              It&apos;s 11pm. You&apos;re asleep. Someone in Dubai Marina just searched for your service,
              found your competitor&apos;s website, and booked an appointment. You&apos;ll never know
              this happened. But it&apos;s happening every single night.
            </p>
          </header>

          {/* Article body */}
          <article className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-8">

            {/* Hook */}
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold text-lg">
                Dubai doesn&apos;t sleep. People browse, research, and make decisions at midnight,
                at 2am, at 6am before the school run. If your business goes offline when you do,
                you&apos;re handing those leads to competitors who don&apos;t.
              </p>
              <p className="text-text-muted font-body mt-3">
                This isn&apos;t a theory. It&apos;s a pattern we see across every vertical —
                from clinics to cafés, salons to tutoring centers.
              </p>
            </div>

            <p>
              Dubai has one of the highest smartphone penetration rates in the world — over 91%.
              People here are constantly connected. They Google things at midnight. They book
              appointments from the back of a taxi. They compare options while waiting for
              their coffee to brew. And your <strong>website Dubai business</strong> presence
              determines whether they find you or your competitor.
            </p>

            <p>
              The uncomfortable truth is that most Dubai businesses treat their online presence
              like a brochure: static, passive, and closed after hours. But your customers don&apos;t
              operate on business hours. Their attention, their intent, and their decision to buy
              happens when it happens — often late at night.
            </p>

            {/* Pain Point 1 */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              1. You have no WhatsApp on your website — and that&apos;s costing you enquiries
            </h2>

            <p>
              In the UAE, WhatsApp isn&apos;t just a messaging app. It&apos;s how people do business.
              Customers expect to tap a button and open a WhatsApp chat instantly —
              whether it&apos;s 2pm or 2am. The message sits in your inbox.
              You reply when you&apos;re back. The lead is captured.
            </p>

            <p>
              Without a <strong>WhatsApp website Dubai</strong> integration, here&apos;s what happens:
              someone lands on your site at night, wants to ask a question, and has no easy way
              to reach you. No button. No chat. Just a phone number they&apos;d have to dial — at midnight.
              So they don&apos;t. They leave. They find the competitor with a WhatsApp button, tap it,
              and send a message in ten seconds.
            </p>

            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                A physiotherapy clinic in Business Bay has no WhatsApp button on their site.
                A competitor two blocks away does. Every night, patients searching &ldquo;physio Dubai Business Bay&rdquo;
                at 10pm end up messaging the competitor. Not because the competitor is better.
                Because they made it easy to reach them.
              </p>
            </div>

            {/* Pain Point 2 */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              2. No online booking means you exist in business hours only
            </h2>

            <p>
              Think about when people decide to book a dentist, a physio, a tutor, or a nail appointment.
              It&apos;s rarely during a calm Tuesday afternoon. It&apos;s usually after something happens —
              a pain flares up at 9pm, a school report comes home on a Friday, a wedding
              invitation arrives on a Sunday morning.
            </p>

            <p>
              If your website has no booking system, you only exist to those people when your phone is on.
              The moment they can&apos;t reach you — because you&apos;re busy, asleep, or at capacity — 
              that lead evaporates. For businesses with strong <strong>online presence Dubai</strong>,
              a booking system works 24/7. It captures the intent the moment it appears.
            </p>

            <div className="my-8 border border-border rounded-sm overflow-hidden not-prose">
              <div className="bg-surface/50 px-6 py-4 border-b border-border">
                <p className="font-display font-black text-sm text-text-primary uppercase tracking-widest">
                  When Dubai customers actually search and book
                </p>
              </div>
              {[
                { time: '8:00–9:00 AM', behavior: 'Morning commute browsing — high intent searches', opportunity: 'Show up on Google, capture with instant WhatsApp' },
                { time: '12:30–2:00 PM', behavior: 'Lunch break research — comparing options', opportunity: 'Clear pricing, service pages, easy contact' },
                { time: '9:00–11:30 PM', behavior: 'Evening wind-down — highest booking intent', opportunity: 'Online booking form or WhatsApp captures the lead' },
                { time: '11:30 PM–2:00 AM', behavior: 'Late-night browsing — impulse searches', opportunity: 'Contact form with auto-reply: "We\'ll confirm tomorrow"' },
              ].map((row) => (
                <div key={row.time} className="px-6 py-5 border-b border-border last:border-0">
                  <p className="font-display font-bold text-text-primary text-sm">{row.time}</p>
                  <p className="font-body text-text-muted text-xs mt-1">{row.behavior}</p>
                  <p className="font-body text-accent text-sm font-semibold mt-1">→ {row.opportunity}</p>
                </div>
              ))}
            </div>

            {/* Pain Point 3 */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              3. Google can&apos;t find you — so customers at night can&apos;t either
            </h2>

            <p>
              Here&apos;s the chain reaction that plays out for most Dubai businesses every night:
            </p>

            <ul className="space-y-2 my-6">
              {[
                'Customer searches "nail salon Business Bay" at 10:30pm',
                'Google shows results — all of them are websites with proper SEO',
                'Your Instagram profile doesn\'t appear in that search. Ever.',
                'Your competitor\'s website ranks first. They get the click.',
                'You wake up tomorrow having lost another lead you didn\'t know existed.',
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                  <span className="text-accent shrink-0 mt-0.5 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>

            <p>
              Local SEO — the kind that gets your <strong>website Dubai business</strong> appearing
              when someone nearby searches for what you offer — requires a proper site.
              Google needs pages to crawl, content to index, location signals to trust.
              A slow, thin, or poorly structured website ranks nowhere.
              And a business with no website simply doesn&apos;t exist in Google search.
            </p>

            <p>
              The businesses winning at night aren&apos;t running ads. They invested in their
              <strong> online presence Dubai</strong> once — pages optimized for their area,
              their service, their customer — and Google keeps sending them traffic every night
              for free.
            </p>

            {/* Pain Point 4 */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              4. Your competitors are open 24/7 — their website is doing the work
            </h2>

            <p>
              This is the asymmetry that catches most business owners off guard. Your competitor
              doesn&apos;t need to be online at midnight. Their website is. It answers questions, shows
              prices, builds trust, and captures leads — all while they sleep.
            </p>

            <p>
              A well-built site is a 24/7 sales employee who never calls in sick, never asks
              for a raise, and never loses a lead because they were too busy to pick up the phone.
              Every hour your website isn&apos;t doing that work, you&apos;re paying for staff and
              marketing without the round-the-clock return.
            </p>

            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                A wedding photography studio in Dubai with no WhatsApp on their site loses an
                average of 3–5 enquiries per week to competitors — specifically on weekend evenings,
                when couples are planning and browsing. At AED 6,500+ per package, that&apos;s
                AED 20,000–32,000 per month in invisible missed revenue.
              </p>
            </div>

            {/* Solution */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              How to stop losing customers at night
            </h2>

            <p>
              The fix isn&apos;t complicated, but it does require intention. Here&apos;s what a properly
              built <strong>website Dubai business</strong> does to capture after-hours demand:
            </p>

            <div className="space-y-4 my-8 not-prose">
              {[
                {
                  title: '01. WhatsApp CTA on every page',
                  desc: 'A floating WhatsApp button means anyone who lands on your site — at any hour — can reach you in two taps. The message waits in your inbox until morning.',
                },
                {
                  title: '02. Contact form with auto-reply',
                  desc: 'A simple form that sends an instant "We\'ll get back to you within 24 hours" keeps the customer engaged and prevents them from going to a competitor overnight.',
                },
                {
                  title: '03. Local SEO built into the site',
                  desc: 'Pages structured with your service + Dubai area = showing up when people search at night. One-time investment. Ongoing traffic.',
                },
                {
                  title: '04. Online booking or quote request',
                  desc: 'Even a simple "request a slot" form converts night browsers into real leads. Customers feel committed. You wake up with a confirmed pipeline.',
                },
              ].map((item) => (
                <div key={item.title} className="border border-border p-6">
                  <p className="font-display font-black text-text-primary uppercase text-sm mb-2">{item.title}</p>
                  <p className="font-body text-text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <p>
              At <strong>Web Vanguard</strong>, every site we build comes with these built in —
              WhatsApp integration, contact form, local SEO structure, mobile optimization.
              Not as add-ons. As defaults. Because a website that doesn&apos;t work at night isn&apos;t
              working hard enough.
            </p>

            <p>
              We also build a live demo of your site before you commit to anything — so you
              can see exactly how your business would look and function online, before you
              pay a single dirham.
            </p>

          </article>

          <BlogNav currentSlug="why-dubai-businesses-lose-customers-at-night" />

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-text-muted text-sm font-body mb-4 uppercase tracking-widest">Don&apos;t lose another night</p>
            <h3 className="font-display font-black text-3xl md:text-4xl text-text-primary uppercase mb-6">
              Start capturing leads<br />
              <span className="font-serif italic text-accent normal-case">while you sleep.</span>
            </h3>
            <p className="text-text-secondary font-body mb-8 max-w-lg">
              We&apos;ll build a live demo for your specific business before you commit to anything.
              A real website — with WhatsApp, booking, and local SEO built in — so you can
              see customers coming in before you pay a single dirham.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Get a free demo</span>
              </Link>
              <a
                href="https://wa.me/971585324519?text=Hi%2C%20I%20read%20your%20article%20about%20losing%20customers%20at%20night%20and%20want%20to%20fix%20this%20for%20my%20business"
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
