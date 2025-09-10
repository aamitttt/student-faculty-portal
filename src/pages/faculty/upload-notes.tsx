import { Sidebar } from "@/components/Sidebar";
import BackButton from "@/components/BackButton";
import { Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const initialNotes = [
  { title: "Algebra Notes", file: "algebra.pdf", uploaded: "2024-07-01" },
  { title: "Physics Assignment 1", file: "assignment1.pdf", uploaded: "2024-07-03" },
  { title: "CS Lab Manual", file: "lab_manual.pdf", uploaded: "2024-07-05" },
];

const FacultyUploadNotes = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Sidebar role="faculty" />
      <div className="flex-1 p-8">
        <BackButton />
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><Upload /> Upload Assignments & Notes</h1>
        <form
          className="flex flex-col md:flex-row gap-2 mb-6"
          onSubmit={e => {
            e.preventDefault();
            if (file && title) {
              setNotes([...notes, { title, file: file.name, uploaded: new Date().toISOString().slice(0, 10) }]);
              setFile(null);
              setTitle("");
            }
          }}
        >
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full md:w-1/3"
          />
          <Input
            type="file"
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="w-full md:w-1/3"
          />
          <Button type="submit" disabled={!file || !title}>Upload</Button>
        </form>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold text-blue-800 mb-2 flex items-center gap-2"><FileText /> Uploaded Files</h2>
          <ul className="text-blue-700 space-y-1">
            {notes.map((note, i) => (
              <li key={i} className="flex justify-between">
                <span>{note.title} <span className="text-xs text-blue-400">({note.file})</span></span>
                <span className="text-xs text-blue-400">{note.uploaded}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FacultyUploadNotes;