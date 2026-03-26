'use client'

export default function Marquee() {
  const topItems = [
    'SEE IT BEFORE YOU PAY',
    'FROM AED 2,000',
    'RESULTS, NOT PAGES',
  ]

  const bottomItems = [
    'WEB DESIGN',
    'SEO',
    'BRANDING',
    'GROWTH',
    'YOUR CITY',
    'YOUR CLIENTS',
    'YOUR REVENUE',
    'OUR CRAFT',
  ]

  return (
    <div className="overflow-hidden bg-bg-dark relative select-none">
      {/* Top strip — scrolls LEFT (slow) */}
      <div className="border-b border-[#F4F1EC]/10">
        <div className="marquee-left flex whitespace-nowrap py-3">
          {[...topItems, ...topItems, ...topItems, ...topItems].map((item, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="font-body text-sm uppercase tracking-[0.25em] px-4 text-[#F4F1EC]/80">
                {item}
              </span>
              <span className="text-accent text-[8px] mx-1 opacity-60">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom strip — scrolls RIGHT (slightly faster) */}
      <div>
        <div className="marquee-right flex whitespace-nowrap py-3">
          {[...bottomItems, ...bottomItems, ...bottomItems, ...bottomItems].map((item, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="font-body text-xs uppercase tracking-[0.35em] px-4 text-[#F4F1EC]/50">
                {item}
              </span>
              <span className="text-[#FF3B00] text-[6px] mx-1 opacity-40">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
