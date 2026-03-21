'use client'

export default function Marquee() {
  const items = [
    'Web Design',
    'Development',
    'SEO',
    'AI Strategy',
    'Brand Identity',
    'UI/UX',
    'Analytics',
    'Conversion',
  ]

  return (
    <div className="py-6 border-y border-border overflow-hidden bg-bg-card">
      <div className="marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-bold text-2xl md:text-3xl text-text-primary/20 hover:text-accent transition-colors duration-300 px-8">
              {item}
            </span>
            <span className="text-accent text-lg">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
