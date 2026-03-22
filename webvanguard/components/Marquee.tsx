'use client'

export default function Marquee() {
  const row1 = ['More Customers', 'Better Image', 'Higher Revenue', 'Stronger Brand']
  const row2 = ['Google Visibility', 'Professional Website', 'Business Growth', 'Competitive Edge']

  return (
    <div className="py-4 border-y border-border overflow-hidden bg-bg relative">
      {/* Row 1 — left to right */}
      <div className="marquee flex whitespace-nowrap mb-2">
        {[...row1, ...row1, ...row1].map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display font-black text-4xl md:text-6xl text-text-primary/[0.07] hover:text-accent/60 transition-colors duration-500 px-6 md:px-10 uppercase">
              {item}
            </span>
            <span className="text-accent/30 text-sm">&#9679;</span>
          </span>
        ))}
      </div>
      {/* Row 2 — right to left */}
      <div className="marquee-reverse flex whitespace-nowrap">
        {[...row2, ...row2, ...row2].map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-serif italic font-bold text-3xl md:text-5xl text-text-primary/[0.05] hover:text-accent/40 transition-colors duration-500 px-6 md:px-10">
              {item}
            </span>
            <span className="text-accent/20 text-sm">&#9679;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
