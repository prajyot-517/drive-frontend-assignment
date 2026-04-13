import ModelCard, { Model } from "./ModelCard";
interface ModelListProps {
  models: Model[];
  selectedMake: string;
}

export default function ModelList({ models, selectedMake }: ModelListProps) {
  return (
    <div className="mt-6 sm:mt-8">
      {selectedMake && (
        <h2 className="text-2xl font-bold mb-4">{selectedMake} Models :</h2>
      )}
      <div className="flex flex-col gap-4">
        {!models || models?.length === 0 ? (
          <p className="text-gray-500">No records found.</p>
        ) : (
          models?.map((model: Model) => (
            <ModelCard key={model?.Model_ID} model={model} />
          ))
        )}
      </div>
    </div>
  );
}
