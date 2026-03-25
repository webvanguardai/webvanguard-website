"use client";


import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85"
          alt="Beit Al Layl — Lebanese Fine Dining Dubai"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Deep overlay — cinematic darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/60 to-midnight/90" />
        <div className="absolute inset-0 bg-midnight/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-inter text-gold/80 text-xs uppercase tracking-[0.4em] mb-8"
        >
          Beit Al Layl · Downtown Dubai
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-cormorant font-light text-cream leading-[0.9] mb-8"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
        >
          Where every table
          <br />
          <em className="text-gold">tells a story.</em>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-inter text-cream/60 text-sm md:text-base tracking-widest uppercase mb-12"
        >
          Lebanese cuisine · Downtown Dubai · Open from sundown
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#reserve"
            className="font-inter text-xs uppercase tracking-[0.25em] bg-gold text-midnight px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Reserve Your Table
          </a>
          <a
            href="#menu"
            className="font-inter text-xs uppercase tracking-[0.25em] text-cream/60 border border-cream/20 px-8 py-4 hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            View the Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-cream/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
