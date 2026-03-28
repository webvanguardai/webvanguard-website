'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Brand Identity Dubai — Logos & Brand Systems That Build Trust | Web Vanguard',
  description: 'Professional brand identity design in Dubai. Logos, color systems, typography, and brand guidelines that make your business look credible and premium. Built for Dubai businesses.',
  keywords: [
    'brand identity dubai',
    'logo design dubai',
    'branding dubai',
    'brand designer dubai',
    'brand agency dubai',
    'logo designer dubai',
    'brand guidelines dubai',
    'corporate identity dubai',
    'visual identity dubai',
    'brand strategy dubai',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/brand-identity-dubai',
  },
  openGraph: {
    title: 'Brand Identity Dubai — Logos & Brand Systems That Build Trust | Web Vanguard',
    description: 'Professional brand identity design in Dubai. Logos, color systems, typography, and brand guidelines that make your business look credible and premium.',
    url: 'https://webvanguard.co/brand-identity-dubai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Identity Dubai — Logos & Brand Systems That Build Trust | Web Vanguard',
    description: 'Professional brand identity design in Dubai. Logos, color systems, and brand guidelines built for Dubai businesses.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brand Identity Dubai',
  description: 'Logo design, brand identity systems, and visual branding for Dubai businesses. Complete brand guidelines and assets.',
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
  url: 'https://webvanguard.co/brand-identity-dubai',
}

const deliverables = [
  {
    number: '01',
    title: 'Logo Design',
    desc: 'A mark that works at any size — from a business card to a billboard. Delivered in all formats (SVG, PNG, PDF).',
  },
  {
    number: '02',
    title: 'Color System',
    desc: 'Primary, secondary, and neutral palettes chosen for your industry and Dubai audience. Exact hex, RGB, and CMYK values.',
  },
  {
    number: '03',
    title: 'Typography',
    desc: 'Font pairing that communicates the right personality. Headlines, body, UI — a complete type hierarchy.',
  },
  {
    number: '04',
    title: 'Brand Guidelines',
    desc: 'A full PDF guide your team can follow. Logo usage rules, spacing, do\'s and don\'ts. Consistency across every touchpoint.',
  },
  {
    number: '05',
    title: 'Business Collateral',
    desc: 'Business card, letterhead, email signature. The essentials that make you look established from day one.',
  },
  {
    number: '06',
    title: 'Social Media Kit',
    desc: 'Profile images, banner templates, and story frames. Consistent brand presence across Instagram, LinkedIn, and WhatsApp.',
  },
]

const dubaiReasons = [
  {
    title: 'Dubai clients judge quality instantly',
    desc: 'In a market packed with luxury brands and high expectations, an amateur logo or inconsistent visual identity immediately signals "small operation." Premium clients don\'t book businesses that look unpolished.',
  },
  {
    title: 'Competition is fierce — brand is your edge',
    desc: 'When two businesses offer the same service, the one that looks more credible wins. In Dubai\'s saturated market — real estate, F&B, wellness, fashion — your brand is often the deciding factor.',
  },
  {
    title: 'Dubai businesses need bilingual brand thinking',
    desc: 'Your brand needs to work in English and feel culturally resonant in the UAE. Logo, colors, and typography choices that read confidently in both directions give you a real advantage.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Brand Discovery',
    desc: 'We study your business, competitors, target audience, and the feeling you want to convey. This becomes the brief.',
  },
  {
    step: '02',
    title: 'Concepts',
    desc: 'We present 2–3 distinct creative directions. Different styles, different approaches. You pick a direction and we refine.',
  },
  {
    step: '03',
    title: 'Refinement',
    desc: 'We polish the chosen concept until every detail is right — spacing, weight, proportions, color. Two rounds of revisions included.',
  },
  {
    step: '04',
    title: 'Delivery',
    desc: 'Full asset pack delivered. Logo files, brand guidelines PDF, and collateral templates. Ready to use immediately.',
  },
]

const faqs = [
  {
    q: 'How much does brand identity design cost in Dubai?',
    a: 'Our brand identity packages start at AED 2,500 for an essential logo and guidelines, up to AED 8,000 for a full identity system with collateral. We quote based on your specific needs.',
  },
  {
    q: 'How long does brand identity design take?',
    a: 'Usually 2–3 weeks from kickoff to final delivery. We don\'t rush brand work — getting it right matters more than getting it fast.',
  },
  {
    q: 'Do I own the brand files after delivery?',
    a: 'Yes, completely. All source files, all formats, full ownership transferred to you. No licensing fees, no recurring costs.',
  },
  {
    q: 'Can you redesign an existing logo?',
    a: 'Absolutely. We do both new brand creation and rebrands. Many Dubai businesses outgrow their early branding — a refresh can significantly impact how premium you appear.',
  },
]

export default function BrandIdentityDubaiPage() {
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
            <p className="section-label mb-6">Brand Identity Dubai</p>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-text-primary uppercase leading-tight mb-8 max-w-5xl">
              Brands that<br />
              <span className="font-serif italic text-accent normal-case">build trust</span><br />
              &amp; win clients.
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
              Your logo is the first thing people judge. Make it say premium, credible, and memorable — not amateur hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                Get a free proposal →
              </Link>
              <a
                href="https://wa.me/971585324519?text=Hi%2C%20I%27m%20interested%20in%20brand%20identity%20design%20for%20my%20Dubai%20business"
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
                A complete brand.<br />
                <span className="font-serif italic text-accent normal-case">Not just a logo.</span>
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
                In Dubai,<br />
                <span className="font-serif italic text-accent normal-case">brand is everything.</span>
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
                Discovery to delivery<br />
                <span className="font-serif italic text-accent normal-case">in 2–3 weeks.</span>
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
              <p className="section-label mb-6">Look the part</p>
              <h2 className="font-display font-black text-5xl md:text-7xl text-text-primary uppercase mb-8">
                A brand that<br />
                <span className="font-serif italic text-accent normal-case">closes deals.</span>
              </h2>
              <p className="text-text-secondary text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                Tell us about your business and we&apos;ll show you what a premium brand identity could look like. Free, fast, no commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Get a free proposal →
                </Link>
                <a
                  href="https://wa.me/971585324519?text=Hi%2C%20I%27m%20interested%20in%20brand%20identity%20design%20for%20my%20Dubai%20business"
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
