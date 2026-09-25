import { createClient } from '@supabase/supabase-js';

let rawSupabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://exbaueuswtiricsrocbr.supabase.co';
if (rawSupabaseUrl === 'your_supabase_url_here') {
    rawSupabaseUrl = 'https://exbaueuswtiricsrocbr.supabase.co';
}
// Sanitize the URL in case it accidentally includes /rest/v1/
const supabaseUrl = rawSupabaseUrl.replace('/rest/v1/', '').replace('/rest/v1', '');

let supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YmF1ZXVzd3Rpcmljc3JvY2JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzMDA0ODQsImV4cCI6MjEwNTg3NjQ4NH0.VSX_Z6SSzMIeP_OG90olia3pgGuhllqET9gaDE0wCtI';
if (supabaseAnonKey === 'your_supabase_anon_key_here') {
    supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YmF1ZXVzd3Rpcmljc3JvY2JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzMDA0ODQsImV4cCI6MjEwNTg3NjQ4NH0.VSX_Z6SSzMIeP_OG90olia3pgGuhllqET9gaDE0wCtI';
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
