'use client'

import { useState, useMemo } from 'react'
import type { PostMeta } from '@/lib/posts'
import PostCard from './PostCard'

interface SearchBarProps {
  posts: PostMeta[]
}

export default function SearchBar({ posts }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return posts
    return posts.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.excerpt.toLowerCase().includes(q)
    )
  }, [query, posts])

  return (
    <div>
      <div className="relative mb-10">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Tìm kiếm bài viết, chủ đề, thẻ..."
          className="w-full bg-abyss/50 border border-veil hover:border-mist focus:border-iris/60 outline-none text-star placeholder-lavender/30 font-body text-base px-5 py-3.5 pr-12 transition-colors duration-300"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 text-lavender/30"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {query.trim() && (
        <p className="font-mono text-xs text-iris mb-6 tracking-wider">
          {filtered.length} kết quả cho &ldquo;{query.trim()}&rdquo;
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <span
            className="font-display text-5xl text-veil block mb-5"
            style={{ animation: 'float 6s ease-in-out infinite' }}
            aria-hidden="true"
          >
            ✦
          </span>
          <p className="font-body text-lavender text-lg mb-2">
            Không tìm thấy bài viết nào.
          </p>
          <p className="font-mono text-xs text-iris tracking-wider">
            Hãy thử từ khoá khác hoặc{' '}
            <button
              onClick={() => setQuery('')}
              className="text-iris hover:text-gold transition-colors duration-300 underline underline-offset-2"
            >
              xem tất cả bài viết
            </button>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
