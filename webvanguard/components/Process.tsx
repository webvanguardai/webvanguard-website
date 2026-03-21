'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'We Listen',
    description: 'Tell us about your business, your customers, and your goals. We study your market and your competitors so we know exactly what you need.',
  },
  {
    number: '02',
    title: 'We Plan',
    description: 'We create a clear strategy: what your site needs to say, how it should look, and how it will bring you more business.',
  },
  {
    number: '03',
    title: 'We Build',
    description: 'Your site goes from concept to reality. You see the first draft in under 48 hours. Revisions until you love it.',
  },
  {
    number: '04',
    title: 'You Grow',
    description: 'Your website goes live. Customers start finding you. We keep optimizing so the results keep coming.',
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
            How it works
          </p>
          <h2 className="font-display font-black text-heading text-text-primary max-w-3xl">
            From first call to live site<span className="text-accent">.</span><br />
            Simple, fast, no surprises.
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

        {/* Speed indicator */}
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
            Most projects go <span className="text-accent font-semibold">from zero to live in under two weeks</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
