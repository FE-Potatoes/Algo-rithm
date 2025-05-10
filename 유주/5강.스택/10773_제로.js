const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [K, ...arr] = input;

const numList = arr.map(Number);

const stack = [];

numList.forEach((ele) => {
  if (ele === 0) {
    stack.pop();
  } else stack.push(ele);
});

console.log(stack.reduce((ac, cu) => ac + cu, 0));
