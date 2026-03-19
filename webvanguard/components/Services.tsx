'use client'

import { motion } from 'framer-motion'
import SectionNumber from './SectionNumber'

const services = [
  'Web Development',
  'UI/UX Design',
  'Brand Strategy',
  'Digital Consultancy',
]

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      <SectionNumber number="02" />
      
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
            className="font-display text-4xl md:text-5xl font-bold text-white mb-16"
          >
            Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-8 md:p-10 transition-all duration-300 ${
                  index < services.length - 1 ? 'lg:border-r border-gray-800' : ''
                }`}
              >
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {service}
                </h3>
                <p className="text-gray-400 font-sans leading-relaxed">
                  Strategic solutions tailored to your business needs, combining innovation with proven methodologies.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}