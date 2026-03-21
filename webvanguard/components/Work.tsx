'use client'

import { motion } from 'framer-motion'

export default function Work() {
  return (
    <section id="work" className="py-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Selected work</p>
          <h2 className="font-display font-bold text-heading text-text-primary">
            Projects that deliver results.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: n * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-bg-elevated to-bg-card border border-border flex items-center justify-center mb-6">
                <span className="text-text-muted text-sm font-body">Project {String(n).padStart(2, '0')}</span>
              </div>
              <p className="section-label">Coming soon</p>
              <h3 className="font-display font-semibold text-lg text-text-primary mt-2 group-hover:text-accent transition-colors duration-300">
                Client Project {String(n).padStart(2, '0')}
              </h3>
              <p className="text-text-secondary text-sm mt-2">
                Web Design & Development
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted text-sm mt-12 font-body"
        >
          Portfolio growing — new projects added regularly.
        </motion.p>
      </div>
    </section>
  )
}
