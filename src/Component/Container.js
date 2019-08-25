import React, { Component } from "react";
import "./Container.css";

class Container extends Component {
  render() {
    const { playerno, currentscore, totalscore } = this.props;
    return (
      <div className="col-sm-3 offset-2 score-board text-center p-5">
        <h4 className="p-3">Player {playerno}</h4>
        <h5 className="">{currentscore}</h5>
        <p className="p-2">Current Score</p>
        <h5 className="">{totalscore}</h5>
        <p className="p-2">Total Score</p>
        <div className="d-flex btn-group p-2" id="btn-group">
          <button type="submit" className="p-2 btn btn-success" id="submit-btn">
            Roll Dice
          </button>
          <button type="submit" className="p-2 btn btn-info" id="pass-btn">
            Pass
          </button>
        </div>
      </div>
    );
  }
}
Container.defaultProps = {
  currentscore: 0,
  totalscore: 0
};
export default Container;
