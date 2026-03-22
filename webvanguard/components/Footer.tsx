'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Big CTA band */}
      <div className="py-20 bg-bg-card relative overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(200,255,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,255,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl md:text-5xl text-text-primary leading-tight"
          >
            Your competitors <span className="font-serif italic">already</span><br />
            have a website<span className="text-accent">.</span>
          </motion.h3>
          <motion.a
            href="#contact"
            className="btn-primary"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Get yours now</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-8 bg-bg">
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
