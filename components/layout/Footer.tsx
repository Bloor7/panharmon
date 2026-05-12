import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-veil/30 bg-void px-8 md:px-16 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="12" stroke="#d4a853" strokeWidth="0.7" opacity="0.5" />
              <circle cx="14" cy="14" r="8" stroke="#7c6fd4" strokeWidth="0.6" opacity="0.5" />
              <circle cx="14" cy="14" r="3.5" fill="#5b4db8" opacity="0.8" />
              <circle cx="15.2" cy="12.8" r="1.2" fill="#e8e4ff" fillOpacity="0.8" />
            </svg>
            <Link href="/" className="font-display text-base tracking-[0.25em] text-star hover:text-gold-light transition-colors duration-300">
              PANHARMON
            </Link>
          </div>
          <p className="font-mono text-xs tracking-widest text-iris uppercase">Bí mật của giấc mơ</p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 list-none m-0 p-0">
            <li>
              <Link
                className="font-mono text-xs tracking-widest uppercase text-iris hover:text-gold transition-all duration-300"
                href="/giai-ma-giac-mo"
              >
                Giải mã
              </Link>
            </li>
            <li>
              <Link
                className="font-mono text-xs tracking-widest uppercase text-iris hover:text-gold transition-all duration-300"
                href="/bai-viet"
              >
                Bài viết
              </Link>
            </li>
            <li>
              <Link
                className="font-mono text-xs tracking-widest uppercase text-iris hover:text-gold transition-all duration-300"
                href="/san-pham"
              >
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link
                className="font-mono text-xs tracking-widest uppercase text-iris hover:text-gold transition-all duration-300"
                href="/gioi-thieu"
              >
                Giới thiệu
              </Link>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="font-mono text-xs tracking-widest text-iris text-center">
          &copy; 2025 Panharmon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
