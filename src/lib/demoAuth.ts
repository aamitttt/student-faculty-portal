export type DemoRole = "student" | "faculty";

export const DEMO_ACCOUNTS: Record<DemoRole, { email: string; password: string; redirectTo: string }> = {
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
  const url = ((import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? "").trim();
  const key = ((import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? "").trim();
  return Boolean(url && key);
}
