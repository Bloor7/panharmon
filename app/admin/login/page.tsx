'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      setError('Email hoặc mật khẩu không đúng.')
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <svg
            className="mx-auto mb-4"
            width="48"
            height="48"
            viewBox="0 0 34 34"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="17" cy="17" r="15" stroke="#d4a853" strokeWidth="0.8" opacity="0.5" />
            <circle cx="17" cy="17" r="10" stroke="#7c6fd4" strokeWidth="0.7" opacity="0.6" />
            <circle cx="17" cy="17" r="4" fill="#5b4db8" opacity="0.85" />
            <circle cx="18.4" cy="15.6" r="1.4" fill="#e8e4ff" fillOpacity="0.85" />
          </svg>
          <h1 className="font-display text-xl tracking-[0.2em] text-star">PANHARMON</h1>
          <p className="font-mono text-xs text-iris tracking-wider mt-1">Admin CMS</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 border border-veil/60 bg-deep/80 p-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs tracking-widest text-iris uppercase">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="admin@panharmon.com"
              className="bg-void/60 border border-veil text-ghost font-mono text-sm px-4 py-2.5 outline-none focus:border-iris/70 placeholder:text-lavender/30 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs tracking-widest text-iris uppercase">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="bg-void/60 border border-veil text-ghost font-mono text-sm px-4 py-2.5 outline-none focus:border-iris/70 placeholder:text-lavender/30 transition-colors"
            />
          </div>

          {error && (
            <p className="font-mono text-xs text-red-400 tracking-wider">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 font-mono text-xs tracking-[0.2em] uppercase bg-gold text-void px-8 py-3 hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>
      </div>
    </div>
  )
}
