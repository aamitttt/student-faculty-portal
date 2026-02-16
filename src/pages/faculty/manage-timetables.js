import BackButton from "@/components/BackButton";
import { CalendarDays } from "lucide-react";

const timetable = [
  { class: "BSc 2nd Year", day: "Monday", time: "10:00-11:00", subject: "Mathematics" },
  { class: "MSc 1st Year", day: "Tuesday", time: "12:00-1:00", subject: "Physics" },
  { class: "BCA 3rd Year", day: "Wednesday", time: "2:00-3:00", subject: "Computer Science" },
  { class: "BSc 2nd Year", day: "Thursday", time: "9:00-10:00", subject: "Chemistry" },
  { class: "MSc 1st Year", day: "Friday", time: "11:00-12:00", subject: "Biology" },
];

const FacultyManageTimetables = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><CalendarDays /> Manage Timetables</h1>
    <div className="bg-white rounded-lg shadow p-4">
      <table className="w-full text-blue-700">
        <thead>
          <tr>
            <th className="text-left">Class</th>
            <th className="text-left">Day</th>
            <th className="text-left">Time</th>
            <th className="text-left">Subject</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((row, i) => (
            <tr key={i}>
              <td>{row.class}</td>
              <td>{row.day}</td>
              <td>{row.time}</td>
              <td>{row.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default FacultyManageTimetables;