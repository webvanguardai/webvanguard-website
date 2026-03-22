'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    label: '01',
    name: 'Lumière Wellness Studio',
    industry: 'Luxury Spa',
    location: 'Dubai Marina',
    url: 'https://lumiere-wellness.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://lumiere-wellness.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#D4AF37',
    bg: '#0A0A0A',
  },
  {
    label: '02',
    name: 'Apex Properties',
    industry: 'Real Estate',
    location: 'DIFC',
    url: 'https://apex-properties.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://apex-properties.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#3B82F6',
    bg: '#0A0A0A',
  },
  {
    label: '03',
    name: 'Qahwa House',
    industry: 'Specialty Coffee',
    location: 'D3',
    url: 'https://qahwa-house.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://qahwa-house.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C4956A',
    bg: '#0D0A08',
  },
  {
    label: '04',
    name: 'Zafran Barber',
    industry: 'Premium Grooming',
    location: 'DIFC',
    url: 'https://zafran-barber.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://zafran-barber.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#E8C872',
    bg: '#0A0A0A',
  },
  {
    label: '05',
    name: 'Lumina Lens Studio',
    industry: 'Photography',
    location: 'Dubai',
    url: 'https://lumina-lens-six.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://lumina-lens-six.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#E0E0E0',
    bg: '#0A0A0A',
  },
  {
    label: '06',
    name: 'Levant & Co.',
    industry: 'Fine Dining',
    location: 'DIFC',
    url: 'https://levant-co.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://levant-co.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C9956B',
    bg: '#0D0A08',
  },
  {
    label: '07',
    name: 'Solara Music',
    industry: 'Electronic Music & DJ',
    location: 'Dubai',
    url: 'https://solara-music-chi.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://solara-music-chi.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#7B68EE',
    bg: '#08080F',
  },
  {
    label: '08',
    name: 'Céleste Events',
    industry: 'Luxury Event Design',
    location: 'Dubai',
    url: 'https://celeste-events.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://celeste-events.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C9956B',
    bg: '#0D0A08',
  },
]

function ProjectRow({
  project,
  index,
  onHover,
  onLeave,
}: {
  project: typeof projects[0]
  index: number
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group block border-b border-border py-6 md:py-8 relative"
    >
      <div className="flex items-center gap-4 md:gap-8">
        {/* Number */}
        <span className="font-display font-black text-3xl md:text-5xl text-text-muted/30 group-hover:text-accent transition-colors duration-300 w-16 md:w-24 shrink-0">
          {project.label}
        </span>

        {/* Name */}
        <h3 className="font-display font-black text-xl md:text-3xl text-text-primary group-hover:text-accent transition-colors duration-300 flex-1 uppercase">
          {project.name}
        </h3>

        {/* Industry + Location — hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <span className="text-sm text-text-secondary font-body">
            {project.industry}
          </span>
          <span className="text-text-muted">·</span>
          <span className="text-sm text-text-secondary font-body">
            {project.location}
          </span>
        </div>

        {/* Arrow */}
        <span className="text-xl md:text-2xl text-text-muted group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 shrink-0">
          →
        </span>
      </div>

      {/* Mobile meta */}
      <div className="md:hidden flex items-center gap-2 mt-2 ml-20">
        <span className="text-xs text-text-muted">{project.industry}</span>
        <span className="text-text-muted text-xs">·</span>
        <span className="text-xs text-text-muted">{project.location}</span>
      </div>
    </motion.a>
  )
}

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="work" className="py-section">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-4">Selected work</p>
          <h2 className="font-display font-black text-heading text-text-primary uppercase">
            Eight businesses.<br />
            <span className="font-serif italic text-accent normal-case">Eight identities.</span>
          </h2>
        </motion.div>

        {/* Project list */}
        <div className="border-t border-border">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.label}
              project={project}
              index={i}
              onHover={() => setHoveredProject(project)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-text-muted text-sm"
        >
          Your business could be next.{' '}
          <a href="#contact" className="text-accent hover:underline underline-offset-4 font-semibold">Let&apos;s talk →</a>
        </motion.p>
      </div>

      {/* Floating hover preview — desktop only */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            key={hoveredProject.label}
            initial={{ opacity: 0, x: 20, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-8 top-1/2 -translate-y-1/2 w-72 z-50 pointer-events-none hidden md:block"
          >
            <div
              className="overflow-hidden shadow-2xl rounded-lg"
              style={{ border: `1px solid ${hoveredProject.accent}40` }}
            >
              {/* Thumbnail with clip to hide client nav */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hoveredProject.thumbnail}
                  alt={hoveredProject.name}
                  className="absolute left-0 right-0 w-full object-cover"
                  style={{ top: '-68px', height: 'calc(100% + 68px)' }}
                />
              </div>
              {/* Caption */}
              <div
                className="px-4 py-3"
                style={{ background: hoveredProject.bg }}
              >
                <p className="font-display font-bold text-sm" style={{ color: hoveredProject.accent }}>
                  {hoveredProject.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: `${hoveredProject.accent}70` }}>
                  {hoveredProject.industry} · {hoveredProject.location}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
