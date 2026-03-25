"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" ref={ref} className="py-32 md:py-40 px-6 bg-midnight overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
              alt="The story of Beit Al Layl"
              fill
              className="object-cover object-center"
            />
            {/* Gold corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/60" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/60" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-midnight/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-inter text-[10px] uppercase tracking-[0.4em] text-gold/60 mb-8">
              Our Story
            </p>

            <blockquote
              className="font-cormorant font-light text-cream/90 leading-[1.4] mb-10"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
            >
              &ldquo;Beit Al Layl started as a family argument about whose grandmother made the better hummus. It ended with a restaurant.&rdquo;
            </blockquote>

            <div className="w-12 h-px bg-gold/50 mb-10" />

            <p className="font-inter text-sm text-cream/50 leading-relaxed mb-4">
              The recipes are hers. The space is ours.
            </p>

            <p className="font-inter text-sm text-cream/40 leading-relaxed">
              Every dish carries a memory — a kitchen in Beirut, a summer table in the mountains, a grandmother who never measured anything and somehow always got it right.
            </p>

            {/* Arabic accent */}
            <p
              className="font-cormorant text-gold/20 mt-12 leading-none"
              style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
            >
              بيت الليل
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
