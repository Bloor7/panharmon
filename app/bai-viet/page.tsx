import { getPublishedPosts } from '@/lib/db/posts'
import SearchBar from '@/components/blog/SearchBar'
import JsonLd from '@/components/seo/JsonLd'
import type { Metadata } from 'next'

const SITE_URL = 'https://panharmon.com'

export const metadata: Metadata = {
  title: 'Thư Viện Giải Mã Giấc Mơ',
  description:
    'Khám phá ý nghĩa ẩn sau những biểu tượng trong giấc mơ. Thư viện 33+ bài phân tích theo tâm lý học Jung và tâm linh phương Đông.',
  alternates: { canonical: `${SITE_URL}/bai-viet` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/bai-viet`,
    title: 'Thư Viện Giải Mã Giấc Mơ — Panharmon',
    description:
      'Khám phá ý nghĩa ẩn sau những biểu tượng trong giấc mơ. Thư viện 33+ bài phân tích theo tâm lý học Jung và tâm linh phương Đông.',
    locale: 'vi_VN',
    siteName: 'Panharmon',
  },
}

export const revalidate = 3600

export default async function BaiVietPage() {
  const posts = await getPublishedPosts()

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Thư Viện Giải Mã Giấc Mơ — Panharmon',
    description:
      'Khám phá ý nghĩa ẩn sau những biểu tượng trong giấc mơ theo tâm lý học Jung và tâm linh phương Đông.',
    url: `${SITE_URL}/bai-viet`,
    numberOfItems: posts.length,
    hasPart: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/bai-viet/${post.slug}`,
      datePublished: post.date,
    })),
  }

  return (
    <div className="min-h-screen bg-void">
      <JsonLd data={collectionSchema} />
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
    </div>
  )
}
