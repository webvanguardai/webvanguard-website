'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'SEO Dubai — Get Found on Google & Win More Clients | Web Vanguard',
  description: 'SEO services in Dubai that get your business to page one of Google. Local SEO, content strategy, and technical optimization for Dubai businesses. Results you can measure.',
  keywords: [
    'seo dubai',
    'seo agency dubai',
    'local seo dubai',
    'google ranking dubai',
    'seo services dubai',
    'search engine optimization dubai',
    'seo consultant dubai',
    'digital marketing dubai',
    'google seo dubai',
    'best seo dubai',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/seo-dubai',
  },
  openGraph: {
    title: 'SEO Dubai — Get Found on Google & Win More Clients | Web Vanguard',
    description: 'SEO services in Dubai that get your business to page one of Google. Local SEO, content strategy, and technical optimization for Dubai businesses.',
    url: 'https://webvanguard.co/seo-dubai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Dubai — Get Found on Google & Win More Clients | Web Vanguard',
    description: 'SEO services in Dubai that get your business to page one of Google.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Dubai',
  description: 'Search engine optimization services for Dubai businesses. Local SEO, technical SEO, content strategy, and Google rankings.',
  provider: {
    '@type': 'Organization',
    name: 'Web Vanguard',
    url: 'https://webvanguard.co',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
  url: 'https://webvanguard.co/seo-dubai',
}

const deliverables = [
  {
    number: '01',
    title: 'Technical SEO Audit',
    desc: 'We find every issue killing your rankings — slow load times, broken links, missing tags, crawl errors. Fixed before anything else.',
  },
  {
    number: '02',
    title: 'Local SEO Setup',
    desc: 'Google Business Profile optimized. Local citations built. Schema markup deployed. You appear in map searches and "near me" queries.',
  },
  {
    number: '03',
    title: 'Keyword Strategy',
    desc: 'We identify the exact searches your ideal Dubai clients are making. Then we build pages that rank for those terms.',
  },
  {
    number: '04',
    title: 'On-Page Optimization',
    desc: 'Every page title, heading, meta description, and internal link optimized for your target keywords. Nothing left to chance.',
  },
  {
    number: '05',
    title: 'Content That Ranks',
    desc: 'We write and publish content that answers what Dubai clients are searching for — and funnels them to your service pages.',
  },
  {
    number: '06',
    title: 'Monthly Reporting',
    desc: 'Ranking positions, traffic, leads. You see exactly what\'s improving and what we\'re working on next. No vanity metrics.',
  },
]

const dubaiReasons = [
  {
    title: 'Dubai clients Google everything first',
    desc: 'Before calling anyone, your potential client searches Google. "Best lawyer DIFC." "Web designer Dubai Marina." "Spa JBR." If you\'re not on page one, they\'re calling your competitor.',
  },
  {
    title: 'The Dubai market is winner-takes-most',
    desc: 'The top 3 Google results capture over 60% of clicks. Position 5 is practically invisible. In a city this competitive, not ranking means not existing.',
  },
  {
    title: 'Most Dubai businesses have zero SEO',
    desc: 'The majority of Dubai businesses have slow sites, no local schema, and generic meta tags. That\'s your opportunity. Ranking here is faster than you think if you do it right.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Site Audit',
    desc: 'We tear apart your current site and identify every technical issue, ranking opportunity, and competitor gap.',
  },
  {
    step: '02',
    title: 'Strategy Build',
    desc: 'Keyword map, content plan, technical fixes priority list. A 90-day roadmap to measurable ranking improvements.',
  },
  {
    step: '03',
    title: 'Execution',
    desc: 'We fix, publish, and optimize. On-page, off-page, local citations, content. Consistent monthly work that compounds.',
  },
  {
    step: '04',
    title: 'Track & Improve',
    desc: 'Monthly reports with ranking movement, traffic growth, and lead attribution. We double down on what\'s working.',
  },
]

const faqs = [
  {
    q: 'How long does SEO take to work in Dubai?',
    a: 'You\'ll typically see ranking improvements in 60–90 days. Significant traffic growth usually takes 4–6 months. But unlike ads, results compound and keep growing without you spending more.',
  },
  {
    q: 'Is SEO worth it for a small Dubai business?',
    a: 'If your clients search Google before choosing a service — and most do — then yes. A single new client from organic search often pays for months of SEO. The ROI is usually much better than paid ads long-term.',
  },
  {
    q: 'Can you rank my business for Dubai keywords?',
    a: 'Yes. We specialize in local Dubai SEO. We know what terms Dubai clients search, how competitive different niches are, and the technical setup Google expects for local results.',
  },
  {
    q: 'Do I need a new website to do SEO?',
    a: 'Not always. We can optimize your existing site if it\'s technically sound. If it\'s on a slow platform with fundamental issues, we\'ll be honest — sometimes a rebuild is the right move.',
  },
]

export default function SeoDubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-bg">

        {/* Hero */}
        <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-6">SEO Dubai</p>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-text-primary uppercase leading-tight mb-8 max-w-5xl">
              Get found on<br />
              <span className="font-serif italic text-accent normal-case">Google.</span> Win more<br />
              clients.
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
              Your clients are searching Dubai Google right now. If they don&apos;t find you, they find your competitor. We fix that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                Get a free SEO audit →
              </Link>
              <a
                href="https://wa.me/971585324519?text=Hi%2C%20I%27m%20interested%20in%20SEO%20for%20my%20Dubai%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 text-sm font-body uppercase tracking-wider"
              >
                WhatsApp us →
              </a>
            </div>
          </motion.div>
        </section>

        {/* Deliverables */}
        <section className="py-24 px-6 md:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <p className="section-label mb-4">What we do</p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-text-primary uppercase">
                Real SEO.<br />
                <span className="font-serif italic text-accent normal-case">Not vanity metrics.</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border border-border p-8 hover:border-accent/50 transition-colors duration-300"
                >
                  <span className="text-accent font-display font-black text-sm tracking-widest block mb-4">{item.number}</span>
                  <h3 className="font-display font-black text-xl text-text-primary uppercase mb-3">{item.title}</h3>
                  <p className="text-text-secondary font-body text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dubai Context */}
        <section className="py-24 px-6 md:px-12 border-t border-border bg-bg">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <p className="section-label mb-4">Why it matters here</p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-text-primary uppercase">
                Dubai Google is<br />
                <span className="font-serif italic text-accent normal-case">its own game.</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dubaiReasons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border-l-2 border-accent pl-6"
                >
                  <h3 className="font-display font-black text-lg text-text-primary uppercase mb-3">{item.title}</h3>
                  <p className="text-text-secondary font-body text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-6 md:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <p className="section-label mb-4">How it works</p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-text-primary uppercase">
                Audit to ranking<br />
                <span className="font-serif italic text-accent normal-case">in 90 days.</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="font-display font-black text-6xl text-accent/20 block mb-4">{item.step}</span>
                  <h3 className="font-display font-black text-lg text-text-primary uppercase mb-3">{item.title}</h3>
                  <p className="text-text-secondary font-body text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <p className="section-label mb-4">FAQ</p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-text-primary uppercase">
                Common questions
              </h2>
            </motion.div>
            <div className="space-y-8">
              {faqs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border-b border-border pb-8"
                >
                  <h3 className="font-display font-black text-lg text-text-primary uppercase mb-3">{item.q}</h3>
                  <p className="text-text-secondary font-body leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 md:px-12 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-6">Start ranking</p>
              <h2 className="font-display font-black text-5xl md:text-7xl text-text-primary uppercase mb-8">
                Page one.<br />
                <span className="font-serif italic text-accent normal-case">More clients.</span>
              </h2>
              <p className="text-text-secondary text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                We&apos;ll audit your site for free and show you exactly what&apos;s holding you back on Google. No commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Get a free SEO audit →
                </Link>
                <a
                  href="https://wa.me/971585324519?text=Hi%2C%20I%27m%20interested%20in%20SEO%20for%20my%20Dubai%20business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 text-sm font-body uppercase tracking-wider"
                >
                  WhatsApp us →
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
