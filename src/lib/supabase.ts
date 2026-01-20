import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create client only if credentials are provided
let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

// Types for the contact form submissions
export interface ContactSubmission {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    created_at?: string;
}

// Check if Supabase is configured
export const isSupabaseConfigured = () => Boolean(supabaseUrl && supabaseAnonKey);
