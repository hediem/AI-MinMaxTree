import React, { useState } from "react";
import Swal from "sweetalert2";

function triangle(lines, type) {
  // console.log("CTriangle");
  let triangleTest = false;
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
              // console.log("triangle");
              // console.log(triangleTest);
              triangleTest = true;
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
              // console.log("triangle");
              // console.log(triangleTest);
              triangleTest = true;
            }
          }
        }
      }
    }
  }

  function theAlert(numPlayer) {
    // console.log("Alert");
    let my_icon = numPlayer == 1 ? "success" : "error";
    Swal.fire({
      icon: my_icon,
      title: `${numPlayer == 1 ? "Hey..." : "Oops..."} `,
      text: `${numPlayer == 1 ? "You Win" : "You Lost,Computer Win"}`,
    });
  }
  if (triangleTest) theAlert();

  return triangleTest;
}

export { triangle };
