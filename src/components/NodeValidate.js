import React from "react";
import { triangle } from "./Triangle";

function nodeValidate({ lines, point }) {
  let i = 0;
  for (let j = 0; j < lines.length; j++) {
    if (deg(lines, point) == 1) i += 1;
    if (deg(lines, point) > 1) i += 6;
    if (deg(lines, point) == 1) i -= 1;
    if (deg(lines, point) > 1) i -= 4;
  }
  if (triangle(lines, 1)) i = Number.POSITIVE_INFINITY;
  if (triangle(lines, 2)) i = Number.NEGATIVE_INFINITY;
  return i;
}

function deg(lines, point) {
  lines.reduce((degree, line) => {
    if (line.id.p1 == point.id || line.id.p2 == point.id) return degree + 1;
    return degree;
  }, 0);
}

export { nodeValidate };
