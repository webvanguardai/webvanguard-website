'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-section relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="border-t border-border pt-section">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-6">
              <span className="inline-block w-8 h-px bg-accent mr-3 align-middle" />
              Let&apos;s talk
            </p>
            <h2 className="font-display font-black text-mega text-text-primary max-w-4xl">
              Ready to get more customers<span className="text-accent">?</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl mt-6 leading-relaxed max-w-xl">
              Tell us about your business. We&apos;ll show you what we can do — no commitment, no jargon, no surprises.
              <br />
              <span className="text-text-primary font-semibold">First consultation is free.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <a href="mailto:hello@webvanguard.ai" className="card group">
              <p className="text-[11px] text-text-muted uppercase tracking-wider font-body mb-3">Email</p>
              <p className="text-text-primary font-display font-bold text-lg group-hover:text-accent transition-colors duration-300">
                hello@webvanguard.ai
              </p>
              <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-all duration-300 mt-4 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="card group">
              <p className="text-[11px] text-text-muted uppercase tracking-wider font-body mb-3">WhatsApp</p>
              <p className="text-text-primary font-display font-bold text-lg group-hover:text-accent transition-colors duration-300">
                +971 50 123 4567
              </p>
              <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-all duration-300 mt-4 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div className="card">
              <p className="text-[11px] text-text-muted uppercase tracking-wider font-body mb-3">Based in</p>
              <p className="text-text-primary font-display font-bold text-lg">
                Dubai, UAE
              </p>
              <p className="text-text-muted text-sm mt-4">Working with businesses worldwide</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <a href="mailto:hello@webvanguard.ai" className="btn-primary">
              <span>Get your free proposal</span>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
