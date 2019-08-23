import React, { Component } from "react";
import Container from "./Container";
import "./RollDice.css";
class RollDice extends Component {
  state = {
    flag: false,
    dice: 0,
    player1: true,
    player2: false,
    scorboard: [
      { playing: true, currentscore: 0, totalscore: 0, num: 1 },
      { playing: false, currentscore: 0, totalscore: 0, num: 2 }
    ]
  };
  start = e => {
    e.preventDefault();
    if (e.target.innerHTML === "Start") {
      this.setState({ flag: false });
      e.target.innerHTML = "Stop";
    } else {
      this.setState({ flag: true });
      e.target.innerHTML = "Start";
    }
  };
  hold = () => {};
  handleRoll = () => {
    const dice = Math.floor(Math.random() * 6 + 1);
    const scorboard = this.state.scorboard.map(c => {
      c.currentscore += c.playing && dice;
      return c;
    });

    this.setState({ dice, scorboard });
    return dice;
  };
  handlePass = () => {
    let { scorboard } = this.state;
    if (scorboard[0].playing) {
      scorboard[0].playing = false;
      scorboard[1].playing = true;
      scorboard[0].totalscore += scorboard[0].currentscore;
      scorboard[0].currentscore = 0;
    } else {
      scorboard[1].playing = false;
      scorboard[0].playing = true;
      scorboard[1].totalscore += scorboard[1].currentscore;
      scorboard[1].currentscore = 0;
    }
    this.setState({ scorboard });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h3 className="pt-5 texcolor">Dice Game</h3>
          </div>
          <div className="text-center pt-5 pb-0">
            <h5>{this.state.dice}</h5>
          </div>
        </div>
        <div className="d-flex">
          {/* <Container
            key="player1"
            playerno={0}
            score={this.state.scorboard[0]}
            playing={this.state.player1}
            onRoll={this.handleRoll}
            onPass={this.handlePass}
          />
          <Container
            key="player2"
            playerno={1}
            score={this.state.scorboard[1]}
            playing={this.state.player2}
            onRoll={this.handleRoll}
            onPass={this.handlePass}
          /> */}
          {this.state.scorboard.map(c => (
            <Container
              key={"player" + c.num}
              playerno={c.num}
              score={c}
              playing={c.playing}
              onRoll={this.handleRoll}
              onPass={this.handlePass}
            />
          ))}
        </div>
        <div className="text-center pt-4">
          <button
            className="p-2 mr-2 btn btn-dark"
            onClick={this.start}
            id="start-btn"
            type="submit"
          >
            Start
          </button>
          <button
            className="p-2 btn btn-warning"
            onClick={this.hold}
            id="reset-btn"
            type="reset"
          >
            Hold
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;

// import React, { useState } from "react";
// import Container from "./Container";
// import "./RollDice.css";
// function RollDice() {
//   const start = e => {
//     e.preventDefault();
//     if (e.target.innerHTML === "Start") {
//       e.target.innerHTML = "Stop";
//     } else e.target.innerHTML = "Start";
//   };
//   const hold = () => {};
//   return (
//     <div>
//       <div className="container">
//         <div className="text-center">
//           <h3 className="pt-5 texcolor">Dice Game</h3>
//         </div>
//         <div className="text-center pt-5 pb-0">
//           <h5>{Math.floor(Math.random() * 6 + 1)}</h5>
//         </div>
//       </div>
//       <div className="d-flex">
//         <Container key="player1" playerno="1" currentscore="0" totalscore="0" />
//         <Container key="player2" playerno="2" currentscore="0" totalscore="0" />
//       </div>
//       <div className="text-center pt-4">
//         <button
//           className="p-2 mr-2"
//           onClick={start}
//           id="start-btn"
//           type="submit"
//         >
//           Start
//         </button>
//         <button className="p-2" onClick={hold} id="reset-btn" type="reset">
//           Hold
//         </button>
//       </div>
//     </div>
//   );
// }
