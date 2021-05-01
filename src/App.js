import "./App.css";
import React, { useState } from "react";
import FavMeals from "./favMeals/FavMeals";
import { RandomMeal } from "./randomMeals/RandomMeal";
import { SearchMeals } from "./SearchMeals";
import { SearchField } from "./components/SearchField";
import { useRandomRecepi } from "./hooks/useRandomRecepi";
import { useSearchRecipes } from "./hooks/useSearchRecipes.js";

function App() {
  // initilize API request
  const [query, setQuery] = useState("pizza");
  // get data from hook
  const meal = useRandomRecepi();
  // custom hook used ; send query to useSearchRecipe
  const searchMeal = useSearchRecipes(query);

  const [favoriteMeal, setFavoriteMeal] = useState({});

  const sendData = (e) => {
    setFavoriteMeal({
      favoriteMeal: e,
    });
  };

  return (
    <div className="App">
      <SearchField setQuery={setQuery} />

      <FavMeals favouriteMealData={favoriteMeal} />

      <RandomMeal
        mealID={meal.idMeal}
        name={meal.strMeal}
        area={meal.strArea}
        image={meal.strMealThumb}
        functionCall={sendData}
      />

      {searchMeal.map((recipe) => {
        return (
          <SearchMeals
            key={recipe.idMeal}
            mealID={recipe.idMeal}
            name={recipe.strMeal}
            area={recipe.strArea}
            image={recipe.strMealThumb}
            functionCall={sendData}
          />
        );
      })}
    </div>
  );
}

export default App;
