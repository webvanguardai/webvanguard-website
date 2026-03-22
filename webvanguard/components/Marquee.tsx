'use client'

export default function Marquee() {
  const items = ['DESIGN', 'STRATEGY', 'SEO', 'BRANDING', 'GROWTH', 'RESULTS']

  return (
    <div className="py-8 overflow-hidden bg-bg-dark relative">
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-[#221f1b] to-bg-dark opacity-60 pointer-events-none" />

      <div className="marquee flex whitespace-nowrap relative z-10">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display font-black text-5xl md:text-8xl uppercase px-4 md:px-8 cursor-default text-[#F4F1EC]">
              {item}
            </span>
            <span className="text-accent text-2xl mx-2">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
