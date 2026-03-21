'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(200,255,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,255,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glowing grid intersections */}
      {[
        { x: '20%', y: '15%', delay: 0 },
        { x: '80%', y: '25%', delay: 1.5 },
        { x: '45%', y: '70%', delay: 0.8 },
        { x: '70%', y: '50%', delay: 2.2 },
        { x: '15%', y: '85%', delay: 3 },
        { x: '90%', y: '75%', delay: 1 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-accent rounded-full"
          style={{ left: dot.x, top: dot.y }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            boxShadow: [
              '0 0 0px rgba(200,255,0,0)',
              '0 0 20px rgba(200,255,0,0.6)',
              '0 0 0px rgba(200,255,0,0)',
            ],
          }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-accent/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-accent/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-accent/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-accent/20" />
    </div>
  )
}

function GlitchText({ children, className }: { children: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 150)
    }, 4000 + Math.random() * 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-accent/60" style={{ clipPath: 'inset(20% 0 60% 0)', transform: 'translateX(3px)' }}>
            {children}
          </span>
          <span className="absolute top-0 left-0 text-text-primary/60" style={{ clipPath: 'inset(60% 0 10% 0)', transform: 'translateX(-3px)' }}>
            {children}
          </span>
        </>
      )}
    </span>
  )
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const rotateX = useTransform(springY, [0, 1], [2, -2])
  const rotateY = useTransform(springX, [0, 1], [-2, 2])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <GridBackground />

      {/* Giant background text with parallax */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ rotateX, rotateY, perspective: 1000 }}
      >
        <span className="font-display font-black text-[25vw] text-border/30 leading-none whitespace-nowrap">
          WV
        </span>
      </motion.div>

      {/* Accent lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-[8%] w-px h-full bg-gradient-to-b from-accent/40 via-accent/10 to-transparent origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-[12%] w-px h-2/3 bg-gradient-to-b from-accent/20 to-transparent origin-top"
      />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full pb-16 md:pb-24 relative z-10">
        {/* Label with typing effect */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="section-label mb-8 flex items-center"
        >
          <span className="inline-block w-12 h-px bg-accent mr-4" />
          <span className="relative">
            AI-Powered Web Agency
            <motion.span
              className="absolute -right-3 top-0 w-px h-full bg-accent"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </span>
        </motion.p>

        {/* Main headline with clip reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-mega text-text-primary"
          >
            <GlitchText>We don&apos;t build</GlitchText>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-mega text-text-primary"
          >
            websites<motion.span
              className="text-accent inline-block"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >.</motion.span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-2">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-hero text-text-muted"
          >
            We build <span className="text-text-primary relative">
              revenue machines
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </span><span className="text-accent">.</span>
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-14 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="btn-primary group">
            <span>Start a project</span>
            <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#work" className="btn-outline group">
            <span>See our work</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '98%', label: 'Satisfaction' },
            { value: '3x', label: 'ROI Increase' },
            { value: '<24h', label: 'First Draft' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.1 }}
            >
              <p className="font-display font-black text-3xl md:text-4xl text-text-primary group-hover:text-accent transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-xs text-text-muted mt-1 font-body uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
    </section>
  )
}
