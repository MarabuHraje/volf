import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const FILE_PATH = path.join(DATA_DIR, 'reviews.json')

async function ensureFile() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
    await fs.access(FILE_PATH)
  } catch {
    const seed = [
      {
        id: '1',
        name: 'Jan Novák',
        rating: 5,
        comment: 'Vynikající služby, profesionální přístup a skvělé poradenství při výběru výbavy.',
        date: '2024-08-15'
      },
      {
        id: '2',
        name: 'Petra Svobodová',
        rating: 4,
        comment: 'Rychlý servis navijáku, rozumné ceny. Určitě doporučuji!',
        date: '2024-08-20'
      },
      {
        id: '3',
        name: 'Karel Dvořák',
        rating: 5,
        comment: 'Pomohli mi s nastavením chovu kaprů. Odbornost na vysoké úrovni.',
        date: '2024-09-01'
      }
    ]
    await fs.writeFile(FILE_PATH, JSON.stringify(seed, null, 2), 'utf-8')
  }
}

export async function GET() {
  await ensureFile()
  const buf = await fs.readFile(FILE_PATH, 'utf-8')
  const reviews = JSON.parse(buf)
  return NextResponse.json(reviews)
}

export async function POST(req: NextRequest) {
  await ensureFile()
  const body = await req.json()
  const buf = await fs.readFile(FILE_PATH, 'utf-8')
  const reviews = JSON.parse(buf)
  const newReview = {
    id: Date.now().toString(),
    name: String(body.name || ''),
    rating: Math.max(1, Math.min(5, Number(body.rating) || 5)),
    comment: String(body.comment || ''),
    email: body.email ? String(body.email) : undefined,
    date: new Date().toISOString().split('T')[0],
  }
  reviews.push(newReview)
  await fs.writeFile(FILE_PATH, JSON.stringify(reviews, null, 2), 'utf-8')
  return NextResponse.json(newReview, { status: 201 })
}
