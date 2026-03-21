'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cellSize = 80
      const cols = Math.ceil(canvas.width / cellSize) + 1
      const rows = Math.ceil(canvas.height / cellSize) + 1

      // Grid lines
      ctx.strokeStyle = 'rgba(200, 255, 0, 0.06)'
      ctx.lineWidth = 0.5
      for (let i = 0; i <= cols; i++) {
        const x = i * cellSize
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let j = 0; j <= rows; j++) {
        const y = j * cellSize
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Pulsing dots at intersections
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * cellSize
          const y = j * cellSize
          const pulse = Math.sin(time * 0.02 + i * 0.5 + j * 0.3) * 0.5 + 0.5
          const alpha = pulse * 0.15
          const radius = 1 + pulse * 1.5
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(200, 255, 0, ${alpha})`
          ctx.fill()
        }
      }

      // Traveling highlight columns
      const highlightCol = Math.floor((time * 0.3) % cols)
      ctx.strokeStyle = 'rgba(200, 255, 0, 0.12)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(highlightCol * cellSize, 0)
      ctx.lineTo(highlightCol * cellSize, canvas.height)
      ctx.stroke()

      // Traveling highlight row
      const highlightRow = Math.floor((time * 0.2) % rows)
      ctx.beginPath()
      ctx.moveTo(0, highlightRow * cellSize)
      ctx.lineTo(canvas.width, highlightRow * cellSize)
      ctx.stroke()

      // Bright dot at intersection of highlights
      ctx.beginPath()
      ctx.arc(highlightCol * cellSize, highlightRow * cellSize, 4, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(200, 255, 0, 0.5)'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(highlightCol * cellSize, highlightRow * cellSize, 12, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(200, 255, 0, 0.08)'
      ctx.fill()

      time++
      animationId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      {/* Corner brackets */}
      <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-accent/20" />
      <div className="absolute top-6 right-6 w-20 h-20 border-r-2 border-t-2 border-accent/20" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-l-2 border-b-2 border-accent/20" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-accent/20" />
    </>
  )
}

function GlitchText({ children, className }: { children: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 120)
    }, 3000 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-accent/70" style={{ clipPath: 'inset(15% 0 65% 0)', transform: 'translateX(4px) skewX(-2deg)' }}>
            {children}
          </span>
          <span className="absolute top-0 left-0 text-text-primary/50" style={{ clipPath: 'inset(55% 0 15% 0)', transform: 'translateX(-4px) skewX(1deg)' }}>
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
  const springX = useSpring(mouseX, { stiffness: 40, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15 })
  const rotateX = useTransform(springY, [0, 1], [3, -3])
  const rotateY = useTransform(springX, [0, 1], [-3, 3])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <GridBackground />

      {/* Giant background text with parallax */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ rotateX, rotateY, perspective: 1000 }}
      >
        <span className="font-display font-black text-[28vw] text-border/20 leading-none whitespace-nowrap">
          WV
        </span>
      </motion.div>

      {/* Diagonal accent slash */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-accent/30 via-accent/10 to-transparent origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-[10%] w-px h-3/4 bg-gradient-to-b from-accent/15 to-transparent origin-top"
      />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="section-label mb-10 flex items-center"
        >
          <span className="inline-block w-16 h-px bg-accent mr-4" />
          <span>Dubai&apos;s digital partner</span>
        </motion.p>

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%', rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-mega text-text-primary leading-[0.9]"
          >
            <GlitchText>Your business</GlitchText>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%', rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-mega text-text-primary leading-[0.9]"
          >
            deserves more
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-1">
          <motion.h1
            initial={{ y: '110%', rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-mega leading-[0.9]"
          >
            <span className="text-accent">clients</span>
            <motion.span
              className="text-accent inline-block"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 0.5, delay: 2 }}
            >.</motion.span>
          </motion.h1>
        </div>

        {/* Subline */}
        <div className="overflow-hidden mt-8">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-secondary text-lg md:text-xl max-w-lg leading-relaxed"
          >
            We create websites that <span className="text-text-primary font-semibold">attract customers</span>,{' '}
            <span className="text-text-primary font-semibold">build trust</span>, and{' '}
            <span className="text-text-primary font-semibold relative">
              grow your revenue
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </span>.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="btn-primary group">
            <span>Get a free proposal</span>
            <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#work" className="btn-outline group">
            <span>See results</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '3x', label: 'More enquiries' },
            { value: '<48h', label: 'First draft ready' },
            { value: '98%', label: 'Client satisfaction' },
            { value: '0', label: 'Upfront cost' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 + i * 0.1 }}
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
