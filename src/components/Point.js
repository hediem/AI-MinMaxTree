import React, { useEffect, useState } from "react";

import { Circle } from "react-svg-path";

const Point = ({ points, setPoints, setLine, number }) => {
  // const [points, setPoints] = useState([]);
  let counter = 0;
  //points
  useEffect(() => {
    let pointsArray = [];
    const Deg = (2 * Math.PI) / number;
    for (let i = 0; i < number; i++) {
      const temp = i * Deg;

      pointsArray.push({
        x: 300 + 280 * Math.cos(temp),
        y: 300 - 280 * Math.sin(temp),
        id: counter,
        deg: number - 1,
      });
      counter++;
    }
    //line
    let lineArray = [];
    for (let i = 0; i < number - 1; i++) {
      for (let j = i + 1; j < number; j++) {
        lineArray.push({
          p1: {
            x: pointsArray[i].x,
            y: pointsArray[i].y,
            // deg: pointsArray[i].deg,
          },
          p2: {
            x: pointsArray[j].x,
            y: pointsArray[j].y,
            // deg: pointsArray[j].deg,
          },
          id: {
            p1: pointsArray[i].id,
            p2: pointsArray[j].id,
          },
          type: 0,
        });
      }
    }
    setPoints(pointsArray);
    setLine(lineArray);
  }, []);

  return points.map((value, key) => {
    return (
      <Circle
        size={6}
        cx={value.x}
        cy={value.y}
        stroke="#000000"
        strokeWidth={1}
        fill="#000000"
        strokeLinecap="round"
        key={key}
      />
    );
  });
};

export default Point;
