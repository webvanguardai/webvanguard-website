'use client'

import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Discovery', time: 'Day 1' },
  { number: '02', title: 'Strategy', time: 'Day 2' },
  { number: '03', title: 'Build', time: 'Day 3–10' },
  { number: '04', title: 'Launch', time: 'Day 14' },
]

export default function Process() {
  return (
    <section id="process" className="py-section bg-bg-dark text-text-on-dark relative overflow-hidden">
      {/* Subtle warm ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-4">Process</p>
          <p className="font-display font-black text-xl md:text-2xl text-[#F4F1EC]">
            From call to live site in <span className="text-accent">under two weeks.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(244,241,236,0.08)' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-dark-card p-6 md:p-8"
            >
              <span className="font-display font-black text-4xl md:text-5xl text-[#F4F1EC]/10">{step.number}</span>
              <h3 className="font-display font-black text-lg md:text-xl text-[#F4F1EC] mt-4 uppercase">{step.title}</h3>
              <p className="text-sm text-text-on-dark-muted mt-2 font-body">{step.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
