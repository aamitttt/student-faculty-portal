import BackButton from "@/components/BackButton";
import { BookOpen, FileText } from "lucide-react";

const notes = [
  { subject: "Mathematics", title: "Algebra Notes", file: "algebra.pdf" },
  { subject: "Physics", title: "Kinematics Notes", file: "kinematics.pdf" },
  { subject: "English", title: "Poetry Notes", file: "poetry.pdf" },
];

const assignments = [
  { subject: "Mathematics", title: "Assignment 1", due: "2024-07-20", status: "Submitted" },
  { subject: "Physics", title: "Lab Report", due: "2024-07-22", status: "Pending" },
  { subject: "English", title: "Essay", due: "2024-07-25", status: "Pending" },
];

const StudentNotesAssignments = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4">Notes & Assignments</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold text-blue-800 mb-2 flex items-center gap-2"><BookOpen /> Notes</h2>
        <ul className="text-blue-700 space-y-2">
          {notes.map((note, i) => (
            <li key={i} className="flex items-center gap-2">
              <FileText className="text-blue-400" size={18} />
              <span className="font-bold">{note.subject}:</span> {note.title} <span className="text-xs text-blue-500">({note.file})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold text-blue-800 mb-2 flex items-center gap-2"><FileText /> Assignments</h2>
        <table className="w-full text-blue-700">
          <thead>
            <tr>
              <th className="text-left">Subject</th>
              <th className="text-left">Title</th>
              <th className="text-left">Due</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a, i) => (
              <tr key={i}>
                <td>{a.subject}</td>
                <td>{a.title}</td>
                <td>{a.due}</td>
                <td>
                  <span className={a.status === "Submitted" ? "text-green-600" : "text-yellow-600"}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default StudentNotesAssignments;