// https://www.acmicpc.net/problem/17298

// 스스로 풀지 못함
// stack에 index를 주입해서
// input 배열과 answer 배열을 index로 연결하여 값을 구하는 풀이법,,

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const numList = input[1].split(" ").map(Number);

const answer = Array(N).fill(-1);
const stack = [];

for (let i = 0; i < N; i++) {
  // stack 이 변경될 때 마다 while 내부가 다시 돈다.
  while (stack.length > 0 && numList[stack[stack.length - 1]] < numList[i]) {
    answer[stack.pop()] = numList[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));
