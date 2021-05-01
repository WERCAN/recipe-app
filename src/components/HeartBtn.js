import React, { Component} from 'react';
 
export default class HeartBtn extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.name,
            image: this.props.image,
            mealID: this.props.mealID,
            toggle: false
        }
    }


    handleClickSubmit() {
       localStorage.setItem(this.props.name,JSON.stringify(this.state.title,this.state.image,this.state.mealID));
    }
 

   trigger(){
    this.setState(prevState=>({
        toggle: !prevState.toggle
    }));
    this.props.func(this.state);
    // console.log(this.state)
  };

render(){
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
      )
}
};
