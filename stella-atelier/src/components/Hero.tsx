'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end pb-20 overflow-hidden">
      {/* Full-bleed background */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85"
        alt="Luxury fashion editorial"
        fill
        className="object-cover"
        priority
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,12,0.85) 0%, rgba(12,12,12,0.2) 50%, transparent 100%)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 24 }}
        >
          SS26 Collection — Now Available
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.05,
            color: '#F0EDE8',
            marginBottom: 32,
          }}
        >
          Dressed for<br />who you become.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex items-center justify-center gap-6"
        >
          <button
            onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#F0EDE8', color: '#0C0C0C',
              padding: '14px 36px',
              fontFamily: 'var(--font-inter)', fontSize: '10px',
              letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600,
              border: 'none', cursor: 'pointer', transition: 'opacity 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Explore Collection
          </button>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ height: [0, 60, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ width: 1, background: '#C9A96E', margin: '0 auto' }}
        />
      </motion.div>
    </section>
  );
}
