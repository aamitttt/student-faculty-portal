import { Sidebar } from "@/components/Sidebar";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the SAC Portal</h1>
          <p className="text-xl text-gray-600 mb-8">
            Select a page from the sidebar to get started.
          </p>
        </div>
        <MadeWithDyad />
      </main>
    </div>
  );
};

export default Index;