import { Link, useLocation } from "react-router-dom";
import {
  LogIn, UserPlus, UserCog, KeyRound, LayoutDashboard, GraduationCap, BookOpen, Upload, BarChart2,
  FileText, CalendarDays, Users, ClipboardList, CheckSquare, FileCheck, Bell, Settings, User, Megaphone, CalendarCheck2, FileEdit
} from "lucide-react";
import { cn } from "@/lib/utils";

const navSections = [
  {
    title: "Authentication",
    items: [
      { label: "Login", to: "/login", icon: LogIn },
      { label: "Register (Student)", to: "/register-student", icon: UserPlus },
      { label: "Register (Faculty)", to: "/register-faculty", icon: UserCog },
      { label: "Forgot Password", to: "/forgot-password", icon: KeyRound },
    ],
  },
  {
    title: "Student",
    items: [
      { label: "Dashboard", to: "/student/dashboard", icon: LayoutDashboard },
      { label: "Timetable", to: "/student/timetable", icon: CalendarDays },
      { label: "Notes & Assignments", to: "/student/notes-assignments", icon: BookOpen },
      { label: "Upload Documents", to: "/student/upload-documents", icon: Upload },
      { label: "Academic Progress", to: "/student/progress", icon: BarChart2 },
    ],
  },
  {
    title: "Faculty",
    items: [
      { label: "Dashboard", to: "/faculty/dashboard", icon: LayoutDashboard },
      { label: "Upload Notes", to: "/faculty/upload-notes", icon: FileText },
      { label: "Manage Timetables", to: "/faculty/manage-timetables", icon: CalendarCheck2 },
      { label: "Attendance Tracking", to: "/faculty/attendance", icon: ClipboardList },
      { label: "Marks Entry", to: "/faculty/marks-entry", icon: CheckSquare },
      { label: "Review Documents", to: "/faculty/review-documents", icon: FileCheck },
    ],
  },
  {
    title: "Events",
    items: [
      { label: "Announcements", to: "/events/announcements", icon: Megaphone },
      { label: "Calendar", to: "/events/calendar", icon: CalendarDays },
      { label: "Event Details", to: "/events/details", icon: FileEdit },
      { label: "Registration", to: "/events/registration", icon: Users },
      { label: "Certificate Download", to: "/events/certificate-download", icon: FileCheck }, // Changed here
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Profile", to: "/profile", icon: User },
      { label: "Notifications", to: "/notifications", icon: Bell },
      { label: "Settings", to: "/settings", icon: Settings },
    ],
  },
];

export const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 border-r border-sidebar-border p-4 flex flex-col gap-4 shadow-lg">
      <div className="mb-2 flex items-center gap-2">
        <GraduationCap className="text-white" size={32} />
        <span className="text-2xl font-extrabold text-white tracking-wide">SAC Portal</span>
      </div>
      <nav className="flex flex-col gap-4">
        {navSections.map((section) => (
          <div key={section.title}>
            <div className="uppercase text-xs text-blue-200 font-semibold mb-1 pl-2 tracking-wider">{section.title}</div>
            <div className="flex flex-col gap-1">
              {section.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-800/80 text-blue-100 transition font-medium",
                    location.pathname === item.to && "bg-blue-800 text-white font-bold shadow"
                  )}
                >
                  <item.icon size={20} className="shrink-0" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};