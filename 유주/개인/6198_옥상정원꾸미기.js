// https://www.acmicpc.net/problem/6198
const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, ...buildings] = input;
const stack = [];
let count = 0;
for (let i = 0; i < N; i++) {
  while (stack.length && stack[stack.length - 1] <= buildings[i]) {
    stack.pop();
  }
  count += stack.length;
  stack.push(buildings[i]);
}

console.log(count);

// 역시나 shift 때문에 안됨
// let sum = 0;
// while (buildings.length > 1) {
//   for (let i = 1; i < N; i++) {
//     if (buildings[0] > buildings[i]) {
//       sum++;
//     } else {
//       buildings.shift();
//       break;
//     }
//   }
// }

// console.log(sum);
