'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Web Development',
    desc: 'Custom, performant sites built with Next.js and modern stack. SEO-ready, accessible, and scalable.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
  },
  {
    title: 'UI/UX Design',
    desc: 'Minimalist interfaces that guide users to action. We combine aesthetics with conversion optimization.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
  },
  {
    title: 'Brand Strategy',
    desc: 'Clarify your positioning and messaging. We craft narratives that resonate with premium buyers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
  },
  {
    title: 'Digital Consultancy',
    desc: 'Ongoing optimization, analytics, and growth experiments to keep your digital presence ahead.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-number">02</div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Services
          </motion.h2>

          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl">
            We deliver end-to-end digital excellence for established businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map(s => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="text-accent mb-4">{s.icon}</div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 mb-4">Ready to start a project?</p>
            <Link href="/booking" className="btn-primary">Book a consultation</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
