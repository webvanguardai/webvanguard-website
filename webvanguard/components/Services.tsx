'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Professional Website',
    description: 'A website that represents your business 24/7. Looks premium, works on every device, and turns visitors into paying customers.',
    features: ['Custom Design', 'Mobile-Ready', 'Fast Loading', 'Easy to Update'],
  },
  {
    number: '02',
    title: 'Get Found on Google',
    description: 'What\'s the point of a great website if nobody finds it? We make sure your customers find you first, not your competition.',
    features: ['Google Rankings', 'Local Search', 'Maps Listing', 'More Traffic'],
  },
  {
    number: '03',
    title: 'Brand & Visual Identity',
    description: 'First impressions close deals. We build a visual identity that makes your business look established, trusted, and premium.',
    features: ['Logo', 'Brand Colors', 'Business Cards', 'Social Media Kit'],
  },
  {
    number: '04',
    title: 'Growth & Analytics',
    description: 'Know exactly where your customers come from, what they want, and how to get more of them. Real data, real growth.',
    features: ['Visitor Tracking', 'Monthly Reports', 'Conversion Goals', 'ROI Insights'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-section relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <p className="section-label mb-6">
              <span className="inline-block w-12 h-px bg-accent mr-4 align-middle" />
              What we do for you
            </p>
            <h2 className="font-display font-black text-heading text-text-primary max-w-4xl">
              Everything your business needs<br />
              to <span className="text-accent font-serif italic">win online.</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-xs font-body">
            No tech talk. No jargon. Just results that grow your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-12 group border border-border hover:bg-bg-elevated transition-all duration-500 relative overflow-hidden cursor-default"
            >
              {/* Hover accent bar top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              {/* Hover accent bar left */}
              <div className="absolute top-0 left-0 w-[2px] h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />

              <div className="flex items-start justify-between mb-8">
                <span className="font-display font-black text-6xl md:text-7xl text-border/50 group-hover:text-accent/20 transition-colors duration-500">
                  {service.number}
                </span>
                <svg className="w-6 h-6 text-text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-4 max-w-sm">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-8">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[11px] text-text-muted border border-border px-3 py-1.5 font-body uppercase tracking-wider group-hover:border-accent/30 group-hover:text-text-secondary transition-all duration-300"
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
