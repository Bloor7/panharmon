import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      {/* Decorative ring */}
      <div className="relative mb-12 flex items-center justify-center">
        <div
          className="w-40 h-40 rounded-full border border-veil"
          style={{ animation: "ring-pulse 4s ease-in-out infinite" }}
        />
        <div
          className="absolute w-28 h-28 rounded-full border border-mist opacity-60"
          style={{ animation: "ring-pulse 4s ease-in-out infinite 1s" }}
        />
        <span
          className="absolute font-display text-4xl text-gold opacity-80"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          404
        </span>
      </div>

      {/* Message */}
      <p className="font-mono text-xs tracking-[0.3em] text-iris uppercase mb-5">
        Trang không tồn tại
      </p>

      <h1 className="font-display text-2xl md:text-3xl text-star mb-4 leading-snug">
        Trang này có lẽ chỉ tồn tại
        <br />
        trong giấc mơ...
      </h1>

      <p className="font-body text-lg text-lavender max-w-sm leading-relaxed mb-10">
        Đường dẫn bạn tìm không có ở đây — hoặc nó đã tan biến như một giấc mộng lúc rạng sáng.
      </p>

      {/* Divider rune */}
      <div className="flex items-center gap-4 mb-10 opacity-30">
        <div className="h-px w-16 bg-veil" />
        <span className="font-mono text-xs text-iris">✦</span>
        <div className="h-px w-16 bg-veil" />
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-3 border border-gold/40 hover:border-gold text-gold hover:text-gold-light px-8 py-3 font-display text-xs tracking-widest uppercase transition-colors duration-300"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Trở về trang chủ
      </Link>
    </div>
  );
}
