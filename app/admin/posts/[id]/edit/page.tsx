import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PostForm from '@/components/admin/PostForm'
import { getDbPostById, getPostById } from '@/lib/db/posts'
import { updatePostAction, deletePostAction } from '../../actions'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = await getPostById(id)
  return { title: post ? `Sửa: ${post.title}` : 'Bài viết' }
}

export const dynamic = 'force-dynamic'

export default async function EditPostPage({ params }: Props) {
  const { id } = await params
  const post = await getDbPostById(id)
  if (!post) notFound()

  const updateWithId = updatePostAction.bind(null, id)
  const deleteWithId = deletePostAction.bind(null, id)

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Link href="/admin/posts" className="font-mono text-[10px] text-iris hover:text-gold transition-colors tracking-wider uppercase">
            ← Bài viết
          </Link>
          <span className="text-veil">/</span>
          <h1 className="font-display text-xl tracking-wide text-star truncate max-w-md">{post.title}</h1>
        </div>
        <Link
          href={`/bai-viet/${post.slug}`}
          target="_blank"
          className="font-mono text-[10px] text-iris hover:text-gold transition-colors tracking-wider uppercase"
        >
          Xem ↗
        </Link>
      </div>

      <PostForm
        post={post}
        action={updateWithId}
        submitLabel="Cập nhật"
        onDelete={deleteWithId}
      />
    </div>
  )
}
