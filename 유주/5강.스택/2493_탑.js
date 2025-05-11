// 2493. 탑
// https://www.acmicpc.net/problem/2493

// [오큰수]와 동일하게 배열의 index값을 stack에서 다루는 풀이법

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const laserArr = input[1].split(" ").map(Number);

const stack = [];
const answer = Array(N).fill(0);

for (let i = N - 1; i >= 0; i--) {
  while (stack.length > 0 && laserArr[stack[stack.length - 1]] <= laserArr[i]) {
    answer[stack.pop()] = i + 1;
  }
  stack.push(i);
}

console.log(answer.join(" "));
