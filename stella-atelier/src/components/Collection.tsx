'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const pieces = [
  {
    name: 'Silk Meridian Dress',
    designer: 'Stella Atelier x Celine',
    price: 'AED 8,400',
    tag: 'New Arrival',
    img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80',
  },
  {
    name: 'Cashmere Overcoat',
    designer: 'Loro Piana',
    price: 'AED 18,200',
    tag: 'Exclusive',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
  },
  {
    name: 'Tailored Palazzo Set',
    designer: 'Max Mara',
    price: 'AED 5,900',
    tag: 'SS26',
    img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80',
  },
  {
    name: 'Evening Column Gown',
    designer: 'Roland Mouret',
    price: 'AED 12,600',
    tag: 'Limited',
    img: 'https://images.unsplash.com/photo-1566479179817-c0c5a8d5c8e0?w=800&q=80',
  },
];

export default function Collection() {
  return (
    <section id="collection" style={{ padding: '96px 0', borderTop: '1px solid #1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>
              SS26 — Spring Summer Collection
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: '#F0EDE8' }}>
              New Arrivals
            </h2>
          </div>
          <div style={{ width: '4rem', height: 1, background: '#C9A96E', display: 'none' }} className="hidden md:block" />
        </div>

        {/* Grid — alternating sizes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large piece */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative group cursor-pointer"
          >
            <div className="relative overflow-hidden" style={{ height: 700 }}>
              <Image
                src={pieces[0].img}
                alt={pieces[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,12,0.7) 0%, transparent 60%)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
              <span style={{ background: '#C9A96E', color: '#0C0C0C', padding: '4px 12px', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', fontWeight: 600, display: 'inline-block', marginBottom: 12 }}>
                {pieces[0].tag}
              </span>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontStyle: 'italic', color: '#F0EDE8', marginBottom: 4 }}>{pieces[0].name}</p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: '#C9A96E', letterSpacing: '0.1em' }}>{pieces[0].designer}</p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: '#F0EDE8', marginTop: 8 }}>{pieces[0].price}</p>
            </div>
          </motion.div>

          {/* Right column — 2 stacked */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {pieces.slice(1, 3).map((piece, i) => (
              <motion.div
                key={piece.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden" style={{ height: 340 }}>
                  <Image
                    src={piece.img}
                    alt={piece.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,12,0.7) 0%, transparent 60%)' }} />
                </div>
                <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <span style={{ background: '#C9A96E', color: '#0C0C0C', padding: '3px 10px', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', fontWeight: 600, display: 'inline-block', marginBottom: 8 }}>
                    {piece.tag}
                  </span>
                  <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', fontStyle: 'italic', color: '#F0EDE8', marginBottom: 4 }}>{piece.name}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: '#C9A96E' }}>{piece.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom full-width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-12 relative group cursor-pointer"
          >
            <div className="relative overflow-hidden" style={{ height: 400 }}>
              <Image
                src={pieces[3].img}
                alt={pieces[3].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,12,12,0.8) 0%, rgba(12,12,12,0.1) 60%)' }} />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: 48, transform: 'translateY(-50%)' }}>
              <span style={{ background: '#C9A96E', color: '#0C0C0C', padding: '4px 12px', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', fontWeight: 600, display: 'inline-block', marginBottom: 12 }}>
                {pieces[3].tag}
              </span>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', fontStyle: 'italic', color: '#F0EDE8', marginBottom: 4 }}>{pieces[3].name}</p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: '#C9A96E', letterSpacing: '0.1em', marginBottom: 8 }}>{pieces[3].designer}</p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#F0EDE8' }}>{pieces[3].price}</p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              border: '1px solid #C9A96E', color: '#C9A96E',
              padding: '14px 40px',
              fontFamily: 'var(--font-inter)', fontSize: '10px',
              letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer',
              background: 'transparent', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C9A96E'; e.currentTarget.style.color = '#0C0C0C'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C9A96E'; }}
          >
            Book Private Styling Session
          </button>
        </div>
      </div>
    </section>
  );
}
