import React from 'react';
import './App.css';
import C from "./components/MyChart";

function App() {
  return (
    <div className="App">
      <button>Randomize Data</button>
      <header className="App-header">
        <C />
      </header>
      Selected Item: ....
    </div>
  );
}

export default App;
