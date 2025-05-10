const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let idx = 1;

for (let t = 0; t < n; t++) {
  let m = Number(input[idx++]);
  const map = {};

  for (let i = 0; i < m; i++) {
    const [item, type] = input[idx++].split(" ");
    if (map[type]) {
      map[type]++;
    } else {
      map[type] = 1;
    }
  }
  const answer = Object.values(map).reduce((ac, cu) => ac * (cu + 1), 1);
  console.log(answer - 1);
}
