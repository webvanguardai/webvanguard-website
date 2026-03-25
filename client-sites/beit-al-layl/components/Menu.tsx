"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Dish = {
  name: string;
  description: string;
};

type Category = {
  category: string;
  subcategory?: string;
  dishes: Dish[];
};

const menuData: Category[] = [
  {
    category: "Mezze",
    subcategory: "Cold",
    dishes: [
      { name: "Hummus Beiruty", description: "Stone-ground chickpeas, 24 hours, nothing else." },
      { name: "Kibbeh Nayeh", description: "Raw. Traditional. Not for the faint of heart." },
      { name: "Fattoush Al Layl", description: "Our version. Sumac-forward, pomegranate finish." },
    ],
  },
  {
    category: "Mezze",
    subcategory: "Hot",
    dishes: [
      { name: "Rekakat Jibneh", description: "Fried cheese pastries. Order two." },
      { name: "Batata Harra", description: "Spiced, crispy, impossible to stop." },
      { name: "Arayes", description: "Minced lamb, pressed and grilled. A Lebanese staple." },
    ],
  },
  {
    category: "Mains",
    dishes: [
      { name: "Ouzi Al Layl", description: "Slow-roasted lamb shoulder. 8 hours. Serves 2–4." },
      { name: "Samkeh Harra", description: "Whole sea bass, Tripoli-style. Walnut, coriander, chilli." },
      { name: "Djej Mishwi", description: "Charcoal chicken, marinated overnight. The one everyone orders." },
    ],
  },
  {
    category: "Desserts",
    dishes: [
      { name: "Knafeh Nabulsieh", description: "You'll think about this on the drive home." },
      { name: "Mouhallabieh", description: "Rose water milk pudding. Light enough after the ouzi." },
      { name: "Baklawa Assortment", description: "Made in-house. Petit fours for the table." },
    ],
  },
];

function DishRow({ dish, index, inView }: { dish: Dish; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group border-b border-gold/10 py-7 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
        <h3
          className={`font-cormorant italic font-light transition-colors duration-400 leading-tight ${
            hovered ? "text-gold" : "text-cream"
          }`}
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          {dish.name}
        </h3>
        <div className="hidden md:block flex-1 border-b border-gold/10 mb-1.5 mx-2" />
        <p
          className={`font-inter text-sm leading-relaxed transition-colors duration-400 md:text-right max-w-xs ${
            hovered ? "text-cream/80" : "text-cream/40"
          }`}
        >
          {dish.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" ref={ref} className="py-32 md:py-40 px-6 bg-midnight-light">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold/60 mb-4">
            The Menu
          </p>
          <h2
            className="font-cormorant font-light text-cream leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Dishes that belong
            <br />
            <em className="text-gold/80">to the night.</em>
          </h2>
        </motion.div>

        {/* Menu categories */}
        <div className="space-y-16">
          {menuData.map((cat, catIndex) => (
            <div key={`${cat.category}-${cat.subcategory ?? catIndex}`}>
              {/* Category label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.05 }}
                className="flex items-center gap-4 mb-4"
              >
                <span className="font-inter text-[10px] uppercase tracking-[0.35em] text-gold">
                  {cat.category}
                  {cat.subcategory && (
                    <span className="text-gold/50 ml-2">/ {cat.subcategory}</span>
                  )}
                </span>
                <div className="flex-1 h-px bg-gold/15" />
              </motion.div>

              {/* Dishes */}
              <div>
                {cat.dishes.map((dish, i) => (
                  <DishRow
                    key={dish.name}
                    dish={dish}
                    index={i}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-inter text-xs text-cream/30 mt-16 tracking-wider"
        >
          Menu changes with the seasons. Ask your host about tonight&apos;s additions.
        </motion.p>
      </div>
    </section>
  );
}
