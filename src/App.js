import React, { useState } from "react";
import "./App.css";
import MyChart from "./components/MyChart";

const App = () => {
  const [item, setItem] = useState();
  const [data, setData] = useState();

  const setItemFunction = (childData) => {
    setItem(childData);
  };

  const clickFunction = () => {
    setData(Array.from({length: 4}, () => Math.floor(Math.random() * 40)));
  }

  return (
    <div className="App">
      <button onClick={clickFunction}>Randomize Data</button>
      <header className="App-header">
        <MyChart setItem={setItemFunction} initialData={data} /> 
      </header>
      Selected Item: {item}
    </div>
  );
};

export default App;
