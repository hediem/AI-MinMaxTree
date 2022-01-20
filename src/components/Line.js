import React, { useEffect, useState } from "react";

import { Line } from "react-svg-path";
import "./Line.css";
import Alert from "./Alert";

const Lines = ({ line, setLine, numPlayer, setNumPlayer, refresher }) => {
  const [linesArray, setLinesArray] = useState([]);
  const [tringleTest, setTringleTest] = useState(false);

  useEffect(() => {
    <Alert />;
  }, [tringleTest]);

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

  const tringle = (liness) => {
    for (let i = 0; i < liness.length; i++) {
      for (let j = 0; j < liness.length; j++) {
        if (j == i) continue;
        if (liness[i].p1 == liness[j].p1 || liness[i].p2 == liness[j].p1) {
          for (let k = 0; k < liness.length; k++) {
            if (k == j || k == i) continue;
            if (liness[j].p2 == liness[k].p1 || liness[j].p2 == liness[k].p2) {
              if (
                liness[i].p1 == liness[k].p1 ||
                liness[i].p1 == liness[k].p2 ||
                liness[i].p2 == liness[k].p1 ||
                liness[i].p2 == liness[k].p2
              ) {
                setTringleTest(true);
                console.log("tringle");
                console.log(tringleTest);
                return true;
              }
            }
          }
        }
        if (liness[i].p1 == liness[j].p2 || liness[i].p2 == liness[j].p2) {
          for (let k = 0; k != j && k != i && k < liness.length; k++) {
            if (liness[j].p1 == liness[k].p1 || liness[j].p1 == liness[k].p2) {
              if (
                liness[i].p1 == liness[k].p1 ||
                liness[i].p1 == liness[k].p2 ||
                liness[i].p2 == liness[k].p1 ||
                liness[i].p2 == liness[k].p2
              ) {
                setTringleTest(true);
                console.log("tringle");
                console.log(tringleTest);
                return true;
              }
            }
          }
        }
      }
    }
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
          let liness = [...linesArray, value.id];
          setLinesArray(liness);
          tringle(liness);
          console.log("click");
          console.log(line);
          console.log(liness);
        }}
        className={"line type" + value.type}
      />
    );
  });
};
export default Lines;
