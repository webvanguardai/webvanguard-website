'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Big CTA band */}
      <div className="py-16 bg-bg-card">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h3 className="font-display font-black text-3xl md:text-4xl text-text-primary">
            Let&apos;s build something<br />
            <span className="text-accent">extraordinary.</span>
          </h3>
          <a href="#contact" className="btn-primary">
            <span>Get in touch</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-8 bg-bg">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/">
              <span className="font-display font-bold text-lg text-text-primary">
                Web<span className="text-accent">V</span>anguard
              </span>
            </Link>
            <span className="text-text-muted text-xs">AI-Powered Web Agency</span>
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
