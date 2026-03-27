'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Boutique() {
  return (
    <section id="boutique" style={{ padding: '96px 0', borderTop: '1px solid #1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
            style={{ height: 600 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80"
              alt="Stella Atelier boutique interior DIFC Dubai"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 16 }}>
              Our World
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F0EDE8', lineHeight: 1.2, marginBottom: 24 }}>
              A space designed<br />around the woman.
            </h2>

            <div style={{ width: 48, height: 1, background: '#C9A96E', marginBottom: 32 }} />

            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: 1.9, color: '#777', marginBottom: 20 }}>
              Stella Atelier opened in DIFC in 2019, born from a single idea: luxury fashion should feel personal. Not transactional.
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: 1.9, color: '#777', marginBottom: 32 }}>
              Our team of personal stylists work with each client individually — understanding wardrobe gaps, lifestyle needs, and the pieces worth investing in. We carry a curated selection from Celine, Loro Piana, Max Mara, Roland Mouret, and emerging designers we believe in.
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
              {[
                'Private styling appointments available daily',
                'Same-day WhatsApp consultations',
                'Alterations & bespoke tailoring on request',
                'International shipping via DHL Express',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A96E', flexShrink: 0 }} />
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: '#F0EDE8' }}>{f}</p>
                </div>
              ))}
            </div>

            {/* Opening hours */}
            <div style={{ border: '1px solid #1E1E1E', padding: 24 }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 12 }}>
                Opening Hours
              </p>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: '#F0EDE8' }}>
                Monday – Sunday: 10:00 – 22:00
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: '#777', marginTop: 8 }}>
                Gate Village 4, Level 1, DIFC, Dubai
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
