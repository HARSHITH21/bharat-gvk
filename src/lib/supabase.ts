import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gptxpoljfeteageffcuo.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwdHhwb2xqZmV0ZWFnZWZmY3VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5NTExMDIsImV4cCI6MjA4NDUyNzEwMn0.JCRd0jQU4hhVOfzhlxrCRmBae6rz4r8xWsyUu3qxc20';

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
