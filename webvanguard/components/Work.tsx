'use client'

import { motion } from 'framer-motion'

export default function Work() {
  return (
    <section id="work" className="py-section relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <p className="section-label mb-6">
              <span className="inline-block w-8 h-px bg-accent mr-3 align-middle" />
              Selected work
            </p>
            <h2 className="font-display font-black text-heading text-text-primary">
              Results speak<span className="text-accent">.</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm font-body max-w-xs">
            Each project below is a real business we helped grow. Portfolio updated with every new launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: n * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-border bg-bg-card hover:border-accent transition-all duration-500"
            >
              {/* Image placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-bg-elevated via-bg-card to-bg flex items-center justify-center relative overflow-hidden">
                <span className="font-display font-black text-[8rem] text-border/30 group-hover:text-accent/10 transition-colors duration-700 select-none">
                  {String(n).padStart(2, '0')}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
              </div>

              <div className="p-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-text-muted uppercase tracking-wider font-body">Coming soon</p>
                    <h3 className="font-display font-bold text-lg text-text-primary mt-1 group-hover:text-accent transition-colors duration-300">
                      Project {String(n).padStart(2, '0')}
                    </h3>
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
