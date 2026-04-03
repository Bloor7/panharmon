const featured = {
  slug: "bieu-tuong-con-ran",
  category: "Biểu tượng học",
  date: "15 Tháng 3, 2024",
  title: "Biểu Tượng Con Rắn: Ý Nghĩa Ẩn Sâu Trong Giấc Mơ",
  excerpt:
    "Con rắn trong giấc mơ là một trong những biểu tượng phức tạp và đa tầng nghĩa nhất. Từ sự tái sinh trong thần thoại Hy Lạp đến biểu tượng Kundalini trong yoga, con rắn mang thông điệp về sự biến đổi nội tâm và năng lượng tiềm ẩn.",
  readTime: "8 phút đọc",
  gradient: "from-purple/20 via-abyss to-void",
};

const articles = [
  {
    slug: "giac-mo-ve-nuoc",
    category: "Tâm lý học",
    date: "10 Tháng 3, 2024",
    title: "Giấc Mơ Về Nước Và Cảm Xúc Tiềm Ẩn",
    readTime: "5 phút",
    gradient: "from-teal-dim/20 to-abyss",
  },
  {
    slug: "giac-mo-bay",
    category: "Tâm linh",
    date: "5 Tháng 3, 2024",
    title: "Ý Nghĩa Của Việc Bay Trong Giấc Mơ",
    readTime: "4 phút",
    gradient: "from-iris/20 to-abyss",
  },
  {
    slug: "carl-jung-giac-mo",
    category: "Khoa học",
    date: "28 Tháng 2, 2024",
    title: "Carl Jung Và Lý Thuyết Giấc Mơ Tập Thể",
    readTime: "6 phút",
    gradient: "from-gold/10 to-abyss",
  },
];

export default function ArticlesSection() {
  return (
    <section id="bai-viet" className="relative z-10 py-24 px-8 bg-deep">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="reveal font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
            Kiến thức
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl tracking-wide text-star">
            Khám phá{" "}
            <em className="text-gold not-italic">thư viện mộng triệu</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Featured article */}
          <article className="reveal md:col-span-3 group relative border border-veil hover:border-iris/50 bg-abyss/50 transition-all duration-400 flex flex-col">
            {/* Image placeholder */}
            <div className={`relative h-52 bg-gradient-to-br ${featured.gradient} overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.3">
                  <path d="M32 8 C18 8, 8 18, 8 32 S18 56 32 56 S56 46 56 32" stroke="#d4a853" strokeWidth="1" fill="none" />
                  <ellipse cx="32" cy="32" rx="16" ry="10" stroke="#7c6fd4" strokeWidth="0.7" fill="none" />
                  <circle cx="32" cy="32" r="5" fill="#5b4db8" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-abyss to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-xs tracking-widest text-gold/80 uppercase">{featured.category}</span>
                <span className="font-mono text-xs text-lavender/40">{featured.date}</span>
              </div>
              <h3 className="font-display text-xl tracking-wide text-star mb-3 leading-snug group-hover:text-gold-light transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="font-body text-sm text-lavender/70 leading-relaxed mb-6 flex-1">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-lavender/40">{featured.readTime}</span>
                <span className="font-mono text-xs tracking-widest text-iris group-hover:text-gold uppercase transition-colors duration-300">
                  Đọc tiếp →
                </span>
              </div>
            </div>
          </article>

          {/* Small articles */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {articles.map((article, i) => (
              <article
                key={article.slug}
                className="reveal group relative border border-veil hover:border-iris/50 bg-abyss/50 transition-all duration-400 flex gap-4 p-5"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Mini image */}
                <div className={`w-20 h-20 shrink-0 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity="0.4">
                      <circle cx="14" cy="14" r="10" stroke="#d4a853" strokeWidth="0.7" fill="none" />
                      <circle cx="14" cy="14" r="4" fill="#5b4db8" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <span className="font-mono text-xs tracking-widest text-gold/70 uppercase block mb-1">
                      {article.category}
                    </span>
                    <h3 className="font-display text-sm tracking-wide text-star leading-snug group-hover:text-gold-light transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-xs text-lavender/40">{article.readTime}</span>
                    <span className="font-mono text-xs text-iris group-hover:text-gold transition-colors duration-300">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View all */}
        <div className="reveal text-center mt-12">
          <button className="font-mono text-xs tracking-[0.2em] uppercase border border-iris/50 text-lavender px-8 py-3 hover:border-gold hover:text-gold transition-all duration-300">
            Xem tất cả bài viết
          </button>
        </div>
      </div>
    </section>
  );
}
