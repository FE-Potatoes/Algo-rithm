// 2164번. 카드2
// https://www.acmicpc.net/problem/2164
// 자료 구조
// 큐
// 스스로 풀지 못함~~

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

const queue = Array.from({ length: Number(input) }, (__, index) => index + 1);

let head = 0;
let tail = queue.length;

while (tail - head > 1) {
  head++; // 맨 앞 카드 버리기
  queue[tail++] = queue[head++]; // queue의 맨뒤에 앞에 카드를 삽입하기
}

console.log(queue[head]);

// queue[tail++]= queue[head++]
// 위와 아래는 같은 뜻, ++ 가 실행되기 전에 인덱스값으로 계산된다.
// queue[tail] = queue[head];
// tail = tail + 1;
// head = head + 1;

// 풀이 1. 시간 초과 => shift 때문
// while (arr.length > 1) {
//   arr.shift();
//   arr.push(arr.shift());
// }
// console.log(arr[0]);

// 풀이 2. 재귀사용 => 비효율적, 부정확함
// function findResult(arr) {
//   const reArr = [];
//   while (arr.length > 0) {
//     arr.pop();
//     if (arr.length > 0) {
//       reArr.push(arr.pop());
//     }
//   }
//   if (reArr.length > 1) {
//     return findResult(reArr);
//   } else {
//     return reArr[0];
//   }
// }

// console.log(findResult(arr));
