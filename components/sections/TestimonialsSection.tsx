const testimonials = [
  {
    quote:
      "Panharmon đã giúp tôi hiểu được những lo lắng sâu thẳm mà tôi không dám đối mặt. Mỗi giấc mơ giờ đây là một người bạn đồng hành dẫn tôi vào hành trình tự khám phá.",
    name: "Nguyễn Minh Châu",
    role: "Nhà tâm lý học",
    stars: 5,
  },
  {
    quote:
      "Tôi đã thử nhiều ứng dụng giải mã giấc mơ nhưng Panharmon là lần đầu tiên tôi cảm thấy được thực sự lắng nghe. AI ở đây tinh tế và sâu sắc một cách đáng kinh ngạc.",
    name: "Trần Bảo Ngọc",
    role: "Sinh viên đại học",
    stars: 5,
  },
  {
    quote:
      "Chu kỳ tâm linh trong Panharmon đã thay đổi cách tôi hiểu bản thân. Tôi bây giờ chủ động hơn trong việc phát triển nội tâm và kết nối với tiềm thức của mình.",
    name: "Lê Văn Thành",
    role: "Doanh nhân",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 py-24 px-8 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="reveal font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
            Cộng đồng nói gì
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl tracking-wide text-star">
            Những hành trình{" "}
            <em className="text-gold not-italic">thức tỉnh</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal relative group border border-veil hover:border-iris/40 bg-abyss/60 p-8 flex flex-col gap-5 transition-all duration-400"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Hover top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Quote mark */}
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                aria-hidden="true"
                className="opacity-40"
              >
                <path
                  d="M0 14C0 8.5 3.5 4 10.5 0L12 2.5C7.5 5 5.5 8 5.5 12H10.5V22H0V14ZM17 14C17 8.5 20.5 4 27.5 0L29 2.5C24.5 5 22.5 8 22.5 12H27.5V22H17V14Z"
                  fill="#d4a853"
                />
              </svg>

              {/* Quote text */}
              <p className="font-body text-base text-lavender/85 leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.stars} sao`}>
                {Array.from({ length: t.stars }, (_, si) => (
                  <svg key={si} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1L7.3 4.3H11L8.3 6.3L9.3 9.5L6 7.5L2.7 9.5L3.7 6.3L1 4.3H4.7L6 1Z"
                      fill="#d4a853"
                    />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-veil/40">
                <div className="font-display text-sm text-star tracking-wide">{t.name}</div>
                <div className="font-mono text-xs text-lavender/50 tracking-widest uppercase mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
