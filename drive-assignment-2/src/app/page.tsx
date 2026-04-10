import { useState } from "react";
import MakeDropdown from "./components/MakeDropdown";

export default function Home() {

  const [selectedMake, setSelectedMake] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Makes</h1>

          <MakeDropdown
            selected={selectedMake}
            onChange={setSelectedMake}
          />

        <button
          className="bg-blue-500 text-white px-4 py-2 mt-3"
        >
          Fetch Models
        </button>

      </div>
    </main>
  );
}
