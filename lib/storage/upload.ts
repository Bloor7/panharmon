import { createAdminClient } from '@/lib/supabase/admin'

const BUCKET = 'media'

export async function uploadImage(
  file: File,
  folder = 'thumbnails'
): Promise<{ url: string; path: string }> {
  const sb = createAdminClient()
  const ext = file.name.split('.').pop() ?? 'jpg'
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

  const { error } = await sb.storage.from(BUCKET).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  })

  if (error) throw error

  const { data } = sb.storage.from(BUCKET).getPublicUrl(path)
  return { url: data.publicUrl, path }
}

export async function deleteImage(path: string): Promise<void> {
  const sb = createAdminClient()
  const { error } = await sb.storage.from(BUCKET).remove([path])
  if (error) throw error
}
