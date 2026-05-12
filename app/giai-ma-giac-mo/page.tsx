import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/posts'
import PostCard from '@/components/blog/PostCard'
import JsonLd from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

const SITE_URL = 'https://panharmon.com'

export const metadata: Metadata = {
  title: 'Giải Mã Giấc Mơ — Ý Nghĩa Theo Tâm Lý Jung & Tâm Linh',
  description:
    'Tra cứu ý nghĩa giấc mơ theo tâm lý học Jung và tâm linh phương Đông. Nằm mơ thấy rắn, nước, lửa, người chết... mang điềm gì? Giải đáp chuyên sâu từ Panharmon.',
  alternates: { canonical: `${SITE_URL}/giai-ma-giac-mo` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/giai-ma-giac-mo`,
    title: 'Giải Mã Giấc Mơ — Ý Nghĩa Theo Tâm Lý Jung & Tâm Linh',
    description:
      'Tra cứu ý nghĩa giấc mơ theo tâm lý học Jung và tâm linh phương Đông. Nằm mơ thấy rắn, nước, lửa, người chết...',
    locale: 'vi_VN',
    siteName: 'Panharmon',
  },
}

const FAQ_ITEMS = [
  {
    q: 'Giải mã giấc mơ có chính xác không?',
    a: 'Giải mã giấc mơ dựa trên tâm lý học phân tích (Jung) và ký hiệu học tâm linh không cho ra một đáp án tuyệt đối, nhưng cung cấp khung tham chiếu giúp bạn hiểu trạng thái tiềm thức. Ý nghĩa cuối cùng phụ thuộc vào bối cảnh cuộc sống và cảm xúc cá nhân của người nằm mơ.',
  },
  {
    q: 'Nằm mơ thấy rắn có điềm gì không?',
    a: 'Trong tâm lý học Jung, rắn là nguyên mẫu hai mặt: biểu tượng của sự biến đổi và chữa lành (rắn lột da), đồng thời là năng lượng tiềm thức chưa được kiểm soát. Ý nghĩa cụ thể phụ thuộc vào hành động của rắn, màu sắc và cảm xúc trong giấc mơ.',
  },
  {
    q: 'Tại sao giấc mơ lại lặp lại nhiều lần?',
    a: 'Giấc mơ lặp lại thường phản ánh một vấn đề tâm lý chưa được giải quyết hoặc một bài học mà tiềm thức đang cố gắng truyền đạt. Chúng thường giảm tần suất khi người nằm mơ đối mặt và xử lý được nguồn gốc của vấn đề.',
  },
  {
    q: 'Giấc mơ gần sáng có ý nghĩa đặc biệt không?',
    a: 'Giấc mơ trong giai đoạn REM cuối (khoảng 4–7 giờ sáng) thường sinh động và dễ nhớ hơn. Nhiều truyền thống tâm linh phương Đông tin rằng giấc mơ gần sáng có liên kết sâu hơn với linh hồn và thế giới tinh thần, và thường mang tính tiên tri hơn.',
  },
  {
    q: 'Mơ thấy người đã mất có ý nghĩa gì?',
    a: 'Theo tâm lý học, người đã mất trong giấc mơ thường đại diện cho một phần của bản thân hoặc một phẩm chất mà họ mang lại. Theo tâm linh, đây có thể là thông điệp từ tổ tiên hay linh hồn người thân. Cả hai lối giải đều nhấn mạnh rằng đây là cơ hội để xử lý tiếc thương và tìm bình an.',
  },
  {
    q: 'Panharmon sử dụng phương pháp nào để giải mã?',
    a: 'Panharmon kết hợp ba phương pháp: (1) Tâm lý học phân tích Jung — nguyên mẫu, vô thức tập thể, bóng tối; (2) Ký hiệu học tâm linh phương Đông — biểu tượng, điềm báo theo văn hóa Á Đông; (3) Trí tuệ nhân tạo — phân tích ngữ cảnh và đưa ra giải thích cá nhân hóa.',
  },
]

const CATEGORY_LABELS: Record<string, string> = {
  'giai-ma': 'Giải Mã Biểu Tượng',
  'kien-thuc': 'Kiến Thức Tâm Lý',
}

export default function GiaiMaGiacMoPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  const postsByCategory: Record<string, typeof posts> = {}
  for (const cat of categories) {
    postsByCategory[cat] = posts.filter(p => p.category === cat)
  }

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Giải Mã Giấc Mơ — Panharmon',
    description:
      'Tra cứu ý nghĩa giấc mơ theo tâm lý học Jung và tâm linh phương Đông.',
    url: `${SITE_URL}/giai-ma-giac-mo`,
    inLanguage: 'vi',
    numberOfItems: posts.length,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Panharmon',
    url: SITE_URL,
    description:
      'Nền tảng giải mã giấc mơ kết hợp tâm lý học Jung, tâm linh phương Đông và trí tuệ nhân tạo.',
  }

  return (
    <div className="min-h-screen bg-void">
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={orgSchema} />

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Trang chủ', href: '/' },
              { label: 'Giải mã giấc mơ', href: '/giai-ma-giac-mo' },
            ]}
          />

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
              Tra cứu · Phân tích · Thức tỉnh
            </span>
            <h1 className="font-display text-4xl md:text-6xl tracking-wide text-star mb-6 leading-tight">
              Giải Mã{' '}
              <em className="text-gold not-italic">Giấc Mơ</em>
            </h1>
            <p className="font-body text-lg text-lavender max-w-2xl mx-auto leading-relaxed">
              Mỗi giấc mơ là một ngôn ngữ — ký hiệu, biểu tượng, cảm xúc — mà tiềm thức dùng
              để giao tiếp với ý thức. Panharmon giúp bạn học đọc ngôn ngữ đó.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8 opacity-40">
              <div className="h-px w-16 bg-veil" />
              <span className="font-mono text-xs text-iris">✦</span>
              <div className="h-px w-16 bg-veil" />
            </div>
          </div>

          {/* Intro SEO */}
          <div className="prose-panharmon max-w-3xl mx-auto mb-20">
            <p className="font-body text-lg text-lavender/80 leading-relaxed mb-5">
              Giải mã giấc mơ là nghệ thuật và khoa học kết hợp. Từ thời cổ đại, các nền văn minh
              Ai Cập, Hy Lạp, Lưỡng Hà đều coi giấc mơ là thông điệp từ thần linh hoặc từ tầng
              sâu nhất của tâm hồn. Trong thế kỷ 20, Carl Gustav Jung — nhà tâm lý học Thụy Sĩ —
              đã hệ thống hóa việc giải mã giấc mơ thành một phương pháp khoa học, đặt nền móng
              cho tâm lý học phân tích hiện đại.
            </p>
            <p className="font-body text-lg text-lavender/80 leading-relaxed mb-5">
              Theo Jung, mỗi biểu tượng trong giấc mơ — con rắn, mặt nước, ngọn lửa, người xa lạ —
              đều mang hai lớp nghĩa: lớp cá nhân (liên quan đến kinh nghiệm riêng của người nằm mơ)
              và lớp tập thể (thuộc về kho ký ức chung của nhân loại, mà ông gọi là{' '}
              <em className="text-gold-light not-italic">vô thức tập thể</em>). Việc hiểu được cả
              hai lớp này là chìa khóa để giải mã chính xác.
            </p>
            <p className="font-body text-lg text-lavender/80 leading-relaxed mb-5">
              Tâm linh phương Đông — từ Phật giáo đến Đạo giáo, từ phong thuỷ đến chiêm tinh học —
              cũng có hệ thống giải mã giấc mơ riêng, tập trung vào mối quan hệ giữa giấc mơ và
              vận mệnh, giữa thế giới tinh thần và thế giới vật chất. Panharmon kết hợp cả hai
              trường phái này để đưa ra phân tích toàn diện nhất.
            </p>
            <p className="font-body text-lg text-lavender/80 leading-relaxed mb-5">
              Thư viện giải mã giấc mơ của chúng tôi hiện có{' '}
              <strong className="text-ghost">{posts.length} bài phân tích</strong> chuyên sâu,
              bao gồm những biểu tượng phổ biến nhất — từ mơ thấy rắn, nước, lửa đến những
              giấc mơ đặc biệt như mơ thấy bay, mơ thấy người đã mất, hay mơ thấy răng rụng.
              Mỗi bài được viết kỹ lưỡng kết hợp kiến thức tâm lý học, tâm linh và phân tích
              ngữ cảnh văn hóa Việt Nam.
            </p>
          </div>

          {/* Posts by category */}
          {categories.map(cat => {
            const catPosts = postsByCategory[cat] ?? []
            if (catPosts.length === 0) return null
            const label = CATEGORY_LABELS[cat] ?? cat

            return (
              <section key={cat} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-veil/30" />
                  <h2 className="font-mono text-xs tracking-[0.25em] text-gold uppercase whitespace-nowrap">
                    {label}
                  </h2>
                  <div className="h-px flex-1 bg-veil/30" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catPosts.map((post, i) => (
                    <PostCard key={post.slug} post={post} index={i} />
                  ))}
                </div>
              </section>
            )
          })}

          {/* CTA — full library */}
          <div className="text-center my-16">
            <Link
              href="/bai-viet"
              className="font-mono text-xs tracking-[0.2em] uppercase border border-iris/50 text-lavender px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 inline-block"
            >
              Xem toàn bộ thư viện bài viết
            </Link>
          </div>

          {/* FAQ */}
          <section className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-3">
                Câu hỏi thường gặp
              </span>
              <h2 className="font-display text-2xl md:text-3xl tracking-wide text-star">
                Giải Đáp Về{' '}
                <em className="text-gold not-italic">Giải Mã Giấc Mơ</em>
              </h2>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-veil hover:border-iris/40 transition-colors duration-300"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-display text-base text-star tracking-wide">
                    <span>{q}</span>
                    <svg
                      className="shrink-0 text-gold opacity-60 transition-transform duration-300 group-open:rotate-180"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path d="M2 4L7 10L12 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-1">
                    <p className="font-body text-base text-lavender/80 leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* CTA form */}
            <div className="text-center mt-12">
              <p className="font-body text-base text-lavender mb-4">
                Không tìm thấy giấc mơ của bạn? Gửi mô tả để được phân tích trực tiếp.
              </p>
              <Link
                href="/#giai-ma"
                className="font-mono text-xs tracking-widest uppercase bg-gold text-void px-8 py-3.5 hover:bg-gold-light transition-colors duration-300 inline-block"
              >
                Gửi giấc mơ để phân tích
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
