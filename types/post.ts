export type PostStatus = 'draft' | 'published'

export interface DbPost {
  id: string
  title: string
  slug: string
  description: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  thumbnail_url: string | null
  image_alt: string | null
  status: PostStatus
  seo_title: string | null
  seo_description: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface PostFormData {
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string
  thumbnail_url: string
  image_alt: string
  status: PostStatus
  seo_title: string
  seo_description: string
  published_at: string
}

export interface PostMeta {
  id: string
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
  status: PostStatus
  source: 'db' | 'mdx'
}

export interface Post extends PostMeta {
  content: string
  seoTitle?: string
  seoDescription?: string
}
