import React from "react";

import { nodeValidate } from "./NodeValidate";

function minimax(lines, depth, alpha, beta, points) {
  if (depth == 3 || !lines.some((value) => value.type == 0)) {
    return nodeValidate(lines, points);
  }
  if (depth % 2 == 0) {
    let val = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].type == 0) {
        alpha = Math.max(alpha, val);
        if (beta < alpha) break;
        lines[i].type = 1;
        val = Math.max(val, minimax(lines, depth + 1, alpha, beta, points));
        lines[i].type = 0;
      }
    }
    return val;
  } else {
    let val = Number.POSITIVE_INFINITY;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].type == 0) {
        alpha = Math.min(alpha, val);
        if (beta < alpha) break;
        lines[i].type = 2;
        val = Math.min(val, minimax(lines, depth + 1, alpha, beta, points));
        lines[i].type = 0;
      }
    }
    return val;
  }
}

export { minimax };
