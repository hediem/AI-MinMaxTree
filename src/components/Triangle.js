import React, { useState } from "react";

import Alert from "./Alert";

const Triangle = ({ lines, type }) => {
  console.log("CTriangle");
  const [triangleTest, setTriangleTest] = useState(false);

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines.length; j++) {
      if (j == i) continue;
      if (lines[i].p1 == lines[j].p1 || lines[i].p2 == lines[j].p1) {
        for (let k = 0; k < lines.length; k++) {
          if (k == j || k == i) continue;
          if (lines[j].p2 == lines[k].p1 || lines[j].p2 == lines[k].p2) {
            if (
              lines[i].p1 == lines[k].p1 ||
              lines[i].p1 == lines[k].p2 ||
              lines[i].p2 == lines[k].p1 ||
              lines[i].p2 == lines[k].p2
            ) {
              // setTriangleTest(true);
              console.log("triangle");
              console.log(triangleTest);
              setTriangleTest(true);
            }
          }
        }
      }
      if (lines[i].p1 == lines[j].p2 || lines[i].p2 == lines[j].p2) {
        for (let k = 0; k != j && k != i && k < lines.length; k++) {
          if (lines[j].p1 == lines[k].p1 || lines[j].p1 == lines[k].p2) {
            if (
              lines[i].p1 == lines[k].p1 ||
              lines[i].p1 == lines[k].p2 ||
              lines[i].p2 == lines[k].p1 ||
              lines[i].p2 == lines[k].p2
            ) {
              // setTriangleTest(true);
              console.log("triangle");
              console.log(triangleTest);
              setTriangleTest(true);
            }
          }
        }
      }
    }
  }
  return triangleTest ? <Alert numPlayer={type} /> : "";
};
export default Triangle;
