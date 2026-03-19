'use client'

import { motion } from 'framer-motion'
import SectionNumber from './SectionNumber'

export default function Contact() {
  return (
    <section className="relative py-32 overflow-hidden">
      <SectionNumber number="04" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-12"
          >
            Contact
          </motion.h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
                Let&apos;s talk.
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:hello@webvanguard.com"
                  className="block text-2xl md:text-3xl text-gray-300 hover:text-accent-hover transition-colors duration-300 font-sans"
                >
                  hello@webvanguard.com
                </a>
                <a 
                  href="tel:+971501234567"
                  className="block text-2xl md:text-3xl text-gray-300 hover:text-accent-hover transition-colors duration-300 font-sans"
                >
                  +971 50 123 4567
                </a>
              </div>
              
              <p className="mt-12 text-gray-400 font-sans leading-relaxed">
                Abu Dhabi • Global
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}