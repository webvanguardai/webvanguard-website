'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-label mb-6"
        >
          AI-Powered Web Design Agency
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-black text-hero text-text-primary max-w-5xl"
        >
          We build websites
          <br />
          that <span className="text-accent">convert.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-text-secondary font-body max-w-xl leading-relaxed"
        >
          Strategy. Design. Development. SEO.
          <br />
          Everything your business needs to dominate online.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="btn-primary">
            Start a project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#work" className="btn-outline">
            See our work
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50+', label: 'Projects delivered' },
            { value: '98%', label: 'Client satisfaction' },
            { value: '3x', label: 'Average ROI increase' },
            { value: '24h', label: 'First draft delivery' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-bold text-2xl md:text-3xl text-text-primary">{stat.value}</p>
              <p className="text-sm text-text-muted mt-1 font-body">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
