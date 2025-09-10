import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap, LayoutDashboard, CalendarDays, BookOpen, Upload, BarChart2,
  FileText, CalendarCheck2, ClipboardList, CheckSquare, FileCheck, Bell, Settings, User, Megaphone, FileEdit, Users, Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const navSections = [
  {
    title: "Student",
    role: "student",
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
    role: "faculty",
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
    role: "all",
    items: [
      { label: "Announcements", to: "/events/announcements", icon: Megaphone },
      { label: "Calendar", to: "/events/calendar", icon: CalendarDays },
      { label: "Event Details", to: "/events/details", icon: FileEdit },
      { label: "Registration", to: "/events/registration", icon: Users },
      { label: "Certificate Download", to: "/events/certificate-download", icon: FileCheck },
    ],
  },
  {
    title: "Account",
    role: "all",
    items: [
      { label: "Profile", to: "/profile", icon: User },
      { label: "Notifications", to: "/notifications", icon: Bell },
      { label: "Settings", to: "/settings", icon: Settings },
    ],
  },
];

type SidebarProps = {
  role: "student" | "faculty" | null;
};

export const Sidebar = ({ role }: SidebarProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Sidebar content
  const sidebarContent = (
    <div className="w-72 min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 border-r border-sidebar-border p-4 flex flex-col gap-4 shadow-lg">
      <div className="mb-2 flex items-center gap-2">
        <GraduationCap className="text-white" size={32} />
        <span className="text-2xl font-extrabold text-white tracking-wide">SAC Portal</span>
      </div>
      <nav className="flex flex-col gap-4">
        {navSections
          .filter(
            (section) =>
              section.role === "all" ||
              (role && section.role === role)
          )
          .map((section) => (
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
                    onClick={() => setOpen(false)}
                  >
                    <item.icon size={20} className="shrink-0" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile: Hamburger menu and Drawer */}
      <div className="md:hidden flex items-center p-2 bg-blue-900">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <button
              className="text-white p-2"
              aria-label="Open sidebar"
              onClick={() => setOpen(true)}
            >
              <Menu size={28} />
            </button>
          </DrawerTrigger>
          <span className="ml-2 text-white font-bold text-lg">SAC Portal</span>
          <DrawerContent className="p-0">
            {sidebarContent}
          </DrawerContent>
        </Drawer>
      </div>
      {/* Desktop: Static sidebar */}
      <div className="hidden md:block">{sidebarContent}</div>
    </>
  );
};