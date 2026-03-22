'use client'

import { motion } from 'framer-motion'

export default function Marquee() {
  const items = [
    'More Customers',
    'Better Image',
    'Higher Revenue',
    'Stronger Brand',
    'Google Visibility',
    'Professional Website',
    'Business Growth',
    'Competitive Edge',
  ]

  return (
    <div className="py-8 border-y border-border overflow-hidden bg-bg relative">
      {/* Double row - opposite directions */}
      <div className="marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-black text-3xl md:text-5xl text-text-primary/10 hover:text-accent/80 transition-colors duration-300 px-6 md:px-10 uppercase">
              {item}
            </span>
            <span className="text-accent text-2xl">&mdash;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
