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
    <section id="process" className="py-section border-t border-border">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-4">Process</p>
          <p className="font-display font-black text-xl md:text-2xl text-text-primary">
            From call to live site in <span className="text-accent">under two weeks.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 md:p-8"
            >
              <span className="font-display font-black text-4xl md:text-5xl text-text-muted/20">{step.number}</span>
              <h3 className="font-display font-black text-lg md:text-xl text-text-primary mt-4 uppercase">{step.title}</h3>
              <p className="text-sm text-text-muted mt-2 font-body">{step.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
