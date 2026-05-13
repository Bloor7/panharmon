export type ProductStatus = 'draft' | 'published'

export interface DbProduct {
  id: string
  name: string
  slug: string
  description: string
  price: string
  period: string | null
  badge: string | null
  features: string[]
  status: ProductStatus
  featured: boolean
  cta_text: string | null
  cta_href: string | null
  thumbnail_url: string | null
  sort_order: number
  created_at: string
  updated_at: string
}

export interface ProductFormData {
  name: string
  slug: string
  description: string
  price: string
  period: string
  badge: string
  features: string
  status: ProductStatus
  featured: boolean
  cta_text: string
  cta_href: string
  thumbnail_url: string
  sort_order: number
}
