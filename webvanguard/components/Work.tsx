'use client'

import { motion } from 'framer-motion'

const projects = [
  { name: 'Coming Soon', industry: 'Restaurant & Hospitality', label: '01' },
  { name: 'Coming Soon', industry: 'Real Estate', label: '02' },
  { name: 'Coming Soon', industry: 'Professional Services', label: '03' },
]

export default function Work() {
  return (
    <section id="work" className="py-section relative overflow-hidden">
      {/* Background giant text */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-10 pointer-events-none select-none">
        <span className="font-display font-black text-[20vw] text-border/15 leading-none whitespace-nowrap">
          WORK
        </span>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <p className="section-label mb-6">
              <span className="inline-block w-12 h-px bg-accent mr-4 align-middle" />
              Our work
            </p>
            <h2 className="font-display font-black text-heading text-text-primary">
              Real businesses<span className="text-accent">.</span><br />
              Real results<span className="text-accent">.</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm font-body max-w-xs">
            Every project below is a business we helped get more customers. Updated with every new launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, n) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: n * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-border bg-bg-card hover:border-accent/50 transition-all duration-500"
            >
              {/* Image placeholder with animated gradient */}
              <div className="aspect-[3/4] bg-gradient-to-br from-bg-elevated via-bg-card to-bg flex items-center justify-center relative overflow-hidden">
                <span className="font-display font-black text-[8rem] text-border/30 group-hover:text-accent/15 transition-colors duration-700 select-none">
                  {project.label}
                </span>
                {/* Hover scanning line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000" />
                {/* Corner accents on hover */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-accent/0 group-hover:border-accent/40 transition-all duration-500" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-accent/0 group-hover:border-accent/40 transition-all duration-500" />
              </div>

              <div className="p-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-accent uppercase tracking-wider font-body">{project.industry}</p>
                    <h3 className="font-display font-bold text-lg text-text-primary mt-1 group-hover:text-accent transition-colors duration-300">
                      {project.name}
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
