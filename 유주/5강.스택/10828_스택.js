const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, ...orderList] = input;

// 배열 가장 마지막 원소 찾기 : arr[arr.length - 1]

// 자바스크립트에서 입출력이 느린 편인데, 출력할 때마다 console.log() 호출 → 느림.
// 보통 출력을 모아서 한 번에 출력하는 방식으로 최적화
// 배열에 다 모아서 마지막에 join("\n")으로 한 번만 출력

// const stack = [];
// for (let order of orderList) {
//   if (order.includes("push")) {
//     const [a, b] = order.split(" ");
//     stack.push(Number(b));
//   }
//   if (order === "top") {
//     console.log(stack.length ? stack[stack.length - 1] : -1);
//   }
//   if (order === "size") {
//     console.log(stack.length);
//   }
//   if (order === "empty") {
//     console.log(stack.length ? 0 : 1);
//   }
//   if (order === "pop") {
//     console.log(stack.length ? stack.pop() : -1);
//   }
// }

const stack = [];
const output = [];
for (let order of orderList) {
  if (order.includes("push")) {
    const [a, b] = order.split(" ");
    stack.push(Number(b));
  }
  if (order === "top") {
    output.push(stack.length ? stack[stack.length - 1] : -1);
  }
  if (order === "size") {
    output.push(stack.length);
  }
  if (order === "empty") {
    output.push(stack.length ? 0 : 1);
  }
  if (order === "pop") {
    output.push(stack.length ? stack.pop() : -1);
  }
}
console.log(output.join("\n"));
