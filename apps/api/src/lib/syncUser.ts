import type { User as SupabaseUser } from '@supabase/supabase-js'
import { prisma } from './prisma.js'

export function syncUser(supabaseUser: SupabaseUser) {
  const email = supabaseUser.email
  if (!email) {
    throw new Error('Supabase user has no email')
  }

  const name =
    (supabaseUser.user_metadata?.full_name as string | undefined) ??
    (supabaseUser.user_metadata?.name as string | undefined) ??
    email

  return prisma.user.upsert({
    where: { supabaseId: supabaseUser.id },
    update: { email, name },
    create: { supabaseId: supabaseUser.id, email, name },
  })
}
