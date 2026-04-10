import { useState } from "react";
import { useMakes } from "./hooks/useMakes";
import { useModels } from "./hooks/useModel";
import MakeDropdown from "./components/MakeDropdown";
import ModelList from "./components/ModelList";

export default function Home() {

  const { makes, loading: makesLoading } = useMakes();
  const { models, loading: modelsLoading, getModels } = useModels();

  const [selectedMake, setSelectedMake] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Makes</h1>

        {makesLoading ? (
          <p>Loading makes...</p>
        ) : (
          <MakeDropdown
            makes={makes}
            selected={selectedMake}
            onChange={setSelectedMake}
          />
        )}

        <button
          onClick={() => getModels(selectedMake)}
          className="bg-blue-500 text-white px-4 py-2 mt-3"
        >
          Fetch Models
        </button>

        {!modelsLoading && models?.length > 0 && <ModelList
         models={models} />}
      </div>
    </main>
  );
}
