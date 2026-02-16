import BackButton from "@/components/BackButton";
import { Users } from "lucide-react";

const students = [
  { name: "A. Sharma", id: "STU2024001", email: "asharma@example.com", attendance: "95%" },
  { name: "B. Singh", id: "STU2024002", email: "bsingh@example.com", attendance: "88%" },
  { name: "C. Patel", id: "STU2024003", email: "cpatel@example.com", attendance: "92%" },
  { name: "D. Kumar", id: "STU2024004", email: "dkumar@example.com", attendance: "90%" },
  { name: "E. Gupta", id: "STU2024005", email: "egupta@example.com", attendance: "97%" },
];

const FacultyStudentList = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><Users /> Student List</h1>
    <div className="bg-white rounded-lg shadow p-4">
      <table className="w-full text-blue-700">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">ID</th>
            <th className="text-left">Email</th>
            <th className="text-left">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.id}</td>
              <td>{s.email}</td>
              <td>{s.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default FacultyStudentList;