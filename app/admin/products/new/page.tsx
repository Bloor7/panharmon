import type { Metadata } from 'next'
import Link from 'next/link'
import ProductForm from '@/components/admin/ProductForm'
import { createProductAction } from '../actions'

export const metadata: Metadata = { title: 'Sản phẩm mới' }

export default function NewProductPage() {
  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/products" className="font-mono text-[10px] text-iris hover:text-gold transition-colors tracking-wider uppercase">
          ← Sản phẩm
        </Link>
        <span className="text-veil">/</span>
        <h1 className="font-display text-xl tracking-wide text-star">Sản phẩm mới</h1>
      </div>

      <ProductForm action={createProductAction} submitLabel="Tạo sản phẩm" />
    </div>
  )
}
