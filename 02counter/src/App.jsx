import { useState } from "react";
import "./App.css";

function App() {
  //let Counter = 5;
  let [counter, setCounter] = useState(15); // returns array
  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      // setCounter(counter);
      // setCounter(counter);
      // setCounter(counter);
      setCounter((preCounter) => preCounter + 1); // using callback we can get previous value
      setCounter((preCounter) => preCounter + 1);
      setCounter((preCounter) => preCounter + 1);
      console.log("Clicked Button", counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log("Clicked Button", counter);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value : {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
