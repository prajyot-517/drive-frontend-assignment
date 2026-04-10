import { useState } from "react";
import { fetchModels } from "../services/api";

export const useModels = () => {
  const [models, setModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getModels = async (make: string) => {
    setLoading(true);
    const data = await fetchModels(make);
    setModels(data);
    setLoading(false);
  };

  return { models, loading, getModels };
};