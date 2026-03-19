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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-white mb-8">
                Let&apos;s create something extraordinary together.
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
              
              <p className="mt-12 text-gray-400 font-sans leading-relaxed max-w-md">
                Based in Abu Dhabi, serving clients globally. We&apos;re always open to discussing new projects and ideas.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-16"
            >
              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white font-sans focus:outline-none focus:border-accent transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white font-sans focus:outline-none focus:border-accent transition-colors duration-300"
                    placeholder="hello@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-transparent border border-gray-700 rounded-lg p-4 text-white font-sans focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary mt-4"
                >
                  <span>Send Message</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}