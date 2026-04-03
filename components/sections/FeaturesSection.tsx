import type { ReactNode } from "react";

const features: { name: string; desc: string; icon: ReactNode }[] = [
  {
    name: "Nhật Ký Giấc Mơ",
    desc: "Ghi lại giấc mơ ngay khi thức dậy. Hệ thống lưu trữ thông minh phân loại biểu tượng, cảm xúc và chủ đề theo dòng thời gian.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="26" r="21" stroke="#d4a853" strokeWidth="0.9" opacity="0.7" />
        <circle cx="26" cy="26" r="14" stroke="#7c6fd4" strokeWidth="0.7" opacity="0.5" />
        <ellipse cx="26" cy="26" rx="14" ry="8" stroke="#a89ee0" strokeWidth="0.6" opacity="0.4" />
        <circle cx="26" cy="26" r="5.5" fill="#5b4db8" opacity="0.75" />
        <circle cx="27.8" cy="24.2" r="1.8" fill="#e8e4ff" fillOpacity="0.8" />
      </svg>
    ),
  },
  {
    name: "AI Giải Mã",
    desc: "Trí tuệ nhân tạo được huấn luyện từ hàng nghìn biểu tượng tâm linh và tâm lý học, phân tích chiều sâu giấc mơ của bạn.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="26,5 48,18 48,34 26,47 4,34 4,18" stroke="#d4a853" strokeWidth="0.9" fill="none" opacity="0.7" />
        <polygon points="26,13 40,20.5 40,31.5 26,39 12,31.5 12,20.5" stroke="#7c6fd4" strokeWidth="0.6" fill="none" opacity="0.5" />
        <circle cx="26" cy="26" r="5" fill="#5b4db8" opacity="0.85" />
        <line x1="26" y1="5" x2="26" y2="13" stroke="#d4a853" strokeWidth="0.5" opacity="0.4" />
        <line x1="48" y1="18" x2="40" y2="20.5" stroke="#d4a853" strokeWidth="0.5" opacity="0.4" />
        <line x1="48" y1="34" x2="40" y2="31.5" stroke="#d4a853" strokeWidth="0.5" opacity="0.4" />
        <line x1="26" y1="47" x2="26" y2="39" stroke="#d4a853" strokeWidth="0.5" opacity="0.4" />
        <line x1="4" y1="34" x2="12" y2="31.5" stroke="#d4a853" strokeWidth="0.5" opacity="0.4" />
        <line x1="4" y1="18" x2="12" y2="20.5" stroke="#d4a853" strokeWidth="0.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Vòng Tâm Linh",
    desc: "Kết nối chu kỳ mặt trăng, trạng thái chakra và năng lượng ngày để hiểu sâu hơn tại sao giấc mơ xuất hiện vào thời điểm cụ thể.",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 6 C14 6, 6 14, 6 26 C6 38, 14 46, 26 46 C38 46, 46 38, 46 26" stroke="#d4a853" strokeWidth="0.9" fill="none" opacity="0.7" />
        <path d="M26 6 C38 6, 46 14, 46 26" stroke="#7c6fd4" strokeWidth="0.9" fill="none" strokeDasharray="3,3" opacity="0.5" />
        <circle cx="26" cy="26" r="4" fill="#5b4db8" opacity="0.85" />
        <circle cx="26" cy="6" r="2.5" fill="#d4a853" opacity="0.8" />
        <circle cx="46" cy="26" r="2.5" fill="#d4a853" opacity="0.8" />
        <circle cx="26" cy="46" r="2" fill="#7c6fd4" opacity="0.6" />
        <circle cx="6" cy="26" r="2" fill="#7c6fd4" opacity="0.6" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative z-10 py-24 px-8 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="reveal font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
            Cách hoạt động
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl tracking-wide text-star">
            Ba trụ cột của{" "}
            <em className="text-gold not-italic">Panharmon</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-veil/20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal relative group bg-deep border border-veil p-10 md:p-12 text-left hover:border-mist hover:bg-abyss transition-all duration-400"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Top shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="w-12 h-12 mb-8">{feature.icon}</div>

              <h3 className="font-display text-sm tracking-widest text-star mb-3">
                {feature.name}
              </h3>
              <p className="font-body text-base text-lavender leading-relaxed opacity-80">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
