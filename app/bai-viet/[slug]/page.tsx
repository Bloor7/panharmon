import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import type { MDXComponents } from 'mdx/types'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/posts'
import RelatedPosts from '@/components/blog/RelatedPosts'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Panharmon`,
    description: post.excerpt,
  }
}

const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-display text-2xl md:text-3xl text-star mb-6 mt-10 tracking-wide leading-snug">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-xl md:text-2xl text-star mb-4 mt-10 tracking-wide pb-3 border-b border-veil leading-snug">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-lg text-gold mb-3 mt-7 tracking-wide">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="font-body text-lg text-lavender/80 leading-relaxed mb-5">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-5 space-y-2.5">
      {children}
    </ul>
  ),
  li: ({ children }) => (
    <li className="font-body text-lg text-lavender/80 flex gap-3">
      <span className="text-gold/60 mt-1.5 shrink-0 text-xs">✦</span>
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="text-ghost font-semibold">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-gold-light not-italic font-medium">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gold/40 pl-6 my-6 text-lavender italic">
      {children}
    </blockquote>
  ),
  hr: () => (
    <div className="flex items-center gap-4 my-10 opacity-30" aria-hidden="true">
      <div className="h-px flex-1 bg-veil" />
      <span className="font-mono text-xs text-iris">✦</span>
      <div className="h-px flex-1 bg-veil" />
    </div>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-iris hover:text-gold transition-colors duration-300 underline underline-offset-2"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="font-mono text-sm bg-veil/60 text-gold-light px-1.5 py-0.5">
      {children}
    </code>
  ),
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const related = getRelatedPosts(post.slug, post.tags, 3)

  return (
    <main className="min-h-screen bg-void">
      <div className="relative z-10 pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/bai-viet"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-iris hover:text-gold uppercase transition-colors duration-300 mb-12 group"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Tất cả bài viết
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase border border-gold/30 px-3 py-1">
                {post.category === 'giai-ma' ? 'Giải Mã' : 'Kiến Thức'}
              </span>
              <span className="font-mono text-xs text-iris">{post.dateFormatted}</span>
              <span className="font-mono text-xs text-iris">{post.readTime}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wide text-star mb-6 leading-snug">
              {post.title}
            </h1>

            <p className="font-body text-xl text-lavender leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-iris border border-iris/30 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 mt-10 opacity-30" aria-hidden="true">
              <div className="h-px flex-1 bg-veil" />
              <span className="font-mono text-xs text-iris">✦</span>
              <div className="h-px flex-1 bg-veil" />
            </div>
          </header>

          {/* MDX content */}
          <article className="prose-panharmon">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          {/* Related posts */}
          <RelatedPosts posts={related} />
        </div>
      </div>
    </main>
  )
}
