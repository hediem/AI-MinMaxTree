import React, { useState } from "react";

import { Line } from "react-svg-path";
import "./Lines.css";

import { triangle } from "./Triangle";
import { move } from "./Move";

const Lines = ({ line, setLine, numPlayer, refresher, points }) => {
  const [linesArray, setLinesArray] = useState([]);

  const typePlayer = (key, numPlayer) => {
    let temp = line.map((value, index) => {
      if (index == key) return { ...value, type: numPlayer };
      return value;
    });

    setLine(temp);
    refresher();
    return temp;
  };
  const handleClick = (value, key) => {
    let temp = typePlayer(key, 1);
    let liness = [...linesArray, value.id];
    setLinesArray(liness);
    let typeLines = temp.reduce((theList, line) => {
      if (line.type == numPlayer) {
        return [...theList, line.id];
      }
      return theList;
    }, []);
    triangle(typeLines, 1);
    let x = move(line, points);
    console.log(x);
    console.log(line);
    let index = line.findIndex(
      (value) => value.id.p1 == x.id.p1 && value.id.p2 == x.id.p2
    );
    temp = typePlayer(index, 2);
    typeLines = temp.reduce((theList, line) => {
      if (line.type == 2) {
        return [...theList, line.id];
      }
      return theList;
    }, []);
    console.log(typeLines);
    triangle(typeLines, 2);
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
