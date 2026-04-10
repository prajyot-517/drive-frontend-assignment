import { useEffect, useState } from "react";
import { fetchMakes } from "../services/api";

export type Make = { Make_ID: number; Make_Name: string };

export const useMakes = () => {
  const [makes, setMakes] = useState<Make[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMakes()
      .then(setMakes)
      .finally(() => setLoading(false));
  }, []);

  return { makes, loading };
};
