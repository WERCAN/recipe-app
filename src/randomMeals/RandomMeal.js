import React from "react";
import HeartBtn from "../components/HeartBtn";

export function RandomMeal(props) {
  return (
    <div className="meal">
      <div className="meal-header">
        <span className="random"> Today's Recipe </span>
        <img src={props.image} alt="Random" />
      </div>

      <div className="meal-body">
        <h4>{props.name}</h4>
        
        <HeartBtn mealID={props.mealID}
            name={props.name}
            area={props.area}
            image={props.image} func={ props.functionCall}/>
      </div>
    </div>
  );
}
