export const DEMO_ACCOUNTS = {
  student: {
    email: "student@gmail.com",
    password: "Admin@123",
    redirectTo: "/student/dashboard",
  },
  faculty: {
    email: "faculty@gmail.com",
    password: "Admin@123",
    redirectTo: "/faculty/dashboard",
  },
};

export function isSupabaseConfigured() {
  const url = ((import.meta.env.VITE_SUPABASE_URL ?? "") + "").trim();
  const key = ((import.meta.env.VITE_SUPABASE_ANON_KEY ?? "") + "").trim();
  return Boolean(url && key);
}