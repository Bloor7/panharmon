import { getAllPosts } from '@/lib/posts'
import SearchBar from '@/components/blog/SearchBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bài Viết — Panharmon',
  description: 'Thư viện giải mã giấc mơ — khám phá ý nghĩa ẩn sau những biểu tượng và giấc mộng.',
}

export default function BaiVietPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-void">
      <div className="relative z-10 pt-32 pb-24 px-6">
        {/* Page header */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
            Thư viện
          </span>
          <h1 className="font-display text-3xl md:text-5xl tracking-wide text-star mb-6">
            Mộng Triệu{' '}
            <em className="text-gold not-italic">Ký Sự</em>
          </h1>
          <p className="font-body text-lg text-lavender max-w-xl mx-auto leading-relaxed">
            Khám phá ý nghĩa ẩn sau những biểu tượng trong giấc mơ của bạn.
            Từ nguyên mẫu Jungian đến truyền thống tâm linh phương Đông.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8 opacity-40">
            <div className="h-px w-16 bg-veil" />
            <span className="font-mono text-xs text-iris">✦</span>
            <div className="h-px w-16 bg-veil" />
          </div>
        </div>

        {/* Search + article grid */}
        <div className="max-w-6xl mx-auto">
          <SearchBar posts={posts} />
        </div>
      </div>
    </main>
  )
}
