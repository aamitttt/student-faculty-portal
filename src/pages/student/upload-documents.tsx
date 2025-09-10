import BackButton from "@/components/BackButton";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const initialDocs = [
  { name: "10th Marksheet.pdf", uploaded: "2024-07-01" },
  { name: "12th Certificate.pdf", uploaded: "2024-07-02" },
  { name: "Transfer Certificate.pdf", uploaded: "2024-07-03" },
];

const StudentUploadDocuments = () => {
  const [docs, setDocs] = useState(initialDocs);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="p-8">
      <BackButton />
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><Upload /> Upload Documents</h1>
      <form
        className="flex gap-2 mb-6"
        onSubmit={e => {
          e.preventDefault();
          if (file) {
            setDocs([...docs, { name: file.name, uploaded: new Date().toISOString().slice(0, 10) }]);
            setFile(null);
          }
        }}
      >
        <Input
          type="file"
          onChange={e => setFile(e.target.files?.[0] || null)}
          className="w-auto"
        />
        <Button type="submit" disabled={!file}>Upload</Button>
      </form>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold text-blue-800 mb-2">Uploaded Documents</h2>
        <ul className="text-blue-700 space-y-1">
          {docs.map((doc, i) => (
            <li key={i} className="flex justify-between">
              <span>{doc.name}</span>
              <span className="text-xs text-blue-400">{doc.uploaded}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentUploadDocuments;