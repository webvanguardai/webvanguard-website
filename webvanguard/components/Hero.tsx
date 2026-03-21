'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden noise">
      {/* Giant background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display font-black text-[20vw] text-border/50 leading-none whitespace-nowrap">
          WV
        </span>
      </div>

      {/* Accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-[8%] w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent origin-top"
      />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full pb-16 md:pb-24">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="section-label mb-8"
        >
          <span className="inline-block w-8 h-px bg-accent mr-3 align-middle" />
          AI-Powered Web Agency
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-mega text-text-primary"
        >
          We don&apos;t build
          <br />
          websites<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display font-black text-hero text-text-muted mt-2"
        >
          We build <span className="text-text-primary">revenue machines</span><span className="text-accent">.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="btn-primary">
            <span>Start a project</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '98%', label: 'Satisfaction' },
            { value: '3x', label: 'ROI Increase' },
            { value: '<24h', label: 'First Draft' },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <p className="font-display font-black text-3xl md:text-4xl text-text-primary group-hover:text-accent transition-colors duration-300">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1 font-body uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
