import BackButton from "@/components/BackButton";
import { ClipboardList } from "lucide-react";

const attendanceData = [
  { student: "A. Sharma", date: "2024-07-10", status: "Present" },
  { student: "B. Singh", date: "2024-07-10", status: "Absent" },
  { student: "C. Patel", date: "2024-07-10", status: "Present" },
  { student: "D. Kumar", date: "2024-07-10", status: "Present" },
  { student: "E. Gupta", date: "2024-07-10", status: "Present" },
];

const FacultyAttendance = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><ClipboardList /> Attendance Tracking</h1>
    <div className="bg-white rounded-lg shadow p-4">
      <table className="w-full text-blue-700">
        <thead>
          <tr>
            <th className="text-left">Student</th>
            <th className="text-left">Date</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((row, i) => (
            <tr key={i}>
              <td>{row.student}</td>
              <td>{row.date}</td>
              <td>
                <span className={row.status === "Present" ? "text-green-600" : "text-red-600"}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default FacultyAttendance;