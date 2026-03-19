import { NextResponse } from 'next/server'

export async function GET() {
  const sheetId = process.env.NEXT_PUBLIC_LEADS_SHEET_ID
  const range = process.env.NEXT_PUBLIC_LEADS_SHEET_RANGE || 'Leads!A1:E100'

  if (!sheetId) {
    // Mock data
    return NextResponse.json({
      total: 27,
      newThisWeek: 5,
      status: { pending: 10, contacted: 12, meeting: 4, proposal: 1, won: 0, lost: 0 },
      lastUpdated: new Date().toISOString(),
      source: 'mock'
    })
  }

  try {
    // Export as CSV (public sheet required). Adjust gid if needed.
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`
    const csvRes = await fetch(csvUrl)
    if (!csvRes.ok) throw new Error('Sheet not accessible')
    const csvText = await csvRes.text()
    const lines = csvText.split('\n').filter(l => l.trim().length > 0)
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase())

    const rows = lines.slice(1).map(line => {
      const cols = line.split(',').map(c => c.trim())
      return headers.reduce((obj, h, i) => ({ ...obj, [h]: cols[i] }), {})
    })

    // Compute simple counts assuming column 'status' exists (case-insensitive)
    const statusCol = headers.find(h => h.includes('status')) || 'status'
    const countByStatus = rows.reduce((acc, r) => {
      const s = (r[statusCol] || 'unknown').toLowerCase()
      acc[s] = (acc[s] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return NextResponse.json({
      total: rows.length,
      newThisWeek: Math.max(0, rows.length - 20), // rough estimate, better: date column
      status: countByStatus,
      lastUpdated: new Date().toISOString(),
      source: 'google_sheets'
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads data' }, { status: 500 })
  }
}
