'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Coming Soon',
    industry: 'Restaurant & Hospitality',
    label: '01',
    gradient: 'from-accent/[0.06] to-bg-elevated',
  },
  {
    name: 'Coming Soon',
    industry: 'Real Estate',
    label: '02',
    gradient: 'from-bg-elevated to-accent/[0.04]',
  },
  {
    name: 'Coming Soon',
    industry: 'Professional Services',
    label: '03',
    gradient: 'from-accent/[0.04] via-bg-card to-bg-elevated',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-section relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(232,224,212,0.02) 0%, transparent 70%)',
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
            Our work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <h2 className="md:col-span-7 font-display font-black text-heading text-text-primary">
              Real businesses<span className="text-accent">.</span><br />
              <span className="font-serif italic text-accent">Real results</span><span className="text-accent">.</span>
            </h2>
            <p className="md:col-span-4 md:col-start-9 text-text-secondary text-sm max-w-xs md:ml-auto">
              Every project here is a business we helped grow. This section updates with every new launch.
            </p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, n) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: n * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="card-elevated group"
            >
              {/* Image placeholder */}
              <div className={`aspect-[4/5] bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                {/* Floating number */}
                <motion.span
                  className="font-serif italic font-black text-[12rem] text-accent/[0.05] group-hover:text-accent/[0.12] transition-all duration-700 select-none leading-none"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.label}
                </motion.span>

                {/* Grid overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
                  backgroundImage: `
                    linear-gradient(rgba(232,224,212,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(232,224,212,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }} />

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-accent/0 group-hover:border-accent/25 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/25 transition-all duration-500" />

                {/* Industry tag */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[10px] text-accent uppercase tracking-wider font-body bg-bg/90 px-3 py-1.5 backdrop-blur-sm border border-accent/10">
                    {project.industry}
                  </span>
                </div>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-accent/60 uppercase tracking-wider font-body">{project.industry}</p>
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-text-muted text-sm font-body">
            Your business could be next.{' '}
            <a href="#contact" className="text-accent hover:underline underline-offset-4 transition-all">Let&apos;s talk</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
