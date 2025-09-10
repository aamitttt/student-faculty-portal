import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, User, Users } from "lucide-react";
import AuthModal from "@/components/AuthModal";

const bgUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

const Home = () => {
  const [role, setRole] = useState<"student" | "faculty" | null>(null);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('${bgUrl}')`,
      }}
    >
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm" />
      <main className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-12">
        <div className="max-w-2xl w-full text-center bg-white/80 rounded-2xl shadow-2xl p-8 mx-auto">
          <div className="flex justify-center mb-6">
            <GraduationCap className="text-blue-700" size={64} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 drop-shadow">
            Welcome to the SAC Portal
          </h1>
          <p className="text-lg md:text-xl text-blue-700 mb-8 font-medium">
            Empowering <span className="font-bold text-blue-900">Students</span> and <span className="font-bold text-blue-900">Faculty</span> to Connect, Learn, and Achieve!
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div
              className="group cursor-pointer bg-white/90 hover:bg-blue-100 rounded-xl shadow-lg p-8 flex flex-col items-center transition w-full md:w-72"
              onClick={() => setRole("student")}
              tabIndex={0}
              role="button"
              aria-label="Student Login/Register"
            >
              <User className="text-blue-600 group-hover:scale-110 transition" size={56} />
              <h2 className="text-2xl font-bold mt-4 text-blue-900">I'm a Student</h2>
              <p className="text-blue-700 mt-2">Access your dashboard, notes, assignments, and more.</p>
              <Button className="mt-4 w-full" variant="default">Login / Register</Button>
            </div>
            <div
              className="group cursor-pointer bg-white/90 hover:bg-blue-100 rounded-xl shadow-lg p-8 flex flex-col items-center transition w-full md:w-72"
              onClick={() => setRole("faculty")}
              tabIndex={0}
              role="button"
              aria-label="Faculty Login/Register"
            >
              <Users className="text-blue-600 group-hover:scale-110 transition" size={56} />
              <h2 className="text-2xl font-bold mt-4 text-blue-900">I'm Faculty</h2>
              <p className="text-blue-700 mt-2">Manage classes, upload notes, track attendance, and more.</p>
              <Button className="mt-4 w-full" variant="default">Login / Register</Button>
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