export default function IntroSection() {

    return (
        <section className="grid grid-cols-2 gap-20 items-center max-w-6xl mx-auto px-15 py-25">
            <div className="relative h-96 flex items-center justify-center">
                <span className="absolute top-12 left-12 font-display text-sm text-gold opacity-50">ψ Tâm lý</span>
                <span className="absolute top-15 right-12 font-display text-sm text-gold opacity-50">☽ Tâm linh</span>
                <span className="absolute bottom-12 left-10 font-display text-sm text-gold opacity-50">∞ Tiềm thức</span>
                <span className="absolute bottom-12 right-12 font-display text-sm text-gold opacity-50">◈ Ký hiệu</span>
                <div className="w-70 h-70 rounded-full border border-mist flex items-center justify-center">
                    <span className="font-display text-6xl text-iris opacity-30">꩜</span>
                </div>
            </div>

            <div>
                <span className="font-mono text-xs tracking-widest text-gold uppercase">Khoa học & Tâm linh</span>
                <h2 className="font-display text-4xl tracking-wide text-star my-4">Giấc mơ là cánh cửa <br/> <em className="text-gold">dẫn đến linh hồn</em></h2>
                <p className=" text-sm text-lavender tracking-widest leading-relaxed">Từ nghiên cứu của Carl Jung đến truyền thống mộng triệu phương Đông — giấc mơ chưa bao giờ chỉ là những hình ảnh ngẫu nhiên. Mỗi biểu tượng, mỗi màu sắc, mỗi cảm xúc trong giấc mơ đều mang thông điệp từ tầng sâu nhất của tâm trí bạn.</p>
                <p className=" text-sm text-lavender italic opacity-65 mt-5 leading-relaxed">Panharmon là chiếc chìa khóa được rèn từ tri thức cổ đại và công nghệ hiện đại, để bạn tự mình mở cánh cửa đó.</p>
            </div>
        </section>
    )
}