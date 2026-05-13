'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createPost, updatePost, deletePost } from '@/lib/db/posts'
import type { PostFormData } from '@/types/post'

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export async function createPostAction(formData: FormData) {
  const title = formData.get('title') as string
  const slug = (formData.get('slug') as string) || slugify(title)
  const status = (formData.get('status') as 'draft' | 'published') || 'draft'
  const tagsRaw = (formData.get('tags') as string) || ''
  const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean)

  const post = await createPost({
    title,
    slug,
    excerpt: formData.get('excerpt') as string || '',
    description: formData.get('excerpt') as string || '',
    content: formData.get('content') as string || '',
    category: formData.get('category') as string || 'kien-thuc',
    tags,
    thumbnail_url: (formData.get('thumbnail_url') as string) || null,
    image_alt: (formData.get('image_alt') as string) || null,
    status,
    seo_title: (formData.get('seo_title') as string) || null,
    seo_description: (formData.get('seo_description') as string) || null,
    published_at: status === 'published' ? new Date().toISOString() : null,
  })

  revalidatePath('/bai-viet')
  revalidatePath('/giai-ma-giac-mo')
  revalidatePath('/sitemap.xml')
  redirect(`/admin/posts/${post.id}/edit`)
}

export async function updatePostAction(id: string, formData: FormData) {
  const status = (formData.get('status') as 'draft' | 'published') || 'draft'
  const tagsRaw = (formData.get('tags') as string) || ''
  const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean)

  await updatePost(id, {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    excerpt: formData.get('excerpt') as string || '',
    description: formData.get('excerpt') as string || '',
    content: formData.get('content') as string || '',
    category: formData.get('category') as string || 'kien-thuc',
    tags,
    thumbnail_url: (formData.get('thumbnail_url') as string) || null,
    image_alt: (formData.get('image_alt') as string) || null,
    status,
    seo_title: (formData.get('seo_title') as string) || null,
    seo_description: (formData.get('seo_description') as string) || null,
    published_at: status === 'published' ? new Date().toISOString() : null,
  })

  revalidatePath('/bai-viet')
  revalidatePath('/giai-ma-giac-mo')
  revalidatePath('/sitemap.xml')
  revalidatePath(`/bai-viet/${formData.get('slug')}`)
}

export async function deletePostAction(id: string) {
  await deletePost(id)
  revalidatePath('/bai-viet')
  revalidatePath('/giai-ma-giac-mo')
  revalidatePath('/sitemap.xml')
  redirect('/admin/posts')
}
