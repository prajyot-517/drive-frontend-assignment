import { useEffect, useState } from "react";
import { fetchMakes } from "../services/api";

export const useMakes = () => {
  const [makes, setMakes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMakes()
      .then(setMakes)
      .finally(() => setLoading(false));
  }, []);

  return { makes, loading };
};