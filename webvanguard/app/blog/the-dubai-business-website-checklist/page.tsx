import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'

export const metadata: Metadata = {
  title: 'The Dubai Business Website Checklist (2026): 15 Things Killing Your Revenue | Web Vanguard',
  description: 'Is your Dubai business website quietly losing you customers? Run through this 15-point checklist to find exactly what\'s broken — and fix it today.',
  keywords: [
    'website checklist Dubai',
    'website audit Dubai',
    'website problems Dubai',
    'improve website Dubai',
    'Dubai business website',
    'website conversion Dubai',
    'website review Dubai',
    'website mistakes Dubai',
    'business website UAE',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/blog/the-dubai-business-website-checklist',
  },
  openGraph: {
    title: 'The Dubai Business Website Checklist (2026): 15 Things Killing Your Online Revenue',
    description: 'Most Dubai business websites are quietly losing money every month. This checklist exposes why.',
    url: 'https://webvanguard.co/blog/the-dubai-business-website-checklist',
    type: 'article',
    publishedTime: '2026-03-25',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Dubai Business Website Checklist (2026)',
    description: '15 things killing your online revenue — and how to fix them.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Dubai Business Website Checklist (2026): 15 Things Killing Your Online Revenue',
  description: 'A practical 15-point checklist for Dubai business owners to audit their website and fix what\'s silently costing them customers.',
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
  url: 'https://webvanguard.co/blog/the-dubai-business-website-checklist',
  inLanguage: 'en',
  keywords: 'website checklist Dubai, website audit Dubai, website problems Dubai, improve website Dubai, Dubai business website',
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
            <span className="text-text-secondary">The Dubai Business Website Checklist</span>
          </nav>

          {/* Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                Conversion
              </span>
              <span className="text-xs text-text-muted font-body">8 min read</span>
              <span className="text-text-muted">·</span>
              <time className="text-xs text-text-muted font-body" dateTime="2026-03-25">March 25, 2026</time>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase leading-tight mb-6">
              The Dubai Business Website Checklist
              <span className="font-serif italic text-accent normal-case block mt-2">
                (2026): 15 things killing your revenue
              </span>
            </h1>
            <p className="text-text-secondary font-body text-xl leading-relaxed">
              Most Dubai business websites are quietly losing money every month.
              Not because they look bad — because they fail on basics that Google
              and real customers care about. This checklist exposes exactly where
              the leaks are.
            </p>
          </header>

          {/* Article body */}
          <article className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-8">

            <p>
              We&apos;ve audited hundreds of websites for businesses in Dubai — restaurants
              in JBR, clinics in DIFC, gyms in Marina, consultancies in Business Bay.
              The same problems keep appearing. The same revenue keeps leaking.
            </p>
            <p>
              Go through this checklist. Be honest. Every box you can&apos;t check is money
              walking out the door.
            </p>

            {/* Score bar */}
            <div className="my-10 border border-accent/30 bg-accent/5 p-6 rounded-sm not-prose">
              <p className="font-display font-black text-text-primary text-sm uppercase tracking-widest mb-2">How to use this</p>
              <p className="font-body text-text-secondary text-sm">
                Go through all 15 points. Count how many you can honestly check ✅.
                Score at the end. No cheating.
              </p>
            </div>

            {/* ─── SECTION 1: VISIBILITY ─── */}
            <div className="not-prose mt-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-border" />
                <p className="font-display font-black text-xs text-text-muted uppercase tracking-[0.2em] shrink-0">Section 01 — Visibility</p>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mb-2">
                Google can find you
              </h2>
              <p className="font-body text-text-muted text-sm mb-8">If you don&apos;t show up on Google, nothing else matters.</p>
            </div>

            <div className="not-prose space-y-6">
              {/* Item 1 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      01. Schema markup is installed
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      Schema tells Google what your business <em>is</em>. A restaurant, a clinic, a law firm —
                      without schema markup, Google is guessing. With it, you get rich results: star ratings,
                      opening hours, price ranges showing directly in search. A spa in JBR with proper
                      LocalBusiness schema gets a 30–40% higher click-through rate than one without.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> Go to search.google.com/test/rich-results and paste your URL.
                      If nothing shows up, you have no schema.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      02. Google Business Profile is claimed and complete
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      Your GBP is often the first thing a customer sees before they even hit your website.
                      If it&apos;s unclaimed, incomplete, or has wrong hours — you&apos;re losing walkins and calls
                      daily. A cafe in Marina with a fully optimised GBP (photos, menu, FAQs, reply to reviews)
                      gets 3–5x more direction requests than one with a blank listing.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> Search &ldquo;[your business name] Dubai&rdquo; on Google. Does your
                      profile appear? Are the hours correct? Are there photos?
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      03. Every page has a unique title tag and meta description
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      Title tags are how Google understands what each page is about. If your homepage
                      title is &ldquo;Home&rdquo; or your business name only — you&apos;re wasting the most valuable
                      SEO real estate on your site. Every page needs a specific, keyword-rich title
                      under 60 characters.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> Right-click your homepage → View Page Source → search for
                      &lt;title&gt;. What does it say?
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      04. Mobile page speed is above 70 on Google PageSpeed
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      Over 80% of Dubai web traffic is mobile. If your site loads slowly on a phone,
                      Google penalises your ranking and users leave. A 1-second delay reduces conversions
                      by 7%. Most websites we audit score under 50 on mobile — meaning Google is actively
                      pushing them down in results.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> Go to pagespeed.web.dev, enter your URL, select Mobile.
                      Score under 70? You have a problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── SECTION 2: FIRST IMPRESSION ─── */}
            <div className="not-prose mt-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-border" />
                <p className="font-display font-black text-xs text-text-muted uppercase tracking-[0.2em] shrink-0">Section 02 — First Impression</p>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mb-2">
                Visitors don&apos;t bounce
              </h2>
              <p className="font-body text-text-muted text-sm mb-8">You have 3 seconds. Either they stay or they&apos;re gone.</p>
            </div>

            <div className="not-prose space-y-6">
              {/* Item 5 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      05. The hero section answers: who, what, and where — in 3 seconds
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      Cover your homepage hero section and ask someone who&apos;s never seen your site: &ldquo;What
                      does this business do and where are they?&rdquo; If they can&apos;t answer in 3 seconds,
                      your hero is failing. A dental clinic in DIFC whose hero just says &ldquo;Your Smile
                      Matters&rdquo; with a stock photo is invisible. One that says &ldquo;Dental Clinic in DIFC —
                      Emergency appointments available same day&rdquo; converts.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> Vague taglines. Stock photos of people smiling.
                      No location mentioned. No clear service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      06. Real photos — not stock images
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      Dubai customers are sharp. They can spot a generic stock photo in milliseconds.
                      Real photos of your actual space, your actual team, your actual product create
                      immediate trust. A barber shop in JBR with photos of their chairs, their tools,
                      and their team will always outperform one using a Getty Images barbershop template.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> Reverse-image-search your homepage photo.
                      If it shows up on 50 other sites, you&apos;re using stock.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      07. Zero placeholder content
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      &ldquo;Lorem ipsum dolor sit amet.&rdquo; &ldquo;Your tagline here.&rdquo; &ldquo;Coming soon.&rdquo;
                      These are live on more Dubai business websites than you&apos;d believe. Placeholder
                      content signals one thing to a visitor: this business doesn&apos;t care. That&apos;s the
                      last message you want to send.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> Ctrl+F &ldquo;lorem&rdquo; on your website. Hit? Fix immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── SECTION 3: CONVERSION ─── */}
            <div className="not-prose mt-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-border" />
                <p className="font-display font-black text-xs text-text-muted uppercase tracking-[0.2em] shrink-0">Section 03 — Conversion</p>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mb-2">
                Visitors take action
              </h2>
              <p className="font-body text-text-muted text-sm mb-8">Getting traffic is worthless if nobody contacts you.</p>
            </div>

            <div className="not-prose space-y-6">
              {/* Item 8 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      08. One clear CTA above the fold
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      &ldquo;Above the fold&rdquo; means what&apos;s visible without scrolling. Every visitor should see
                      one clear next step the moment they land — &ldquo;Book a consultation,&rdquo; &ldquo;View menu,&rdquo;
                      &ldquo;Get a free quote.&rdquo; Not five buttons competing for attention. Not buried below
                      three paragraphs of company history. One. Clear. Action.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> More than two CTAs visible on first load, or no CTA at all until you scroll.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 9 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      09. WhatsApp button is visible on every page
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      WhatsApp is how Dubai communicates. Full stop. A floating WhatsApp button with
                      a pre-filled message (&ldquo;Hi, I found you on your website and want to enquire about...&rdquo;)
                      is one of the highest-converting elements you can add. If you don&apos;t have one,
                      you&apos;re making customers work harder than they want to.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> No WhatsApp button, or WhatsApp link buried in the footer only.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 10 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      10. Phone number is click-to-call
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      If your phone number is displayed as plain text instead of a clickable
                      <code className="text-accent text-xs mx-1">tel:</code> link, mobile users have to copy it,
                      switch apps, and paste it. Most won&apos;t. They&apos;ll call someone else instead.
                      Your phone number should be a tap, not a task.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> On mobile, tap your phone number. Does it open the dialer automatically?
                      If not — it&apos;s broken.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 11 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      11. There&apos;s a booking form — not just a contact email
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      &ldquo;Email us at info@yourbusiness.com&rdquo; is a conversion killer. Friction kills intent.
                      A proper booking or enquiry form — with name, service, preferred date, phone —
                      converts 3–5x better than an email address. Customers want to take action right now,
                      not open their mail app, compose a message, and wonder if anyone reads it.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> No form on your site. Contact page shows only an email address.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 12 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      12. Location and opening hours are visible — no digging required
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      If someone has to hunt for your address or your hours, they won&apos;t. These should
                      be in the footer on every page, ideally with a Google Maps embed too. A beauty salon
                      in Marina that lists &ldquo;Marina Walk, Dubai&rdquo; with hours &ldquo;10am–9pm daily&rdquo; directly
                      on their homepage footer gets more walk-ins than one that makes you click to a
                      separate &ldquo;Find Us&rdquo; page.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> Address only on a hidden contact page. No hours visible anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── SECTION 4: TRUST ─── */}
            <div className="not-prose mt-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-border" />
                <p className="font-display font-black text-xs text-text-muted uppercase tracking-[0.2em] shrink-0">Section 04 — Trust</p>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mb-2">
                Visitors believe you
              </h2>
              <p className="font-body text-text-muted text-sm mb-8">Strangers need proof before they pay. Give it to them.</p>
            </div>

            <div className="not-prose space-y-6">
              {/* Item 13 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      13. Real testimonials with names and photos
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      &ldquo;Great service!&rdquo; — Anonymous. Nobody believes this. Real testimonials have a first
                      and last name, ideally a photo, and a specific claim: &ldquo;Booked a last-minute
                      appointment in DIFC before a pitch meeting — they fit me in same day and my
                      suit looked immaculate.&rdquo; That sells. Generic praise doesn&apos;t.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> No testimonials. Or testimonials with initials only and no photo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 14 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      14. Social proof numbers and credentials are visible
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      Numbers create instant credibility. &ldquo;500+ clients served.&rdquo; &ldquo;4.9 stars on Google
                      (200 reviews).&rdquo; &ldquo;Licensed by Dubai Health Authority.&rdquo; &ldquo;ISO 9001 certified.&rdquo;
                      These signals answer the question every visitor has: &ldquo;Can I trust this business?&rdquo;
                      If you have them and they&apos;re not on your site, you&apos;re hiding your best selling points.
                    </p>
                    <p className="font-body text-text-muted text-xs mt-3">
                      ❌ <strong>Fail signal:</strong> No numbers, no badges, no certifications visible above the fold.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── SECTION 5: MAINTENANCE ─── */}
            <div className="not-prose mt-14">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-border" />
                <p className="font-display font-black text-xs text-text-muted uppercase tracking-[0.2em] shrink-0">Section 05 — Maintenance</p>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mb-2">
                The basics still work
              </h2>
              <p className="font-body text-text-muted text-sm mb-8">A broken site is worse than no site. Don&apos;t let it rot.</p>
            </div>

            <div className="not-prose space-y-6">
              {/* Item 15 */}
              <div className="border border-border p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✅</span>
                  <div>
                    <p className="font-display font-bold text-text-primary text-base mb-2">
                      15. SSL active, no broken links, forms submit, mobile speed &gt;70
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      Bundle these because they&apos;re all the same category: <strong className="text-text-primary">basics
                      that should work</strong>. HTTPS (the padlock icon) is non-negotiable — Chrome
                      actively warns visitors about HTTP sites. Broken links signal a neglected business.
                      A contact form that doesn&apos;t send emails is costing you enquiries you&apos;ll never
                      know about. And mobile speed under 50? Google will bury you.
                    </p>
                    <div className="mt-4 space-y-2">
                      {[
                        'Open your site — is there a padlock? (SSL active)',
                        'Fill out your contact form — do you receive the email?',
                        'Click every nav link — does any return a 404?',
                        'Check pagespeed.web.dev on mobile — score above 70?',
                      ].map((check) => (
                        <div key={check} className="flex items-start gap-2">
                          <span className="text-accent text-xs shrink-0 mt-0.5">→</span>
                          <p className="font-body text-text-muted text-xs">{check}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── SCORE BLOCK ─── */}
            <div className="not-prose mt-14 border-2 border-accent/40 bg-accent/5 p-8 rounded-sm">
              <p className="font-display font-black text-text-primary text-2xl uppercase mb-4">Your Score</p>
              <div className="space-y-3 mb-6">
                {[
                  { range: '13–15 ✅', label: 'Excellent.', note: 'Your site is doing real work. Fine-tune and scale.' },
                  { range: '10–12 ✅', label: 'Decent — but leaking.', note: 'Fix the gaps. You\'re leaving money on the table.' },
                  { range: '7–9 ✅', label: 'Underperforming.', note: 'Multiple critical failures. Every month you wait costs you.' },
                  { range: 'Under 7 ✅', label: 'Broken.', note: 'Your website is actively turning customers away right now.' },
                ].map((row) => (
                  <div key={row.range} className="flex items-start gap-4">
                    <span className="font-display font-bold text-accent text-sm shrink-0 w-24">{row.range}</span>
                    <div>
                      <span className="font-display font-bold text-text-primary text-sm">{row.label}</span>
                      <span className="font-body text-text-muted text-sm ml-2">{row.note}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-body text-text-primary font-semibold text-base border-t border-border/50 pt-6">
                If you checked fewer than 10 of these — your website is costing you customers right now.
                We fix all of this.
              </p>
            </div>

            {/* Closing */}
            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              What to do next
            </h2>
            <p>
              You now know exactly where your website is failing. The question is: what
              are you going to do about it?
            </p>
            <p>
              Option 1: Fix it yourself. Work through the list. Most items have free tools
              and free fixes — the knowledge is the hard part, and you now have it.
            </p>
            <p>
              Option 2: Let us audit it for you. We&apos;ll go through every item on this list,
              show you exactly what&apos;s broken, and give you a prioritised fix plan.
              No charge. No commitment. Just clarity.
            </p>
            <div className="border-l-2 border-accent pl-6 my-8">
              <p className="text-text-primary font-semibold">
                We&apos;ve fixed these same 15 problems for businesses across JBR, DIFC, Marina,
                Business Bay, and Downtown. The pattern is always the same. The results are
                always the same: more enquiries, lower bounce rate, higher ranking.
              </p>
            </div>
            <p>
              The only question is how long you&apos;re willing to leave money on the table.
            </p>

          </article>

          <BlogNav currentSlug="the-dubai-business-website-checklist" />

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-text-muted text-sm font-body mb-4 uppercase tracking-widest">Ready to fix it?</p>
            <h3 className="font-display font-black text-3xl md:text-4xl text-text-primary uppercase mb-6">
              Get your free<br />
              <span className="font-serif italic text-accent normal-case">website audit.</span>
            </h3>
            <p className="text-text-secondary font-body mb-8 max-w-lg">
              Send us your URL and we&apos;ll go through all 15 points, tell you exactly
              what&apos;s broken, and show you how to fix it. No pitch. Just the truth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                <span>Request a free audit</span>
              </Link>
              <a
                href="https://wa.me/971501234567?text=Hi%2C%20I%20ran%20through%20your%20website%20checklist%20and%20want%20a%20free%20audit%20of%20my%20site"
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
