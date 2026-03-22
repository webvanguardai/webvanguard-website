'use client'

export default function Marquee() {
  const items = ['Design', 'Strategy', 'SEO', 'Branding', 'Growth', 'Analytics']

  return (
    <div className="py-8 overflow-hidden relative" style={{ borderTop: '1px solid rgba(212,149,107,0.08)', borderBottom: '1px solid rgba(212,149,107,0.08)' }}>
      {/* Row 1 */}
      <div className="marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display font-black text-5xl md:text-8xl uppercase px-4 md:px-8 cursor-default transition-colors duration-700" style={{ WebkitTextStroke: '1px rgba(212,149,107,0.12)', color: 'transparent' }}>
              {item}
            </span>
            <span className="text-accent/30 text-2xl mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
