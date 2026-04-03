"use client";

import { useState, type FormEvent } from "react";

const dreamTypes = [
  "Không rõ",
  "Ác mộng",
  "Giấc mơ đẹp",
  "Mơ tiên tri",
  "Giấc mơ lặp lại",
  "Mơ bay",
  "Mơ về người thân",
];

const timePeriods = [
  "Không rõ",
  "Đêm khuya (0h–3h)",
  "Gần sáng (3h–6h)",
  "Sáng sớm (6h–9h)",
  "Giấc ngủ trưa",
];

const inputClass =
  "w-full bg-void/60 border border-veil text-ghost font-body text-base px-4 py-3 outline-none focus:border-iris/70 placeholder:text-lavender/30 transition-colors duration-200";

const selectClass =
  "w-full bg-void/60 border border-veil text-lavender font-mono text-xs tracking-wider px-4 py-3 outline-none focus:border-iris/70 transition-colors duration-200 appearance-none";

export default function DecodeSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="giai-ma" className="relative z-10 py-24 px-8 bg-void">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="reveal font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
            Giải mã miễn phí
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl tracking-wide text-star mb-4">
            Giải Mã Giấc Mơ Của Bạn
          </h2>
          <p className="reveal font-body text-base text-lavender/75 leading-relaxed">
            Nhận phân tích chuyên sâu trong vòng 24 giờ — hoàn toàn miễn phí
          </p>
        </div>

        {submitted ? (
          <div className="reveal text-center py-16 border border-gold/30 bg-abyss/60">
            <div className="mb-6" aria-hidden="true">
              <svg className="mx-auto" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="22" stroke="#d4a853" strokeWidth="0.8" opacity="0.5" />
                <path d="M16 26L22 32L36 18" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-xl text-star mb-3">Đã nhận được giấc mơ của bạn</h3>
            <p className="font-body text-lavender/70 text-base leading-relaxed max-w-sm mx-auto">
              Aether đang phân tích các biểu tượng. Bạn sẽ nhận được kết quả qua email trong 24 giờ.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal flex flex-col gap-5 border border-veil/60 bg-deep/80 p-8 md:p-10"
          >
            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs tracking-widest text-lavender/60 uppercase">
                  Họ và tên
                </label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs tracking-widest text-lavender/60 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs tracking-widest text-lavender/60 uppercase">
                Mô tả giấc mơ
              </label>
              <textarea
                rows={6}
                placeholder="Hãy mô tả chi tiết giấc mơ bạn vừa trải qua — càng nhiều chi tiết, phân tích càng chính xác..."
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2 relative">
                <label className="font-mono text-xs tracking-widest text-lavender/60 uppercase">
                  Loại giấc mơ
                </label>
                <select required className={selectClass}>
                  {dreamTypes.map((t) => (
                    <option key={t} value={t} className="bg-abyss">
                      {t}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-4 bottom-3.5 pointer-events-none"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path d="M1 1L5 5L9 1" stroke="#a89ee0" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="font-mono text-xs tracking-widest text-lavender/60 uppercase">
                  Thời điểm xuất hiện
                </label>
                <select required className={selectClass}>
                  {timePeriods.map((t) => (
                    <option key={t} value={t} className="bg-abyss">
                      {t}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-4 bottom-3.5 pointer-events-none"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path d="M1 1L5 5L9 1" stroke="#a89ee0" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 font-mono text-xs tracking-[0.2em] uppercase bg-gold text-void px-8 py-4 hover:bg-gold-light transition-colors duration-300 self-stretch"
            >
              Gửi yêu cầu giải mã
            </button>

            <p className="font-mono text-xs text-lavender/40 text-center tracking-wider">
              Thông tin của bạn được bảo mật tuyệt đối
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
