'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://formspree.io/f/xrgbbpwv', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
    } catch { /* silent */ } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '96px 0', borderTop: '1px solid #1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 16 }}>
              Get in Touch
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#F0EDE8', lineHeight: 1.2, marginBottom: 40 }}>
              Begin your styling experience.
            </h2>

            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Boutique</p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#777', lineHeight: 1.8 }}>
                Gate Village 4, Level 1<br />DIFC, Dubai, UAE
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Contact</p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#F0EDE8', marginBottom: 4 }}>
                <a href="mailto:hello@stellaatelier.ae" style={{ color: '#F0EDE8', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#C9A96E')} onMouseLeave={e => (e.currentTarget.style.color = '#F0EDE8')}>
                  hello@stellaatelier.ae
                </a>
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#F0EDE8' }}>
                <a href="tel:+97141234567" style={{ color: '#F0EDE8', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#C9A96E')} onMouseLeave={e => (e.currentTarget.style.color = '#F0EDE8')}>
                  +971 4 123 4567
                </a>
              </p>
            </div>

            <a
              href="https://wa.me/971501234567?text=Hello%20Stella%20Atelier%2C%20I'd%20like%20to%20book%20a%20styling%20session."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                border: '1px solid #1E1E1E', padding: '14px 28px',
                fontFamily: 'var(--font-inter)', fontSize: '10px',
                letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE8',
                textDecoration: 'none', transition: 'all 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A96E')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E1E1E')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Stylist
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div style={{ paddingTop: 48 }}>
                <div style={{ width: 32, height: 1, background: '#C9A96E', marginBottom: 24 }} />
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.8rem', fontStyle: 'italic', color: '#F0EDE8', marginBottom: 12 }}>Thank you.</p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#777' }}>Your stylist will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Full name' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'you@email.com' },
                  { label: 'Phone / WhatsApp', name: 'phone', type: 'tel', placeholder: '+971 50 ...' },
                ].map((f) => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#777', marginBottom: 8 }}>{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      required={f.name !== 'phone'}
                      style={{
                        width: '100%', background: 'transparent',
                        borderBottom: '1px solid #1E1E1E',
                        padding: '12px 0',
                        fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#F0EDE8',
                        outline: 'none',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#777', marginBottom: 8 }}>Interest</label>
                  <select
                    name="interest"
                    style={{ width: '100%', background: '#0C0C0C', borderBottom: '1px solid #1E1E1E', padding: '12px 0', fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#F0EDE8', outline: 'none', appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="">Select</option>
                    <option>Private Styling Session</option>
                    <option>Wardrobe Consultation</option>
                    <option>Event Dressing</option>
                    <option>Gift for Someone Special</option>
                    <option>Specific Piece Enquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#777', marginBottom: 8 }}>Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us what you're looking for..."
                    style={{ width: '100%', background: 'transparent', borderBottom: '1px solid #1E1E1E', padding: '12px 0', fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#F0EDE8', outline: 'none', resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    background: '#F0EDE8', color: '#0C0C0C',
                    padding: '16px',
                    fontFamily: 'var(--font-inter)', fontSize: '10px',
                    letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600,
                    border: 'none', cursor: 'pointer', opacity: sending ? 0.7 : 1, transition: 'opacity 0.3s',
                  }}
                >
                  {sending ? 'Sending…' : 'Request Styling Appointment'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
