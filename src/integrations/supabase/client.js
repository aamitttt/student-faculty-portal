import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL ?? "") + "";
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY ?? "") + "";

let _supabase = null;

function createStubClient() {
  const err = new Error(
    "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env and restart the dev server.",
  );

  return new Proxy(
    {},
    {
      get() {
        throw err;
      },
    },
  );
}

export const supabase = (() => {
  const url = SUPABASE_URL.trim();
  const key = SUPABASE_ANON_KEY.trim();

  if (url && key) {
    _supabase = createClient(url, key);
    return _supabase;
  }

  return createStubClient();
})();