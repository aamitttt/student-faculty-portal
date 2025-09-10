import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ResetPassword = () => (
  <div className="max-w-md mx-auto mt-12 bg-white rounded shadow p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
    <form className="flex flex-col gap-4">
      <Input type="password" placeholder="New Password" required />
      <Input type="password" placeholder="Confirm Password" required />
      <Button type="submit" className="w-full">Reset Password</Button>
    </form>
  </div>
);

export default ResetPassword;