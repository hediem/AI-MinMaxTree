import React from "react";

import Draw from "./Draw";
import "./Game.css";
const Game = ({ number, numPlayer, setNumPlayer }) => {
  return (
    <div className="main1">
      <div className="turnMessage">{`Thats ${
        numPlayer == 1 ? "your" : "computer"
      } turn`}</div>
      <Draw number={number} numPlayer={numPlayer} setNumPlayer={setNumPlayer} />
    </div>
  );
};

export default Game;
