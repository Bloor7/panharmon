const runes = [
  { symbol: "ψ", label: "Tâm lý", top: "12%", left: "10%" },
  { symbol: "☽", label: "Tâm linh", top: "8%", right: "10%" },
  { symbol: "∞", label: "Tiềm thức", bottom: "15%", left: "8%" },
  { symbol: "◈", label: "Ký hiệu", bottom: "10%", right: "10%" },
  { symbol: "⊕", label: "Vũ trụ", top: "45%", left: "2%" },
  { symbol: "◊", label: "Tinh thần", top: "40%", right: "2%" },
];

const stats = [
  { value: "10,000+", label: "Người dùng" },
  { value: "500+", label: "Biểu tượng" },
  { value: "98%", label: "Hài lòng" },
];

export default function IntroSection() {
  return (
    <section id="gioi-thieu" className="py-28 px-8 bg-deep relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Visual column */}
        <div className="reveal relative h-80 md:h-96 flex items-center justify-center order-2 md:order-1">
          {/* Floating runes */}
          {runes.map((rune, i) => (
            <span
              key={i}
              className="absolute font-display text-xs text-gold/60 select-none"
              style={{
                top: rune.top,
                left: (rune as { left?: string }).left,
                right: (rune as { right?: string }).right,
                bottom: rune.bottom,
                animation: `float-rune ${3.5 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            >
              <span className="text-lg">{rune.symbol}</span>
              <span className="block text-[10px] tracking-widest opacity-70 font-mono">{rune.label}</span>
            </span>
          ))}

          {/* Outer orbit ring */}
          <div
            className="absolute w-72 h-72 rounded-full border border-mist/30"
            style={{ animation: "rotate-slow 30s linear infinite" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/60" />
          </div>

          {/* Inner orbit ring */}
          <div
            className="absolute w-52 h-52 rounded-full border border-iris/20"
            style={{ animation: "rotate-reverse 20s linear infinite" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal/70" />
          </div>

          {/* Brain circle */}
          <div className="relative w-40 h-40 rounded-full border border-veil flex items-center justify-center bg-abyss/50">
            <span
              className="font-display text-7xl text-iris/25 select-none"
              style={{ animation: "float 8s ease-in-out infinite" }}
            >
              ꩜
            </span>
            <div className="absolute inset-0 rounded-full bg-radial-[ellipse_at_center] from-purple/10 to-transparent" />
          </div>
        </div>

        {/* Text column */}
        <div className="order-1 md:order-2">
          <span className="reveal font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
            Khoa học & Tâm linh
          </span>

          <h2 className="reveal font-display text-3xl md:text-4xl tracking-wide text-star mb-6 leading-tight">
            Giấc mơ là cánh cửa<br />
            <em className="text-gold not-italic">dẫn đến linh hồn</em>
          </h2>

          <p className="reveal font-body text-base text-lavender leading-relaxed mb-4 opacity-85">
            Từ nghiên cứu của Carl Jung đến truyền thống mộng triệu phương Đông —
            giấc mơ chưa bao giờ chỉ là những hình ảnh ngẫu nhiên. Mỗi biểu tượng,
            mỗi màu sắc, mỗi cảm xúc đều mang thông điệp từ tầng sâu nhất của tâm trí.
          </p>

          <p className="reveal font-body text-sm text-lavender/65 italic leading-relaxed mb-8">
            Panharmon là chiếc chìa khóa được rèn từ tri thức cổ đại và công nghệ
            hiện đại, để bạn tự mình mở cánh cửa đó.
          </p>

          {/* Stats */}
          <div className="reveal grid grid-cols-3 gap-4 pt-6 border-t border-veil/40">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl text-gold mb-1">{stat.value}</div>
                <div className="font-mono text-xs tracking-widest text-iris uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
