import { useEffect, useState } from "react";
import axios from "axios";

export const useRandomRecepi = () => {
  const [meal, setMeal] = useState({});

  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );

        setMeal(response.data.meals[0]);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return meal;
};
