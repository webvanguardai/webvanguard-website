'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 pt-24 pb-16">
      <div className="max-w-[90rem] mx-auto w-full">

        {/* Main headline — massive, typographic, no decoration */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-mega text-text-primary uppercase"
          >
            Your website
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-mega text-text-primary uppercase"
          >
            should be your
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic font-bold text-mega text-accent"
          >
            best salesperson.
          </motion.h1>
        </div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-text-secondary text-lg md:text-xl max-w-lg mt-10 leading-relaxed"
        >
          We design websites for Dubai businesses that attract customers, build trust, and grow revenue. Not pages — results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="btn-primary group">
            <span>Get a free proposal</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#work" className="btn-outline group">
            <span>See our work</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats — clean, minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '20+', label: 'Projects live' },
            { value: 'Dubai', label: 'Our market' },
            { value: '48h', label: 'First draft' },
            { value: 'AED 2,000', label: 'Starting from' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
            >
              <p className="font-display font-black text-2xl md:text-3xl text-text-primary">
                {stat.value}
              </p>
              <p className="text-xs text-text-muted mt-1 font-body uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
