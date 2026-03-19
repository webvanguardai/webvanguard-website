import { NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json')

// GET all bookings
export async function GET() {
  try {
    const raw = await readFile(BOOKINGS_FILE, 'utf-8')
    const bookings = JSON.parse(raw)
    return NextResponse.json(bookings)
  } catch (e) {
    return NextResponse.json([])
  }
}

// PATCH update booking status (by id in query)
export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json()
    if (!id || !status) return NextResponse.json({ error: 'Missing id or status' }, { status: 400 })
    const raw = await readFile(BOOKINGS_FILE, 'utf-8')
    const bookings = JSON.parse(raw)
    const idx = bookings.findIndex((b: any) => b.id === id)
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    bookings[idx].status = status
    await writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2))
    return NextResponse.json(bookings[idx])
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
