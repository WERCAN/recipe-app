import React from "react";

export function FavMeals({ favouriteMealData, unFavMeal }) {
  // below gets Meals From Local Storage
  // however can't get image and name from random recipe !!!!!!!!!
  // const mealsInfo = JSON.parse(localStorage.getItem("mealsInfo"));
  // we can get favmeal's image and name from mealsInfo

  var list = (favouriteMealData || []).map((item) => {
    return (
      <li key={item.idMeal}>
        <img src={item.strMealThumb} alt="" />
        <span>{item.strMeal}</span>
      </li>
    );
  });

  if (unFavMeal) {
    const newList =list.filter((item) => item.key !== unFavMeal);
    list = newList;
  }

  console.log(list);

  return (
    <div>
      <div className="fav-container">
        <h3>Favorite Meals</h3>
        <ul className="fav-meals" id="fav-meals">
          {list}
        </ul>
      </div>
    </div>
  );
}
