'use client'

import { useTransition, useRef, useState } from 'react'
import type { DbPost } from '@/types/post'

interface PostFormProps {
  post?: DbPost
  action: (formData: FormData) => Promise<void>
  submitLabel?: string
  onDelete?: () => Promise<void>
}

const inputClass =
  'w-full bg-void/60 border border-veil text-ghost font-mono text-sm px-4 py-2.5 outline-none focus:border-iris/70 placeholder:text-lavender/20 transition-colors duration-200'

const labelClass = 'font-mono text-[10px] tracking-widest text-iris uppercase block mb-1.5'

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export default function PostForm({ post, action, submitLabel = 'Lưu', onDelete }: PostFormProps) {
  const [isPending, startTransition] = useTransition()
  const [isDeleting, setIsDeleting] = useState(false)
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [title, setTitle] = useState(post?.title ?? '')
  const formRef = useRef<HTMLFormElement>(null)

  function handleTitleChange(val: string) {
    setTitle(val)
    if (!post) setSlug(slugify(val))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    startTransition(() => action(fd))
  }

  async function handleDelete() {
    if (!onDelete) return
    if (!confirm('Xóa bài viết này? Hành động không thể hoàn tác.')) return
    setIsDeleting(true)
    await onDelete()
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label className={labelClass}>Tiêu đề *</label>
        <input
          name="title"
          type="text"
          required
          value={title}
          onChange={e => handleTitleChange(e.target.value)}
          placeholder="Tiêu đề bài viết..."
          className={inputClass}
        />
      </div>

      {/* Slug */}
      <div>
        <label className={labelClass}>Slug *</label>
        <input
          name="slug"
          type="text"
          required
          value={slug}
          onChange={e => setSlug(e.target.value)}
          placeholder="url-bai-viet"
          className={`${inputClass} font-mono`}
        />
        <p className="font-mono text-[10px] text-lavender/40 mt-1 tracking-wider">
          URL: /bai-viet/{slug || '...'}
        </p>
      </div>

      {/* Excerpt */}
      <div>
        <label className={labelClass}>Mô tả ngắn (excerpt)</label>
        <textarea
          name="excerpt"
          rows={2}
          defaultValue={post?.excerpt}
          placeholder="Mô tả ngắn hiển thị trong danh sách..."
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Content */}
      <div>
        <label className={labelClass}>Nội dung (Markdown) *</label>
        <textarea
          name="content"
          rows={18}
          required
          defaultValue={post?.content}
          placeholder="# Tiêu đề&#10;&#10;Nội dung bài viết..."
          className={`${inputClass} resize-y font-mono text-xs leading-relaxed`}
        />
      </div>

      {/* Category + Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Danh mục</label>
          <select name="category" defaultValue={post?.category ?? 'kien-thuc'} className={`${inputClass} appearance-none`}>
            <option value="giai-ma">Giải Mã</option>
            <option value="kien-thuc">Kiến Thức</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Trạng thái</label>
          <select name="status" defaultValue={post?.status ?? 'draft'} className={`${inputClass} appearance-none`}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className={labelClass}>Tags (cách nhau bằng dấu phẩy)</label>
        <input
          name="tags"
          type="text"
          defaultValue={post?.tags?.join(', ')}
          placeholder="ran, bieu-tuong, jung..."
          className={inputClass}
        />
      </div>

      {/* Thumbnail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Thumbnail URL</label>
          <input
            name="thumbnail_url"
            type="url"
            defaultValue={post?.thumbnail_url ?? ''}
            placeholder="https://..."
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Alt text ảnh</label>
          <input
            name="image_alt"
            type="text"
            defaultValue={post?.image_alt ?? ''}
            placeholder="Mô tả ảnh..."
            className={inputClass}
          />
        </div>
      </div>

      {/* SEO */}
      <div className="border-t border-veil/40 pt-6 space-y-4">
        <p className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase">SEO</p>
        <div>
          <label className={labelClass}>SEO Title</label>
          <input
            name="seo_title"
            type="text"
            defaultValue={post?.seo_title ?? ''}
            placeholder="Để trống = dùng tiêu đề bài"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>SEO Description</label>
          <textarea
            name="seo_description"
            rows={2}
            defaultValue={post?.seo_description ?? ''}
            placeholder="Để trống = dùng excerpt"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-veil/40">
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isPending}
            className="font-mono text-xs tracking-[0.2em] uppercase bg-gold text-void px-8 py-3 hover:bg-gold-light transition-colors duration-200 disabled:opacity-50"
          >
            {isPending ? 'Đang lưu...' : submitLabel}
          </button>
        </div>

        {onDelete && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="font-mono text-xs tracking-wider uppercase text-red-400/60 hover:text-red-400 transition-colors duration-200 disabled:opacity-50"
          >
            {isDeleting ? 'Đang xóa...' : 'Xóa bài'}
          </button>
        )}
      </div>
    </form>
  )
}
