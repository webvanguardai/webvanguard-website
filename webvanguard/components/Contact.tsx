'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-section relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-accent/[0.04] rounded-full pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <div className="border-t border-border pt-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left — CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label mb-6">
                <span className="inline-block w-12 h-px bg-accent mr-4 align-middle" />
                Let&apos;s talk
              </p>
              <h2 className="font-display font-black text-heading text-text-primary">
                Ready to get<br />
                <span className="font-serif italic text-accent">more customers</span>?
              </h2>
              <p className="text-text-secondary text-base mt-8 leading-relaxed max-w-md">
                Tell us about your business. We&apos;ll show you what we can do — no commitment, no jargon, no surprises.
              </p>
              <p className="text-text-primary font-bold text-lg mt-4">
                First consultation is free.
              </p>

              <div className="mt-10">
                <a href="mailto:hello@webvanguard.ai" className="btn-primary">
                  <span>Get your free proposal</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right — Contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <a href="mailto:hello@webvanguard.ai" className="group block border border-border p-8 hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-700" />
                <p className="text-[11px] text-text-muted uppercase tracking-wider font-body mb-3">Email</p>
                <p className="text-text-primary font-display font-bold text-xl group-hover:text-accent transition-colors duration-300">
                  hello@webvanguard.ai
                </p>
              </a>

              <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="group block border border-border p-8 hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-700" />
                <p className="text-[11px] text-text-muted uppercase tracking-wider font-body mb-3">WhatsApp</p>
                <p className="text-text-primary font-display font-bold text-xl group-hover:text-accent transition-colors duration-300">
                  +971 50 123 4567
                </p>
              </a>

              <div className="group border border-border p-8 hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-700" />
                <p className="text-[11px] text-text-muted uppercase tracking-wider font-body mb-3">Based in</p>
                <p className="text-text-primary font-display font-bold text-xl">
                  Dubai, UAE
                </p>
                <p className="text-text-muted text-sm mt-2">Working with businesses worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
