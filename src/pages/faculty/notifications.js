import BackButton from "@/components/BackButton";
import { Bell } from "lucide-react";

const notifications = [
  { id: 1, text: "Assignment 2 submitted by A. Sharma." },
  { id: 2, text: "New student registered: B. Singh." },
  { id: 3, text: "Event: Faculty meeting at 4 PM today." },
];

const FacultyNotifications = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><Bell /> Notifications</h1>
    <ul className="bg-white rounded-lg shadow p-4 text-blue-700 space-y-2">
      {notifications.map((n) => (
        <li key={n.id} className="flex items-center gap-2">
          <Bell className="text-blue-400" size={16} /> {n.text}
        </li>
      ))}
    </ul>
  </div>
);

export default FacultyNotifications;