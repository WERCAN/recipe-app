import { useEffect, useState } from "react";
import axios from "axios";

export const useGetRecipeByName = (mealName) => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    if (mealName) {
      try {
        (async () => {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
          );

          setMeal((oldArray) => [...oldArray, response.data.meals[0]]);
        })();
      } catch (err) {
        console.log(err);
      }
    }
  }, [mealName]);

  return meal;
};
