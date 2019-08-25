import React, { Component } from "react";
import Container from "./Container";
import "./RollDice.css";
class RollDice extends Component {
  state = {
    flag: false,
    isStarted: false
  };
  start = e => {
    e.preventDefault();
    this.state.flag === false
      ? this.setState({ flag: true })
      : this.setState({ flag: false });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h3 className="pt-5 texcolor">Dice Game</h3>
          </div>
          <div className="text-center pt-5 pb-0">
            <h5>{Math.floor(Math.random() * 6 + 1)}</h5>
          </div>
        </div>
        <div className="d-flex">
          <Container
            key="player1"
            playerno="1"
            currentscore="0"
            totalscore="0"
          />
          <Container
            key="player2"
            playerno="2"
            currentscore="0"
            totalscore="0"
          />
        </div>
        <div className="text-center pt-4">
          {!this.state.flag ? (
            <button
              className="pl-5 pr-5 pt-2 pb-2 btn btn-primary"
              onClick={this.start}
              id="start-btn"
              type="submit"
            >
              Start
            </button>
          ) : (
            <button
              className="pl-5 pr-5 pt-2 pb-2 btn btn-danger"
              onClick={this.start}
              id="start-btn"
              type="submit"
            >
              Stop
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default RollDice;
