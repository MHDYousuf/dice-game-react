// import React from "react";
import RollDice from "./Component/RollDice.jsx";
import "./App.css";
// function App() {
//   // Declare a new state variable, which we'll call "count"
//   /*  const [count, setCount] = useState(0);
//   const [age, setAge] = useState(42);
//   const [fruit, setFruit] = useState("banana");
//   const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
// */
//   return (
//     <>
//       <RollDice />
//     </>
//   );
// }

// export default App;
import React, { Component } from "react";

export default class App extends Component {
  state = { flag: true, scoreboard: [] };
  render() {
    return (
      <>
        {this.state.flag ? (
          <RollDice onWin={() => this.onWinning} />
        ) : (
          this.winner_winner_chicken_dinner()
        )}
      </>
    );
  }
  onWinning = () => {
    console.log("winwin");
    //this.setState({ flag: false, scoreboard });
  };
  winner_winner_chicken_dinner = () => {
    const { scoreboard } = this.state;

    if (scoreboard[0].totalscore > scoreboard[1].totalscore) {
      return "player1";
    } else {
      return "player2";
    }
  };
}
