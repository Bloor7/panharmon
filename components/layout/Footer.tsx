import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" bottom-0 right-0 left-0 z-50 flex items-center justify-between bg-void/70 px-16 py-16">
            <div className="font-display text-xl tracking-wider text-start">PANHARMON</div>
            <p className="font-mono text-xs tracking-widest ">&copy; 2023 Panharmon. All rights reserved.</p>
            <div className="flex gap-6 justify-end">
                <Link className="font-mono text-xs tracking-widest text-lavender opacity-70 hover:opacity-100 transition-opacity" href="/bao-mat">Bảo mật</Link>
                <Link className="font-mono text-xs tracking-widest text-lavender opacity-70 hover:opacity-100 transition-opacity" href="/dieu-khoan">Điều khoản</Link>
                <Link className="font-mono text-xs tracking-widest text-lavender opacity-70 hover:opacity-100 transition-opacity" href="/lien-he">Liên hệ</Link>
            </div>
        </footer>
    )
}
