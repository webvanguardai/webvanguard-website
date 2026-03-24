'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Web Design',
    description: 'Premium, custom websites built to convert. Mobile-first, fast, CMS-ready.',
  },
  {
    number: '02',
    title: 'SEO & Visibility',
    description: 'Top Google rankings so customers find you first. Local SEO, Google Search Console, and AI search optimized.',
  },
  {
    number: '03',
    title: 'Brand Identity',
    description: 'Logo, brand system, print, social kit. Look established from day one.',
  },
  {
    number: '04',
    title: 'Growth & Analytics',
    description: 'Know where customers come from. GA4, Meta Pixel, heatmaps, conversion tracking. Real data, real growth.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-section">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">What we do</p>
          <h2 className="font-display font-black text-heading text-text-primary uppercase max-w-3xl">
            Everything to{' '}
            <span className="font-serif italic text-accent normal-case">grow</span> online.
          </h2>
        </motion.div>

        {/* Clean list */}
        <div className="border-t border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group py-8 md:py-10 border-b border-border grid grid-cols-12 gap-4 md:gap-8 items-start"
            >
              <span className="col-span-2 md:col-span-1 font-display font-black text-lg text-text-muted/40 group-hover:text-accent transition-colors duration-300">
                {service.number}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-display font-black text-xl md:text-2xl text-text-primary group-hover:text-accent transition-colors duration-300 uppercase">
                {service.title}
              </h3>
              <p className="col-span-12 md:col-span-5 md:col-start-6 text-text-secondary text-sm leading-relaxed mt-2 md:mt-0">
                {service.description}
              </p>
              <div className="hidden md:flex col-span-2 justify-end items-center">
                <span className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
