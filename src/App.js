import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FavMeals from "./favMeals/FavMeals";
import { RandomMeal } from "./randomMeals/RandomMeal";
import { SearchMeals } from "./SearchMeals";

const API = "https://www.themealdb.com/api/json/v1/1/random.php";

function App() {

  const [meal, setMeal] = useState({});
  const [favoriteMeal, setFavoriteMeal] = useState({});
  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('pizza')
  const [searchMeal, setSearchMeal] = useState([]);
  

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setMeal(res.data.meals[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendData = (e) => {
    setFavoriteMeal({
      favoriteMeal: e,
    });
  };

  

const SEARCH_API="https://www.themealdb.com/api/json/v1/1/search.php?s="+query;

  useEffect(() => {
      axios
      .get(SEARCH_API)
      .then((res) => {
        setSearchMeal(res.data.meals);
      }).catch((error) => {
        console.log(error);
      });
  }, [query])

 const updateSearch = e =>{
 setSearch(e.target.value)
 }

 const getSearch=(e)=>{
   e.preventDefault();
   setQuery(search);
   setSearch('');
 }

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input type="text" placeholder="write a meal" value={search} onChange={updateSearch}></input>
        <button type='submit' onClick={getSearch}>
          <i className="fas fa-search" />
        </button>
      </form>
      <FavMeals favouriteMealData={favoriteMeal} />
      <RandomMeal mealID={meal.idMeal}
            name={meal.strMeal}
            area={meal.strArea}
            image={meal.strMealThumb} functionCall={sendData} />
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
