import { GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="text-blue-700" size={56} />
          </div>
          <h1 className="text-5xl font-extrabold mb-4 text-blue-900 drop-shadow">
            Welcome to the SAC Portal
          </h1>
          <p className="text-xl text-blue-700 mb-6 font-medium">
            Your all-in-one platform for students and faculty. <br />
            <span className="font-semibold text-blue-900">Connect. Learn. Achieve.</span>
          </p>
          <div className="bg-white/80 rounded-xl shadow-lg p-6 mb-4">
            <p className="text-lg text-blue-800 font-semibold mb-2">🚀 Get started by choosing a module from the sidebar!</p>
            <ul className="text-blue-700 text-base list-disc list-inside">
              <li>Access dashboards tailored for students and faculty</li>
              <li>Stay updated with events, announcements, and notifications</li>
              <li>Track your academic journey and achievements</li>
              <li>Engage with a vibrant campus community</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;