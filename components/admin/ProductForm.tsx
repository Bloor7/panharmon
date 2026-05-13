'use client'

import { useTransition, useState } from 'react'
import type { DbProduct } from '@/types/product'

interface ProductFormProps {
  product?: DbProduct
  action: (formData: FormData) => Promise<void>
  submitLabel?: string
  onDelete?: () => Promise<void>
}

const inputClass =
  'w-full bg-void/60 border border-veil text-ghost font-mono text-sm px-4 py-2.5 outline-none focus:border-iris/70 placeholder:text-lavender/20 transition-colors duration-200'

const labelClass = 'font-mono text-[10px] tracking-widest text-iris uppercase block mb-1.5'

export default function ProductForm({ product, action, submitLabel = 'Lưu', onDelete }: ProductFormProps) {
  const [isPending, startTransition] = useTransition()
  const [isDeleting, setIsDeleting] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    startTransition(() => action(fd))
  }

  async function handleDelete() {
    if (!onDelete) return
    if (!confirm('Xóa sản phẩm này?')) return
    setIsDeleting(true)
    await onDelete()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Tên sản phẩm *</label>
          <input name="name" required defaultValue={product?.name} placeholder="Giải Mã AI" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Slug *</label>
          <input name="slug" required defaultValue={product?.slug} placeholder="giai-ma-ai" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Mô tả</label>
        <textarea name="description" rows={2} defaultValue={product?.description} className={`${inputClass} resize-none`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Giá</label>
          <input name="price" defaultValue={product?.price ?? '0đ'} placeholder="99.000đ" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Kỳ hạn</label>
          <input name="period" defaultValue={product?.period ?? ''} placeholder="/tháng" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Badge</label>
          <input name="badge" defaultValue={product?.badge ?? ''} placeholder="Phổ biến" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Tính năng (mỗi dòng 1 tính năng)</label>
        <textarea
          name="features"
          rows={5}
          defaultValue={product?.features?.join('\n')}
          placeholder="Phân tích AI không giới hạn&#10;Báo cáo tâm lý chi tiết"
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Trạng thái</label>
          <select name="status" defaultValue={product?.status ?? 'draft'} className={`${inputClass} appearance-none`}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Featured</label>
          <select name="featured" defaultValue={product?.featured ? 'true' : 'false'} className={`${inputClass} appearance-none`}>
            <option value="false">Không</option>
            <option value="true">Có</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Thứ tự</label>
          <input name="sort_order" type="number" defaultValue={product?.sort_order ?? 0} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>CTA Text</label>
          <input name="cta_text" defaultValue={product?.cta_text ?? ''} placeholder="Bắt đầu ngay" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>CTA Link</label>
          <input name="cta_href" defaultValue={product?.cta_href ?? ''} placeholder="/#giai-ma" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Thumbnail URL</label>
        <input name="thumbnail_url" type="url" defaultValue={product?.thumbnail_url ?? ''} placeholder="https://..." className={inputClass} />
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-veil/40">
        <button
          type="submit"
          disabled={isPending}
          className="font-mono text-xs tracking-[0.2em] uppercase bg-gold text-void px-8 py-3 hover:bg-gold-light transition-colors disabled:opacity-50"
        >
          {isPending ? 'Đang lưu...' : submitLabel}
        </button>

        {onDelete && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="font-mono text-xs tracking-wider uppercase text-red-400/60 hover:text-red-400 transition-colors disabled:opacity-50"
          >
            {isDeleting ? 'Đang xóa...' : 'Xóa sản phẩm'}
          </button>
        )}
      </div>
    </form>
  )
}
