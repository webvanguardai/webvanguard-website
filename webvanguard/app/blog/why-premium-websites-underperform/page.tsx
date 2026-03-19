'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Article() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-number">01</div>
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12">
        <motion.article initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why your premium website underperforms
          </motion.h1>

          <p className="text-gray-500 text-sm mb-12">March 20, 2026 · WebVanguard Insights</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Most established businesses do not lose trust because of one big mistake. They lose it through a pile of small, visible compromises.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">The credibility gap</h2>
            <p className="text-gray-300 mb-6">
              You pride yourself on quality. Your service is excellent, your team is experienced, your pricing reflects value. Yet your website — your digital storefront — sends a different message. Visitors subconsciously ask: “If they cut corners here, where else do they cut?”
            </p>

            <p className="text-gray-300 mb-6">
              A soft website creates hard commercial consequences. You rarely notice the lost trust directly. It shows up as weaker leads, slower replies, lower perceived value, and a business that suddenly feels more ordinary than it is.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">Common compromises</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li><strong>Slow loading:</strong> Every extra second costs you ~7% conversion.</li>
              <li><strong>Generic templates:</strong> Prospects can spot a stock theme from miles away.</li>
              <li><strong>Feature, not benefit:</strong> Your site lists services but doesn’t speak the client’s language.</li>
              <li><strong>Poor mobile experience:</strong> Over 60% of decision-makers browse on phones.</li>
              <li><strong>No clear CTA:</strong> Visitors leave because they don’t know the next step.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">What premium means online</h2>
            <p className="text-gray-300 mb-6">
              Premium isn’t about expensive imagery or fancy animations. It’s about discipline: precise typography, intentional whitespace, frictionless navigation, and messaging that reflects authority. It’s doing the simple things well, consistently.
            </p>

            <p className="text-gray-300 mb-6">
              At WebVanguard, we specialize in turning websites into high-converting brand assets for established Dubai businesses. We call it “digital authority.”
            </p>

            <div className="mt-12 p-8 border border-accent/30 bg-black/50">
              <h3 className="font-display text-xl font-semibold text-white mb-2">Ready to elevate?</h3>
              <p className="text-gray-300 mb-4">
                Book a free 30-minute consultation. We’ll review your current site and show three actionable improvements.
              </p>
              <Link href="/booking" className="btn-primary inline-block">
                Book your audit → 
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
