'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your business, market, and competitors. AI tools accelerate research that would take weeks into hours.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We define the architecture, content strategy, and conversion goals. Every page has a purpose.',
  },
  {
    number: '03',
    title: 'Design & Build',
    description: 'Custom design and development with modern tech. Your site is fast, responsive, and built to scale.',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'We deploy, set up analytics, and optimize for search engines. Then we iterate based on real data.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-section bg-bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">How we work</p>
          <h2 className="font-display font-bold text-heading text-text-primary max-w-2xl">
            From idea to live site in record time.
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl leading-relaxed">
            AI-powered workflow means faster delivery without sacrificing quality.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <span className="font-display font-black text-6xl text-border select-none">
                {step.number}
              </span>
              <h3 className="font-display font-bold text-lg text-text-primary mt-4">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-3">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AI badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <p className="text-text-muted text-sm font-body">
            Powered by AI — delivering in days what others take weeks.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
