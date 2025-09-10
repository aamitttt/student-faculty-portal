import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Login", to: "/login" },
  { label: "Register (Student)", to: "/register-student" },
  { label: "Register (Faculty)", to: "/register-faculty" },
  { label: "Forgot Password", to: "/forgot-password" },
  { label: "Student Dashboard", to: "/student/dashboard" },
  { label: "Faculty Dashboard", to: "/faculty/dashboard" },
  { label: "Student Timetable", to: "/student/timetable" },
  { label: "Student Notes & Assignments", to: "/student/notes-assignments" },
  { label: "Upload Documents", to: "/student/upload-documents" },
  { label: "Academic Progress", to: "/student/progress" },
  { label: "Upload Notes", to: "/faculty/upload-notes" },
  { label: "Manage Timetables", to: "/faculty/manage-timetables" },
  { label: "Attendance Tracking", to: "/faculty/attendance" },
  { label: "Marks Entry", to: "/faculty/marks-entry" },
  { label: "Review Documents", to: "/faculty/review-documents" },
  { label: "Event Announcements", to: "/events/announcements" },
  { label: "Event Calendar", to: "/events/calendar" },
  { label: "Event Details", to: "/events/details" },
  { label: "Event Registration", to: "/events/registration" },
  { label: "Certificate Download", to: "/events/certificate-download" },
  { label: "Profile", to: "/profile" },
  { label: "Notifications", to: "/notifications" },
  { label: "Settings", to: "/settings" },
];

export const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="w-64 min-h-screen bg-sidebar-DEFAULT border-r border-sidebar-border p-4 flex flex-col gap-2">
      <h2 className="text-lg font-bold mb-4 text-sidebar-foreground">SAC Portal</h2>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "px-3 py-2 rounded hover:bg-sidebar-accent text-sidebar-foreground transition",
              location.pathname === item.to && "bg-sidebar-accent font-semibold"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};