'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep-dive into your business, market, and competitors. AI accelerates weeks of research into hours.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Architecture, content strategy, conversion goals. Every pixel has a purpose, every page has an ROI.',
  },
  {
    number: '03',
    title: 'Design & Build',
    description: 'Custom design and cutting-edge development. Fast, responsive, built to outperform.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'Deploy, optimize, dominate search. Then iterate based on real performance data.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-section bg-bg-card relative overflow-hidden">
      {/* Giant background number */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display font-black text-[30vw] text-border/30 leading-none">
          04
        </span>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-6">
            <span className="inline-block w-8 h-px bg-accent mr-3 align-middle" />
            How we work
          </p>
          <h2 className="font-display font-black text-heading text-text-primary max-w-3xl">
            Idea to live site<span className="text-accent">.</span><br />
            In days, not months.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 border-l border-border first:border-l-0 group"
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />

              <span className="font-display font-black text-7xl text-border group-hover:text-accent/30 transition-colors duration-500 leading-none">
                {step.number}
              </span>
              <h3 className="font-display font-bold text-xl text-text-primary mt-6 group-hover:text-accent transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-3">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AI indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border flex items-center gap-4"
        >
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="w-3 h-3 rounded-full bg-accent absolute top-0 left-0 animate-ping" />
          </div>
          <p className="text-text-secondary text-sm font-body">
            <span className="text-accent font-semibold">AI-powered</span> — delivering in days what others take weeks.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
