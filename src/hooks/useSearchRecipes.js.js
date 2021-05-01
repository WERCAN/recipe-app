import { useEffect, useState } from "react";
import axios from "axios";

export const useSearchRecipes = (searchTerm) => {
  const [searchMeal, setSearchMeal] = useState([]);

  // try{()()} first one function name second one to call it
  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );

        setSearchMeal(response.data.meals);
      })();
    } catch (err) {
      console.log(err);
    }
  }, [searchTerm]);

  return searchMeal;
};

// //isimsiz fonksiyon tanimi
// ()=>{fonksiyonun yaptigi isler} ()
// //isimli fonksiyon- tanimi
// const isimlifoksiyon = () =>{yaptogi is};
// isimlifoksiyon()
// //fonksiyonun cagirilmasi

// ()
