import React, { Component } from "react";

export default class HeartBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }

  mealsInfo = {
    name: this.props.name,
    image: this.props.image,
    mealIDFromRandom: this.props.mealID ? this.props.mealID : "",
    mealIDFromSearch: this.props.mealId ? this.props.mealId : "",
  };

  getMealsLS() {
    const mealsInfo = JSON.parse(localStorage.getItem("mealsInfo"));
    return mealsInfo === null ? [] : mealsInfo;
  }

  removeMealsLS(mealId) {
    const meals = this.getMealsLS();

    localStorage.setItem(
      "mealsInfo",
      JSON.stringify(meals.filter((id) => id !== mealId))
    );
  }

  handleClickSubmit() {
    const meals = this.getMealsLS();
    localStorage.setItem(
      "mealsInfo",
      JSON.stringify([...meals, this.mealsInfo])
    );
  }

  trigger() {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));

    if (this.props.mealID) {
      this.props.func(this.props.nameFromRandom);
    }

    if (this.props.mealId) {
      this.props.func(this.props.name);
    }

    if (this.state.toggle === true) {
      this.props.func(this.props.name, this.props.mealId);
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.trigger();
            this.handleClickSubmit();
          }}
          className={`fav-btn ${this.state.toggle ? "active" : ""}`}
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>
    );
  }
}
