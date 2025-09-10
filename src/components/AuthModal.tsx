import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { showError, showSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Props = {
  role: "student" | "faculty";
};

const AuthModal = ({ role }: Props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", fullName: "", id: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
      // Login
      const { error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });
      setLoading(false);
      if (error) {
        showError(error.message);
      } else {
        showSuccess("Login successful!");
        navigate(role === "student" ? "/student/dashboard" : "/faculty/dashboard");
      }
    } else {
      // Register
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.fullName,
            [`${role}_id`]: form.id,
            role,
          },
        },
      });
      if (error) {
        setLoading(false);
        showError(error.message);
        return;
      }
      // Insert into students/faculty table
      const table = role === "student" ? "students" : "faculty";
      const { error: dbError } = await supabase
        .from(table)
        .insert([
          {
            id: data.user?.id,
            full_name: form.fullName,
            email: form.email,
            [`${role}_id`]: form.id,
          },
        ]);
      setLoading(false);
      if (dbError) {
        showError(dbError.message);
      } else {
        showSuccess("Registration successful! Please check your email to verify your account.");
        setIsLogin(true);
      }
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleAuth}>
        {!isLogin && (
          <>
            <Input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <Input
              name="id"
              placeholder={role === "student" ? "Student ID" : "Faculty ID"}
              value={form.id}
              onChange={handleChange}
              required
            />
          </>
        )}
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (isLogin ? "Logging in..." : "Registering...") : isLogin ? "Login" : "Register"}
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        {isLogin ? (
          <>
            New to SAC Portal?{" "}
            <button className="text-blue-600 hover:underline" onClick={() => setIsLogin(false)}>
              Register
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button className="text-blue-600 hover:underline" onClick={() => setIsLogin(true)}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;