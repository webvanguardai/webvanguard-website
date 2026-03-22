'use client'

export default function Marquee() {
  const items = ['Web Design', 'Brand Identity', 'SEO & Growth', 'Digital Strategy', 'E-Commerce', 'Analytics']

  return (
    <div className="py-6 border-y border-border/50 overflow-hidden bg-bg relative">
      <div className="marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display font-black text-5xl md:text-7xl text-text-primary/[0.04] hover:text-accent/30 transition-colors duration-700 px-6 md:px-10 uppercase cursor-default">
              {item}
            </span>
            <span className="text-accent/20 text-lg">&#10037;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
