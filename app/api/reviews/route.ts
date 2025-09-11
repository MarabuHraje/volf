import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PRIMARY_DIR = path.join(process.cwd(), 'data')
const TMP_DIR = path.join(os.tmpdir(), 'volf-data')
const FILE_NAME = 'reviews.json'

async function pathExists(p: string) {
  try { await fs.access(p); return true } catch { return false }
}

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true })
}

async function readFirstAvailable(): Promise<{ filePath: string, data: any[] }> {
  const primaryPath = path.join(PRIMARY_DIR, FILE_NAME)
  const fallbackPath = path.join(TMP_DIR, FILE_NAME)
  // Preferuj fallback (/tmp), pokud existuje a obsahuje novější data
  const candidates = [fallbackPath, primaryPath]
  for (const p of candidates) {
    if (await pathExists(p)) {
      const buf = await fs.readFile(p, 'utf-8')
      try { return { filePath: p, data: JSON.parse(buf) } } catch { /* ignore parse error */ }
    }
  }
  // none exists -> seed to fallback dir
  const seed = [
    { id: '1', name: 'Jan Novák', rating: 5, comment: 'Vynikající služby, profesionální přístup a skvělé poradenství při výběru výbavy.', date: '2024-08-15' },
    { id: '2', name: 'Petra Svobodová', rating: 4, comment: 'Rychlý servis navijáku, rozumné ceny. Určitě doporučuji!', date: '2024-08-20' },
    { id: '3', name: 'Karel Dvořák', rating: 5, comment: 'Pomohli mi s nastavením chovu kaprů. Odbornost na vysoké úrovni.', date: '2024-09-01' }
  ]
  await ensureDir(TMP_DIR)
  const target = path.join(TMP_DIR, FILE_NAME)
  await fs.writeFile(target, JSON.stringify(seed, null, 2), 'utf-8')
  return { filePath: target, data: seed }
}

async function writeWithFallback(json: any[]): Promise<string> {
  const primaryPath = path.join(PRIMARY_DIR, FILE_NAME)
  try {
    await ensureDir(PRIMARY_DIR)
    await fs.writeFile(primaryPath, JSON.stringify(json, null, 2), 'utf-8')
    return primaryPath
  } catch (err: any) {
    // likely read-only FS (e.g., Vercel). Fallback to /tmp
    const fallbackPath = path.join(TMP_DIR, FILE_NAME)
    await ensureDir(TMP_DIR)
    await fs.writeFile(fallbackPath, JSON.stringify(json, null, 2), 'utf-8')
    return fallbackPath
  }
}

export async function GET() {
  const { data } = await readFirstAvailable()
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { data } = await readFirstAvailable()
    const newReview = {
      id: Date.now().toString(),
      name: String(body.name || ''),
      rating: Math.max(1, Math.min(5, Number(body.rating) || 5)),
      comment: String(body.comment || ''),
      email: body.email ? String(body.email) : undefined,
      date: new Date().toISOString().split('T')[0],
    }
    const next = [newReview, ...data]
    await writeWithFallback(next)
    return new NextResponse(JSON.stringify(newReview), {
      status: 201,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    })
  } catch (e) {
    console.error('Review POST failed:', e)
    return new NextResponse(JSON.stringify({ error: 'Uložení recenze selhalo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    })
  }
}
