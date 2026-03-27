'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const shots = [
  {
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80',
    caption: 'Desert Light',
  },
  {
    img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80',
    caption: 'Dusk at the Marina',
  },
  {
    img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80',
    caption: 'Penthouse Morning',
  },
];

export default function Lookbook() {
  return (
    <section id="lookbook" style={{ padding: '96px 0', borderTop: '1px solid #1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>
              Editorial
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, fontStyle: 'italic', color: '#F0EDE8' }}>
              The Lookbook
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: '#777', letterSpacing: '0.1em', maxWidth: 200, textAlign: 'right' }}>
            Shot in Dubai & Paris, SS26
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {shots.map((s, i) => (
            <motion.div
              key={s.caption}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="relative group overflow-hidden"
              style={{ height: i === 1 ? 600 : 480 }}
            >
              <Image
                src={s.img}
                alt={s.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,12,12,0)', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(12,12,12,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(12,12,12,0)')}
              />
              <p style={{
                position: 'absolute', bottom: 20, left: 20,
                fontFamily: 'var(--font-playfair)', fontSize: '1rem',
                fontStyle: 'italic', color: '#F0EDE8',
                opacity: 0.7,
              }}>
                {s.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
