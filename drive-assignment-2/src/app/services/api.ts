export const fetchMakes = async () => {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
  );
  const data = await res.json();
  return data?.Results;
};

export const fetchModels = async (make: string) => {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`
  );
  const data = await res.json();
  return data?.Results;
};