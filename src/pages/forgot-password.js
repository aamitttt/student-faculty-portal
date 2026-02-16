import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPassword = () => (
  <div className="max-w-md mx-auto mt-12 bg-white rounded shadow p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
    <form className="flex flex-col gap-4">
      <Input type="email" placeholder="Enter your email" required />
      <Button type="submit" className="w-full">
        Send Reset Link
      </Button>
    </form>
    <div className="mt-4 text-sm">
      Remembered?{" "}
      <a href="/login" className="text-blue-500 hover:underline">
        Back to Login
      </a>
    </div>
  </div>
);

export default ForgotPassword;