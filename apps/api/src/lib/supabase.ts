import { createClient } from '@supabase/supabase-js'
import { env } from '../config/env.js'

// Service role key bypasses Row Level Security — server-side use only, never expose to the frontend.
export const supabase = createClient(env.supabaseUrl, env.supabaseServiceRoleKey)
