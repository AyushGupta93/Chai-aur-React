import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  let myObj = {
    name: "Ayush",
    age: 30,
  };

  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        TailWind CSS
      </h1>
      <Card userName="Ayush" btnTxt="Click Me" />
      <Card userName="Akhand" myObj={myObj} />
    </>
  );
}

export default App;
