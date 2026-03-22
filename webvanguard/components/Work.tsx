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
  },
  {
    label: '02',
    name: 'Apex Properties',
    industry: 'Real Estate',
    location: 'DIFC',
    url: 'https://apex-properties.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://apex-properties.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
  },
  {
    label: '03',
    name: 'Qahwa House',
    industry: 'Specialty Coffee',
    location: 'D3',
    url: 'https://qahwa-house.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://qahwa-house.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
  },
  {
    label: '04',
    name: 'Zafran Barber',
    industry: 'Premium Grooming',
    location: 'DIFC',
    url: 'https://zafran-barber.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://zafran-barber.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
  },
  {
    label: '05',
    name: 'Lumina Lens Studio',
    industry: 'Photography',
    location: 'Dubai',
    url: 'https://lumina-lens-six.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://lumina-lens-six.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
  },
  {
    label: '06',
    name: 'Levant & Co.',
    industry: 'Fine Dining',
    location: 'DIFC',
    url: 'https://levant-co.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://levant-co.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
  },
  {
    label: '07',
    name: 'SOLARA',
    industry: 'Music Artist',
    location: 'Dubai',
    url: 'https://solara-music-chi.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://solara-music-chi.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
  },
  {
    label: '08',
    name: 'Céleste Events',
    industry: 'Event Design',
    location: 'Dubai Design District',
    url: 'https://celeste-events.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://celeste-events.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
  },
]

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block border-b border-border py-6 md:py-8 relative overflow-hidden"
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

        {/* Industry + Location — hidden on mobile to save space */}
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

      {/* Hover thumbnail — desktop only */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute right-32 top-1/2 -translate-y-1/2 w-[300px] h-[188px] z-20 pointer-events-none overflow-hidden shadow-2xl border border-border"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.thumbnail}
              alt={`${project.name} preview`}
              className="w-full object-cover"
              style={{ marginTop: '-50px', height: 'calc(100% + 50px)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  )
}

export default function Work() {
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
            <ProjectRow key={project.label} project={project} index={i} />
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
    </section>
  )
}
