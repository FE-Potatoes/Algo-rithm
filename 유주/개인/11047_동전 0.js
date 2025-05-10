const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [a, ...coins] = input;

let [N, K] = a.split(" ").map(Number);
const coinsInNumber = coins.map(Number).reverse();
const changes = {};

for (let coin of coinsInNumber) {
  if (coin <= K) {
    const count = Math.floor(K / coin);
    changes[coin] = count;
    K -= coin * count;
  }
  if (K <= 0) break;
}

console.log(Object.values(changes).reduceRight((ac, cu) => ac + cu, 0));
