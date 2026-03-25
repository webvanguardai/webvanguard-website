"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TheTable() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const values = ["Abundance", "Warmth", "Craft"];

  return (
    <section id="the-table" ref={ref} className="py-32 md:py-40 px-6 bg-midnight">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold/60 mb-12"
        >
          The Table
        </motion.p>

        {/* Main statement */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-cormorant font-light text-cream/90 leading-[1.3] mb-24 max-w-4xl"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          &ldquo;The bread comes out hot. The mezze arrives before you ask. The music changes as the night deepens.&rdquo;
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-px bg-gold/20 mb-24 origin-left"
        />

        {/* Three values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {values.map((value, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
              className="group flex flex-col items-start md:items-center text-left md:text-center"
            >
              <span
                className="font-cormorant font-light text-cream/20 group-hover:text-gold/70 transition-colors duration-500 leading-none tracking-tighter"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                {value.toUpperCase()}
              </span>
              <div className="w-8 h-px bg-gold/30 mt-4 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
