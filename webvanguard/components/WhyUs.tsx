'use client'

import { motion } from 'framer-motion'

const differentiators = [
  {
    number: '01',
    title: 'We show you before you pay.',
    description: 'We build a demo site for your business before you commit to anything. You see the result, then decide.',
  },
  {
    number: '02',
    title: 'Dubai expertise.',
    description: 'We know the Dubai market. Every website is built for your local clients, in their language, with their search behavior in mind.',
  },
  {
    number: '03',
    title: 'Results, not pages.',
    description: "We don't sell websites. We sell more customers. Every design decision is made with your revenue in mind.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-section relative overflow-hidden bg-bg-card/20">
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(212,149,107,0.12), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(212,149,107,0.12), transparent)' }} />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-7">
            <p className="section-label mb-6">
              <span className="inline-block w-16 h-px bg-accent/50 mr-4 align-middle" />
              Why Web Vanguard
            </p>
            <h2 className="font-display font-black text-heading text-text-primary">
              Not another<br />
              <span className="font-serif italic text-accent">agency.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-text-secondary text-sm leading-relaxed">
            Freelancers disappear. Big agencies overcharge. We're something different — a focused team that stakes its reputation on results.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border border-border hover:border-accent/40 bg-bg-card/30 hover:bg-bg-card/60 p-8 md:p-10 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Copper left border on hover */}
              <div className="absolute left-0 top-0 w-[2px] h-0 group-hover:h-full transition-all duration-700 origin-top" style={{ background: 'rgba(212,149,107,0.7)' }} />

              {/* Large number */}
              <p
                className="font-display font-black leading-none mb-6 transition-colors duration-500"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  WebkitTextStroke: '1px rgba(212,149,107,0.18)',
                  color: 'transparent',
                }}
              >
                {item.number}
              </p>

              {/* Title */}
              <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary group-hover:text-accent transition-colors duration-400 mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: 'linear-gradient(to right, rgba(212,149,107,0.4), transparent)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
