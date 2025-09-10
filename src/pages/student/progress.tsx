import BackButton from "@/components/BackButton";
import { BarChart2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const progressData = [
  { sem: "Sem 1", CGPA: 8.2, Attendance: 90 },
  { sem: "Sem 2", CGPA: 8.5, Attendance: 92 },
  { sem: "Sem 3", CGPA: 8.7, Attendance: 93 },
  { sem: "Sem 4", CGPA: 8.9, Attendance: 95 },
  { sem: "Sem 5", CGPA: 9.0, Attendance: 96 },
];

const StudentProgress = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><BarChart2 /> Academic Progress</h1>
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="font-semibold text-blue-800 mb-2">CGPA Over Semesters</h2>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sem" />
            <YAxis domain={[8, 10]} />
            <Tooltip />
            <Line type="monotone" dataKey="CGPA" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="font-semibold text-blue-800 mb-2">Attendance (%)</h2>
      <ul className="text-blue-700 flex gap-6">
        {progressData.map((d, i) => (
          <li key={i} className="flex flex-col items-center">
            <span className="font-bold">{d.sem}</span>
            <span>{d.Attendance}%</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default StudentProgress;