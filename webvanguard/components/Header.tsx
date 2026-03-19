'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-900 bg-black/90 backdrop-blur">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold text-white tracking-tight">
          WV
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-gray-400 hover:text-accent transition-colors text-sm uppercase tracking-wider">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden border-t border-gray-900 bg-black">
          <div className="px-6 py-4 space-y-4">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="block text-gray-400 hover:text-accent" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
