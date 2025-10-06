import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Review = {
  id: number
  name: string
  rating: number
  comment: string
  created_at: string
}

export async function GET() {
  try {
    const { rows } = await sql<Review>`
      SELECT id, name, rating, comment, created_at
      FROM reviews
      ORDER BY created_at DESC
    `
    return new NextResponse(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    })
  } catch (e) {
    console.error('Database GET failed:', e)
    return new NextResponse(JSON.stringify({ error: 'Načtení recenzí selhalo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    const name = String(body.name || '').trim()
    const rating = Math.max(1, Math.min(5, Number(body.rating) || 5))
    const comment = String(body.comment || '').trim()

    if (!name || !comment) {
      return new NextResponse(JSON.stringify({ error: 'Jméno a komentář jsou povinné' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
      })
    }

    const { rows } = await sql<Review>`
      INSERT INTO reviews (name, rating, comment)
      VALUES (${name}, ${rating}, ${comment})
      RETURNING id, name, rating, comment, created_at
    `

    return new NextResponse(JSON.stringify(rows[0]), {
      status: 201,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    })
  } catch (e) {
    console.error('Database POST failed:', e)
    return new NextResponse(JSON.stringify({ error: 'Uložení recenze selhalo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    })
  }
}
