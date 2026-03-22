'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer>
      {/* Big CTA band — inverted colors */}
      <div className="relative overflow-hidden border-t border-border">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          >
            <h3 className="font-display font-black text-4xl md:text-6xl text-text-primary leading-tight">
              Your competitors{' '}
              <span className="font-serif italic text-accent">already</span><br />
              have a website<span className="text-accent">.</span>
            </h3>
            <a href="#contact" className="btn-primary shrink-0">
              <span>Get yours now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-8 border-t border-border">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/">
              <span className="font-display font-bold text-xl text-text-primary">
                Web<span className="text-accent">V</span>anguard
              </span>
            </Link>
            <span className="text-text-muted text-xs font-body uppercase tracking-wider">AI-Powered Web Agency</span>
          </div>

          <nav className="flex gap-6">
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
            &copy; {new Date().getFullYear()} WebVanguard
          </p>
        </div>
      </div>
    </footer>
  )
}
