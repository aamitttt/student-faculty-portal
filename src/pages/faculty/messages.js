import BackButton from "@/components/BackButton";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const initialMessages = [
  { from: "A. Sharma", content: "Can you clarify the assignment deadline?", time: "09:15" },
  { from: "Faculty", content: "Deadline is Friday, 5 PM.", time: "09:17" },
  { from: "B. Singh", content: "Will there be extra classes this week?", time: "10:02" },
  { from: "Faculty", content: "No extra classes this week.", time: "10:05" },
];

const FacultyMessages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <BackButton />
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><MessageCircle /> Messages</h1>
      <div className="bg-white rounded-lg shadow p-4 mb-4 h-64 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "Faculty" ? "justify-end" : "justify-start"}`}>
            <div className={`rounded-lg px-3 py-2 ${msg.from === "Faculty" ? "bg-blue-100 text-blue-900" : "bg-gray-100 text-gray-800"}`}>
              <div className="text-xs font-semibold">{msg.from}</div>
              <div>{msg.content}</div>
              <div className="text-xs text-gray-400 text-right">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>
      <form
        className="flex gap-2"
        onSubmit={e => {
          e.preventDefault();
          if (input.trim()) {
            setMessages([...messages, { from: "Faculty", content: input, time: "11:00" }]);
            setInput("");
          }
        }}
      >
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default FacultyMessages;