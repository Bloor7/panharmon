import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

const SITE_URL = 'https://panharmon.com'

export const metadata: Metadata = {
  title: 'Giới Thiệu — Panharmon Là Gì?',
  description:
    'Panharmon là nền tảng giải mã giấc mơ kết hợp tâm lý học Jung, tâm linh phương Đông và trí tuệ nhân tạo. Tìm hiểu sứ mệnh và phương pháp của chúng tôi.',
  alternates: { canonical: `${SITE_URL}/gioi-thieu` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/gioi-thieu`,
    title: 'Giới Thiệu — Panharmon Là Gì?',
    description:
      'Panharmon là nền tảng giải mã giấc mơ kết hợp tâm lý học Jung, tâm linh phương Đông và trí tuệ nhân tạo.',
    locale: 'vi_VN',
    siteName: 'Panharmon',
  },
}

const pillars = [
  {
    symbol: 'ψ',
    title: 'Tâm Lý Học Jung',
    desc: 'Vô thức tập thể, nguyên mẫu, bóng tối — hệ thống lý luận của Carl Gustav Jung là nền tảng khoa học cho việc giải mã biểu tượng trong giấc mơ.',
  },
  {
    symbol: '☽',
    title: 'Tâm Linh Phương Đông',
    desc: 'Triết học Đạo giáo, Phật giáo, chiêm tinh học phương Đông — những truyền thống ngàn năm mang đến chiều sâu tâm linh mà khoa học phương Tây còn đang khám phá.',
  },
  {
    symbol: '⬡',
    title: 'Trí Tuệ Nhân Tạo',
    desc: 'AI phân tích ngữ cảnh và cá nhân hóa giải thích dựa trên chi tiết cụ thể của giấc mơ, kết hợp cả hai trường phái trên để đưa ra phân tích phù hợp nhất.',
  },
]

export default function GioiThieuPage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Panharmon',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    description:
      'Nền tảng giải mã giấc mơ kết hợp tâm lý học Jung, tâm linh phương Đông và trí tuệ nhân tạo.',
    foundingDate: '2024',
    inLanguage: 'vi',
    sameAs: [],
  }

  return (
    <div className="min-h-screen bg-void">
      <JsonLd data={orgSchema} />
      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Trang chủ', href: '/' },
              { label: 'Giới thiệu', href: '/gioi-thieu' },
            ]}
          />

          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
              Về chúng tôi
            </span>
            <h1 className="font-display text-4xl md:text-5xl tracking-wide text-star mb-6 leading-tight">
              Panharmon Là{' '}
              <em className="text-gold not-italic">Gì?</em>
            </h1>
            <p className="font-body text-xl text-lavender max-w-2xl mx-auto leading-relaxed">
              Một cổng tri thức được tạo ra từ niềm tin rằng — mỗi giấc mơ đều có điều gì đó
              muốn nói với bạn.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-16 opacity-40">
            <div className="h-px flex-1 bg-veil" />
            <span className="font-mono text-xs text-iris">✦</span>
            <div className="h-px flex-1 bg-veil" />
          </div>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="font-display text-2xl tracking-wide text-star mb-6">Sứ Mệnh</h2>
            <div className="space-y-5">
              <p className="font-body text-lg text-lavender/80 leading-relaxed">
                Panharmon ra đời từ một câu hỏi đơn giản: tại sao con người lại bỏ qua hàng đêm
                một phần ba cuộc sống của mình — giấc ngủ và những giấc mơ — mà không cố gắng
                hiểu chúng?
              </p>
              <p className="font-body text-lg text-lavender/80 leading-relaxed">
                Chúng tôi tin rằng giấc mơ không phải là nhiễu loạn ngẫu nhiên của não bộ.
                Chúng là ngôn ngữ của tiềm thức — một hệ thống giao tiếp tinh vi mà tâm trí
                sử dụng để xử lý cảm xúc, tích hợp ký ức, cảnh báo nguy cơ và thậm chí
                hướng dẫn quyết định.
              </p>
              <p className="font-body text-lg text-lavender/80 leading-relaxed">
                Sứ mệnh của Panharmon là làm cho tri thức về giấc mơ — vốn trải rộng từ
                phòng thí nghiệm tâm lý học đến các đền thờ tâm linh — trở nên dễ tiếp cận
                và có ý nghĩa thực tiễn với người Việt Nam hiện đại.
              </p>
            </div>
          </section>

          {/* Three pillars */}
          <section className="mb-16">
            <h2 className="font-display text-2xl tracking-wide text-star mb-8">Phương Pháp</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="border border-veil hover:border-iris/40 bg-abyss/50 p-6 transition-colors duration-300"
                >
                  <span className="font-display text-3xl text-gold/60 block mb-4" aria-hidden="true">
                    {p.symbol}
                  </span>
                  <h3 className="font-display text-base tracking-wide text-star mb-3">{p.title}</h3>
                  <p className="font-body text-sm text-lavender/70 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center border border-veil/40 bg-abyss/40 p-10">
            <h2 className="font-display text-2xl tracking-wide text-star mb-4">
              Bắt Đầu Hành Trình
            </h2>
            <p className="font-body text-base text-lavender mb-8 max-w-md mx-auto leading-relaxed">
              Khám phá thư viện giải mã giấc mơ hoặc gửi giấc mơ của bạn để được phân tích miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/giai-ma-giac-mo"
                className="font-mono text-xs tracking-widest uppercase bg-gold text-void px-8 py-3.5 hover:bg-gold-light transition-colors duration-300"
              >
                Tra cứu giấc mơ
              </Link>
              <Link
                href="/#giai-ma"
                className="font-mono text-xs tracking-widest uppercase border border-iris text-lavender px-8 py-3.5 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Gửi giấc mơ của bạn
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
