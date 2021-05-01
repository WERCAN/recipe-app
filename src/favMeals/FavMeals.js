import React from "react";

export default function FavMeals({ favouriteMealData }) {
  
  console.log(favouriteMealData)

  const documentData = JSON.parse(localStorage.getItem("document"));

  if (documentData) {
    var list = (
      <ul className="fav-meals" id="fav-meals">
        <li>
          <img src={documentData.image} alt="" />
          <span>{documentData.title}</span>
        </li>
      </ul>
    );
  } else {
  }


  return (
    <div>
      <div className="fav-container">
        <h3>Favorite Meals</h3>
        {list}
      </div>
    </div>
  );
}
