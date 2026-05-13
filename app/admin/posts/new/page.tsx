import type { Metadata } from 'next'
import Link from 'next/link'
import PostForm from '@/components/admin/PostForm'
import { createPostAction } from '../actions'

export const metadata: Metadata = { title: 'Bài viết mới' }

export default function NewPostPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/posts" className="font-mono text-[10px] text-iris hover:text-gold transition-colors tracking-wider uppercase">
          ← Bài viết
        </Link>
        <span className="text-veil">/</span>
        <h1 className="font-display text-xl tracking-wide text-star">Bài viết mới</h1>
      </div>

      <PostForm action={createPostAction} submitLabel="Tạo bài viết" />
    </div>
  )
}
