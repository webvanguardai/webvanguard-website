'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Web Design & Development',
    description: 'High-performance websites built with modern tech. Fast, responsive, optimized for conversion.',
    features: ['Custom Design', 'Next.js / React', 'Mobile-First', 'CMS Integration'],
  },
  {
    number: '02',
    title: 'SEO & AI Optimization',
    description: 'AI-driven SEO strategies that put your business at the top. Technical SEO, content strategy, analytics.',
    features: ['Technical SEO', 'AI Content', 'Analytics Setup', 'Search Rankings'],
  },
  {
    number: '03',
    title: 'Brand Identity',
    description: 'Cohesive visual identity that communicates trust and premium quality to your target audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Systems'],
  },
  {
    number: '04',
    title: 'Digital Strategy',
    description: 'Data-driven strategies to grow your online presence and outperform competitors.',
    features: ['Market Research', 'Competitor Analysis', 'Growth Roadmap', 'Performance Tracking'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">What we do</p>
          <h2 className="font-display font-bold text-heading text-text-primary max-w-2xl">
            Everything you need to win online.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg p-8 md:p-12 group hover:bg-bg-card transition-colors duration-600"
            >
              <span className="text-xs text-text-muted font-body tracking-wider">{service.number}</span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary mt-3 group-hover:text-accent transition-colors duration-600">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-4 max-w-sm">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs text-text-muted border border-border px-3 py-1 font-body"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
