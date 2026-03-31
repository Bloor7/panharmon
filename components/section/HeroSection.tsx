
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-10">
      <p className="font-mono text-xs tracking-widest text-gold uppercase mb-5">Khám phá · Giải mã · Thức tỉnh </p>

      <h1 className="font-display text-5xl tracking-wide text-star mb-6 leading-tight">Giãi Mã Ngôn Ngữ <br />Bí Ẩn Của Giấc Mơ</h1>

      <p className="font-body text-lg text-lavender max-w-xl mb-10 leading-relaxed">
        Mỗi giấc mơ là một thông điệp từ tiềm thức. 
        Panharmon giúp bạn lắng nghe và hiểu những gì 
        tâm trí đang cố nói.
      </p>

      <div className="flex gap-4">
        <button className="font-mono text-xs tracking-widest uppercase bg-gold text-void px-8 py-3 hover:bg-gold-light transition-colors">Bắt đầu miễn phí</button>
        <button className="font-mono text-xs tracking-widest uppercase border border-iris px-8 py-3 hover:border-gold hover:text-gold transition-colors">Tìm hiểu thêm</button>
      </div>

    </section>
    
  );
}