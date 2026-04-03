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
            <span className="font-display text-base tracking-[0.25em] text-star">PANHARMON</span>
          </div>
          <p className="font-mono text-xs tracking-widest text-lavender/50 uppercase">Bí mật của giấc mơ</p>
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs tracking-widest text-lavender/40 text-center">
          &copy; 2024 Panharmon. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6">
          <Link
            className="font-mono text-xs tracking-widest uppercase text-lavender opacity-50 hover:opacity-100 hover:text-gold transition-all duration-300"
            href="/bao-mat"
          >
            Bảo mật
          </Link>
          <Link
            className="font-mono text-xs tracking-widest uppercase text-lavender opacity-50 hover:opacity-100 hover:text-gold transition-all duration-300"
            href="/dieu-khoan"
          >
            Điều khoản
          </Link>
          <Link
            className="font-mono text-xs tracking-widest uppercase text-lavender opacity-50 hover:opacity-100 hover:text-gold transition-all duration-300"
            href="/lien-he"
          >
            Liên hệ
          </Link>
        </div>
      </div>
    </footer>
  );
}
