import type { Metadata } from 'next'
import AdminSidebar from '@/components/admin/AdminSidebar'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: { default: 'Admin — Panharmon', template: '%s | Admin' },
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-void text-ghost">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
    </div>
  )
}
