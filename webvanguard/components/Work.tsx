'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    label: '01',
    name: 'Lumière Wellness Studio',
    industry: 'Luxury Spa & Beauty',
    location: 'Dubai Marina',
    description: 'A dark editorial website for a luxury spa in Dubai Marina. Gold palette, animated treatment showcase, and a gallery designed to turn browsers into bookings.',
    url: 'https://lumiere-wellness.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://lumiere-wellness.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg',
    tags: ['Spa & Wellness', 'Luxury', 'Dubai Marina'],
    accent: '#C9A96E',
    bg: '#0A0806',
    featured: true,
  },
  {
    label: '02',
    name: 'Apex Properties',
    industry: 'Luxury Real Estate',
    location: 'DIFC, Dubai',
    description: 'Premium real estate agency site. Navy & gold identity, featured property listings, Golden Visa advisory services.',
    url: 'https://apex-properties.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://apex-properties.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg',
    tags: ['Real Estate', 'Investment', 'DIFC'],
    accent: '#C9A96E',
    bg: '#0A1628',
    featured: false,
  },
  {
    label: '03',
    name: 'Qahwa House',
    industry: 'Specialty Coffee',
    location: 'Dubai Design District',
    description: 'Warm minimalist café site. Terracotta palette, interactive menu with AED pricing, and a story that turns visitors into regulars.',
    url: 'https://qahwa-house.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://qahwa-house.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg',
    tags: ['Food & Beverage', 'Café', 'D3'],
    accent: '#C4622D',
    bg: '#1A110A',
    featured: false,
  },
  {
    label: '04',
    name: 'Zafran Barber',
    industry: "Men's Premium Grooming",
    location: 'DIFC, Dubai',
    description: 'Bold masculine identity for a luxury barbershop. Crimson & chrome, service cards with AED pricing, gallery and instant booking.',
    url: 'https://zafran-barber.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://zafran-barber.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg',
    tags: ['Grooming', 'Lifestyle', 'DIFC'],
    accent: '#B41E1E',
    bg: '#0A0A0A',
    featured: false,
  },
  {
    label: '05',
    name: 'Lumina Lens Studio',
    industry: 'Premium Photography',
    location: 'Dubai',
    description: 'Electric editorial portfolio for a photography studio. Cyan & black aesthetic, 6 service packages, curated gallery.',
    url: 'https://lumina-lens-six.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://lumina-lens-six.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg',
    tags: ['Photography', 'Editorial', 'Creative'],
    accent: '#00C9B8',
    bg: '#08080F',
    featured: false,
  },
  {
    label: '06',
    name: 'Levant & Co.',
    industry: 'Lebanese Fine Dining',
    location: 'DIFC, Dubai',
    description: 'Heritage-rich restaurant site. Deep emerald & gold, full menu by course, chef story, and a reservation flow designed to fill tables.',
    url: 'https://levant-co.vercel.app',
    thumbnail: 'https://api.microlink.io/?url=https://levant-co.vercel.app&screenshot=true&embed=screenshot.url&meta=false&type=jpeg',
    tags: ['Restaurant', 'Fine Dining', 'DIFC'],
    accent: '#B5973A',
    bg: '#0A0D08',
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block border border-border hover:border-accent/30 bg-bg-card/40 hover:bg-bg-card transition-all duration-500 overflow-hidden"
      style={{ '--project-accent': project.accent } as React.CSSProperties}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: project.featured ? '16/9' : '4/3',
          background: project.bg,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumbnail}
          alt={`${project.name} website screenshot`}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* Accent tint on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `${project.accent}10` }}
        />
        {/* Corner brackets */}
        <div className="absolute top-5 left-5 w-10 h-10 border-l border-t transition-all duration-500 opacity-0 group-hover:opacity-100" style={{ borderColor: `${project.accent}60` }} />
        <div className="absolute bottom-5 right-5 w-10 h-10 border-r border-b transition-all duration-500 opacity-0 group-hover:opacity-100" style={{ borderColor: `${project.accent}60` }} />
        {/* Label badge */}
        <div className="absolute top-5 left-5">
          <span className="font-display font-black text-4xl md:text-5xl leading-none" style={{ color: `${project.accent}20` }}>
            {project.label}
          </span>
        </div>
      </div>

      {/* Info — always visible */}
      <div className="p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-[0.25em] mb-1.5" style={{ color: `${project.accent}80` }}>
              {project.label} — {project.industry}
            </p>
            <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary group-hover:text-accent transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          {project.featured && (
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[9px] uppercase tracking-widest px-2.5 py-1 border"
                  style={{ color: `${project.accent}70`, borderColor: `${project.accent}25` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-1 mb-4">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 hover:gap-3"
          style={{ color: `${project.accent}90` }}
          onClick={e => e.stopPropagation()}
        >
          View Live
          <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

export default function Work() {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section id="work" className="py-section relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-6">
            <span className="inline-block w-16 h-px bg-accent/50 mr-4 align-middle" />
            Selected work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <h2 className="md:col-span-7 font-display font-black text-heading text-text-primary">
              Businesses that<span className="text-accent">.</span><br />
              <span className="font-serif italic text-accent">stand out online</span><span className="text-accent">.</span>
            </h2>
            <p className="md:col-span-4 md:col-start-9 text-text-secondary text-sm">
              Six Dubai businesses, six distinct identities. Each website built to convert visitors into customers from day one.
            </p>
          </div>
        </motion.div>

        {/* Featured project */}
        <div className="mb-4">
          <ProjectCard project={featured} index={0} />
        </div>

        {/* Grid 2+2+2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((project, i) => (
            <ProjectCard key={project.label} project={project} index={i + 1} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-text-muted text-sm">
            Your business could be next.{' '}
            <a href="#contact" className="text-accent hover:underline underline-offset-4">Let&apos;s talk</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
