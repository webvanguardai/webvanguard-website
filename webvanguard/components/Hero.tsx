'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionNumber from './SectionNumber'
import Link from 'next/link'

function getHeroVariant(): 'A' | 'B' {
  if (typeof window === 'undefined') return 'A'
  const stored = localStorage.getItem('hero_variant')
  if (stored === 'A' || stored === 'B') return stored
  const variant = Math.random() < 0.5 ? 'A' : 'B'
  localStorage.setItem('hero_variant', variant)
  return variant
}

function HeroVariantA() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden">
      <SectionNumber number="01" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl border border-gray-700 p-8 md:p-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-white mb-8"
          >
            Crafting Digital Excellence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl"
          >
            Elevate your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link href="/booking" className="btn-primary text-lg group">
              <span>Let's Talk</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroVariantB() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden border-t border-gray-900">
      <SectionNumber number="01" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-6">
            Websites that sell.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-xl">
            WebVanguard. Strategy. Design. Build. Less theatre. More conversion.
          </p>
          <div className="flex gap-4">
            <motion.a whileHover={{ scale: 1.02 }} href="/booking" className="btn-primary px-8 py-3">Start a project</motion.a>
            <motion.a whileHover={{ scale: 1.02 }} href="/work" className="px-8 py-3 border border-gray-700 text-white hover:border-accent transition-colors">Our work</motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Hero() {
  const [variant, setVariant] = useState<'A' | 'B'>('A')

  useEffect(() => {
    setVariant(getHeroVariant())
  }, [])

  return variant === 'A' ? <HeroVariantA /> : <HeroVariantB />
}
