import React, { useState } from "react";

import { Line } from "react-svg-path";
import "./Lines.css";

import { triangle } from "./Triangle";

const Lines = ({ line, setLine, numPlayer, setNumPlayer, refresher }) => {
  const [linesArray, setLinesArray] = useState([]);

  let liness;
  const typePlayer = (key) => {
    setLine(
      line.map((value, index) => {
        if (index == key) return { ...value, type: numPlayer };
        return value;
      })
    );
    setNumPlayer(numPlayer == 1 ? 2 : 1);
    refresher();
  };
  let typeLines = line.filter((line) => line.type == numPlayer);
  console.log(typeLines);
  return line.map((value, key) => {
    return (
      <Line
        sx={value.p1.x}
        sy={value.p1.y}
        ex={value.p2.x}
        ey={value.p2.y}
        strokeWidth={6}
        key={key}
        onClick={() => {
          typePlayer(key);
          console.log(line);
          console.log(`type player in Lines ${numPlayer}`);
          liness = [...linesArray, value.id];
          setLinesArray(liness);
          triangle(typeLines, numPlayer);
        }}
        className={"line type" + value.type}
      />
    );
  });
};
export default Lines;
