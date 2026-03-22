'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Web Design',
    subtitle: 'Your 24/7 storefront',
    description: 'A website that represents your business around the clock. Premium design, flawless on every device, built to convert visitors into paying customers.',
    features: ['Custom Design', 'Mobile-First', 'Fast Loading', 'CMS Integration'],
  },
  {
    number: '02',
    title: 'SEO & Visibility',
    subtitle: 'Be the first they find',
    description: 'A great website nobody finds is worthless. We put your business at the top of Google so customers find you before your competition.',
    features: ['Google Rankings', 'Local SEO', 'AI Search Ready', 'Maps Listing'],
  },
  {
    number: '03',
    title: 'Brand Identity',
    subtitle: 'Look like the leader you are',
    description: 'First impressions close deals. We craft a visual identity that makes your business look established, trusted, and unforgettable.',
    features: ['Logo Design', 'Brand System', 'Print Materials', 'Social Kit'],
  },
  {
    number: '04',
    title: 'Growth & Analytics',
    subtitle: 'Know your numbers, scale your business',
    description: 'Data-driven decisions. Know where your customers come from, what they want, and exactly how to get more of them.',
    features: ['Visitor Tracking', 'Monthly Reports', 'Conversion Goals', 'ROI Dashboard'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-section relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <p className="section-label mb-6">
            <span className="inline-block w-16 h-px bg-accent/50 mr-4 align-middle" />
            What we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <h2 className="md:col-span-7 font-display font-black text-heading text-text-primary">
              Everything your business needs to{' '}
              <span className="font-serif italic text-accent">dominate online.</span>
            </h2>
            <p className="md:col-span-4 md:col-start-9 text-text-secondary text-sm leading-relaxed">
              No jargon. No fluff. Four pillars that transform your online presence into a revenue engine.
            </p>
          </div>
        </motion.div>

        {/* Service cards — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-elevated group p-8 md:p-12"
            >
              {/* Top row: number + arrow */}
              <div className="flex items-start justify-between mb-10">
                <span className="font-serif italic text-6xl md:text-7xl text-border/40 group-hover:text-accent/20 transition-colors duration-700 leading-none">
                  {service.number}
                </span>
                <svg className="w-5 h-5 text-border group-hover:text-accent transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>
              <p className="font-serif italic text-text-muted text-sm mt-2 group-hover:text-text-secondary transition-colors duration-500">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mt-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border/50">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[10px] text-text-muted border border-border/60 px-3 py-1.5 font-body uppercase tracking-wider group-hover:border-accent/20 group-hover:text-accent/70 transition-all duration-500"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
