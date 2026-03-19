'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BookingPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string

    if (!name || !email) return

    setLoading(true)
    const base = 'https://calendly.com/webvanguard/30min'
    const params = new URLSearchParams({
      name,
      email,
      a1: company || '',
    })
    window.location.href = `${base}?${params.toString()}`
  }

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-number">06</div>
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
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Book a Consultation
          </motion.h2>

          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl">
            Schedule a 30-minute call to discuss your project. We’ll review your brief and provide initial recommendations.
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Name *</label>
                <input
                  name="name"
                  required
                  className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Email *</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Company (optional)</label>
                <input
                  name="company"
                  className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center"
              >
                {loading ? 'Redirecting…' : 'Continue to Calendly →'}
              </motion.button>
            </form>
          </div>

          <p className="mt-8 text-gray-600 text-sm text-center">
            You’ll be redirected to Calendly to pick a time. All times are Gulf Standard Time (GMT+4).
          </p>
        </motion.div>
      </div>
    </section>
  )
}
