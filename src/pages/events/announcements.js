import BackButton from "@/components/BackButton";
import { Megaphone, CalendarDays, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const eventList = [
  {
    id: 1,
    title: "Coding Hackathon",
    date: "2024-07-15",
    description: "Join our 24-hour coding marathon. Prizes for top teams!",
    registered: false,
  },
  {
    id: 2,
    title: "Guest Lecture: AI Trends",
    date: "2024-07-20",
    description: "Industry expert shares the latest in Artificial Intelligence.",
    registered: true,
  },
  {
    id: 3,
    title: "Sports Meet",
    date: "2024-07-25",
    description: "Annual sports event. Register for your favorite games.",
    registered: false,
  },
];

const EventAnnouncements = () => (
  <div className="p-8">
    <BackButton />
    <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <Megaphone /> Event Announcements
    </h1>
    <div className="space-y-6">
      {eventList.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays className="text-blue-600" />
            <span className="font-bold text-blue-900">{event.title}</span>
            <span className="ml-auto text-blue-700">{event.date}</span>
          </div>
          <p className="text-blue-700 mb-2">{event.description}</p>
          <Button variant={event.registered ? "secondary" : "default"} disabled={event.registered}>
            {event.registered ? "Registered" : "Register"}
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export default EventAnnouncements;