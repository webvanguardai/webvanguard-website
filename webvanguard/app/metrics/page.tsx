'use client'

import { motion } from 'framer-motion'
import MetricCard from '@/components/MetricCard'
import { useEffect, useState } from 'react'

export default function MetricsPage() {
  const [youtube, setYoutube] = useState<any>(null)
  const [leads, setLeads] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/metrics/youtube').then(r => r.json()),
      fetch('/api/metrics/leads').then(r => r.json()),
    ]).then(([yt, ld]) => {
      setYoutube(yt)
      setLeads(ld)
      setLoading(false)
    })
  }, [])

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
          </motion.h2>

          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl">
            Real-time KPIs for YouTube and Leads. {loading ? 'Loading…' : `Data source: ${youtube?.source || 'mock'} / ${leads?.source || 'mock'}`}
          </p>

          {loading ? (
            <p className="text-gray-500">Loading metrics…</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <MetricCard title="Video Views" value={youtube?.views || '0'} change={youtube?.viewsChange || '+12%'} trend="up" />
                <MetricCard title="Subscribers" value={youtube?.subscribers || '0'} change="+3%" trend="up" />
                <MetricCard title="New Leads" value={String(leads?.newThisWeek || leads?.total || 0)} change={leads?.trend || '-2%'} trend={leads?.trendDirection || 'down'} />
                <MetricCard title="Meetings Booked" value="8" change="+3" trend="neutral" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="border border-gray-800 p-8">
                  <h3 className="font-display text-2xl font-semibold text-white mb-4">YouTube Performance</h3>
                  <div className="h-64 flex items-center justify-center text-gray-600">
                    [Chart placeholder – data from YouTube API v3]
                  </div>
                </div>
                <div className="border border-gray-800 p-8">
                  <h3 className="font-display text-2xl font-semibold text-white mb-4">Lead Funnel</h3>
                  <div className="h-64 flex items-center justify-center text-gray-600">
                    [Chart placeholder – data from Google Sheets]
                  </div>
                </div>
              </div>

              <div className="mt-12 text-gray-500 font-sans text-sm">
                Configure data sources in <code>.env.local</code> (see .env.example). Without credentials, mock data is shown.
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
