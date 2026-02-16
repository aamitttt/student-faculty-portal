import BackButton from "@/components/BackButton";
import { CalendarDays } from "lucide-react";

const events = [
  { date: "2024-07-10", title: "Orientation Day" },
  { date: "2024-07-15", title: "Coding Hackathon" },
  { date: "2024-07-20", title: "Guest Lecture: AI Trends" },
  { date: "2024-07-25", title: "Sports Meet" },
];

const daysInMonth = 31;
const month = "July 2024";

function getEventForDay(day) {
  const date = `2024-07-${day.toString().padStart(2, "0")}`;
  return events.find((e) => e.date === date);
}

const EventCalendar = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <CalendarDays /> Event Calendar
    </h1>
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="font-semibold text-blue-800 mb-4">{month}</h2>
      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const event = getEventForDay(day);
          return (
            <div
              key={day}
              className={`rounded-lg p-2 border ${event ? "bg-blue-100 border-blue-400" : "bg-gray-50 border-gray-200"}`}
            >
              <div className="font-bold">{day}</div>
              {event && <div className="text-xs text-blue-700 mt-1">{event.title}</div>}
            </div>
          );
        })}
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-blue-800 mb-2">Upcoming Events</h3>
        <ul className="text-blue-700 space-y-1">
          {events.map((e) => (
            <li key={e.date}>
              <span className="font-bold">{e.date}:</span> {e.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default EventCalendar;