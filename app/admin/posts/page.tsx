import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPostsAdmin } from '@/lib/db/posts'

export const metadata: Metadata = { title: 'Bài viết' }
export const dynamic = 'force-dynamic'

export default async function AdminPostsPage() {
  const posts = await getAllPostsAdmin().catch(() => [])

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl tracking-wide text-star mb-1">Bài viết</h1>
          <p className="font-mono text-xs text-iris tracking-wider">{posts.length} bài viết</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="font-mono text-xs tracking-[0.2em] uppercase bg-gold text-void px-6 py-2.5 hover:bg-gold-light transition-colors duration-200"
        >
          + Bài mới
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 border border-veil/40">
          <p className="font-body text-lavender mb-4">Chưa có bài viết nào.</p>
          <Link href="/admin/posts/new" className="font-mono text-xs text-iris hover:text-gold transition-colors tracking-wider">
            Tạo bài viết đầu tiên →
          </Link>
        </div>
      ) : (
        <div className="border border-veil divide-y divide-veil/60">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-5 py-3 bg-abyss/60">
            <span className="col-span-5 font-mono text-[10px] tracking-widest text-iris uppercase">Tiêu đề</span>
            <span className="col-span-2 font-mono text-[10px] tracking-widest text-iris uppercase">Danh mục</span>
            <span className="col-span-2 font-mono text-[10px] tracking-widest text-iris uppercase">Trạng thái</span>
            <span className="col-span-2 font-mono text-[10px] tracking-widest text-iris uppercase">Ngày</span>
            <span className="col-span-1" />
          </div>

          {posts.map(post => (
            <div key={post.id} className="grid grid-cols-12 gap-4 px-5 py-4 items-center hover:bg-abyss/30 transition-colors">
              <div className="col-span-5 min-w-0">
                <p className="font-body text-sm text-star truncate">{post.title}</p>
                <p className="font-mono text-[10px] text-lavender/40 tracking-wider">{post.slug}</p>
              </div>
              <div className="col-span-2">
                <span className="font-mono text-[10px] text-iris tracking-wider">{post.category}</span>
              </div>
              <div className="col-span-2">
                <span className={`font-mono text-[10px] tracking-widest uppercase border px-2 py-0.5 ${
                  post.status === 'published'
                    ? 'border-teal/40 text-teal'
                    : 'border-veil text-iris'
                }`}>
                  {post.status}
                </span>
              </div>
              <div className="col-span-2">
                <span className="font-mono text-[10px] text-lavender/40 tracking-wider">
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString('vi-VN')
                    : '—'}
                </span>
              </div>
              <div className="col-span-1 flex justify-end">
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="font-mono text-[10px] text-iris hover:text-gold transition-colors uppercase tracking-wider"
                >
                  Sửa
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
