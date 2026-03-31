'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type Category = 'F&B' | 'Wellness' | 'Creative' | 'Business' | 'Lifestyle'

const projects = [
  {
    label: '01',
    name: 'Qahwa House',
    industry: 'Specialty Coffee',
    location: 'D3',
    category: 'F&B' as Category,
    url: 'https://qahwa-house.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://qahwa-house.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C4956A',
    bg: '#0D0A08',
  },
  {
    label: '02',
    name: 'Zafran Barber',
    industry: 'Premium Grooming',
    location: 'DIFC',
    category: 'Lifestyle' as Category,
    url: 'https://zafran-barber.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://zafran-barber.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#E8C872',
    bg: '#0A0A0A',
  },
  {
    label: '03',
    name: 'Lumina Lens Studio',
    industry: 'Photography',
    location: 'Dubai',
    category: 'Creative' as Category,
    url: 'https://lumina-lens-six.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://lumina-lens-six.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#E0E0E0',
    bg: '#0A0A0A',
  },
  {
    label: '04',
    name: 'Casa Maíz',
    industry: 'Mexican Taquería',
    location: 'Al Quoz, Dubai',
    category: 'F&B' as Category,
    url: 'https://casa-maiz.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://casa-maiz.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#E8A020',
    bg: '#0A0600',
  },

  {
    label: '05',
    name: 'Levant & Co.',
    industry: 'Fine Dining',
    location: 'DIFC',
    category: 'F&B' as Category,
    url: 'https://levant-co.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://levant-co.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C9956B',
    bg: '#0D0A08',
  },
  {
    label: '06',
    name: 'Solara Music',
    industry: 'Electronic Music & DJ',
    location: 'Dubai',
    category: 'Creative' as Category,
    url: 'https://solara-music-chi.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://solara-music-chi.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#7B68EE',
    bg: '#08080F',
  },
  {
    label: '07',
    name: 'Céleste Events',
    industry: 'Luxury Event Design',
    location: 'Dubai',
    category: 'Creative' as Category,
    url: 'https://celeste-events.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://celeste-events.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C9956B',
    bg: '#0D0A08',
  },
  {
    label: '08',
    name: 'Noor Clinic',
    industry: 'Aesthetic Medicine',
    location: 'Business Bay',
    category: 'Wellness' as Category,
    url: 'https://noor-clinic.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://noor-clinic.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C9A96E',
    bg: '#0A0A0F',
  },
  {
    label: '09',
    name: 'APEX Training',
    industry: 'Elite Personal Training',
    location: 'Dubai Marina',
    category: 'Wellness' as Category,
    url: 'https://apex-training-rust.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://apex-training-rust.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#D4AF6B',
    bg: '#0A0A0A',
  },
  {
    label: '10',
    name: 'Saffron House',
    industry: 'Boutique Hotel',
    location: 'Al Fahidi, Old Dubai',
    category: 'Lifestyle' as Category,
    url: 'https://saffron-house-nu.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://saffron-house-nu.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#E8A422',
    bg: '#0E0C08',
  },
  {
    label: '11',
    name: 'Atelier Forma',
    industry: 'Architecture & Interior Design',
    location: 'DIFC, Dubai',
    category: 'Business' as Category,
    url: 'https://atelier-forma-three.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://atelier-forma-three.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C4A882',
    bg: '#F5F3EF',
  },
  {
    label: '12',
    name: 'Stella Atelier',
    industry: 'Luxury Fashion Boutique',
    location: 'DIFC, Dubai',
    category: 'Lifestyle' as Category,
    url: 'https://stella-atelier.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://stella-atelier.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C9A96E',
    bg: '#0C0C0C',
  },
  {
    label: '13',
    name: 'Prestige Drive',
    industry: 'Luxury Car Rental',
    location: 'Dubai',
    category: 'Lifestyle' as Category,
    url: 'https://prestige-drive-beta.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://prestige-drive-beta.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#E63946',
    bg: '#080808',
  },
  {
    label: '14',
    name: 'The Collective',
    industry: 'Boutique Co-Working Space',
    location: 'DIFC, Dubai',
    category: 'Business' as Category,
    url: 'https://the-collective-three.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://the-collective-three.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#6B5B3E',
    bg: '#F4F2EE',
  },
  {
    label: '15',
    name: 'Apex Capital',
    industry: 'Fintech & Digital Assets',
    location: 'DIFC, Dubai',
    category: 'Business' as Category,
    url: 'https://apex-fintech.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://apex-fintech.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#0EA5E9',
    bg: '#050A14',
  },
  {
    label: '16',
    name: 'NOIR Studio',
    industry: 'Visual Artist & Creative Director',
    location: 'Dubai',
    category: 'Creative' as Category,
    url: 'https://noir-studio-sigma.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://noir-studio-sigma.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#FF0040',
    bg: '#000000',
  },
  {
    label: '17',
    name: 'Atlas Legal Group',
    industry: 'DIFC Law Firm',
    location: 'Dubai',
    category: 'Business' as Category,
    url: 'https://atlas-legal.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://atlas-legal.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C9956B',
    bg: '#0A0A0A',
  },
  {
    label: '18',
    name: 'Leila Hariri Dental',
    industry: 'Aesthetic Dentistry',
    location: 'Dubai',
    category: 'Lifestyle' as Category,
    url: 'https://leila-hariri-dental.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://leila-hariri-dental.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#E8C4B5',
    bg: '#FFF8F5',
  },
  {
    label: '19',
    name: 'Maison Joëlle',
    industry: 'Bespoke Fine Jewelry',
    location: 'Dubai',
    category: 'Creative' as Category,
    url: 'https://maison-joelle.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://maison-joelle.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C9A96E',
    bg: '#0A0808',
  },
  {
    label: '20',
    name: 'Sakura Studio',
    industry: 'Yoga & Aerial Yoga Studio',
    location: 'Business Bay, Dubai',
    category: 'Wellness' as Category,
    url: 'https://sakura-studio.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://sakura-studio.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#C9956B',
    bg: '#1A2E1A',
  },
  {
    label: '21',
    name: 'The Dark Passage',
    industry: 'Horror Escape Room',
    location: 'Dubai',
    category: 'Creative' as Category,
    url: 'https://the-dark-passage.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://the-dark-passage.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#CC0000',
    bg: '#050505',
  },
  {
    label: '22',
    name: 'Lumière Wellness Studio',
    industry: 'Luxury Spa',
    location: 'Dubai Marina',
    category: 'Wellness' as Category,
    url: 'https://lumiere-wellness.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://lumiere-wellness.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#D4AF37',
    bg: '#0A0A0A',
  },
  {
    label: '23',
    name: 'Apex Properties',
    industry: 'Real Estate',
    location: 'DIFC',
    category: 'Business' as Category,
    url: 'https://apex-properties.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://apex-properties.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg&viewport.width=1440&viewport.height=900',
    accent: '#3B82F6',
    bg: '#0A0A0A',
  },
]

type FilterCategory = 'All' | Category
const FILTER_CATEGORIES: FilterCategory[] = ['All', 'F&B', 'Wellness', 'Creative', 'Business', 'Lifestyle']

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

        {/* Industry + Location + Category — hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <span className="text-sm text-text-secondary font-body">
            {project.industry}
          </span>
          <span className="text-text-muted">·</span>
          <span className="text-sm text-text-secondary font-body">
            {project.location}
          </span>
          <span className="text-text-muted">·</span>
          <span className="font-body text-[10px] tracking-widest uppercase text-text-secondary">
            {project.category}
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
        <span className="text-text-muted text-xs">·</span>
        <span className="font-body text-[10px] tracking-widest uppercase text-text-secondary">{project.category}</span>
      </div>
    </motion.a>
  )
}

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<typeof projects[0] | null>(null)
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

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
          <div className="flex items-center gap-4 mb-4">
            <p className="section-label">Selected work</p>
            <span className="font-body text-xs tracking-widest uppercase text-text-secondary">
              — {filteredProjects.length} projects
            </span>
          </div>
          <h2 className="font-display font-black text-heading text-text-primary uppercase">
            We built these.<br />
            <span className="font-serif italic text-accent normal-case">Before anyone paid a cent.</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {FILTER_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={[
                  'font-body text-xs tracking-widest uppercase px-4 py-2 border rounded-full transition-all duration-200',
                  isActive
                    ? 'border-accent text-accent bg-accent/10'
                    : 'border-border text-text-secondary bg-transparent hover:text-text-primary',
                ].join(' ')}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        {/* Project list */}
        <div className="border-t border-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {filteredProjects.map((project, i) => (
                <ProjectRow
                  key={project.label}
                  project={project}
                  index={i}
                  onHover={() => setHoveredProject(project)}
                  onLeave={() => setHoveredProject(null)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
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
