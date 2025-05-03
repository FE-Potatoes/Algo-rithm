const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, PList] = input;

const arrP = PList.split(" ").map(Number);

const newOrder = arrP.sort((a, b) => a - b);

let sum = 0;
newOrder.forEach((ele, i) => {
  sum += ele * (Number(N) - i);
});

console.log(sum);
