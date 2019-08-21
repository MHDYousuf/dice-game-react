import React, { Component } from "react";
import "./Container.css";

class Container extends Component {
  render() {
    const { playerno, currentscore, totalscore } = this.props;
    return (
      <div
        className="col-sm-3 offset-2 score-board text-center p-5"
        // style={{ boxShadow: "5px 5px 20px #999" }}
      >
        <h4 className="p-3">Player {playerno}</h4>
        <h5 className="">{currentscore}</h5>
        <p className="p-2">Current Score</p>
        <h5 className="">{totalscore}</h5>
        <p className="p-2">Total Score</p>
        <button type="submit" className="p-2" id="submit-btn">
          Roll Dice
        </button>
      </div>
    );
  }
}
Container.defaultProps = {
  currentscore: 0,
  totalscore: 0
};
export default Container;
