'use client'

import { motion } from 'framer-motion'

const statements = [
  'We show you before you pay.',
  'We know Dubai.',
  'We sell results, not pages.',
]

export default function WhyUs() {
  return (
    <section className="py-section bg-bg-dark text-text-on-dark relative overflow-hidden">
      {/* Warm radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F4F1EC]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
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
              className="font-display font-black text-heading md:text-hero text-[#F4F1EC] leading-tight"
            >
              {statement}
            </motion.h2>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-[#F4F1EC]/40 text-sm font-body max-w-md"
        >
          Boutique studio led by a full-stack developer & designer based in Dubai. Every project is built by us — not outsourced.
        </motion.p>
      </div>
    </section>
  )
}
