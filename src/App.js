// import React from "react";
import RollDice from "./Component/RollDice.jsx";
import "./App.css";
import image from "./images/trophy.jpg";
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
      // <div className="row m-0 h-100">
      //   <div className="card offset-4 col-4 my-auto">
      //     <img className="card-img-top" src={image} alt="Card image cap" />
      //     <div className="card-body">
      //       <h3 className="card-title">WINNER : Player2</h3>
      //       <h4 className="card-text">Player1 Score:15</h4>
      //       <h4 className="card-text">Player Score:25</h4>
      //     </div>
      //   </div>
      // </div>

      <>
        {this.state.flag ? (
          <RollDice onWin={this.onWinning} />
        ) : (
          this.winner_winner_chicken_dinner()
        )}
      </>
    );
  }
  onWinning = scoreboard => {
    console.log("winwin", scoreboard);
    this.setState({ flag: false, scoreboard });
  };
  winner_winner_chicken_dinner = () => {
    const { scoreboard } = this.state;

    if (scoreboard[0].totalscore > scoreboard[1].totalscore) {
      return <h2 className="p-3 m-3">WINNER:PLAYER 1</h2>;
    } else if (scoreboard[1].totalscore > scoreboard[0].totalscore) {
      return <h2 className="p-3 m-3">WINNER:PLAYER 2</h2>;
    } else {
      return <h2 className="p-3 m-3">Draw</h2>;
    }
  };
}
