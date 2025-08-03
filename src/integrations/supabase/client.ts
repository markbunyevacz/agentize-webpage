import { createClient } from '@supabase/supabase-js'

// Try to get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// If no credentials are available, the functions won't work but the app will still load
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Blog news fetching will use fallback content.')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)