import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllProducts } from '@/lib/db/products'

export const metadata: Metadata = { title: 'Sản phẩm' }
export const dynamic = 'force-dynamic'

export default async function AdminProductsPage() {
  const products = await getAllProducts().catch(() => [])

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl tracking-wide text-star mb-1">Sản phẩm</h1>
          <p className="font-mono text-xs text-iris tracking-wider">{products.length} sản phẩm</p>
        </div>
        <Link
          href="/admin/products/new"
          className="font-mono text-xs tracking-[0.2em] uppercase bg-gold text-void px-6 py-2.5 hover:bg-gold-light transition-colors"
        >
          + Sản phẩm mới
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 border border-veil/40">
          <p className="font-body text-lavender mb-4">Chưa có sản phẩm nào.</p>
          <Link href="/admin/products/new" className="font-mono text-xs text-iris hover:text-gold transition-colors tracking-wider">
            Tạo sản phẩm đầu tiên →
          </Link>
        </div>
      ) : (
        <div className="border border-veil divide-y divide-veil/60">
          <div className="grid grid-cols-12 gap-4 px-5 py-3 bg-abyss/60">
            <span className="col-span-4 font-mono text-[10px] tracking-widest text-iris uppercase">Tên</span>
            <span className="col-span-2 font-mono text-[10px] tracking-widest text-iris uppercase">Giá</span>
            <span className="col-span-2 font-mono text-[10px] tracking-widest text-iris uppercase">Featured</span>
            <span className="col-span-2 font-mono text-[10px] tracking-widest text-iris uppercase">Trạng thái</span>
            <span className="col-span-2" />
          </div>
          {products.map(product => (
            <div key={product.id} className="grid grid-cols-12 gap-4 px-5 py-4 items-center hover:bg-abyss/30 transition-colors">
              <div className="col-span-4">
                <p className="font-body text-sm text-star">{product.name}</p>
                <p className="font-mono text-[10px] text-lavender/40 tracking-wider">{product.slug}</p>
              </div>
              <div className="col-span-2">
                <span className="font-mono text-xs text-gold">{product.price}</span>
                <span className="font-mono text-[10px] text-iris ml-1">{product.period}</span>
              </div>
              <div className="col-span-2">
                <span className="font-mono text-[10px] text-iris">{product.featured ? '★ Yes' : '—'}</span>
              </div>
              <div className="col-span-2">
                <span className={`font-mono text-[10px] tracking-widest uppercase border px-2 py-0.5 ${
                  product.status === 'published' ? 'border-teal/40 text-teal' : 'border-veil text-iris'
                }`}>
                  {product.status}
                </span>
              </div>
              <div className="col-span-2 flex justify-end gap-3">
                <Link href={`/admin/products/${product.id}/edit`} className="font-mono text-[10px] text-iris hover:text-gold transition-colors uppercase tracking-wider">
                  Sửa
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
