const fs = require("fs");
const { moveCursor } = require("readline");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M, ...list] = input;
// let text = N.split("");
// let cursor = text.length;

// 풀이 1. splice 사용시 시간초과 발생:
// splice()는 배열 중간에 원소를 삽입하거나 삭제할 때 O(N)의 시간 복잡도를 가지므로,
// 최대 50만 번까지 명령이 주어지는 이 문제에서는 비효율적

// for (let order of list) {
//   if (order === "L") {
//     if (cursor > 0) cursor--;
//     else continue;
//   } else if (order === "D") {
//     if (cursor < text.length) cursor++;
//     else continue;
//   } else if (order === "B") {
//     if (cursor > 0) {
//       text.splice(cursor - 1, 1);
//       cursor--;
//     } else continue;
//   } else if (order[0] === "P") {
//     text.splice(cursor, 0, order[2]);
//     cursor++;
//   }
// }
// console.log(text.join(""));

// 풀이 2. 매 루프마다 새 배열을 만드는 구조는 비효율적 (O(N)) => 메모리 초과
// for 루프 안에 배열을 정의하는 방식은 피하기

// const [N, M, ...list] = input;
// let text = N.split("");
// let cursor = text.length;

// for (let order of list) {
//   const left = text.slice(0, cursor);
//   const right = text.slice(cursor);

//   if (order === "L") {
//     if (cursor > 0) cursor--;
//     else continue;
//   } else if (order === "D") {
//     if (cursor < text.length) cursor++;
//     else continue;
//   } else if (order === "B") {
//     if (cursor > 0) {
//       left.pop();
//       cursor--;
//     } else continue;
//   } else if (order[0] === "P") {
//     left.push(order[2]);
//     cursor++;
//   }
//   text = left.concat(right);
// }
// console.log(text.join(""));

// 풀이 3. cursor 왼/오 를 구분하여 push(), pop()을 활용하여 합쳐주기

const left = N.split("");
const right = [];

for (let order of list) {
  if (order === "L" && left.length > 0) {
    right.push(left.pop());
  } else if (order === "D" && right.length > 0) {
    left.push(right.pop());
  } else if (order === "B") {
    left.pop();
  } else if (order[0] === "P") {
    left.push(order[2]);
  }
}
console.log(left.concat(right.reverse()).join(""));
