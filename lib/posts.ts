import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  slug: string
  title: string
  category: string
  excerpt: string
  description: string
  date: string
  updatedAt: string
  dateFormatted: string
  tags: string[]
  coverImage?: string
  imageAlt?: string
  readTime: string
}

export interface Post extends PostMeta {
  content: string
}

const postsDir = path.join(process.cwd(), 'content', 'bai-viet')

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
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} phút đọc`
}

function parsePost(slug: string, raw: string): PostMeta & { content: string } {
  const { data, content } = matter(raw)
  const excerpt = (data.excerpt as string) ?? ''
  return {
    slug,
    title: (data.title as string) ?? '',
    category: (data.category as string) ?? 'kien-thuc',
    excerpt,
    description: excerpt,
    date: (data.date as string) ?? '',
    updatedAt: (data.updatedAt as string) ?? (data.date as string) ?? '',
    dateFormatted: data.date ? formatDate(data.date as string) : '',
    tags: (data.tags as string[]) ?? [],
    coverImage: (data.coverImage as string) || undefined,
    imageAlt: (data.imageAlt as string) ?? undefined,
    readTime: calcReadTime(content),
    content,
  }
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
  return files
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(postsDir, fileName), 'utf8')
      const { data, content } = matter(raw)
      const excerpt = (data.excerpt as string) ?? ''
      return {
        slug,
        title: (data.title as string) ?? '',
        category: (data.category as string) ?? 'kien-thuc',
        excerpt,
        description: excerpt,
        date: (data.date as string) ?? '',
        updatedAt: (data.updatedAt as string) ?? (data.date as string) ?? '',
        dateFormatted: data.date ? formatDate(data.date as string) : '',
        tags: (data.tags as string[]) ?? [],
        coverImage: (data.coverImage as string) || undefined,
        imageAlt: (data.imageAlt as string) ?? undefined,
        readTime: calcReadTime(content),
      } satisfies PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const raw = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), 'utf8')
    return parsePost(slug, raw)
  } catch {
    return null
  }
}

export function getAllTags(): string[] {
  const all = getAllPosts()
  const set = new Set<string>()
  for (const post of all) {
    for (const tag of post.tags) set.add(tag)
  }
  return Array.from(set).sort()
}

export function getAllCategories(): string[] {
  const all = getAllPosts()
  const set = new Set<string>()
  for (const post of all) set.add(post.category)
  return Array.from(set).sort()
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): PostMeta[] {
  const all = getAllPosts().filter(p => p.slug !== currentSlug)

  const withScore = all.map(p => ({
    post: p,
    score: p.tags.filter(t => tags.includes(t)).length,
  }))

  // Fisher-Yates shuffle to randomize within same-score buckets
  for (let i = withScore.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[withScore[i], withScore[j]] = [withScore[j], withScore[i]]
  }

  // Stable sort: higher tag overlap = higher priority, shuffled order breaks ties
  withScore.sort((a, b) => b.score - a.score)

  return withScore.slice(0, limit).map(s => s.post)
}
