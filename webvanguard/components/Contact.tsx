'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border pt-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="section-label mb-4">Get in touch</p>
            <h2 className="font-display font-bold text-heading text-text-primary">
              Ready to build something great?
            </h2>
            <p className="text-text-secondary text-lg mt-6 leading-relaxed max-w-xl">
              Tell us about your project. We&apos;ll get back to you within 24 hours with a strategy proposal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <a
              href="mailto:hello@webvanguard.ai"
              className="card group"
            >
              <p className="section-label mb-2">Email</p>
              <p className="text-text-primary font-display font-semibold group-hover:text-accent transition-colors duration-300">
                hello@webvanguard.ai
              </p>
            </a>

            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="card group"
            >
              <p className="section-label mb-2">WhatsApp</p>
              <p className="text-text-primary font-display font-semibold group-hover:text-accent transition-colors duration-300">
                +971 50 123 4567
              </p>
            </a>

            <div className="card">
              <p className="section-label mb-2">Location</p>
              <p className="text-text-primary font-display font-semibold">
                Dubai, UAE
              </p>
              <p className="text-text-muted text-sm mt-1">Serving clients globally</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <a href="mailto:hello@webvanguard.ai" className="btn-primary">
              Start your project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
