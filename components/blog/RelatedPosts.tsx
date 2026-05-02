import type { PostMeta } from '@/lib/posts'
import PostCard from './PostCard'

interface RelatedPostsProps {
  posts: PostMeta[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-20 pt-12 border-t border-veil">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-veil" />
        <span className="font-mono text-xs tracking-[0.25em] text-gold uppercase">Bài Viết Liên Quan</span>
        <div className="h-px flex-1 bg-veil" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  )
}
