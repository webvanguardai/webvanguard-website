'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design Dubai',
  description: 'Custom website design and development for Dubai businesses. SEO-optimized, mobile-first, conversion-focused.',
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
  url: 'https://webvanguard.co/web-design-dubai',
}

const deliverables = [
  {
    number: '01',
    title: 'Custom Design',
    desc: 'No templates. Every layout built from scratch to match your brand and convert your specific audience.',
  },
  {
    number: '02',
    title: 'Mobile-First Build',
    desc: '70%+ of Dubai traffic is mobile. Your site loads fast and looks perfect on every screen.',
  },
  {
    number: '03',
    title: 'SEO Foundation',
    desc: 'Meta tags, schema markup, local SEO, Google Business integration. Google finds you from day one.',
  },
  {
    number: '04',
    title: 'WhatsApp Integration',
    desc: 'Floating WhatsApp button on every page. In Dubai, this alone can double your inbound leads.',
  },
  {
    number: '05',
    title: 'Analytics Setup',
    desc: 'GA4 installed and configured. You see exactly how many visitors you get and where they come from.',
  },
  {
    number: '06',
    title: 'Performance Optimized',
    desc: 'PageSpeed 90+. Fast load times mean lower bounce rates and better Google rankings.',
  },
]

const dubaiReasons = [
  {
    title: 'Dubai searches happen in English and Arabic',
    desc: 'Your competitors are fighting for the same Google searches. A generic template won\'t cut it. You need a site built to rank for terms like "web design Dubai Marina" or "best agency JLT" — not just look pretty.',
  },
  {
    title: 'First impressions are everything here',
    desc: 'Dubai clients are sophisticated. They judge your brand in seconds. A slow, outdated, or amateur-looking site signals that your business isn\'t serious — before you even say a word.',
  },
  {
    title: 'WhatsApp is the primary sales channel',
    desc: 'Unlike Western markets where people fill in forms, Dubai clients want to chat on WhatsApp. If your site doesn\'t make that frictionless, you\'re losing sales every single day.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'We understand your business, goals, target clients, and competitors. 30 minutes that shape everything.',
  },
  {
    step: '02',
    title: 'Design & Copy',
    desc: 'We design the full site and write conversion-focused copy. You review and approve before a single line of code.',
  },
  {
    step: '03',
    title: 'Build & Test',
    desc: 'We build in Next.js — fast, secure, scalable. Full mobile testing. Performance audit. SEO validation.',
  },
  {
    step: '04',
    title: 'Launch & Hand Off',
    desc: 'We deploy, connect your domain, set up GA4 and Google Search Console. You own everything.',
  },
]

const faqs = [
  {
    q: 'How much does a website cost in Dubai?',
    a: 'Most of our projects range from AED 3,500 to AED 12,000 depending on scope. We\'ll give you a fixed price upfront — no surprises. We also offer payment plans.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Typically 2–4 weeks from kickoff to launch. For simpler sites, we can move faster. We don\'t drag projects out.',
  },
  {
    q: 'Will my website rank on Google?',
    a: 'We build every site with SEO best practices built in — proper structure, schema, local keywords. Ranking takes time, but you\'ll start with the right foundation from day one.',
  },
  {
    q: 'Do I need to provide content and photos?',
    a: 'Not necessarily. We can write copy for you and source professional images. Just show up with your business details and goals — we handle the rest.',
  },
]

export default function WebDesignDubaiPage() {
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
            <p className="section-label mb-6">Web Design Dubai</p>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-text-primary uppercase leading-tight mb-8 max-w-5xl">
              Websites That<br />
              <span className="font-serif italic text-accent normal-case">actually win</span><br />
              clients in Dubai
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
              Custom-built, SEO-ready, and conversion-focused. No templates. No fluff. Just a site that brings in real business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                Get a free proposal →
              </Link>
              <a
                href="https://wa.me/971585324519?text=Hi%2C%20I%27m%20interested%20in%20web%20design%20for%20my%20Dubai%20business"
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
              <p className="section-label mb-4">What you get</p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-text-primary uppercase">
                Everything included.<br />
                <span className="font-serif italic text-accent normal-case">No hidden extras.</span>
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
                Dubai is different.<br />
                <span className="font-serif italic text-accent normal-case">Your site needs to be too.</span>
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
                From brief to live<br />
                <span className="font-serif italic text-accent normal-case">in 2–4 weeks.</span>
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
              <p className="section-label mb-6">Ready to grow?</p>
              <h2 className="font-display font-black text-5xl md:text-7xl text-text-primary uppercase mb-8">
                Your next client<br />
                <span className="font-serif italic text-accent normal-case">is searching right now.</span>
              </h2>
              <p className="text-text-secondary text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                Get a free proposal with a clear scope, timeline, and fixed price. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Get a free proposal →
                </Link>
                <a
                  href="https://wa.me/971585324519?text=Hi%2C%20I%27m%20interested%20in%20web%20design%20for%20my%20Dubai%20business"
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
