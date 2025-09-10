import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RegisterFaculty = () => (
  <div className="max-w-md mx-auto mt-12 bg-white rounded shadow p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4">Faculty Registration</h1>
    <form className="flex flex-col gap-4">
      <Input type="text" placeholder="Full Name" required />
      <Input type="email" placeholder="Email" required />
      <Input type="password" placeholder="Password" required />
      <Input type="text" placeholder="Faculty ID" required />
      <Button type="submit" className="w-full">Register</Button>
    </form>
    <div className="mt-4 text-sm">
      Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
    </div>
  </div>
);

export default RegisterFaculty;