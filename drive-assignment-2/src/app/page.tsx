"use client";

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
      <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Makes</h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full sm:flex-1">
              <MakeDropdown
                makes={makes}
                selected={selectedMake}
                onChange={setSelectedMake}
                loading={makesLoading}
              />
            </div>
            <button
              onClick={() => getModels(selectedMake)}
              className="bg-blue-500 text-white px-4 py-1.5 rounded-lg w-full sm:w-auto"
            >
              Fetch Models
            </button>
          </div>
        {!modelsLoading && (
          <ModelList models={models} selectedMake={selectedMake} />
        )}
      </div>
  );
}
