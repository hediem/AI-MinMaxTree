import { minimax } from "./Minimax";

function move(line) {
  let max = Number.NEGATIVE_INFINITY;
  let best = line.find((value) => value.type == 0);
  for (let i = 0; i < line.length; i++) {
    if (line[i].type == 0) {
      line[i].type = 2;
      let val = minimax(
        line,
        1,
        Number.NEGATIVE_INFINITY,
        Number.POSITIVE_INFINITY
      );
      if (val >= max) {
        best = line[i];
        max = val;
      }
      line[i].type = 0;
    }
  }
  return best;
}
export { move };
