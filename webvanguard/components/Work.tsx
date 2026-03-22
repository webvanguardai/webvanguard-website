'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Lumière Wellness Studio',
    industry: 'Luxury Spa & Beauty',
    label: '01',
    description: 'A dark editorial luxury spa website for Dubai Marina. Dark gold aesthetic, Framer Motion animations, and bespoke treatment showcase.',
    url: 'https://lumiere-wellness.vercel.app',
    tags: ['Web Design', 'Next.js', 'Branding'],
    live: true,
  },
  {
    name: 'Apex Properties Dubai',
    industry: 'Luxury Real Estate',
    label: '02',
    description: 'Premium real estate agency website for Dubai\'s luxury property market. Navy & gold identity, property listings grid, investment advisory services, multilingual client focus.',
    url: 'https://apex-properties.vercel.app',
    tags: ['Web Design', 'Next.js', 'Real Estate'],
    live: true,
  },
  {
    name: 'Qahwa House',
    industry: 'Specialty Coffee Roastery',
    label: '03',
    description: 'Warm minimalist website for a specialty coffee roastery in Dubai Design District. Terracotta & cream identity, interactive menu, gallery, and full SEO. Completely different energy from the previous two.',
    url: 'https://qahwa-house.vercel.app',
    tags: ['Web Design', 'Next.js', 'Food & Beverage'],
    live: true,
  },
  {
    name: 'Zafran Barber',
    industry: 'Premium Men\'s Grooming',
    label: '04',
    description: 'Luxury barbershop website for Dubai\'s most discerning clientele. Dark masculine identity with crimson red & chrome accents. 6 service cards with AED pricing, testimonials, gallery, and functional booking form.',
    url: 'https://zafran-barber.vercel.app',
    tags: ['Web Design', 'Next.js', 'Barbershop'],
    live: true,
  },
  {
    name: 'Lumina Lens Studio',
    industry: 'Premium Photography',
    label: '05',
    description: 'Dubai\'s most progressive photography studio. Electric cyan & black editorial aesthetic. 6 service categories with AED pricing, full gallery, client testimonials, and advanced Framer Motion animations.',
    url: 'https://lumina-lens-six.vercel.app',
    tags: ['Web Design', 'Next.js', 'Photography'],
    live: true,
  },
  {
    name: 'Levant & Co.',
    industry: 'Lebanese Fine Dining',
    label: '06',
    description: 'Authentic Lebanese cuisine in DIFC. Deep emerald & gold heritage identity. Full 80+ item menu by course, chef story, gallery, reservation system, and Restaurant schema.org markup.',
    url: 'https://levant-co.vercel.app',
    tags: ['Web Design', 'Next.js', 'Hospitality'],
    live: true,
  },
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
          className="mb-20"
        >
          <p className="section-label mb-6">
            <span className="inline-block w-16 h-px bg-accent/50 mr-4 align-middle" />
            Selected work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <h2 className="md:col-span-7 font-display font-black text-heading text-text-primary">
              Real businesses<span className="text-accent">.</span><br />
              <span className="font-serif italic text-accent">Real results</span><span className="text-accent">.</span>
            </h2>
            <p className="md:col-span-4 md:col-start-9 text-text-secondary text-sm">
              Every project is a business we helped grow. Updated with every new launch.
            </p>
          </div>
        </motion.div>

        {/* Portfolio grid — first item large, rest smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Featured project — full width */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 group relative border border-border hover:border-accent/20 bg-bg-card/50 hover:bg-bg-card transition-all duration-500 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image area */}
              <div className="aspect-[16/10] md:aspect-auto relative overflow-hidden" style={{
                background: 'linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(10,8,6,1) 70%)',
              }}>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic font-black text-[15rem] leading-none select-none" style={{ color: 'rgba(201,169,110,0.06)' }}>
                  01
                </span>
                {/* Lumière brand text in the image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="font-serif text-4xl font-black text-[#C9A96E]/30 tracking-wide">Lumière</span>
                  <span className="text-[9px] tracking-[0.4em] uppercase text-[#C9A96E]/20">Wellness Studio · Dubai Marina</span>
                </div>
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                  backgroundImage: 'linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />
                <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-accent/0 group-hover:border-accent/20 transition-all duration-500" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/20 transition-all duration-500" />
              </div>
              {/* Info */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <p className="section-label mb-4">Featured Project · Live</p>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-text-primary group-hover:text-accent transition-colors duration-500">
                    Lumière Wellness Studio
                  </h3>
                  <p className="font-serif italic text-text-muted mt-2">Luxury Spa & Beauty · Dubai Marina</p>
                  <p className="text-text-secondary text-sm mt-6 leading-relaxed">
                    A dark editorial luxury website for a premium spa brand in Dubai Marina. Bespoke design with gold accent palette, Framer Motion animations, and a complete treatment showcase across 6 service categories.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-3 flex-wrap mb-4">
                    <span className="text-[10px] text-accent/60 border border-accent/15 px-3 py-1.5 uppercase tracking-wider">Next.js 14</span>
                    <span className="text-[10px] text-accent/60 border border-accent/15 px-3 py-1.5 uppercase tracking-wider">Tailwind CSS</span>
                    <span className="text-[10px] text-accent/60 border border-accent/15 px-3 py-1.5 uppercase tracking-wider">Framer Motion</span>
                  </div>
                  <a
                    href="https://lumiere-wellness.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-accent/70 hover:text-accent transition-colors"
                  >
                    View Live Site
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary projects */}
          {projects.slice(1).map((project, n) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + n * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border border-border hover:border-accent/20 bg-bg-card/50 hover:bg-bg-card transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden" style={{
                background: `linear-gradient(${n % 2 === 0 ? '135deg' : '225deg'}, rgba(212,149,107,0.06) 0%, rgba(10,10,10,1) 70%)`,
              }}>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic font-black text-[10rem] leading-none select-none" style={{ color: 'rgba(212,149,107,0.05)' }}>
                  {project.label}
                </span>
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/0 group-hover:border-accent/20 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/20 transition-all duration-500" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-accent/50 uppercase tracking-wider font-body">{project.industry}</p>
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
