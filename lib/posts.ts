import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  dateFormatted: string
  tags: string[]
  coverImage?: string
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
  return {
    slug,
    title: (data.title as string) ?? '',
    category: (data.category as string) ?? 'kien-thuc',
    excerpt: (data.excerpt as string) ?? '',
    date: (data.date as string) ?? '',
    dateFormatted: data.date ? formatDate(data.date as string) : '',
    tags: (data.tags as string[]) ?? [],
    coverImage: data.coverImage as string | undefined,
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
      return {
        slug,
        title: (data.title as string) ?? '',
        category: (data.category as string) ?? 'kien-thuc',
        excerpt: (data.excerpt as string) ?? '',
        date: (data.date as string) ?? '',
        dateFormatted: data.date ? formatDate(data.date as string) : '',
        tags: (data.tags as string[]) ?? [],
        coverImage: data.coverImage as string | undefined,
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

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): PostMeta[] {
  return getAllPosts()
    .filter(p => p.slug !== currentSlug && p.tags.some(t => tags.includes(t)))
    .slice(0, limit)
}
