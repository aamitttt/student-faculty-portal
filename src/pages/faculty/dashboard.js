import { Sidebar } from "@/components/Sidebar";
import { FileText, CalendarCheck2, ClipboardList, Users, BarChart2, Bell, BookOpen } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

const quickLinks = [
  { label: "Upload Notes", icon: FileText, to: "/faculty/upload-notes" },
  { label: "Manage Timetables", icon: CalendarCheck2, to: "/faculty/manage-timetables" },
  { label: "Attendance", icon: ClipboardList, to: "/faculty/attendance" },
  { label: "Marks Entry", icon: BarChart2, to: "/faculty/marks-entry" },
  { label: "Review Documents", icon: BookOpen, to: "/faculty/review-documents" },
];

const notifications = [
  { id: 1, text: "3 students marked absent today." },
  { id: 2, text: "New document uploaded for review." },
  { id: 3, text: "Event: Faculty meeting at 4 PM." },
];

const marksData = [
  { name: "A. Sharma", marks: 95 },
  { name: "B. Singh", marks: 88 },
  { name: "C. Patel", marks: 76 },
  { name: "D. Kumar", marks: 82 },
  { name: "E. Gupta", marks: 91 },
];

const attendanceStats = [
  { name: "Present", value: 87 },
  { name: "Absent", value: 13 },
];

const marksDist = [
  { range: "90-100", count: 2 },
  { range: "80-89", count: 2 },
  { range: "70-79", count: 1 },
];

const COLORS = ["#2563eb", "#f87171", "#fbbf24"];

const FacultyDashboard = () => (
  <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-white">
    <Sidebar role="faculty" />
    <div className="flex-1 p-4 md:p-8">
      <h1 className="text-3xl font-extrabold mb-2 text-blue-900 flex items-center gap-2">
        <BarChart2 className="text-blue-700" /> Faculty Dashboard
      </h1>
      <p className="text-blue-700 mb-6 text-lg">Empowering you to manage academics and students efficiently.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="text-blue-600" />
            <span className="font-bold text-blue-900">Recent Uploads</span>
          </div>
          <ul className="text-blue-700 text-sm">
            <li>CS Notes - Algorithms.pdf</li>
            <li>Maths Assignment 3</li>
            <li>Physics Lab Manual.pdf</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <CalendarCheck2 className="text-blue-600" />
            <span className="font-bold text-blue-900">Upcoming Timetables</span>
          </div>
          <ul className="text-blue-700 text-sm">
            <li>10:00 AM - BSc 2nd Year</li>
            <li>12:00 PM - MSc 1st Year</li>
            <li>2:00 PM - BCA 3rd Year</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <ClipboardList className="text-blue-600" />
            <span className="font-bold text-blue-900">Attendance Overview</span>
          </div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attendanceStats}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  fill="#2563eb"
                  dataKey="value"
                  label
                >
                  {attendanceStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 className="text-blue-600" />
            <span className="font-bold text-blue-900">Performance Analytics</span>
          </div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marksData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Bar dataKey="marks" fill="#2563eb">
                  {marksData.map((entry, index) => (
                    <Cell key={`bar-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-blue-700 text-sm mt-2">
            <div>Average Marks: <span className="font-bold text-blue-900">86%</span></div>
            <div>Top Performer: <span className="font-bold text-blue-900">A. Sharma</span></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-lg font-bold text-blue-800 mb-2">Marks Distribution</h2>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={marksDist}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#fbbf24">
                {marksDist.map((entry, index) => (
                  <Cell key={`bar-dist-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-lg font-bold text-blue-800 mb-2">Attendance Pie</h2>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={attendanceStats}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                fill="#2563eb"
                dataKey="value"
                label
              >
                {attendanceStats.map((entry, index) => (
                  <Cell key={`cell-pie-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
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
          <Users className="text-blue-600" /> Quick Links
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
  </div>
);

export default FacultyDashboard;