const products = [
  {
    id: "free",
    name: "Nhật Ký Mơ",
    badge: "Miễn phí",
    badgeStyle: "bg-veil text-lavender border border-iris/40",
    price: "0đ",
    period: "",
    desc: "Bắt đầu hành trình khám phá giấc mơ của bạn",
    features: [
      "Nhật ký giấc mơ không giới hạn",
      "Tìm kiếm thư viện biểu tượng",
      "Phân tích cơ bản",
      "Ứng dụng mobile",
    ],
    cta: "Bắt đầu ngay",
    ctaStyle: "border border-iris text-lavender hover:border-gold hover:text-gold",
    featured: false,
  },
  {
    id: "ai",
    name: "Giải Mã AI",
    badge: "Phổ biến",
    badgeStyle: "bg-gold text-void",
    price: "99.000đ",
    period: "/tháng",
    desc: "Phân tích chuyên sâu bằng trí tuệ nhân tạo",
    features: [
      "Tất cả tính năng Nhật Ký",
      "Phân tích AI không giới hạn",
      "Báo cáo tâm lý chi tiết",
      "Theo dõi chu kỳ mặt trăng",
      "Xuất báo cáo PDF",
    ],
    cta: "Dùng thử 7 ngày",
    ctaStyle: "bg-gold text-void hover:bg-gold-light",
    featured: true,
  },
  {
    id: "spiritual",
    name: "Hội Đồng Tâm Linh",
    badge: "Premium",
    badgeStyle: "bg-purple/30 text-ghost border border-iris/60",
    price: "299.000đ",
    period: "/tháng",
    desc: "Trải nghiệm toàn diện kết hợp AI và chuyên gia",
    features: [
      "Tất cả tính năng Giải Mã AI",
      "Tư vấn trực tiếp với chuyên gia",
      "Khóa học tâm linh độc quyền",
      "Cộng đồng riêng tư",
      "Hỗ trợ ưu tiên 24/7",
    ],
    cta: "Liên hệ tư vấn",
    ctaStyle: "border border-iris/60 text-lavender hover:border-gold hover:text-gold",
    featured: false,
  },
];

export default function ProductsSection() {
  return (
    <section id="san-pham" className="relative z-10 py-24 px-8 bg-deep">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="reveal font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
            Gói dịch vụ
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl tracking-wide text-star">
            Chọn hành trình{" "}
            <em className="text-gold not-italic">phù hợp với bạn</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`reveal relative flex flex-col p-8 border transition-all duration-400 ${
                product.featured
                  ? "border-gold/60 bg-abyss"
                  : "border-veil bg-abyss/50 hover:border-mist"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Featured top line */}
              {product.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}

              {/* Badge */}
              <span className={`font-mono text-xs tracking-widest uppercase px-3 py-1 self-start mb-6 ${product.badgeStyle}`}>
                {product.badge}
              </span>

              {/* Name */}
              <h3 className="font-display text-xl tracking-wide text-star mb-2">{product.name}</h3>
              <p className="font-body text-sm text-lavender mb-6 leading-relaxed">{product.desc}</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-veil/40">
                <span className="font-display text-3xl text-gold">{product.price}</span>
                <span className="font-mono text-xs text-iris">{product.period}</span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 font-body text-sm text-lavender/80">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="mt-0.5 shrink-0"
                    >
                      <circle cx="7" cy="7" r="6" stroke="#d4a853" strokeWidth="0.7" opacity="0.6" />
                      <path d="M4 7L6 9L10 5" stroke="#d4a853" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`font-mono text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 ${product.ctaStyle}`}
              >
                {product.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
