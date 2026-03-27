'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(12,12,12,0.98)' : 'transparent',
          borderBottom: scrolled ? '1px solid #1E1E1E' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.18em', color: '#F0EDE8', fontSize: '14px', textTransform: 'uppercase', fontWeight: 500 }}
          >
            Stella Atelier
          </button>

          <div className="hidden md:flex items-center gap-10">
            {['Collection', 'Lookbook', 'Boutique', 'Contact'].map((l) => (
              <button
                key={l}
                onClick={() => go(l.toLowerCase())}
                style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#777', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F0EDE8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#777')}
              >
                {l}
              </button>
            ))}
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div style={{ width: 20, height: 1, background: '#F0EDE8', marginBottom: 5, transform: open ? 'rotate(45deg) translate(4px,4px)' : 'none', transition: 'transform 0.3s' }} />
            <div style={{ width: 20, height: 1, background: '#F0EDE8', opacity: open ? 0 : 1, transition: 'opacity 0.3s' }} />
            <div style={{ width: 20, height: 1, background: '#F0EDE8', marginTop: 5, transform: open ? 'rotate(-45deg) translate(4px,-4px)' : 'none', transition: 'transform 0.3s' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 40, background: '#0C0C0C',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40,
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity 0.4s'
      }}>
        {['Collection', 'Lookbook', 'Boutique', 'Contact'].map(l => (
          <button key={l} onClick={() => go(l.toLowerCase())}
            style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', fontWeight: 400, color: '#F0EDE8', letterSpacing: '0.05em' }}>
            {l}
          </button>
        ))}
      </div>
    </>
  );
}
