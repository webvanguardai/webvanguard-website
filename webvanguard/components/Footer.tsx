'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-600 font-sans text-sm">
            &copy; {new Date().getFullYear()} WebVanguard.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
