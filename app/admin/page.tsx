import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPostsAdmin } from '@/lib/db/posts'
import { getAllProducts } from '@/lib/db/products'

export const metadata: Metadata = { title: 'Dashboard' }

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const [posts, products] = await Promise.all([
    getAllPostsAdmin().catch(() => []),
    getAllProducts().catch(() => []),
  ])

  const publishedPosts = posts.filter(p => p.status === 'published')
  const draftPosts = posts.filter(p => p.status === 'draft')
  const recentPosts = posts.slice(0, 5)

  const stats = [
    { label: 'Tổng bài viết', value: posts.length, sub: `${publishedPosts.length} published · ${draftPosts.length} draft`, href: '/admin/posts' },
    { label: 'Sản phẩm', value: products.length, sub: `${products.filter(p => p.status === 'published').length} published`, href: '/admin/products' },
  ]

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="font-display text-2xl tracking-wide text-star mb-1">Dashboard</h1>
        <p className="font-mono text-xs text-iris tracking-wider">Panharmon CMS</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {stats.map(s => (
          <Link
            key={s.label}
            href={s.href}
            className="border border-veil hover:border-iris/50 bg-abyss/50 p-6 transition-all duration-200 group"
          >
            <p className="font-mono text-xs text-iris tracking-wider mb-2">{s.label}</p>
            <p className="font-display text-4xl text-gold mb-1">{s.value}</p>
            <p className="font-mono text-[10px] text-lavender/50 tracking-wider">{s.sub}</p>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mb-10">
        <p className="font-mono text-xs text-iris tracking-[0.2em] uppercase mb-4">Quick Actions</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/posts/new"
            className="font-mono text-xs tracking-wider uppercase border border-iris/50 text-lavender px-5 py-2.5 hover:border-gold hover:text-gold transition-all duration-200"
          >
            + Bài viết mới
          </Link>
          <Link
            href="/admin/products/new"
            className="font-mono text-xs tracking-wider uppercase border border-veil text-iris px-5 py-2.5 hover:border-mist hover:text-lavender transition-all duration-200"
          >
            + Sản phẩm mới
          </Link>
        </div>
      </div>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <div>
          <p className="font-mono text-xs text-iris tracking-[0.2em] uppercase mb-4">Bài viết gần đây</p>
          <div className="border border-veil divide-y divide-veil/60">
            {recentPosts.map(post => (
              <div key={post.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-abyss/40 transition-colors">
                <div className="min-w-0 mr-4">
                  <p className="font-body text-sm text-star truncate">{post.title}</p>
                  <p className="font-mono text-[10px] text-iris tracking-wider mt-0.5">{post.slug}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border ${
                    post.status === 'published'
                      ? 'border-teal/40 text-teal'
                      : 'border-veil text-iris'
                  }`}>
                    {post.status}
                  </span>
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className="font-mono text-[10px] text-iris hover:text-gold transition-colors uppercase tracking-wider"
                  >
                    Sửa →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
