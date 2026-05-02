import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/blog/PostCard'

export default function ArticlesSection() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts
  const sidePosts = rest.slice(0, 3)

  if (!featured) return null

  return (
    <section id="bai-viet" className="relative z-10 py-24 px-8 bg-deep">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="reveal font-mono text-xs tracking-[0.25em] text-gold uppercase block mb-4">
            Kiến thức
          </span>
          <h2 className="reveal font-display text-3xl md:text-4xl tracking-wide text-star">
            Khám phá{' '}
            <em className="text-gold not-italic">thư viện mộng triệu</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="reveal md:col-span-3">
            <PostCard post={featured} featured index={0} />
          </div>

          <div className="md:col-span-2 flex flex-col gap-6">
            {sidePosts.map((post, i) => (
              <div key={post.slug} className="reveal" style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
                <PostCard post={post} compact index={i + 1} />
              </div>
            ))}
          </div>
        </div>

        <div className="reveal text-center mt-12">
          <Link
            href="/bai-viet"
            className="font-mono text-xs tracking-[0.2em] uppercase border border-iris/50 text-lavender px-8 py-3 hover:border-gold hover:text-gold transition-all duration-300 inline-block"
          >
            Xem tất cả bài viết
          </Link>
        </div>
      </div>
    </section>
  )
}
