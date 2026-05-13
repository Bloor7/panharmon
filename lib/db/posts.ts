import type { DbPost, Post, PostMeta } from '@/types/post'
import { createAdminClient } from '@/lib/supabase/admin'
import * as mdx from '@/lib/posts'

const MONTHS = [
  'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4',
  'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
  'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',
]

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}, ${d.getUTCFullYear()}`
}

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} phút đọc`
}

function dbToPostMeta(row: DbPost): PostMeta {
  const date = row.published_at ?? row.created_at
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category,
    excerpt: row.excerpt,
    description: row.description || row.excerpt,
    date,
    updatedAt: row.updated_at,
    dateFormatted: date ? formatDate(date) : '',
    tags: row.tags ?? [],
    coverImage: row.thumbnail_url ?? undefined,
    imageAlt: row.image_alt ?? undefined,
    readTime: calcReadTime(row.content),
    status: row.status,
    source: 'db',
  }
}

function dbToPost(row: DbPost): Post {
  return {
    ...dbToPostMeta(row),
    content: row.content,
    seoTitle: row.seo_title ?? undefined,
    seoDescription: row.seo_description ?? undefined,
  }
}

function mdxToPostMeta(p: mdx.PostMeta): PostMeta {
  return {
    id: `mdx-${p.slug}`,
    slug: p.slug,
    title: p.title,
    category: p.category,
    excerpt: p.excerpt,
    description: p.description,
    date: p.date,
    updatedAt: p.updatedAt,
    dateFormatted: p.dateFormatted,
    tags: p.tags,
    coverImage: p.coverImage,
    imageAlt: p.imageAlt,
    readTime: p.readTime,
    status: 'published',
    source: 'mdx',
  }
}

function mdxToPost(p: mdx.Post): Post {
  return { ...mdxToPostMeta(p), content: p.content }
}

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

// ── Public read functions ────────────────────────────────────────────────────

export async function getAllPosts(): Promise<PostMeta[]> {
  if (!isSupabaseConfigured()) return mdx.getAllPosts().map(mdxToPostMeta)

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('posts')
      .select('*')
      .order('published_at', { ascending: false })

    if (error || !data || data.length === 0) return mdx.getAllPosts().map(mdxToPostMeta)
    return data.map(dbToPostMeta)
  } catch {
    return mdx.getAllPosts().map(mdxToPostMeta)
  }
}

export async function getPublishedPosts(): Promise<PostMeta[]> {
  if (!isSupabaseConfigured()) return mdx.getAllPosts().map(mdxToPostMeta)

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (error || !data || data.length === 0) return mdx.getAllPosts().map(mdxToPostMeta)
    return data.map(dbToPostMeta)
  } catch {
    return mdx.getAllPosts().map(mdxToPostMeta)
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSupabaseConfigured()) {
    const p = mdx.getPostBySlug(slug)
    return p ? mdxToPost(p) : null
  }

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error || !data) {
      const p = mdx.getPostBySlug(slug)
      return p ? mdxToPost(p) : null
    }
    return dbToPost(data as DbPost)
  } catch {
    const p = mdx.getPostBySlug(slug)
    return p ? mdxToPost(p) : null
  }
}

export async function getPostById(id: string): Promise<Post | null> {
  if (!isSupabaseConfigured()) return null

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) return null
    return dbToPost(data as DbPost)
  } catch {
    return null
  }
}

export async function getDbPostById(id: string): Promise<DbPost | null> {
  if (!isSupabaseConfigured()) return null

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) return null
    return data as DbPost
  } catch {
    return null
  }
}

export async function getRelatedPosts(
  currentSlug: string,
  tags: string[],
  limit = 3
): Promise<PostMeta[]> {
  const all = await getPublishedPosts()
  const others = all.filter(p => p.slug !== currentSlug)
  const scored = others.map(p => ({
    post: p,
    score: p.tags.filter(t => tags.includes(t)).length,
  }))
  // Shuffle then stable-sort to randomize ties
  for (let i = scored.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[scored[i], scored[j]] = [scored[j], scored[i]]
  }
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map(s => s.post)
}

export async function getAllTags(): Promise<string[]> {
  const all = await getPublishedPosts()
  const set = new Set<string>()
  for (const p of all) p.tags.forEach(t => set.add(t))
  return Array.from(set).sort()
}

export async function getAllCategories(): Promise<string[]> {
  const all = await getPublishedPosts()
  const set = new Set<string>()
  for (const p of all) set.add(p.category)
  return Array.from(set).sort()
}

// ── Admin CRUD (server actions only) ────────────────────────────────────────

export async function getAllPostsAdmin(): Promise<DbPost[]> {
  const sb = createAdminClient()
  const { data, error } = await sb
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as DbPost[]
}

export async function createPost(
  fields: Omit<DbPost, 'id' | 'created_at' | 'updated_at'>
): Promise<DbPost> {
  const sb = createAdminClient()
  const { data, error } = await sb
    .from('posts')
    .insert({ ...fields })
    .select()
    .single()

  if (error) throw error
  return data as DbPost
}

export async function updatePost(
  id: string,
  fields: Partial<Omit<DbPost, 'id' | 'created_at'>>
): Promise<DbPost> {
  const sb = createAdminClient()
  const { data, error } = await sb
    .from('posts')
    .update({ ...fields, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as DbPost
}

export async function deletePost(id: string): Promise<void> {
  const sb = createAdminClient()
  const { error } = await sb.from('posts').delete().eq('id', id)
  if (error) throw error
}

export async function searchPosts(query: string): Promise<PostMeta[]> {
  if (!isSupabaseConfigured()) {
    const all = mdx.getAllPosts().map(mdxToPostMeta)
    const q = query.toLowerCase()
    return all.filter(
      p => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
    )
  }

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('posts')
      .select('*')
      .eq('status', 'published')
      .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%`)
      .order('published_at', { ascending: false })

    if (error || !data) return []
    return data.map(dbToPostMeta)
  } catch {
    return []
  }
}
