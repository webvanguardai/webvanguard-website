'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn your business, customers, and goals. We study what competitors do right — and wrong.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'A clear plan: what your site needs, how it should feel, how every element drives business.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Concept to reality. First draft in 48 hours. We refine until every detail is perfect.',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    description: 'Your site goes live. Customers find you. We keep optimizing because growth never stops.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden">
      <div className="hr-glow" />

      {/* Accent background section */}
      <div className="py-section relative" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #12100E 50%, #0A0A0A 100%)' }}>
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(212,149,107,0.03) 0%, transparent 60%)',
        }} />

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
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
                <span className="font-serif italic text-accent">live site.</span>
              </h2>
              <div className="md:col-span-4 md:col-start-9">
                <div className="inline-flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent absolute top-0 left-0 animate-ping opacity-40" />
                  </div>
                  <p className="text-text-secondary text-sm">
                    Most projects go live in <span className="text-accent font-semibold">under two weeks</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 md:p-10 md:border-l border-accent/[0.07] first:border-l-0 hover:bg-accent/[0.02] transition-all duration-500"
              >
                {/* Number */}
                <span className="font-serif italic text-7xl md:text-8xl leading-none block" style={{ color: 'rgba(212,149,107,0.08)' }}>
                  {step.number}
                </span>

                {/* Dot connector */}
                <div className="hidden md:block absolute top-8 -right-[5px] w-[10px] h-[10px] rounded-full bg-bg border-2 border-accent/20 group-hover:border-accent/50 transition-colors duration-500 z-10" />

                <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary group-hover:text-accent transition-colors duration-500 mt-6">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mt-4">
                  {step.description}
                </p>

                {/* Growing underline */}
                <div className="mt-8 w-0 h-px bg-accent group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="hr-glow" />
    </section>
  )
}
