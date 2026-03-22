'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative">
      {/* Big CTA section */}
      <div className="hr-glow" />
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="font-display font-black text-4xl md:text-7xl text-text-primary leading-tight max-w-4xl mx-auto">
            Your competitors{' '}
            <span className="font-serif italic text-accent">already</span>{' '}
            have a website<span className="text-accent">.</span>
          </h3>
          <p className="text-text-secondary text-base mt-8 max-w-md mx-auto">
            Every day without a professional website is a day your customers are going to someone else.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              <span>Start your project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="hr-glow" />
      <div className="py-8">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/">
              <span className="font-display font-bold text-lg text-text-primary">
                Web<span className="font-serif italic text-accent">V</span>anguard
              </span>
            </Link>
          </div>

          <nav className="flex gap-8">
            {['Services', 'Work', 'Process', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-text-muted hover:text-accent transition-colors font-body uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-text-muted text-xs font-body">
            &copy; {new Date().getFullYear()} Web Vanguard
          </p>
        </div>
      </div>
    </footer>
  )
}
