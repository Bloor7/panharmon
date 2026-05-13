'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: '◈' },
  { label: 'Bài viết', href: '/admin/posts', icon: '✦' },
  { label: 'Sản phẩm', href: '/admin/products', icon: '⬡' },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="w-56 shrink-0 flex flex-col border-r border-veil/40 bg-void min-h-screen">
      {/* Brand */}
      <div className="px-6 py-6 border-b border-veil/40">
        <Link href="/" className="flex items-center gap-2 group" target="_blank">
          <svg width="22" height="22" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <circle cx="17" cy="17" r="15" stroke="#d4a853" strokeWidth="0.8" opacity="0.5" />
            <circle cx="17" cy="17" r="4" fill="#5b4db8" opacity="0.85" />
          </svg>
          <span className="font-mono text-xs tracking-[0.2em] text-star">PANHARMON</span>
        </Link>
        <p className="font-mono text-[10px] text-iris mt-1 tracking-wider">CMS Admin</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1 list-none m-0 p-0">
          {navItems.map(({ label, href, icon }) => {
            const isActive = href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 font-mono text-xs tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-abyss text-gold border border-veil/60'
                      : 'text-iris hover:text-lavender hover:bg-abyss/50'
                  }`}
                >
                  <span className="text-base opacity-70">{icon}</span>
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-veil/40">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 font-mono text-xs tracking-wider text-iris hover:text-lavender transition-colors duration-200 mb-1"
          target="_blank"
        >
          <span className="opacity-70">↗</span>
          Xem trang
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 font-mono text-xs tracking-wider text-iris hover:text-gold transition-colors duration-200 text-left"
        >
          <span className="opacity-70">→</span>
          Đăng xuất
        </button>
      </div>
    </aside>
  )
}
