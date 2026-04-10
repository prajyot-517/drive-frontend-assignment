import ModelCard from "./ModelCard";

export default function ModelList({ models }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {models?.lenght >0 && models?.map((model: any, index: number) => (
        <ModelCard key={index} model={model} />
      ))}
    </div>
  );
}