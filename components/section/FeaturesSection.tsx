import type { ReactNode } from "react";


export default function FeaturesSection() {

    const features : { name: string; desc: string; icon: ReactNode }[] = [
        {
            name: "Nhật ký giấc mơ",
            desc:"Ghi lại giấc mơ ngay khi thức dậy. Hệ thống lưu trữ thông minh phân loại biểu tượng, cảm xúc và chủ đề theo thời gian.",
            icon: (<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="26" cy="26" r="22" stroke="#d4a853" strokeWidth="1" /><ellipse cx="26" cy="26" rx="10" ry="6.5" stroke="#7c6fd4" strokeWidth="1" /><circle cx="26" cy="26" r="5" fill="#5b4db8" fillOpacity="0.6" /><circle cx="28" cy="24" r="1.5" fill="#e8e4ff" fillOpacity="0.8" /></svg>),
        },
        {
            name: "AI Giải Mã",
            desc: "Trí tuệ nhân tạo được huấn luyện từ hàng nghìn biểu tượng tâm linh và tâm lý học, phân tích chiều sâu giấc mơ của bạn.",
            icon:(<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="26,6 46,17 46,35 26,46 6,35 6,17" stroke="#d4a853" strokeWidth="1" fill="none" /><polygon points="26,14 38,20 38,32 26,38 14,32 14,20" stroke="#7c6fd4" strokeWidth="0.5" fill="none" /><circle cx="26" cy="26" r="4" fill="#5b4db8" /></svg>)
        },
        {
            name: "Vòng tâm linh",
            desc: "Kết nối chu kỳ mặt trăng, trạng thái chakra và năng lượng ngày để hiểu sâu hơn tại sao giấc mơ xuất hiện vào thời điểm cụ thể.",
            icon:(<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 8 C16 8, 8 16, 8 26 C8 36, 16 44, 26 44 C36 44, 44 36, 44 26" stroke="#d4a853" strokeWidth="1" fill="none" /><path d="M26 8 C36 8, 44 16, 44 26" stroke="#7c6fd4" strokeWidth="1" fill="none" strokeDasharray="3,3" /><circle cx="26" cy="26" r="3" fill="#5b4db8" /><circle cx="26" cy="8" r="2" fill="#d4a853" /><circle cx="44" cy="26" r="2" fill="#d4a853" /></svg>)
        }
    ]


    return (
        <section className="text-center px-15 py-25 max-w-6xl mx-auto">
            <span className="font-mono text-xs tracking-widest text-gold uppercase mb-4 block">Cách hoạt động</span>
            <h2 className="font-display text-4xl tracking-wide text-star">Ba trụ cột của <em className="text-gold not-italic">Panharmon</em></h2>           

            <div className="grid grid-cols-3 gap-px mt-15">
                {features.map((feature, index) => (
                    <div key={index} className="relative group bg-deep border border-veil p-12 text-left hover:border-mist hover:bg-abyss transition-colors duration-300">
                        <div className="absolute top-0 left-0 right-0  h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        <div className="w-13 h-13 mb-7">{feature.icon}</div>
                        <div className="font-display text-base tracking-widest text-star mb-3">{feature.name}</div>
                        <p className="text-base text-lavender leading-relaxed opacity-80">{feature.desc}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}