// 2164번. 카드2
// https://www.acmicpc.net/problem/2164
// 자료 구조
// 큐

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

const arr = Array.from(
  { length: Number(input) },
  (__, index) => index + 1
).reverse();

// 시간 초과 => shift 때문
while (arr.length > 1) {
  arr.shift();
  arr.push(arr.shift());
}
console.log(arr[0]);

function findResult(arr) {
  const reArr = [];
  while (arr.length > 0) {
    arr.pop();
    if (arr.length > 0) {
      reArr.push(arr.pop());
    }
  }
  if (reArr.length > 1) {
    return findResult(reArr);
  } else {
    return reArr[0];
  }
}

console.log(findResult(arr));
