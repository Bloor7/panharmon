import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductForm from '@/components/admin/ProductForm'
import { getProductById } from '@/lib/db/products'
import { updateProductAction, deleteProductAction } from '../../actions'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = await getProductById(id)
  return { title: product ? `Sửa: ${product.name}` : 'Sản phẩm' }
}

export const dynamic = 'force-dynamic'

export default async function EditProductPage({ params }: Props) {
  const { id } = await params
  const product = await getProductById(id)
  if (!product) notFound()

  const updateWithId = updateProductAction.bind(null, id)
  const deleteWithId = deleteProductAction.bind(null, id)

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/products" className="font-mono text-[10px] text-iris hover:text-gold transition-colors tracking-wider uppercase">
          ← Sản phẩm
        </Link>
        <span className="text-veil">/</span>
        <h1 className="font-display text-xl tracking-wide text-star">{product.name}</h1>
      </div>

      <ProductForm
        product={product}
        action={updateWithId}
        submitLabel="Cập nhật"
        onDelete={deleteWithId}
      />
    </div>
  )
}
