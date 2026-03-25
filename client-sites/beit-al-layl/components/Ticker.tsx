export default function Ticker() {
  const items = [
    "Ouzi Al Layl — tonight only",
    "Fresh sea bass from Dibba Bay",
    "Homemade knafeh",
    "Live oud music from 9pm",
    "Rooftop terrace open",
    "Ouzi Al Layl — tonight only",
    "Fresh sea bass from Dibba Bay",
    "Homemade knafeh",
    "Live oud music from 9pm",
    "Rooftop terrace open",
  ];

  return (
    <div className="bg-midnight border-y border-gold/20 py-4 overflow-hidden">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-8 whitespace-nowrap">
            <span className="font-cormorant italic text-gold text-lg">{item}</span>
            <span className="text-gold/40 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
