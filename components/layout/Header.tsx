"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Giải mã", href: "/giai-ma-giac-mo" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Bài viết", href: "/bai-viet" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
];

export default function Header() {
  const pathname = usePathname();

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
      <nav className="hidden md:block" aria-label="Menu chính">
        <ul className="flex gap-9 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? "text-gold opacity-100"
                      : "text-lavender hover:text-gold opacity-70 hover:opacity-100"
                  }`}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* CTA — trỏ về form giải mã trên homepage */}
      <Link
        href="/#giai-ma"
        className="font-mono text-xs tracking-widest uppercase bg-gold text-void px-6 py-2.5 hover:bg-gold-light transition-colors duration-300"
      >
        Giải mã ngay
      </Link>
    </header>
  );
}
