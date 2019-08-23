import React from "react";
import RollDice from "./Component/RollDice.jsx";
import "./App.css";
function App() {
  // Declare a new state variable, which we'll call "count"
  /*  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
*/
  return (
    <>
      <RollDice />
    </>
  );
}

export default App;
