'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BriefPage() {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    website: '',
    industry: '',
    teamSize: '',
    budget: '',
    timeline: '',
    goals: '',
    painPoints: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-number">07</div>
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
            Project Brief Template
          </motion.h2>

          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl">
            Fill the form below to generate a customized project brief. Then download as PDF and share with us to kickstart your project.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Company *</label>
                  <input name="company" required onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Contact Name *</label>
                  <input name="contactName" required onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Email *</label>
                  <input name="email" required type="email" onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Current Website</label>
                  <input name="website" onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Industry</label>
                  <select name="industry" onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none">
                    <option value="">Select…</option>
                    <option>Legal</option>
                    <option>Fintech</option>
                    <option>Hospitality</option>
                    <option>Real Estate</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Team Size</label>
                  <select name="teamSize" onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none">
                    <option value="">Select…</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>200+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Budget Range</label>
                  <select name="budget" onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none">
                    <option value="">Select…</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Timeline</label>
                  <select name="timeline" onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none">
                    <option value="">Select…</option>
                    <option>ASAP (1 month)</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Primary Goals</label>
                <textarea name="goals" rows={3} onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none" placeholder="What does success look like? (e.g., more leads, better brand perception)"></textarea>
              </div>

              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Pain Points</label>
                <textarea name="painPoints" rows={3} onChange={handleChange} className="w-full p-4 bg-black border border-gray-700 text-white focus:border-accent outline-none" placeholder="What’s wrong with your current site?"></textarea>
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePrint}
                  className="btn-primary"
                >
                  Download PDF
                </motion.button>
                <span className="ml-4 text-gray-500 text-sm">(opens print dialog → save as PDF)</span>
              </div>
            </div>

            {/* Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 border border-gray-800 p-8 bg-black/50">
                <h3 className="font-display text-lg font-semibold text-white mb-4">Brief Preview</h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <p><strong className="text-accent">Company:</strong> {formData.company || '(filled)'}</p>
                  <p><strong className="text-accent">Contact:</strong> {formData.contactName || '(filled)'}<br/><span className="text-gray-500">{formData.email}</span></p>
                  <p><strong className="text-accent">Industry:</strong> {formData.industry || '-'}</p>
                  <p><strong className="text-accent">Budget:</strong> {formData.budget || '-'} · <strong>Timeline:</strong> {formData.timeline || '-'}</p>
                  <p className="border-t border-gray-800 pt-4"><strong className="text-accent">Goals:</strong><br/>{formData.goals || '(filled)'}</p>
                  <p className="border-t border-gray-800 pt-4"><strong className="text-accent">Pain Points:</strong><br/>{formData.painPoints || '(filled)'}</p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
