import React, { useState } from "react";

import { Line } from "react-svg-path";
import "./Line.css";

import Triangle from "./Triangle";

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
          liness = [...linesArray, value.id];
          setLinesArray(liness);
          <Triangle line={liness} type={numPlayer} />;
          console.log("click");
          // console.log(line);
          // console.log(liness);
        }}
        className={"line type" + value.type}
      />
    );
  });
};
export default Lines;
