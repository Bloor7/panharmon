import Link from "next/link";

export default function HeroSection() {
  const ringsSizes = [680, 540, 400, 280, 180, 100];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
      {/* Concentric rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {ringsSizes.map((size, i) => (
          <div
            key={size}
            className="absolute top-1/2 left-1/2 rounded-full border border-iris/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginLeft: `${-size / 2}px`,
              marginTop: `${-size / 2}px`,
              animation: `ring-pulse ${4.5 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.45}s`,
            }}
          />
        ))}
        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-void/60 to-void" />
      </div>

      {/* Eye of Providence */}
      <div
        className="relative z-10 mb-8"
        style={{ animation: "float 7s ease-in-out infinite" }}
        aria-hidden="true"
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer glow ring */}
          <circle cx="45" cy="45" r="40" stroke="#d4a853" strokeWidth="0.5" opacity="0.2" />
          {/* Triangle */}
          <polygon
            points="45,10 80,70 10,70"
            stroke="#d4a853"
            strokeWidth="0.9"
            fill="none"
            opacity="0.75"
          />
          {/* Inner triangle glow */}
          <polygon
            points="45,18 72,66 18,66"
            stroke="#d4a853"
            strokeWidth="0.3"
            fill="none"
            opacity="0.25"
          />
          {/* Eye white */}
          <ellipse cx="45" cy="46" rx="16" ry="10" stroke="#a89ee0" strokeWidth="0.7" fill="none" opacity="0.7" />
          {/* Iris */}
          <circle cx="45" cy="46" r="7" fill="#3d3580" opacity="0.9" />
          <circle cx="45" cy="46" r="5.5" stroke="#7c6fd4" strokeWidth="0.6" fill="none" opacity="0.8" />
          {/* Pupil */}
          <circle cx="45" cy="46" r="3" fill="#07050f" />
          {/* Highlight */}
          <circle cx="47" cy="44" r="1.6" fill="#e8e4ff" fillOpacity="0.85" />
          {/* Rays */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 45 + Math.cos(angle) * 22;
            const y1 = 46 + Math.sin(angle) * 14;
            const x2 = 45 + Math.cos(angle) * 28;
            const y2 = 46 + Math.sin(angle) * 18;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#d4a853"
                strokeWidth="0.5"
                opacity="0.35"
              />
            );
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="reveal font-mono text-xs tracking-[0.25em] text-gold uppercase mb-5">
          Khám phá · Giải mã · Thức tỉnh
        </p>

        <h1 className="reveal font-display text-4xl md:text-6xl tracking-wide text-star mb-6 leading-tight max-w-2xl">
          Giải Mã Ngôn Ngữ<br />
          Bí Ẩn Của Giấc Mơ
        </h1>

        <p className="reveal font-body text-xl text-lavender max-w-lg mb-10 leading-relaxed opacity-85">
          Mỗi giấc mơ là một thông điệp từ tiềm thức.
          Panharmon giúp bạn lắng nghe và hiểu những gì
          tâm trí đang cố nói.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="#giai-ma"
            className="font-mono text-xs tracking-widest uppercase bg-gold text-void px-8 py-3.5 hover:bg-gold-light transition-colors duration-300"
          >
            Bắt đầu miễn phí
          </Link>
          <Link
            href="#gioi-thieu"
            className="font-mono text-xs tracking-widest uppercase border border-iris text-lavender px-8 py-3.5 hover:border-gold hover:text-gold transition-all duration-300"
          >
            Tìm hiểu thêm
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "scroll-bounce 2.5s ease-in-out infinite" }}
        aria-hidden="true"
      >
        <span className="font-mono text-xs tracking-widest text-iris uppercase">Cuộn xuống</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <path
            d="M7 3 L7 19 M3 15 L7 19 L11 15"
            stroke="#a89ee0"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
