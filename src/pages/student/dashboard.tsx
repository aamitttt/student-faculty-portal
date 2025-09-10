import { Sidebar } from "@/components/Sidebar";
import { CalendarDays, BookOpen, Upload, BarChart2, Bell, Link as LinkIcon } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";
import { useState } from "react";

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

const progressData = [
  { name: "Sem 1", CGPA: 8.2 },
  { name: "Sem 2", CGPA: 8.5 },
  { name: "Sem 3", CGPA: 8.7 },
  { name: "Sem 4", CGPA: 8.9 },
  { name: "Sem 5", CGPA: 9.0 },
];

const attendancePie = [
  { name: "Present", value: 92 },
  { name: "Absent", value: 8 },
];

const assignmentBar = [
  { name: "Submitted", value: 7 },
  { name: "Pending", value: 2 },
  { name: "Late", value: 1 },
];

const COLORS = ["#2563eb", "#f87171", "#fbbf24"];

const StudentDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => setActiveIndex(index);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Sidebar role="student" />
      <div className="flex-1 p-4 md:p-8">
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
              <li>9:00 AM - Mathematics (Room 101)</li>
              <li>11:00 AM - Physics (Room 202)</li>
              <li>2:00 PM - Computer Science (Lab 1)</li>
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
              <li>English Essay - Due: Monday</li>
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
              <li>Transfer Certificate.pdf</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <BarChart2 className="text-blue-600" />
              <span className="font-bold text-blue-900">Academic Progress</span>
            </div>
            <div className="text-blue-700 text-sm mb-2">
              <div>CGPA: <span className="font-bold text-blue-900">8.7</span></div>
              <div>Attendance: <span className="font-bold text-blue-900">92%</span></div>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[8, 10]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="CGPA" stroke="#2563eb" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold text-blue-800 mb-2">Attendance Overview</h2>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={attendancePie}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  fill="#2563eb"
                  dataKey="value"
                  activeIndex={activeIndex}
                  activeShape={props => (
                    <g>
                      <text x={props.cx} y={props.cy} dy={8} textAnchor="middle" fill="#2563eb" fontWeight="bold">
                        {attendancePie[activeIndex].name}
                      </text>
                      <Pie {...props} />
                    </g>
                  )}
                  onMouseEnter={onPieEnter}
                >
                  {attendancePie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold text-blue-800 mb-2">Assignment Status</h2>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={assignmentBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb">
                  {assignmentBar.map((entry, index) => (
                    <Cell key={`bar-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold text-blue-800 mb-2">CGPA Trend</h2>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[8, 10]} />
                <Tooltip />
                <Line type="monotone" dataKey="CGPA" stroke="#2563eb" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
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
    </div>
  );
};

export default StudentDashboard;