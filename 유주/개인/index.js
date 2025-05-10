// 2493. 탑
// https://www.acmicpc.net/problem/2493

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const laserArr = input[1].split(" ").map(Number);

console.log(N, laserArr);
