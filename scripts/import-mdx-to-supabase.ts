/**
 * Import MDX posts into Supabase.
 * Run: npm run import:mdx
 * Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

// Load .env.local
config({ path: path.resolve(process.cwd(), '.env.local') })

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

const postsDir = path.join(process.cwd(), 'content', 'bai-viet')

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} phút đọc`
}

async function main() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
  console.log(`📂  Found ${files.length} MDX files`)

  let inserted = 0
  let skipped = 0
  let errors = 0

  for (const fileName of files) {
    const slug = fileName.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(postsDir, fileName), 'utf8')
    const { data, content } = matter(raw)

    const record = {
      slug,
      title: (data.title as string) ?? '',
      excerpt: (data.excerpt as string) ?? '',
      description: (data.excerpt as string) ?? '',
      content,
      category: (data.category as string) ?? 'kien-thuc',
      tags: (data.tags as string[]) ?? [],
      thumbnail_url: (data.coverImage as string) || null,
      image_alt: (data.imageAlt as string) || null,
      status: 'published' as const,
      seo_title: null,
      seo_description: null,
      published_at: (data.date as string) ? new Date(data.date as string).toISOString() : new Date().toISOString(),
    }

    // Check for existing slug
    const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single()

    if (existing) {
      console.log(`⏭️   Skipping "${slug}" (already exists)`)
      skipped++
      continue
    }

    const { error } = await sb.from('posts').insert(record)

    if (error) {
      console.error(`❌  Error inserting "${slug}":`, error.message)
      errors++
    } else {
      console.log(`✅  Imported "${slug}"`)
      inserted++
    }
  }

  console.log(`\n🎉  Done: ${inserted} inserted · ${skipped} skipped · ${errors} errors`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
