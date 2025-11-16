import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Database operations will fail.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          name: string;
          email: string;
          password: string;
          institution: string;
          field_of_study: string;
          created_at: string;
          email_verified: boolean;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          password: string;
          institution: string;
          field_of_study: string;
          created_at?: string;
          email_verified?: boolean;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          password?: string;
          institution?: string;
          field_of_study?: string;
          created_at?: string;
          email_verified?: boolean;
        };
      };
    };
  };
}
