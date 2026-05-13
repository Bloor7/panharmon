import type { DbProduct } from '@/types/product'
import { createAdminClient } from '@/lib/supabase/admin'

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

export async function getAllProducts(): Promise<DbProduct[]> {
  if (!isSupabaseConfigured()) return []

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('products')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error || !data) return []
    return data as DbProduct[]
  } catch {
    return []
  }
}

export async function getPublishedProducts(): Promise<DbProduct[]> {
  if (!isSupabaseConfigured()) return []

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('products')
      .select('*')
      .eq('status', 'published')
      .order('sort_order', { ascending: true })

    if (error || !data) return []
    return data as DbProduct[]
  } catch {
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<DbProduct | null> {
  if (!isSupabaseConfigured()) return null

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error || !data) return null
    return data as DbProduct
  } catch {
    return null
  }
}

export async function getProductById(id: string): Promise<DbProduct | null> {
  if (!isSupabaseConfigured()) return null

  try {
    const sb = createAdminClient()
    const { data, error } = await sb
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) return null
    return data as DbProduct
  } catch {
    return null
  }
}

export async function createProduct(
  fields: Omit<DbProduct, 'id' | 'created_at' | 'updated_at'>
): Promise<DbProduct> {
  const sb = createAdminClient()
  const { data, error } = await sb
    .from('products')
    .insert({ ...fields })
    .select()
    .single()

  if (error) throw error
  return data as DbProduct
}

export async function updateProduct(
  id: string,
  fields: Partial<Omit<DbProduct, 'id' | 'created_at'>>
): Promise<DbProduct> {
  const sb = createAdminClient()
  const { data, error } = await sb
    .from('products')
    .update({ ...fields, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as DbProduct
}

export async function deleteProduct(id: string): Promise<void> {
  const sb = createAdminClient()
  const { error } = await sb.from('products').delete().eq('id', id)
  if (error) throw error
}
