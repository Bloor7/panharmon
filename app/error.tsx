"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      {/* Decorative — fractured ring */}
      <div className="relative mb-12 flex items-center justify-center">
        <div
          className="w-40 h-40 rounded-full border border-veil opacity-50"
          style={{ animation: "rotate-slow 20s linear infinite" }}
        />
        <div
          className="absolute w-28 h-28 rounded-full border border-mist opacity-30"
          style={{ animation: "rotate-reverse 14s linear infinite" }}
        />
        <svg
          className="absolute"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          aria-hidden="true"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <circle cx="18" cy="18" r="16" stroke="#2d2660" strokeWidth="1" />
          <path
            d="M18 8V18L24 24"
            stroke="#d4a853"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
          <circle cx="18" cy="18" r="2" fill="#d4a853" opacity="0.8" />
        </svg>
      </div>

      {/* Label */}
      <p className="font-mono text-xs tracking-[0.3em] text-iris uppercase mb-5">
        Đã xảy ra lỗi
      </p>

      <h1 className="font-display text-2xl md:text-3xl text-star mb-4 leading-snug">
        Panharmon đang gặp chút trục trặc
      </h1>

      <p className="font-body text-lg text-lavender max-w-sm leading-relaxed mb-10">
        Chúng tôi sẽ sớm khắc phục. Bạn có thể thử lại hoặc quay về trang chủ trong lúc chờ đợi.
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-10 opacity-30">
        <div className="h-px w-16 bg-veil" />
        <span className="font-mono text-xs text-iris">✦</span>
        <div className="h-px w-16 bg-veil" />
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-void px-8 py-3 font-display text-xs tracking-widest uppercase transition-colors duration-300"
        >
          Thử lại
        </button>

        <button
          onClick={() => { window.location.href = "/"; }}
          className="inline-flex items-center gap-3 border border-veil hover:border-gold/60 text-lavender hover:text-ghost px-8 py-3 font-display text-xs tracking-widest uppercase transition-colors duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Trang chủ
        </button>
      </div>
    </div>
  );
}
