import React from "react";
import HeartBtn from './components/HeartBtn';

export function SearchMeals({name,image,mealID,functionCall,area}) {
  return (
    <div className="meal">
      <div className="meal-header">
        <span className="random"> {area} </span>
        <img src={image} alt="Random" />
      </div>

      <div className="meal-body">
        <h4>{name}</h4>
        <HeartBtn name={name} mealId={mealID} func={functionCall} image={image}/>
      </div>
    </div>
  );
}