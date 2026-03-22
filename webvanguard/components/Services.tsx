'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Web Design',
    subtitle: 'Your 24/7 storefront',
    description: 'Premium design that converts visitors into customers. Flawless on every device, built for performance.',
    features: ['Custom Design', 'Mobile-First', 'Fast Loading', 'CMS'],
  },
  {
    number: '02',
    title: 'SEO & Visibility',
    subtitle: 'Be the first they find',
    description: 'Top Google rankings so customers find you, not your competition. Local SEO + AI search optimized.',
    features: ['Google Rankings', 'Local SEO', 'AI Search', 'Maps'],
  },
  {
    number: '03',
    title: 'Brand Identity',
    subtitle: 'Look like the leader you are',
    description: 'A visual identity that makes your business look established, trusted, and impossible to forget.',
    features: ['Logo', 'Brand System', 'Print', 'Social Kit'],
  },
  {
    number: '04',
    title: 'Growth & Analytics',
    subtitle: 'Data-driven decisions',
    description: 'Know where your customers come from and exactly how to get more. Real data, real growth.',
    features: ['Tracking', 'Reports', 'Conversions', 'ROI'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-section relative">
      {/* Decorative circles */}
      <div className="absolute top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ border: '1px solid rgba(212,149,107,0.04)' }} />
      <div className="absolute bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ border: '1px solid rgba(212,149,107,0.03)' }} />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Header */}
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
            <h2 className="md:col-span-8 font-display font-black text-heading text-text-primary">
              Everything your business needs to{' '}
              <span className="font-serif italic text-accent">dominate</span> online.
            </h2>
            <p className="md:col-span-3 md:col-start-10 text-text-secondary text-sm leading-relaxed">
              No jargon. No fluff. Four pillars that turn your online presence into a revenue engine.
            </p>
          </div>
        </motion.div>

        {/* Services — staggered layout */}
        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border border-border hover:border-accent/20 bg-bg-card/50 hover:bg-bg-card transition-all duration-500 overflow-hidden"
              style={{ marginLeft: i % 2 !== 0 ? '4%' : '0', marginRight: i % 2 === 0 ? '4%' : '0' }}
            >
              {/* Accent bar left */}
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-700" />

              {/* Radial glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
                background: 'radial-gradient(600px circle at 80% 50%, rgba(212,149,107,0.04), transparent 60%)',
              }} />

              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start relative">
                {/* Number */}
                <div className="md:col-span-2 flex items-start justify-between md:block">
                  <span className="font-serif italic text-5xl md:text-6xl text-accent/10 group-hover:text-accent/25 transition-colors duration-700 leading-none">
                    {service.number}
                  </span>
                  {/* Mobile arrow */}
                  <svg className="w-5 h-5 text-border group-hover:text-accent transition-all duration-300 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>

                {/* Title block */}
                <div className="md:col-span-3">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="font-serif italic text-text-muted text-sm mt-2 group-hover:text-accent/60 transition-colors duration-500">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features + Arrow */}
                <div className="md:col-span-3 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] text-text-muted border border-border px-3 py-1.5 font-body uppercase tracking-wider group-hover:border-accent/20 group-hover:text-accent/60 transition-all duration-500"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  {/* Desktop arrow */}
                  <div className="hidden md:flex justify-end">
                    <svg className="w-5 h-5 text-border group-hover:text-accent transition-all duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
