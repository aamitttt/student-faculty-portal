import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, User, Users } from "lucide-react";
import AuthModal from "@/components/AuthModal";

const Home = () => {
  const [role, setRole] = useState<"student" | "faculty" | null>(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="text-blue-700" size={64} />
          </div>
          <h1 className="text-5xl font-extrabold mb-4 text-blue-900 drop-shadow">
            Welcome to the SAC Portal
          </h1>
          <p className="text-xl text-blue-700 mb-8 font-medium">
            Empowering <span className="font-bold text-blue-900">Students</span> and <span className="font-bold text-blue-900">Faculty</span> to Connect, Learn, and Achieve!
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div
              className="group cursor-pointer bg-white/90 hover:bg-blue-100 rounded-xl shadow-lg p-8 flex flex-col items-center transition"
              onClick={() => setRole("student")}
            >
              <User className="text-blue-600 group-hover:scale-110 transition" size={56} />
              <h2 className="text-2xl font-bold mt-4 text-blue-900">I'm a Student</h2>
              <p className="text-blue-700 mt-2">Access your dashboard, notes, assignments, and more.</p>
              <Button className="mt-4" variant="default">Login / Register</Button>
            </div>
            <div
              className="group cursor-pointer bg-white/90 hover:bg-blue-100 rounded-xl shadow-lg p-8 flex flex-col items-center transition"
              onClick={() => setRole("faculty")}
            >
              <Users className="text-blue-600 group-hover:scale-110 transition" size={56} />
              <h2 className="text-2xl font-bold mt-4 text-blue-900">I'm Faculty</h2>
              <p className="text-blue-700 mt-2">Manage classes, upload notes, track attendance, and more.</p>
              <Button className="mt-4" variant="default">Login / Register</Button>
            </div>
          </div>
        </div>
        <Dialog open={!!role} onOpenChange={() => setRole(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {role === "student" ? "Student Login / Register" : "Faculty Login / Register"}
              </DialogTitle>
            </DialogHeader>
            {role && <AuthModal role={role} />}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Home;