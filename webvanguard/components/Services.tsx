'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Web Design & Development',
    description: 'High-performance websites that look incredible and convert visitors into customers.',
    features: ['Custom Design', 'Next.js / React', 'Mobile-First', 'CMS Integration'],
  },
  {
    number: '02',
    title: 'SEO & AI Optimization',
    description: 'AI-driven strategies that put your business at the top of Google. Period.',
    features: ['Technical SEO', 'AI Content', 'Analytics', 'Rankings'],
  },
  {
    number: '03',
    title: 'Brand Identity',
    description: 'Visual identity that screams premium and makes your competitors look outdated.',
    features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Systems'],
  },
  {
    number: '04',
    title: 'Digital Strategy',
    description: 'Data-driven plans to dominate your market. No guesswork, just results.',
    features: ['Market Research', 'Competitor Analysis', 'Growth Roadmap', 'Tracking'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-section relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-6">
            <span className="inline-block w-8 h-px bg-accent mr-3 align-middle" />
            What we do
          </p>
          <h2 className="font-display font-black text-heading text-text-primary max-w-3xl">
            Four services.<br />
            One obsession: <span className="text-accent">your growth.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-12 group border border-border hover:bg-bg-elevated transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="absolute top-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex items-start justify-between mb-6">
                <span className="font-display font-black text-5xl text-border group-hover:text-accent/20 transition-colors duration-500">
                  {service.number}
                </span>
                <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-4 max-w-sm">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-8">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[11px] text-text-muted border border-border px-3 py-1.5 font-body uppercase tracking-wider group-hover:border-border-hover group-hover:text-text-secondary transition-all duration-300"
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
