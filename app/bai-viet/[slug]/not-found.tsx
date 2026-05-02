import Link from 'next/link'

export default function PostNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-12 flex items-center justify-center">
        <div
          className="w-40 h-40 rounded-full border border-veil"
          style={{ animation: 'ring-pulse 4s ease-in-out infinite' }}
        />
        <div
          className="absolute w-28 h-28 rounded-full border border-mist opacity-60"
          style={{ animation: 'ring-pulse 4s ease-in-out infinite 1s' }}
        />
        <svg
          className="absolute"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{ animation: 'float 6s ease-in-out infinite' }}
          aria-hidden="true"
        >
          <path
            d="M4 16 C4 8, 8 4, 16 4 S28 8 28 16 S24 28 16 28"
            stroke="#d4a853"
            strokeWidth="0.8"
            fill="none"
            opacity="0.6"
          />
          <ellipse cx="16" cy="16" rx="7" ry="4.5" stroke="#7c6fd4" strokeWidth="0.6" fill="none" opacity="0.5" />
          <circle cx="16" cy="16" r="2.5" fill="#5b4db8" opacity="0.8" />
        </svg>
      </div>

      <p className="font-mono text-xs tracking-[0.3em] text-iris uppercase mb-5">
        Bài viết không tồn tại
      </p>

      <h1 className="font-display text-2xl md:text-3xl text-star mb-4 leading-snug">
        Giấc mơ này chưa được
        <br />
        ghi chép lại...
      </h1>

      <p className="font-body text-lg text-lavender max-w-sm leading-relaxed mb-10">
        Bài viết bạn tìm không tồn tại hoặc đã được lưu trữ. Hãy khám phá những giấc mộng khác trong thư viện của chúng tôi.
      </p>

      <div className="flex items-center gap-4 mb-10 opacity-30">
        <div className="h-px w-16 bg-veil" />
        <span className="font-mono text-xs text-iris">✦</span>
        <div className="h-px w-16 bg-veil" />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/bai-viet"
          className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-void px-8 py-3 font-display text-xs tracking-widest uppercase transition-colors duration-300"
        >
          Xem tất cả bài viết
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-3 border border-veil hover:border-gold/60 text-lavender hover:text-ghost px-8 py-3 font-display text-xs tracking-widest uppercase transition-colors duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Trang chủ
        </Link>
      </div>
    </div>
  )
}
