'use client'

import { motion } from 'framer-motion'
import MetricCard from '@/components/MetricCard'

export default function MetricsPage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-number">05</div>
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
            Metrics Dashboard
          </motion.h>

          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl">
            Real-time KPIs for YouTube and Leads. (Demo data - connect sources to automate)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <MetricCard title="Video Views" value="12,403" change="+12%" trend="up" />
            <MetricCard title="Avg. View Duration" value="4:32" change="+5%" trend="up" />
            <MetricCard title="New Leads" value="27" change="-2%" trend="down" />
            <MetricCard title="Meetings Booked" value="8" change="+3" trend="neutral" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="border border-gray-800 p-8">
              <h3 className="font-display text-2xl font-semibold text-white mb-4">YouTube Performance (Last 7 Days)</h3>
              <div className="h-64 flex items-center justify-center text-gray-600">
                [Chart placeholder – connect to YouTube Analytics API]
              </div>
            </div>
            <div className="border border-gray-800 p-8">
              <h3 className="font-display text-2xl font-semibold text-white mb-4">Lead Funnel</h3>
              <div className="h-64 flex items-center justify-center text-gray-600">
                [Chart placeholder – connect to CRM/Sheets]
              </div>
            </div>
          </div>

          <div className="mt-12 text-gray-500 font-sans text-sm">
            Note: This is a static prototype. To automate, set up integrations with YouTube Data API v3 and your lead tracker (Sheets, Notion, etc.). Deployment instructions in docs.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
