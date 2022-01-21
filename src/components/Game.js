import React from "react";

import Draw from "./Draw";
import "./Game.css";
const Game = ({ number, numPlayer, setNumPlayer }) => {
  return (
    <div>
      <div className="turnMessage">{`That's ${
        numPlayer == 1 ? "your" : "computer"
      } turn`}</div>
      <div className="main1">
        <Draw
          number={number}
          numPlayer={numPlayer}
          setNumPlayer={setNumPlayer}
        />
      </div>
    </div>
  );
};

export default Game;
