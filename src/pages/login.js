import BackButton from "@/components/BackButton";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [role, setRole] = useState("student");

  return (
    <div className="max-w-md mx-auto mt-12 bg-white rounded shadow p-8">
      <BackButton />
      <h1 className="text-2xl font-bold mb-4">Login ({role === "student" ? "Student" : "Faculty"})</h1>
      <div className="flex gap-2 mb-6">
        <Button variant={role === "student" ? "default" : "outline"} onClick={() => setRole("student")}>
          Student
        </Button>
        <Button variant={role === "faculty" ? "default" : "outline"} onClick={() => setRole("faculty")}>
          Faculty
        </Button>
      </div>
      <form className="flex flex-col gap-4">
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
      <div className="mt-4 flex justify-between text-sm">
        <a href="/forgot-password" className="text-blue-500 hover:underline">
          Forgot Password?
        </a>
        <a
          href={role === "student" ? "/register-student" : "/register-faculty"}
          className="text-blue-500 hover:underline"
        >
          Register as {role === "student" ? "Student" : "Faculty"}
        </a>
      </div>
    </div>
  );
};

export default Login;