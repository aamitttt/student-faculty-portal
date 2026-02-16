import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? "";
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? "";

let _supabase: SupabaseClient | null = null;

function createStubClient(): SupabaseClient {
  // A minimal stub that prevents the app from crashing when env vars are missing.
  // Any attempted usage will throw a clear error.
  const err = new Error(
    "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env and restart the dev server."
  );

  return new Proxy(
    {},
    {
      get() {
        throw err;
      },
    }
  ) as unknown as SupabaseClient;
}

export const supabase: SupabaseClient = (() => {
  const url = SUPABASE_URL.trim();
  const key = SUPABASE_ANON_KEY.trim();

  if (url && key) {
    _supabase = createClient(url, key);
    return _supabase;
  }

  // Avoid throwing at import-time (which crashes the whole app).
  return createStubClient();
})();
