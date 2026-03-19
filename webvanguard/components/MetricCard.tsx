'use client'

import { motion } from 'framer-motion'

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

export default function MetricCard({ title, value, change, trend }: MetricCardProps) {
  const colorClass = {
    up: 'text-accent',
    down: 'text-red-500',
    neutral: 'text-gray-400',
  }[trend]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border border-gray-800 p-6 bg-transparent hover:border-accent/50 transition-colors duration-300"
    >
      <h4 className="text-gray-500 font-sans text-xs uppercase tracking-wider mb-2">{title}</h4>
      <div className="text-3xl font-display font-bold text-white mb-1">{value}</div>
      <div className={`text-sm font-sans ${colorClass}`}>{change}</div>
    </motion.div>
  )
}
