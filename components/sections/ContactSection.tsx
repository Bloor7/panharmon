"use client";

import { useState, type FormEvent } from "react";

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M17 2H3C2.45 2 2 2.45 2 3V17C2 17.55 2.45 18 3 18H10.62V11.63H8.5V9.19H10.62V7.41C10.62 5.31 11.87 4.21 13.75 4.21C14.65 4.21 15.42 4.27 15.65 4.3V6.5H14.37C13.36 6.5 13.16 6.99 13.16 7.71V9.19H15.57L15.25 11.63H13.16V18H17C17.55 18 18 17.55 18 17V3C18 2.45 17.55 2 17 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M14.5 2C14.5 5 16.5 6.5 18 6.5V9.5C16.5 9.5 15 9 14 8V14C14 16.76 11.76 19 9 19S4 16.76 4 14 6.24 9 9 9V12C7.9 12 7 12.9 7 14S7.9 16 9 16 11 15.1 11 14V2H14.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <rect x="1" y="1" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 5L14 8L9 11V5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "#",
    icon: (
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
        <path
          d="M18.59 1.5C17.2 0.84 15.72 0.36 14.17 0.09C13.97 0.45 13.73 0.93 13.56 1.32C11.91 1.07 10.27 1.07 8.64 1.32C8.47 0.93 8.22 0.45 8.02 0.09C6.47 0.36 4.98 0.84 3.59 1.5C0.73 5.95 -0.03 10.28 0.35 14.55C2.2 15.94 3.99 16.79 5.75 17.35C6.19 16.74 6.58 16.09 6.92 15.41C6.27 15.16 5.65 14.85 5.06 14.48C5.22 14.36 5.37 14.24 5.52 14.12C9.31 15.88 13.41 15.88 17.17 14.12C17.32 14.24 17.47 14.36 17.63 14.48C17.04 14.85 16.42 15.16 15.77 15.41C16.11 16.09 16.5 16.74 16.94 17.35C18.71 16.79 20.5 15.94 22.33 14.55C22.79 9.59 21.54 5.3 18.59 1.5ZM7.56 11.97C6.5 11.97 5.63 10.99 5.63 9.79C5.63 8.59 6.48 7.61 7.56 7.61C8.64 7.61 9.51 8.59 9.49 9.79C9.49 10.99 8.64 11.97 7.56 11.97ZM14.13 11.97C13.07 11.97 12.2 10.99 12.2 9.79C12.2 8.59 13.05 7.61 14.13 7.61C15.21 7.61 16.08 8.59 16.06 9.79C16.06 10.99 15.21 11.97 14.13 11.97Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <section id="tu-van" className="relative z-10 py-24 px-8 bg-deep">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative eye */}
        <div className="reveal flex justify-center mb-8" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" stroke="#d4a853" strokeWidth="0.6" opacity="0.3" />
            <circle cx="24" cy="24" r="13" stroke="#7c6fd4" strokeWidth="0.6" opacity="0.4" />
            <ellipse cx="24" cy="24" rx="13" ry="8" stroke="#a89ee0" strokeWidth="0.5" opacity="0.35" />
            <circle cx="24" cy="24" r="4.5" fill="#5b4db8" opacity="0.8" />
            <circle cx="25.5" cy="22.5" r="1.5" fill="#e8e4ff" fillOpacity="0.8" />
          </svg>
        </div>

        <span className="reveal font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
          Cộng đồng
        </span>
        <h2 className="reveal font-display text-3xl md:text-4xl tracking-wide text-star mb-4">
          Kết Nối Với Panharmon
        </h2>
        <p className="reveal font-body text-base text-lavender leading-relaxed mb-12 max-w-lg mx-auto">
          Theo dõi chúng tôi để khám phá những bí ẩn mới nhất về thế giới giấc mơ,
          tâm linh và tiềm thức.
        </p>

        {/* Social links */}
        <div className="reveal flex items-center justify-center gap-4 mb-14">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="w-11 h-11 flex items-center justify-center border border-veil text-iris hover:border-gold hover:text-gold transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="reveal flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-veil/60" />
          <span className="font-mono text-xs text-iris tracking-widest uppercase">hoặc</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-veil/60" />
        </div>

        {/* Email subscribe */}
        <div className="reveal">
          <h3 className="font-display text-lg tracking-wide text-star mb-2">
            Đăng Ký Nhận Bản Tin Huyền Bí
          </h3>
          <p className="font-body text-sm text-lavender mb-6">
            Mỗi tuần một chủ đề: biểu tượng, tâm linh, khoa học giấc mơ
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-3 py-4 border border-gold/30 bg-abyss/60">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#d4a853" strokeWidth="0.7" />
                <path d="M5 8L7 10L11 6" stroke="#d4a853" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-mono text-xs tracking-widest text-gold uppercase">
                Đã đăng ký thành công
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                className="flex-1 bg-void/60 border border-veil border-r-0 text-ghost font-body text-base px-5 py-3.5 outline-none focus:border-iris/60 placeholder:text-lavender/30 transition-colors duration-200"
              />
              <button
                type="submit"
                className="font-mono text-xs tracking-widest uppercase bg-gold text-void px-6 py-3.5 hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
              >
                Đăng ký
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
