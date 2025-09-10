import BackButton from "@/components/BackButton";

const timetable = [
  { day: "Monday", slots: ["9:00-10:00 - Mathematics", "10:15-11:15 - Physics", "11:30-12:30 - English"] },
  { day: "Tuesday", slots: ["9:00-10:00 - Chemistry", "10:15-11:15 - Computer Science", "11:30-12:30 - Physical Education"] },
  { day: "Wednesday", slots: ["9:00-10:00 - Biology", "10:15-11:15 - Mathematics", "11:30-12:30 - History"] },
  { day: "Thursday", slots: ["9:00-10:00 - Physics", "10:15-11:15 - Chemistry", "11:30-12:30 - Computer Science"] },
  { day: "Friday", slots: ["9:00-10:00 - English", "10:15-11:15 - Mathematics", "11:30-12:30 - Geography"] },
];

const StudentTimetable = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4">Student Timetable</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {timetable.map((day) => (
        <div key={day.day} className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold text-blue-800 mb-2">{day.day}</h2>
          <ul className="text-blue-700 space-y-1">
            {day.slots.map((slot, i) => (
              <li key={i} className="pl-2 border-l-4 border-blue-200">{slot}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default StudentTimetable;