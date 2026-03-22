'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn everything about your business, customers, and goals. We study your market and what your competitors are doing right — and wrong.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We design a clear plan: what your site needs, how it should feel, and how every element drives business. No guesswork.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Your website goes from concept to reality. First draft in 48 hours. We refine until every detail is perfect.',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    description: 'Your site goes live. Customers start finding you. We keep optimizing because growth never stops.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden">
      {/* Dark section with accent border top */}
      <div className="hr-glow" />

      <div className="py-section relative">
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style={{
          background: 'radial-gradient(ellipse, rgba(232,224,212,0.03) 0%, transparent 70%)',
        }} />

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <p className="section-label mb-6">
              <span className="inline-block w-16 h-px bg-accent/50 mr-4 align-middle" />
              How it works
            </p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <h2 className="md:col-span-7 font-display font-black text-heading text-text-primary">
                From first call to{' '}
                <span className="font-serif italic text-accent">live site.</span><br />
                No surprises.
              </h2>
              <div className="md:col-span-4 md:col-start-9">
                <div className="inline-flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent absolute top-0 left-0 animate-ping opacity-40" />
                  </div>
                  <p className="text-text-secondary text-sm font-body">
                    Most projects go live in <span className="text-accent font-semibold">under two weeks</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps — horizontal with connecting line */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-px bg-border/40" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  {/* Step number with circle indicator */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full border border-border/60 group-hover:border-accent/40 flex items-center justify-center transition-all duration-500 bg-bg">
                        <span className="font-display font-bold text-xs text-text-muted group-hover:text-accent transition-colors duration-500">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="md:hidden flex-1 h-px bg-border/30" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary group-hover:text-accent transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mt-4">
                    {step.description}
                  </p>

                  {/* Bottom accent on hover */}
                  <div className="mt-8 w-0 h-px bg-accent group-hover:w-full transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hr-glow" />
    </section>
  )
}
