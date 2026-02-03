import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://pkmuhvcbjwwyxenbdpso.supabase.co"
const supabasePublishableKey = "sb_publishable_gli-9bxbJ22rzgdyg6oXWw_6sHtZs8Q"
export const supabase = createClient(supabaseUrl, supabasePublishableKey)