'use client'

import { motion } from 'framer-motion'

const statements = [
  'We show you before you pay.',
  'We know Dubai.',
  'We sell results, not pages.',
]

export default function WhyUs() {
  return (
    <section className="py-section bg-bg-dark text-text-on-dark">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-12 !text-accent"
        >
          Why us
        </motion.p>

        <div className="space-y-6 md:space-y-8">
          {statements.map((statement, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="font-display font-black text-heading md:text-hero text-white leading-tight"
            >
              {statement}
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  )
}
