// 10866_덱
// https://www.acmicpc.net/problem/10866

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const [a, ...arr] = input;

const deque = [];
const answer = [];

for (let i = 0; i < N; i++) {
  if (arr[i].startsWith("push_front")) {
    const [a, b] = arr[i].split(" ");
    deque.unshift(Number(b));
  }
  if (arr[i].startsWith("push_back")) {
    const [a, b] = arr[i].split(" ");
    deque.push(Number(b));
  }
  if (arr[i] === "pop_front") {
    answer.push(deque.length > 0 ? deque.shift() : -1);
  }
  if (arr[i] === "pop_back") {
    answer.push(deque.length > 0 ? deque.pop() : -1);
  }
  if (arr[i] === "size") {
    answer.push(deque.length);
  }
  if (arr[i] === "empty") {
    answer.push(deque.length > 0 ? 0 : 1);
  }
  if (arr[i] === "front") {
    answer.push(deque.length > 0 ? deque[0] : -1);
  }
  if (arr[i] === "back") {
    answer.push(deque.length > 0 ? deque[deque.length - 1] : -1);
  }
}

console.log(answer.join("\n"));
