'use client';

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ borderTop: '1px solid #1E1E1E', padding: '48px 0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F0EDE8', marginBottom: 4 }}>
              Stella Atelier
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: '#777' }}>
              Luxury Fashion Boutique — DIFC, Dubai
            </p>
          </div>

          <nav style={{ display: 'flex', gap: 32 }}>
            {['collection', 'lookbook', 'boutique', 'contact'].map(l => (
              <button key={l} onClick={() => go(l)}
                style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'capitalize', color: '#777', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F0EDE8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#777')}
              >
                {l}
              </button>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: 24 }}>
            {['Instagram', 'LinkedIn'].map(s => (
              <a key={s} href="#" style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#777', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F0EDE8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#777')}
              >{s}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1E1E1E', marginTop: 40, paddingTop: 24 }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', color: '#777' }}>
            © 2026 Stella Atelier. All rights reserved. Gate Village 4, DIFC, Dubai, UAE.
          </p>
        </div>
      </div>
    </footer>
  );
}
