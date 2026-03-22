'use client'

export default function Marquee() {
  const items = ['DESIGN', 'STRATEGY', 'SEO', 'BRANDING', 'GROWTH', 'RESULTS']

  return (
    <div className="py-6 overflow-hidden bg-bg-dark text-text-on-dark">
      <div className="marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display font-black text-4xl md:text-7xl uppercase px-4 md:px-8 cursor-default" style={{ WebkitTextStroke: '1.5px #000000', color: 'transparent' }}>
              {item}
            </span>
            <span className="text-accent text-xl mx-2">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
