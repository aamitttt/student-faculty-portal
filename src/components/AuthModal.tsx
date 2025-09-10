import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { showError, showSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Props = {
  role: "student" | "faculty";
};

const AuthModal = ({ role: initialRole }: Props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [role, setRole] = useState<"student" | "faculty">(initialRole);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", fullName: "", id: "" });
  const [emailForReset, setEmailForReset] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
      // Login
      if (!form.email || !form.password) {
        showError("Please enter email and password.");
        setLoading(false);
        return;
      }
      const { error, data } = await supabase.auth.signInWithPassword({
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
      if (!form.email || !form.password || !form.fullName || !form.id) {
        showError("Please fill all fields.");
        setLoading(false);
        return;
      }
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

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!emailForReset) {
      showError("Please enter your email.");
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(emailForReset);
    setLoading(false);
    if (error) {
      showError(error.message);
    } else {
      showSuccess("Password reset link sent! Check your email.");
      setIsForgot(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center gap-2 mb-4">
        <Button
          variant={role === "student" ? "default" : "outline"}
          onClick={() => setRole("student")}
          size="sm"
        >
          Student
        </Button>
        <Button
          variant={role === "faculty" ? "default" : "outline"}
          onClick={() => setRole("faculty")}
          size="sm"
        >
          Faculty
        </Button>
      </div>
      {!isForgot ? (
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
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleForgot}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={emailForReset}
            onChange={(e) => setEmailForReset(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      )}
      <div className="mt-4 text-center text-sm">
        {!isForgot ? (
          <>
            {isLogin ? (
              <>
                New to SAC Portal?{" "}
                <button className="text-blue-600 hover:underline" onClick={() => setIsLogin(false)}>
                  Register
                </button>
                <br />
                <button className="text-blue-600 hover:underline mt-2" onClick={() => setIsForgot(true)}>
                  Forgot Password?
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
          </>
        ) : (
          <button className="text-blue-600 hover:underline" onClick={() => setIsForgot(false)}>
            Back to Login
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthModal;