// 1021_ 회전하는 큐
// https://www.acmicpc.net/problem/1021

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 풀이 3. 덱을 활용한 간단 풀이법
// 목표값의 index 위치를 기준으로 회전방향과 횟수를 결정해서 푸는 방식이 효율적
// 현재 큐에서 찾고자 하는 값이 몇번째 있는지 알아내는 것이 중요

// 풀이 2. shift,pop,push 로 맞긴하지만 덱을 제대로 활용했다고 보기는 어려움
/*
let numList = Array.from({ length: N }, (_, i) => i + 1);
console.log(numList);
let count = 0;
for (let i = 0; i < M; i++) {
  if (arr[i] === numList[0]) {
    numList.shift();
  } else {
    const left = numList.indexOf(arr[i]);
    const right = numList.length - left;
    let repeatTime = Math.min(left, right);

    if (left <= right) {
      for (let i = 0; i < repeatTime; i++) {
        numList.push(numList.shift());
      }
    } else {
      for (let i = 0; i < repeatTime; i++) {
        numList.unshift(numList.pop());
      }
    }
    numList.shift();
    count += repeatTime;
    console.log(repeatTime);
  }
}
console.log(count);
*/

// 풀이 1. head/tail 로 했지만 통과X
// 이 문제는 N 최대 50이라 shift(),unshift()를 사용해도 시간초과가 나지 않는다.

// let numList = Array.from({ length: 150 }, (ele, i) => {
//   if (50 <= i && i < 50 + N) {
//     return i - 49;
//   } else return 0;
// });

// const answer = [];
// let head = 50;
// let tail = 50 + N;
// let count = 0;
// let initialSize = N;

// for (let i = 0; i < M; i++) {
//   if (arr[i] === numList[head]) {
//     numList[head++] = numList[tail++];
//     head++;
//   } else {
//     const left = Math.abs(numList[head] - arr[i]);
//     const right = initialSize - left;
//     let repeatTime = Math.min(left, right);
//     if (
//       (left >= right && numList[head] >= arr[i]) ||
//       (left < right && numList[head] < arr[i])
//     ) {
//       for (let i = 0; i < repeatTime; i++) {
//         numList[head++] = numList[tail++];
//       }
//     } else {
//       for (let i = 0; i < repeatTime; i++) {
//         numList[--head] = numList[--tail];
//       }
//     }
//     count += repeatTime;
//   }
// }
// console.log(count);
