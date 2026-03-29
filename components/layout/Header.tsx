import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed  top-0 left-0 right-0 z-50 px-16 py-5 flex items-center justify-between bg-void/95">
        
        <Link href="/" className="font-display text-xl tracking-widest text-star">Panharmon</Link>
        <ul className="flex gap-9 list-none">
            <li><Link className="font-mono text-xs tracking-widest uppercase text-lavander hover:text-gold opacity-70 hover:opacity-100 transition-colors" href="/giai-ma">Giải mã</Link></li>
            <li><Link className="font-mono text-xs tracking-widest uppercase text-lavander hover:text-gold opacity-70 hover:opacity-100 transition-colors" href="/san-pham">Sản phẩm</Link></li>
            <li><Link className="font-mono text-xs tracking-widest uppercase text-lavander hover:text-gold opacity-70 hover:opacity-100 transition-colors" href="/bai-viet">Bài viết</Link></li>
            <li><Link className="font-mono text-xs tracking-widest uppercase text-lavander hover:text-gold opacity-70 hover:opacity-100 transition-colors" href="/tu-van">Tư vấn</Link></li>
        </ul>
        <button className="font-mono text-xs tracking-widest uppercase bg-gold text-void px-6 py-2.5 hover:bg-gold-light transtion-colors">Bắt Đầu</button>
        
    </header>
  );
}