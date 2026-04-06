import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'

export const metadata: Metadata = {
  title: 'Why Dubai Logistics Companies Lose B2B Clients Before the First Call | Web Vanguard',
  description: 'B2B clients Google freight forwarders before calling. If your website is on HTTP, has no quote form, or isn\'t mobile-friendly — they move on. Here\'s what Dubai logistics companies get wrong.',
  keywords: [
    'freight forwarding website Dubai',
    'logistics company website UAE',
    'freight forwarder website design Dubai',
    'logistics website Dubai',
    'shipping company website UAE',
    'freight company digital presence Dubai',
    'logistics B2B website UAE',
    'cargo company website Dubai',
    'freight forwarding SEO Dubai',
    'logistics company online presence UAE',
    'Dubai freight forwarder website',
    'UAE logistics company website design',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/blog/why-dubai-logistics-companies-lose-clients',
  },
  openGraph: {
    title: 'Why Dubai Logistics Companies Lose B2B Clients Before the First Call',
    description: 'B2B clients Google freight forwarders before calling. If your website is on HTTP, has no quote form, or isn\'t mobile-friendly — they move on.',
    url: 'https://webvanguard.co/blog/why-dubai-logistics-companies-lose-clients',
    type: 'article',
    publishedTime: '2026-04-06',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Dubai Logistics Companies Lose B2B Clients Before the First Call',
    description: 'Your freight forwarding website is the first filter B2B clients use. HTTP warnings, no quote form, broken mobile — and they\'re gone. Here\'s the fix.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Dubai Logistics Companies Lose B2B Clients Before the First Call',
  description: 'B2B clients Google freight forwarders before calling. If your website is on HTTP, has no quote form, or isn\'t mobile-friendly — they move on. Here\'s what Dubai logistics companies get wrong.',
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
  datePublished: '2026-04-06',
  url: 'https://webvanguard.co/blog/why-dubai-logistics-companies-lose-clients',
  inLanguage: 'en',
  keywords: 'freight forwarding website Dubai, logistics company website UAE, freight forwarder website design Dubai, logistics website Dubai, shipping company website UAE',
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
            <span className="text-text-secondary">Logistics Company Website Dubai</span>
          </nav>

          {/* Header */}
          <header className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-body border border-accent/30 px-3 py-1 rounded-sm">
                Logistics &amp; Freight
              </span>
              <span className="text-xs text-text-muted font-body">7 min read</span>
              <span className="text-text-muted">·</span>
              <time className="text-xs text-text-muted font-body" dateTime="2026-04-06">April 6, 2026</time>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-text-primary uppercase leading-tight mb-6">
              Why Dubai Logistics Companies Lose B2B Clients Before the First Call
              <span className="font-serif italic text-accent normal-case block mt-2">
                The website problem nobody talks about
              </span>
            </h1>
            <p className="text-text-secondary font-body text-xl leading-relaxed">
              A procurement manager in Jebel Ali needs a new freight forwarder. Before they
              pick up the phone, they Google you. What they find on your website — in the
              next thirty seconds — decides whether they call you or move on to the next
              result. Here&apos;s what most Dubai logistics companies get wrong.
            </p>
          </header>

          {/* Article body */}
          <article className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-8">

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              The Google check happens before the call
            </h2>
            <p>
              This is how B2B procurement actually works in 2026. A supply chain manager, an
              import/export director, or a business owner in Dubai needs a freight forwarder.
              Maybe they got your number from a trade connection. Maybe they saw your company
              name at a logistics expo. Maybe they just searched Google.
            </p>
            <p>
              Whatever the source, the next thing they do is the same: they Google your
              company name and look at your website.
            </p>
            <p>
              This isn&apos;t a formality. It&apos;s a vetting step. They&apos;re asking: Does this company
              look legitimate? Professional? Like someone I can trust with a shipment worth
              AED 500,000? The answer comes from your website in under a minute. If the
              answer is no — or even uncertain — they move to the next company on their list.
              You never get the call.
            </p>
            <p>
              The painful part: your operations might be excellent. Your team might have
              decades of experience moving cargo through Jebel Ali Port, Dubai Airport Freezone,
              and across the GCC. None of that is visible if your website doesn&apos;t communicate
              it. And most freight forwarding websites in Dubai don&apos;t.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              &ldquo;Not Secure&rdquo; — three words that end the conversation
            </h2>
            <p>
              Open Chrome on your phone and navigate to an HTTP website. You&apos;ll see it
              immediately: a warning in the address bar that says &ldquo;Not Secure.&rdquo; On some
              browsers and networks, the warning is even more aggressive — a full interstitial
              page telling you the site may be dangerous.
            </p>
            <p>
              A surprising number of logistics company websites in the UAE are still running
              on HTTP instead of HTTPS. No SSL certificate. This means every visitor who
              lands on the site sees that warning. For a freight forwarder — an industry
              built on trust, bonded warehousing, and handling other companies&apos; goods — this
              is a catastrophic first impression.
            </p>
            <p>
              A B2B client evaluating a freight company thinks: if they can&apos;t secure their
              own website, how careful are they going to be with my shipment? The logic
              isn&apos;t technically accurate, but it doesn&apos;t need to be. The perception is enough
              to send them elsewhere.
            </p>
            <p>
              HTTPS is not optional in 2026. It&apos;s free (Let&apos;s Encrypt), trivial to set up,
              and the absence of it is a visible, jarring red flag to every single visitor.
              Fix this first.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              No quote form means your competitor gets the business
            </h2>
            <p>
              B2B clients in logistics are busy. They&apos;re managing multiple shipments, coordinating
              with suppliers, dealing with customs documentation. When they need a quote for
              a new freight lane, they want to submit the details and get a response — not
              hunt for a phone number, call during office hours, wait on hold, and explain
              the same information twice.
            </p>
            <p>
              If your website has no online quote form — or has a generic &ldquo;Contact Us&rdquo; form
              that doesn&apos;t capture the information a freight quote actually requires — you&apos;re
              creating friction. And friction in B2B sales means lost business, not delayed
              business. The client who can&apos;t easily request a quote from you will request one
              from your competitor who has a proper form on their website.
            </p>
            <p>
              A freight forwarding quote form should capture the essentials: origin and
              destination, cargo type, weight and dimensions, Incoterms, estimated frequency.
              Not a paragraph-long contact form. Not just an email address. A structured form
              that tells the prospect you understand logistics — and makes it easy for them
              to start the conversation at 9pm on a Sunday when the decision is fresh.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              Mobile: where your website gets judged first
            </h2>
            <p>
              Decision-makers in the UAE check things on their phones. The procurement director
              at a trading company in Dubai Silicon Oasis gets a referral for your freight
              company over lunch, pulls out their iPhone, and checks your website right there.
              What they see in the next fifteen seconds shapes their entire impression of your
              operation.
            </p>
            <p>
              If your website isn&apos;t responsive — if it loads as a tiny desktop version requiring
              pinch-to-zoom, if the navigation is broken on mobile, if images overflow the
              screen — it looks amateur. Not &ldquo;this website is old&rdquo; amateur. &ldquo;This company is
              not organised&rdquo; amateur. That association sticks.
            </p>
            <p>
              More than 70% of web traffic in the UAE comes from mobile devices. Your website
              needs to work perfectly on a phone. Clean layout, readable text, tap-friendly
              buttons, fast loading. If it doesn&apos;t, you&apos;re failing the test for the majority
              of people who look you up.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              WhatsApp is not optional in the UAE
            </h2>
            <p>
              This is specific to the UAE market and non-negotiable: WhatsApp is how business
              gets done here. Not email. Not phone calls. WhatsApp. Logistics clients, customs
              brokers, warehouse contacts, procurement teams — they all communicate primarily
              on WhatsApp.
            </p>
            <p>
              If your freight forwarding website doesn&apos;t have a visible WhatsApp button,
              you&apos;re making it harder to contact you than it needs to be. A floating WhatsApp
              button on every page, opening a pre-filled message — &ldquo;Hi, I&apos;d like to discuss
              freight services&rdquo; — captures high-intent leads at the moment they&apos;re ready to
              engage. No form to fill. No email to compose. One tap.
            </p>
            <p>
              In a market where relationships and speed matter, removing that friction is a
              genuine competitive advantage. Your competitor who has the WhatsApp button will
              get the message. You won&apos;t.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              Physical address and Google Maps: the legitimacy signal
            </h2>
            <p>
              Freight forwarding is a trust-heavy industry. Clients are handing you
              responsibility for goods, documentation, customs clearance, and sometimes
              millions of dirhams in inventory. They need to know you&apos;re a real, established
              operation — not a two-person setup operating from a Telegram group.
            </p>
            <p>
              A verified physical address on your website — ideally with a Google Maps embed
              showing your actual office or warehouse — is a legitimacy signal that matters
              more in logistics than almost any other industry. It tells the prospect: we
              have a real office, a real licence, a real presence in Dubai. You can come and
              meet us.
            </p>
            <p>
              Your Google Business Profile should be claimed, verified, and consistent with
              what&apos;s on your website. Name, address, phone number — identical across both.
              This isn&apos;t just about trust; it&apos;s also a local SEO signal that helps your
              company appear in Google Maps searches for &ldquo;freight forwarder Dubai&rdquo; or
              &ldquo;logistics company near Jebel Ali.&rdquo;
            </p>
            <p>
              Freight companies without a verified address on their website — or with an
              address that doesn&apos;t match their Google listing — look unestablished at best
              and suspicious at worst. Don&apos;t let that be the reason a client chooses
              someone else.
            </p>

            <h2 className="font-display font-black text-2xl md:text-3xl text-text-primary uppercase mt-14 mb-6">
              What a freight forwarding website in Dubai actually needs
            </h2>
            <p>
              Pull up your current website on your phone right now. Ask yourself:
            </p>
            <ul className="list-none space-y-3 my-6">
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span>Does it load in under three seconds?</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span>Does the address bar show a padlock (HTTPS), not &ldquo;Not Secure&rdquo;?</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span>Is there a visible WhatsApp button I can tap right now?</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span>Is there an online quote or enquiry form that actually captures freight details?</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span>Does the layout look professional on a phone screen?</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span>Is my physical address visible, with a Google Maps link or embed?</span></li>
              <li className="flex gap-3"><span className="text-accent font-bold">→</span><span>Does the site clearly state what lanes, cargo types, and services I cover?</span></li>
            </ul>
            <p>
              If any of those is a no, you&apos;re failing the vetting check that B2B clients
              run on you before making contact. And in a competitive market like Dubai freight
              forwarding — where there are hundreds of licensed forwarders and the client has
              alternatives at every turn — failing that check means losing business to someone
              who passed it.
            </p>
            <p>
              This isn&apos;t about having a flashy website. It&apos;s about having a functional,
              credible one. The bar isn&apos;t high — but most logistics company websites in
              the UAE are below it.
            </p>

            <div className="mt-16 p-8 border border-accent/30 bg-accent/5">
              <p className="font-display font-black text-xl text-text-primary uppercase mb-3">
                We build websites for logistics and freight companies in Dubai
              </p>
              <p className="text-text-secondary font-body mb-6">
                Web Vanguard builds fast, professional websites for freight forwarders,
                logistics operators, and cargo companies across the UAE. HTTPS from day one,
                WhatsApp integration, online quote forms, Google Maps embed, and full mobile
                optimisation. If your current site is failing the vetting check, let&apos;s fix it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/971585324519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-bg-primary px-6 py-3 font-display font-black uppercase text-sm tracking-wider hover:bg-accent/90 transition-colors"
                >
                  WhatsApp us now <span>→</span>
                </a>
                <a
                  href="mailto:hello@webvanguard.co"
                  className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 font-display font-black uppercase text-sm tracking-wider hover:bg-accent hover:text-bg-primary transition-colors"
                >
                  hello@webvanguard.co
                </a>
              </div>
            </div>

            <p className="text-text-muted text-sm mt-10">
              Want to explore more ways to grow your Dubai business online?{' '}
              <Link href="/blog" className="text-accent hover:underline underline-offset-4">
                Browse all our guides →
              </Link>
            </p>

          </article>

          <BlogNav currentSlug="why-dubai-logistics-companies-lose-clients" />
        </div>
      </main>
      <Footer />
    </>
  )
}
