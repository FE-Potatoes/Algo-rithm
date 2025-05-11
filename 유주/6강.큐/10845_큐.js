// 10845_큐
// https://www.acmicpc.net/problem/10845
// 기초 알아가기 문제

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const [a, ...arr] = input;

const queue = [];
for (let i = 0; i < n; i++) {
  if (arr[i].includes("push")) {
    const [a, b] = arr[i].split(" ");
    queue.push(Number(b));
  }
  if (arr[i] === "front") {
    console.log(queue.length > 0 ? queue[0] : -1);
  }
  if (arr[i] === "back") {
    console.log(queue.length > 0 ? queue[queue.length - 1] : -1);
  }
  if (arr[i] === "empty") {
    console.log(queue.length > 0 ? 0 : 1);
  }
  if (arr[i] === "size") {
    console.log(queue.length);
  }
  if (arr[i] === "pop") {
    console.log(queue.shift() || -1);
  }
}
