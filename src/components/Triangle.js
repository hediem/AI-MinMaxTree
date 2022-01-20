import React, { useState } from "react";
import Swal from "sweetalert2";
import Lines from "./Lines";

function triangle(lines, type) {
  let triangleTest = false;
  console.log(`type player in triangle ${type}`);
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
              triangleTest = true;
            }
          }
        }
      }
    }
  }

  function theAlert(type) {
    let my_icon = type == 2 ? "success" : "error";
    Swal.fire({
      icon: my_icon,
      title: `${type == 2 ? "Hey..." : "Oops..."} `,
      text: `${type == 2 ? "You Win" : "You Lost,Computer Win"}`,
    });
  }
  if (triangleTest) theAlert(type);

  return triangleTest;
}

export { triangle };
