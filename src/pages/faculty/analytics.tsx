import BackButton from "@/components/BackButton";
import { BarChart2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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

const FacultyAnalytics = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><BarChart2 /> Analytics</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="font-semibold text-blue-800 mb-2">Student Marks</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={marksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[70, 100]} />
              <Tooltip />
              <Bar dataKey="marks" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="font-semibold text-blue-800 mb-2">Attendance Overview</h2>
        <ul className="text-blue-700 space-y-2">
          {attendanceStats.map((stat, i) => (
            <li key={i} className="flex justify-between">
              <span>{stat.name}</span>
              <span className="font-bold">{stat.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default FacultyAnalytics;