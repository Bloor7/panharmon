'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createProduct, updateProduct, deleteProduct } from '@/lib/db/products'

export async function createProductAction(formData: FormData) {
  const featuresRaw = (formData.get('features') as string) || ''
  const features = featuresRaw.split('\n').map(f => f.trim()).filter(Boolean)

  await createProduct({
    name: formData.get('name') as string,
    slug: formData.get('slug') as string,
    description: formData.get('description') as string || '',
    price: formData.get('price') as string || '0đ',
    period: (formData.get('period') as string) || null,
    badge: (formData.get('badge') as string) || null,
    features,
    status: (formData.get('status') as 'draft' | 'published') || 'draft',
    featured: formData.get('featured') === 'true',
    cta_text: (formData.get('cta_text') as string) || null,
    cta_href: (formData.get('cta_href') as string) || null,
    thumbnail_url: (formData.get('thumbnail_url') as string) || null,
    sort_order: Number(formData.get('sort_order')) || 0,
  })

  revalidatePath('/san-pham')
  redirect('/admin/products')
}

export async function updateProductAction(id: string, formData: FormData) {
  const featuresRaw = (formData.get('features') as string) || ''
  const features = featuresRaw.split('\n').map(f => f.trim()).filter(Boolean)

  await updateProduct(id, {
    name: formData.get('name') as string,
    slug: formData.get('slug') as string,
    description: formData.get('description') as string || '',
    price: formData.get('price') as string || '0đ',
    period: (formData.get('period') as string) || null,
    badge: (formData.get('badge') as string) || null,
    features,
    status: (formData.get('status') as 'draft' | 'published') || 'draft',
    featured: formData.get('featured') === 'true',
    cta_text: (formData.get('cta_text') as string) || null,
    cta_href: (formData.get('cta_href') as string) || null,
    thumbnail_url: (formData.get('thumbnail_url') as string) || null,
    sort_order: Number(formData.get('sort_order')) || 0,
  })

  revalidatePath('/san-pham')
  redirect('/admin/products')
}

export async function deleteProductAction(id: string) {
  await deleteProduct(id)
  revalidatePath('/san-pham')
  redirect('/admin/products')
}
