import React, { Component } from "react";
import "./Container.css";

class Container extends Component {
  turnWait = () => {
    console.log("huhu");
  };
  buttons = () => {
    if (!this.props.playing) {
      return (
        <p className="badge p-3 badge-info" onSelect={this.turnWait()}>
          Wait For your Turn
        </p>
      );
    } else {
      return (
        <>
          <button
            type="submit"
            className="p-2"
            onClick={this.props.onRoll}
            id="submit-btn"
          >
            Roll Dice
          </button>
          <button
            type="submit"
            className="p-2 m-2"
            onClick={this.props.onPass}
            id="submit-btn"
          >
            Pass
          </button>
        </>
      );
    }
  };
  classer = () => {
    let class_s = "col-sm-3 offset-2 score-board text-center p-5";
    if (this.props.playing) {
      class_s += " shadow-selected";
    }
    return class_s;
  };
  render() {
    const { playerno } = this.props;
    const { currentscore, totalscore } = this.props.score;
    return (
      <div className={this.classer()}>
        <h4 className="p-3">Player {playerno}</h4>
        <h5 className="">{currentscore}</h5>
        <p className="p-2">Current Score</p>
        <h5 className="">{totalscore}</h5>
        <p className="p-2">Total Score</p>
        {this.buttons()}
      </div>
    );
  }
}
Container.defaultProps = {
  currentscore: 0,
  totalscore: 0
};
export default Container;
