'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    slug: 'why-premium-websites-underperform',
    title: 'Why your premium website underperforms',
    summary: 'Most established businesses lose trust not through one big mistake, but through a pile of small, visible compromises. We break down the anatomy of an underperforming site and how to fix it.',
    date: '2026-03-20',
  },
]

export default function BlogPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-number">Blog</div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Insights
          </motion.h2>

          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl">
            Thoughts on web design, conversion, and digital authority for established businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block border border-gray-800 p-8 hover:border-accent/50 transition-colors group">
                <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.summary}</p>
                <span className="text-sm text-gray-600">{post.date}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
