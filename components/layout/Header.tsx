import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 flex items-center justify-between bg-void/95 backdrop-blur-sm border-b border-veil/20">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="17" cy="17" r="15" stroke="#d4a853" strokeWidth="0.8" opacity="0.5" />
          <circle cx="17" cy="17" r="10" stroke="#7c6fd4" strokeWidth="0.7" opacity="0.6" />
          <ellipse cx="17" cy="17" rx="10" ry="5.5" stroke="#a89ee0" strokeWidth="0.6" opacity="0.4" />
          <circle cx="17" cy="17" r="4" fill="#5b4db8" opacity="0.85" />
          <circle cx="18.4" cy="15.6" r="1.4" fill="#e8e4ff" fillOpacity="0.85" />
        </svg>
        <span className="font-display text-base tracking-[0.25em] text-star group-hover:text-gold-light transition-colors duration-300">
          PANHARMON
        </span>
      </Link>

      {/* Nav links */}
      <nav className="hidden md:block">
        <ul className="flex gap-9 list-none m-0 p-0">
          <li>
            <Link
              className="font-mono text-xs tracking-widest uppercase text-lavender hover:text-gold opacity-70 hover:opacity-100 transition-all duration-300"
              href="#giai-ma"
            >
              Giải mã
            </Link>
          </li>
          <li>
            <Link
              className="font-mono text-xs tracking-widest uppercase text-lavender hover:text-gold opacity-70 hover:opacity-100 transition-all duration-300"
              href="#san-pham"
            >
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link
              className="font-mono text-xs tracking-widest uppercase text-lavender hover:text-gold opacity-70 hover:opacity-100 transition-all duration-300"
              href="#bai-viet"
            >
              Bài viết
            </Link>
          </li>
          <li>
            <Link
              className="font-mono text-xs tracking-widest uppercase text-lavender hover:text-gold opacity-70 hover:opacity-100 transition-all duration-300"
              href="#tu-van"
            >
              Tư vấn
            </Link>
          </li>
        </ul>
      </nav>

      {/* CTA */}
      <Link
        href="#giai-ma"
        className="font-mono text-xs tracking-widest uppercase bg-gold text-void px-6 py-2.5 hover:bg-gold-light transition-colors duration-300"
      >
        Giải mã ngay
      </Link>
    </header>
  );
}
