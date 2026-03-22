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
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
        >
          <div>
            <p className="section-label mb-6">
              <span className="inline-block w-12 h-px bg-accent mr-4 align-middle" />
              Our work
            </p>
            <h2 className="font-display font-black text-heading text-text-primary">
              Real businesses<span className="text-accent">.</span><br />
              <span className="font-serif italic">Real results</span><span className="text-accent">.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-text-muted text-sm font-body max-w-xs md:ml-auto">
              Every project below is a business we helped get more customers. Updated with every new launch.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, n) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: n * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-border bg-bg-card hover:border-accent/40 transition-all duration-500"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-bg-elevated via-bg-card to-bg flex items-center justify-center relative overflow-hidden">
                {/* Large serif number */}
                <span className="font-serif italic font-black text-[10rem] text-border/20 group-hover:text-accent/10 transition-colors duration-700 select-none">
                  {project.label}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.03] transition-colors duration-500" />

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-accent/0 group-hover:border-accent/30 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-accent/0 group-hover:border-accent/30 transition-all duration-500" />

                {/* Industry tag floating */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] text-accent uppercase tracking-wider font-body bg-bg/80 px-3 py-1.5 backdrop-blur-sm">
                    {project.industry}
                  </span>
                </div>
              </div>

              <div className="p-6 border-t border-border flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-accent uppercase tracking-wider font-body">{project.industry}</p>
                  <h3 className="font-display font-bold text-lg text-text-primary mt-1 group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
                <svg className="w-5 h-5 text-border group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
