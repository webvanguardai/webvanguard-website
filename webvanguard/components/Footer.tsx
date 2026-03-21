'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <Link href="/">
              <span className="font-display font-bold text-lg text-text-primary">
                Web<span className="text-accent">V</span>anguard
              </span>
            </Link>
            <p className="text-text-muted text-sm mt-2">
              AI-Powered Web Design Agency
            </p>
          </div>

          {/* Links */}
          <nav className="flex gap-6">
            {['Services', 'Work', 'Process', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors font-body"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-body">
            &copy; {new Date().getFullYear()} WebVanguard. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-body">
            Dubai, UAE &middot; Serving clients globally
          </p>
        </div>
      </div>
    </footer>
  )
}
