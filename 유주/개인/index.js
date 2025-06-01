// 11003. 최솟값 찾기
// https://www.acmicpc.net/problem/11003

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, L] = input[0].split(" ").map(Number);
const arrList = input[1].split(" ").map(Number);

const answer = [];
const deque = [];

// 풀이 2. 스택처럼,, 인덱스를 덱으로 관리

for (let i = 0; i < N; i++) {
  while (deque.length > 0 && arrList[deque[deque.length - 1]]) {}
}

// 풀이 1. 시간 초과

// for (let i = 0; i < N; i++) {
//   let head = i + 1 - L < 0 ? 0 : i + 1 - L;
//   let tail = i;

//   let min = arrList[head];
//   for (let j = head; j <= tail; j++) {
//     if (arrList[j] < min) min = arrList[j];
//   }

//   answer.push(min);
// }

// console.log(answer);
