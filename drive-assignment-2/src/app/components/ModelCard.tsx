export interface Model {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export default function ModelCard( { model }: { model: Model }) {
  return (
    <div className="border bg-gray-100 border-gray-300 rounded px-4 py-3 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
      <p className="sm:w-1/3">
        <span className="font-medium text-gray-500">ID :</span> {model?.Model_ID}
      </p>
      <p className="sm:w-1/3 text-left sm:text-center">
        <span className="font-medium text-gray-500">Make :</span> {model?.Make_Name}
      </p>
      <p className="sm:w-1/3 text-left sm:text-right">
        <span className="font-medium text-gray-500">Model :</span> {model?.Model_Name}
      </p>
    </div>
  );
}