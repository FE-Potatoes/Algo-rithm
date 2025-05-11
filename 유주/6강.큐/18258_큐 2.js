// 18258_큐 2
// https://www.acmicpc.net/problem/18258

// head, tail 로 인덱스 관리
// shift 사용하지 않기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const [a, ...arr] = input;

const queue = [];
const answer = [];
let head = 0;
let tail = 0;

for (let i = 0; i < n; i++) {
  if (arr[i].startsWith("push")) {
    const [a, b] = arr[i].split(" ");
    queue.push(Number(b));
    tail++;
  }
  if (arr[i] === "front") {
    answer.push(tail === head ? -1 : queue[head]);
  }
  if (arr[i] === "back") {
    answer.push(tail === head ? -1 : queue[tail - 1]);
  }
  if (arr[i] === "empty") {
    answer.push(tail === head ? 1 : 0);
  }
  if (arr[i] === "size") {
    answer.push(tail - head);
  }
  if (arr[i] === "pop") {
    answer.push(tail === head ? -1 : queue[head]);
    if (tail !== head) head++;
  }
}

console.log(answer.join("\n"));

// 풀이 1. 시간 초과 => shift 때문인 듯
// for (let i = 0; i < n; i++) {
//     if (arr[i].startsWith("push")) {
//       const [a, b] = arr[i].split(" ");
//       queue.push(Number(b));
//     }
//     if (arr[i] === "front") {
//       answer.push(queue.length > 0 ? queue[0] : -1);
//     }
//     if (arr[i] === "back") {
//       answer.push(queue.length > 0 ? queue[queue.length - 1] : -1);
//     }
//     if (arr[i] === "empty") {
//       answer.push(queue.length > 0 ? 0 : 1);
//     }
//     if (arr[i] === "size") {
//       answer.push(queue.length);
//     }
//     if (arr[i] === "pop") {
//       answer.push(queue.shift() || -1);
//     }
//   }

//   console.log(answer.join("\n"));
