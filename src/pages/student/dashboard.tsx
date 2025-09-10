import { CalendarDays, BookOpen, Upload, BarChart2, Bell, Link as LinkIcon } from "lucide-react";

const quickLinks = [
  { label: "Timetable", icon: CalendarDays, to: "/student/timetable" },
  { label: "Notes & Assignments", icon: BookOpen, to: "/student/notes-assignments" },
  { label: "Upload Documents", icon: Upload, to: "/student/upload-documents" },
  { label: "Progress", icon: BarChart2, to: "/student/progress" },
];

const notifications = [
  { id: 1, text: "Assignment 2 deadline extended to Friday." },
  { id: 2, text: "New notes uploaded for Mathematics." },
  { id: 3, text: "Event: Coding Hackathon this weekend!" },
];

const StudentDashboard = () => (
  <div className="p-8 bg-gradient-to-br from-blue-50 to-white min-h-screen">
    <h1 className="text-3xl font-extrabold mb-2 text-blue-900 flex items-center gap-2">
      <BarChart2 className="text-blue-700" /> Student Dashboard
    </h1>
    <p className="text-blue-700 mb-6 text-lg">Welcome back! Here’s a snapshot of your academic journey.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2">
          <CalendarDays className="text-blue-600" />
          <span className="font-bold text-blue-900">Today’s Timetable</span>
        </div>
        <ul className="text-blue-700 text-sm">
          <li>9:00 AM - Mathematics</li>
          <li>11:00 AM - Physics</li>
          <li>2:00 PM - Computer Science</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="text-blue-600" />
          <span className="font-bold text-blue-900">Recent Notes & Assignments</span>
        </div>
        <ul className="text-blue-700 text-sm">
          <li>Maths Notes - Algebra.pdf</li>
          <li>Physics Assignment 1 - Due: Friday</li>
          <li>CS Notes - Data Structures.pdf</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2">
          <Upload className="text-blue-600" />
          <span className="font-bold text-blue-900">Uploaded Documents</span>
        </div>
        <ul className="text-blue-700 text-sm">
          <li>10th Marksheet.pdf</li>
          <li>12th Certificate.pdf</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2">
          <BarChart2 className="text-blue-600" />
          <span className="font-bold text-blue-900">Academic Progress</span>
        </div>
        <div className="text-blue-700 text-sm">
          <div>CGPA: <span className="font-bold text-blue-900">8.7</span></div>
          <div>Attendance: <span className="font-bold text-blue-900">92%</span></div>
        </div>
      </div>
    </div>
    <div className="mb-8">
      <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
        <Bell className="text-blue-600" /> Notifications
      </h2>
      <ul className="bg-white rounded-lg shadow p-4 text-blue-700 space-y-2">
        {notifications.map((n) => (
          <li key={n.id} className="flex items-center gap-2">
            <Bell className="text-blue-400" size={16} /> {n.text}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
        <LinkIcon className="text-blue-600" /> Quick Links
      </h2>
      <div className="flex flex-wrap gap-4">
        {quickLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-900 px-4 py-2 rounded-lg font-semibold shadow transition"
          >
            <link.icon size={18} /> {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default StudentDashboard;