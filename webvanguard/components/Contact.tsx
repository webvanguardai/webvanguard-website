'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-section border-t border-border">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <p className="section-label mb-4">Let&apos;s talk</p>
            <h2 className="font-display font-black text-heading text-text-primary uppercase">
              Ready for<br />
              <span className="font-serif italic text-accent normal-case">more customers?</span>
            </h2>
            <p className="text-text-secondary text-base mt-6 leading-relaxed max-w-lg">
              Tell us about your business. We&apos;ll show you exactly how we can help — no commitment, no jargon.
            </p>

            <div className="mt-6 py-4 border-l-[3px] border-accent pl-6">
              <p className="text-accent font-display font-bold text-lg">First consultation is free.</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="mailto:hello@webvanguard.ai" className="btn-primary">
                <span>Get your free proposal</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="https://wa.me/971500000000?text=Hi%20Web%20Vanguard%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20business" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <span>WhatsApp us</span>
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-4 md:col-start-9 space-y-6"
          >
            {[
              { label: 'Email', value: 'hello@webvanguard.ai', href: 'mailto:hello@webvanguard.ai' },
              { label: 'WhatsApp', value: '+971 50 000 0000', href: 'https://wa.me/971500000000' },
              { label: 'Based in', value: 'Dubai, UAE' },
              { label: 'Response time', value: 'Under 2 hours' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-text-muted uppercase tracking-wider font-body mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-text-primary font-display font-bold text-lg hover:text-accent transition-colors duration-300">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-text-primary font-display font-bold text-lg">{item.value}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
