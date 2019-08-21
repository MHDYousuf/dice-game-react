import React, { Component } from "react";
import Container from "./Container";
import "./RollDice.css";
class RollDice extends Component {
  state = {
    flag: false
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
          <button
            className="p-2 mr-2"
            onClick={this.start}
            id="start-btn"
            type="submit"
          >
            Start
          </button>
          <button
            className="p-2"
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
