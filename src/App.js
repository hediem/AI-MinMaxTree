import React, { useState, useEffect } from "react";

import UI from "./components/UI";
import Router from "./components/Router";
import Game from "./components/Game";

function App() {
  const [number, setNumber] = useState(0);
  const [numPlayer, setNumPlayer] = useState(null);

  useEffect(() => {
    console.log(numPlayer);
  }, [numPlayer]);

  return (
    <>
      <Router path="/">
        <UI number={number} setNumber={setNumber} setNumPlayer={setNumPlayer} />
      </Router>
      <Router path="/game">
        <Game
          number={number}
          numPlayer={numPlayer}
          setNumPlayer={setNumPlayer}
        />
      </Router>
    </>
  );
}

export default App;
