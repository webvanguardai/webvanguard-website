'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ADMIN_CREDENTIALS = { user: 'admin', pass: 'webvanguard2026' }

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [bookings, setBookings] = useState<any[]>([])

  useEffect(() => {
    if (loggedIn) fetchBookings()
  }, [loggedIn])

  const fetchBookings = async () => {
    const res = await fetch('/api/admin/bookings')
    const data = await res.json()
    setBookings(data)
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const u = formData.get('username') as string
    const p = formData.get('password') as string
    if (u === ADMIN_CREDENTIALS.user && p === ADMIN_CREDENTIALS.pass) {
      setLoggedIn(true)
    } else {
      alert('Invalid credentials')
    }
  }

  const updateStatus = async (id: string, status: 'confirmed' | 'cancelled') => {
    await fetch('/api/admin/booking/' + id, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
      headers: { 'Content-Type': 'application/json' },
    })
    fetchBookings()
  }

  if (!loggedIn) {
    return (
      <section className="relative py-32 overflow-hidden">
        <div className="section-number">ADMIN</div>
        <div className="relative z-10 w-full max-w-md mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-white mb-6 text-center">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <input name="username" placeholder="Username" className="w-full p-4 bg-black border border-gray-700 text-white" required />
              <input name="password" type="password" placeholder="Password" className="w-full p-4 bg-black border border-gray-700 text-white" required />
              <button type="submit" className="btn-primary w-full">Login</button>
            </form>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-number">ADMIN</div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold text-white mb-8">Admin Dashboard</h2>
          <div className="border border-gray-800 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-black text-gray-500">
                <tr>
                  <th className="p-4">Date/Time</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Company</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id} className="border-t border-gray-800">
                    <td className="p-4 text-white">{new Date(b.slot).toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}</td>
                    <td className="p-4 text-white">{b.name}</td>
                    <td className="p-4 text-white">{b.email}</td>
                    <td className="p-4 text-gray-400">{b.company || '-'}</td>
                    <td className="p-4"><span className={`text-xs font-bold uppercase ${b.status==='confirmed'?'text-accent':b.status==='cancelled'?'text-red-500':'text-yellow-500'}`}>{b.status}</span></td>
                    <td className="p-4 flex gap-2">
                      {b.status === 'pending' && (
                        <>
                          <button onClick={() => updateStatus(b.id, 'confirmed')} className="px-3 py-1 border border-accent text-accent hover:bg-accent hover:text-black transition">Approve</button>
                          <button onClick={() => updateStatus(b.id, 'cancelled')} className="px-3 py-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition">Cancel</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-500 text-sm">Numero de reservas: {bookings.length}</p>
        </motion.div>
      </div>
    </section>
  )
}
