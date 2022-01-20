import React, { useState } from "react";

import { Line } from "react-svg-path";
import "./Lines.css";

import { triangle } from "./Triangle";

const Lines = ({ line, setLine, numPlayer, setNumPlayer, refresher }) => {
  const [linesArray, setLinesArray] = useState([]);
  const [triangleTest, SetTriangleTest] = useState();

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
  // const pointDeg = (key) => {
  //   setLine(
  //     line.map((value,index) =>{
  //       if(index == key) return{...value,{"p1.deg":deg , "p2.deg ": deg}};
  //       return value;
  //     })
  //   )
  //   setDeg(deg--);
  //   refresher();
  // }

  return line.map((value, key) => {
    return (
      <>
        <Line
          sx={value.p1.x}
          sy={value.p1.y}
          ex={value.p2.x}
          ey={value.p2.y}
          strokeWidth={6}
          key={key}
          onClick={() => {
            typePlayer(key);
            // console.log(value.p1.deg - 1);
            // console.log(value.p2.deg - 1);
            liness = [...linesArray, value.id];
            setLinesArray(liness);
            triangle(liness, numPlayer);
            // console.log("click");
            // console.log(line);
            // console.log(liness);
          }}
          className={"line type" + value.type}
        />
        {/* {triangleTest ? <Alert numPlayer={numPlayer} /> : ""} */}
      </>
    );
  });
};
export default Lines;
