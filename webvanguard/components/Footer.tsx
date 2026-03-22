'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer>
      {/* Big CTA */}
      <div className="bg-bg-dark text-text-on-dark py-20 md:py-32 relative overflow-hidden">
        {/* Warm ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.04] rounded-full blur-3xl" />
        </div>

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-black text-3xl md:text-6xl text-[#F4F1EC] leading-tight max-w-4xl mx-auto uppercase">
              Your competitors already have a website<span className="text-accent">.</span>
            </h3>
            <p className="text-[#F4F1EC]/50 text-base mt-6 max-w-md mx-auto">
              Every day without one is a day your customers choose someone else.
            </p>
            <div className="mt-8">
              <a href="#contact" className="btn-primary !bg-accent !text-white hover:!bg-white hover:!text-black">
                <span>Start your project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/">
            <span className="font-display font-black text-lg text-text-primary uppercase">
              WEB<span className="text-accent">V</span>
            </span>
          </Link>

          <nav className="flex gap-8">
            {['Services', 'Work', 'Contact'].map((item) => (
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
