import React, { Component } from "react";
import "./Container.css";
import RollDice from "./RollDice";

class Container extends Component {
  state = {
    currentscore: this.props.currentscore,
    totalscore: this.props.totalscore
  };
  render() {
    const { playerno, onRoll, onPass } = this.props;
    return (
      <div
        className="col-sm-3 offset-2 score-board text-center p-5 shadow-lg"
        // style={{ boxShadow: "5px 5px 20px #999" }}
      >
        <h4 className="p-3">Player {playerno}</h4>
        <h5 className="">{this.state.currentscore}</h5>
        <p className="p-2">Current Score</p>
        <h5 className="">{this.state.totalscore}</h5>
        <p className="p-2">Total Score</p>
        <button type="submit" className="p-2" onClick={onRoll} id="submit-btn">
          Roll Dice
        </button>
        <button
          type="submit"
          className="p-2 m-2"
          onClick={onPass}
          id="submit-btn"
        >
          Pass
        </button>
      </div>
    );
  }
  RollDice = () => {};
}
Container.defaultProps = {
  currentscore: 0,
  totalscore: 0
};
export default Container;
