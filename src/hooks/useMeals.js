import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

const useMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setError(false);
        setLoading(true);

        const data = await fetchData("http://localhost:3000/meals");
        setMeals(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return { meals, loading, error };
};

export default useMeals;
