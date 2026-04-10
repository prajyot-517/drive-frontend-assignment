export default function ModelCard({ model }: any) {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="font-bold">{model?.Model_Name}</h3>
      <p className="text-sm text-gray-500">{model?.Make_Name}</p>
    </div>
  );
}