import React, { useState } from "react";

import { Line } from "react-svg-path";
import "./Lines.css";

import { triangle } from "./Triangle";

const Lines = ({ line, setLine, numPlayer, setNumPlayer, refresher }) => {
  const [linesArray, setLinesArray] = useState([]);

  const typePlayer = (key) => {
    let temp = line.map((value, index) => {
      if (index == key) return { ...value, type: numPlayer };
      return value;
    });

    setLine(temp);
    setNumPlayer(numPlayer == 1 ? 2 : 1);
    refresher();
    return temp;
  };
  const handleClick = (value, key) => {
    let temp = typePlayer(key);
    let liness = [...linesArray, value.id];
    setLinesArray(liness);
    let typeLines = temp.reduce((theList, line) => {
      if (line.type == numPlayer) {
        return [...theList, line.id];
      }
      return theList;
    }, []);
    triangle(typeLines, numPlayer);
  };
  return line.map((value, key) => {
    return (
      <Line
        sx={value.p1.x}
        sy={value.p1.y}
        ex={value.p2.x}
        ey={value.p2.y}
        strokeWidth={6}
        key={key}
        onClick={() => handleClick(value, key)}
        className={"line type" + value.type}
      />
    );
  });
};
export default Lines;
