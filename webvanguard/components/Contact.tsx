'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-section relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ border: '1px solid rgba(212,149,107,0.04)' }} />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <p className="section-label mb-6">
              <span className="inline-block w-16 h-px bg-accent/50 mr-4 align-middle" />
              Let&apos;s talk
            </p>
            <h2 className="font-display font-black text-heading text-text-primary">
              Ready to get<br />
              <span className="font-serif italic text-accent">more customers</span>?
            </h2>
            <p className="text-text-secondary text-base mt-8 leading-relaxed max-w-lg">
              Tell us about your business. We&apos;ll show you exactly how we can help — no commitment, no jargon, no surprises.
            </p>

            {/* Free consultation highlight */}
            <div className="mt-8 p-6 border-l-[3px] border-accent bg-accent/[0.03]">
              <p className="text-accent font-display font-bold text-lg">
                First consultation is free.
              </p>
              <p className="text-text-muted text-sm mt-1">No strings attached.</p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="mailto:hello@webvanguard.ai" className="btn-primary">
                <span>Get your free proposal</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <span>WhatsApp us</span>
              </a>
            </div>
          </motion.div>

          {/* Right — Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 md:col-start-9 space-y-4"
          >
            {[
              { label: 'Email', value: 'hello@webvanguard.ai', href: 'mailto:hello@webvanguard.ai' },
              { label: 'WhatsApp', value: '+971 50 123 4567', href: 'https://wa.me/971501234567' },
              { label: 'Based in', value: 'Dubai, UAE', sub: 'Working worldwide' },
              { label: 'Response', value: 'Under 2 hours', sub: '9am — 9pm GST' },
            ].map((item) => (
              <div key={item.label} className="group relative border border-border hover:border-accent/20 bg-bg-card/50 hover:bg-bg-card p-6 transition-all duration-500 overflow-hidden">
                <div className="absolute left-0 top-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-700" />
                <p className="text-[11px] text-text-muted uppercase tracking-wider font-body mb-3">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-text-primary font-display font-bold text-lg group-hover:text-accent transition-colors duration-300 block">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-text-primary font-display font-bold text-lg">{item.value}</p>
                )}
                {item.sub && <p className="text-text-muted text-sm mt-1">{item.sub}</p>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
