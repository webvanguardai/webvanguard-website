'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Professional Website',
    accent: 'Your storefront, open 24/7',
    description: 'A website that represents your business around the clock. Looks premium, works on every device, and turns visitors into paying customers.',
    features: ['Custom Design', 'Mobile-Ready', 'Fast Loading', 'Easy to Update'],
  },
  {
    number: '02',
    title: 'Get Found on Google',
    accent: 'Be the first they find',
    description: 'What\'s the point of a great website if nobody finds it? We make sure your customers find you first, not your competition.',
    features: ['Google Rankings', 'Local Search', 'Maps Listing', 'More Traffic'],
  },
  {
    number: '03',
    title: 'Brand & Visual Identity',
    accent: 'Look like the leader you are',
    description: 'First impressions close deals. We build a visual identity that makes your business look established, trusted, and premium.',
    features: ['Logo', 'Brand Colors', 'Business Cards', 'Social Media Kit'],
  },
  {
    number: '04',
    title: 'Growth & Analytics',
    accent: 'Know your numbers, grow your business',
    description: 'Know exactly where your customers come from, what they want, and how to get more of them. Real data, real growth.',
    features: ['Visitor Tracking', 'Monthly Reports', 'Conversion Goals', 'ROI Insights'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-section relative">
      {/* Background decorative element */}
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] border border-accent/[0.03] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-[300px] h-[300px] border border-accent/[0.05] rounded-full pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
        >
          <div>
            <p className="section-label mb-6">
              <span className="inline-block w-12 h-px bg-accent mr-4 align-middle" />
              What we do for you
            </p>
            <h2 className="font-display font-black text-heading text-text-primary">
              Everything your<br />business needs to{' '}
              <span className="font-serif italic text-accent">win online.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-text-secondary text-base leading-relaxed max-w-sm md:ml-auto">
              No tech talk. No jargon. Just results that grow your business and leave your competition behind.
            </p>
          </div>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group border-t border-border py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start hover:bg-bg-card/50 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8 relative"
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-700" />

              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-display font-black text-sm text-text-muted group-hover:text-accent transition-colors duration-500">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-3">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-serif italic text-text-muted text-sm mt-2 group-hover:text-text-secondary transition-colors duration-500">
                  {service.accent}
                </p>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[10px] text-text-muted border border-border/80 px-3 py-1.5 font-body uppercase tracking-wider group-hover:border-accent/30 group-hover:text-text-secondary transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute right-4 md:right-8 top-12 md:top-16">
                <svg className="w-5 h-5 text-border group-hover:text-accent transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
          {/* Last border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
