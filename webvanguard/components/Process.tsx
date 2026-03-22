'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'We Listen',
    serif: 'understand',
    description: 'Tell us about your business, your customers, and your goals. We study your market and your competitors.',
  },
  {
    number: '02',
    title: 'We Plan',
    serif: 'strategize',
    description: 'We create a clear strategy: what your site needs to say, how it should look, and how it brings you business.',
  },
  {
    number: '03',
    title: 'We Build',
    serif: 'create',
    description: 'Your site goes from concept to reality. First draft in under 48 hours. Revisions until you love it.',
  },
  {
    number: '04',
    title: 'You Grow',
    serif: 'profit',
    description: 'Your website goes live. Customers start finding you. We keep optimizing so results keep coming.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden">
      {/* Green accent band */}
      <div className="bg-accent text-white py-section relative">
        {/* Subtle grid on green */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(5,5,5,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(5,5,5,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-body font-semibold mb-6">
                <span className="inline-block w-12 h-px bg-white/40 mr-4 align-middle" />
                How it works
              </p>
              <h2 className="font-display font-black text-heading text-white">
                From first call to{' '}
                <span className="font-serif italic">live site.</span><br />
                Simple, fast, no surprises.
              </h2>
            </div>
            <div className="md:text-right">
              <div className="inline-flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-white" />
                  <div className="w-3 h-3 rounded-full bg-white absolute top-0 left-0 animate-ping" />
                </div>
                <p className="text-white/70 text-sm font-body">
                  Most projects go from zero to live in <span className="text-white font-bold">under two weeks</span>.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-8 md:p-10 border-l border-white/10 first:border-l-0 group hover:bg-white/[0.06] transition-all duration-500"
              >
                <span className="font-display font-black text-8xl text-white/10 group-hover:text-white/20 transition-colors duration-500 leading-none block">
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mt-6">
                  {step.title}
                </h3>
                <p className="font-serif italic text-white/50 text-sm mt-1">
                  {step.serif}
                </p>
                <p className="text-white/70 text-sm leading-relaxed mt-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
