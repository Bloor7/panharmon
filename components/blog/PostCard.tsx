import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

interface PostCardProps {
  post: PostMeta
  featured?: boolean
  compact?: boolean
  index?: number
}

const GRADIENTS = [
  'from-purple/20 via-abyss to-void',
  'from-teal-dim/20 to-abyss',
  'from-iris/20 to-abyss',
  'from-gold/10 to-abyss',
]

const CATEGORY_LABELS: Record<string, string> = {
  'giai-ma': 'Giải Mã',
  'kien-thuc': 'Kiến Thức',
}

function EyeIconLarge() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.3" aria-hidden="true">
      <path d="M32 8 C18 8, 8 18, 8 32 S18 56 32 56 S56 46 56 32" stroke="#d4a853" strokeWidth="1" fill="none" />
      <ellipse cx="32" cy="32" rx="16" ry="10" stroke="#7c6fd4" strokeWidth="0.7" fill="none" />
      <circle cx="32" cy="32" r="5" fill="#5b4db8" />
    </svg>
  )
}

function EyeIconSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity="0.4" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke="#d4a853" strokeWidth="0.7" fill="none" />
      <circle cx="14" cy="14" r="4" fill="#5b4db8" />
    </svg>
  )
}

export default function PostCard({ post, featured = false, compact = false, index = 0 }: PostCardProps) {
  const gradient = GRADIENTS[index % GRADIENTS.length]
  const label = CATEGORY_LABELS[post.category] ?? post.category

  if (featured) {
    return (
      <Link
        href={`/bai-viet/${post.slug}`}
        className="group relative border border-veil hover:border-iris/50 bg-abyss/50 transition-all duration-300 flex flex-col no-underline block h-full"
      >
        <div className={`relative h-52 bg-gradient-to-br ${gradient} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <EyeIconLarge />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-abyss to-transparent" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-xs tracking-widest text-gold/80 uppercase">{label}</span>
            <span className="font-mono text-xs text-iris">{post.dateFormatted}</span>
          </div>
          <h3 className="font-display text-xl tracking-wide text-star mb-3 leading-snug group-hover:text-gold-light transition-colors duration-300">
            {post.title}
          </h3>
          <p className="font-body text-sm text-lavender leading-relaxed mb-6 flex-1 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-iris">{post.readTime}</span>
            <span className="font-mono text-xs tracking-widest text-iris group-hover:text-gold uppercase transition-colors duration-300">
              Đọc tiếp →
            </span>
          </div>
        </div>
      </Link>
    )
  }

  if (compact) {
    return (
      <Link
        href={`/bai-viet/${post.slug}`}
        className="group relative border border-veil hover:border-iris/50 bg-abyss/50 transition-all duration-300 flex gap-4 p-5 no-underline block"
      >
        <div className={`w-20 h-20 shrink-0 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <EyeIconSmall />
          </div>
        </div>
        <div className="flex flex-col justify-between min-w-0">
          <div>
            <span className="font-mono text-xs tracking-widest text-gold/70 uppercase block mb-1">{label}</span>
            <h3 className="font-display text-sm tracking-wide text-star leading-snug group-hover:text-gold-light transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-mono text-xs text-iris">{post.readTime}</span>
            <span className="font-mono text-xs text-iris group-hover:text-gold transition-colors duration-300">→</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/bai-viet/${post.slug}`}
      className="group relative border border-veil hover:border-iris/50 bg-abyss/50 transition-all duration-300 flex flex-col no-underline block"
    >
      <div className={`relative h-40 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <EyeIconLarge />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-abyss to-transparent" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs tracking-widest text-gold/80 uppercase">{label}</span>
          <span className="font-mono text-xs text-iris">{post.dateFormatted}</span>
        </div>
        <h3 className="font-display text-base tracking-wide text-star mb-2 leading-snug group-hover:text-gold-light transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        <p className="font-body text-sm text-lavender leading-relaxed mb-4 flex-1 line-clamp-2">
          {post.excerpt}
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="font-mono text-xs text-iris border border-iris/30 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-iris">{post.readTime}</span>
          <span className="font-mono text-xs tracking-widest text-iris group-hover:text-gold uppercase transition-colors duration-300">
            Đọc tiếp →
          </span>
        </div>
      </div>
    </Link>
  )
}
