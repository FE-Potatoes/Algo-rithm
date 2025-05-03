const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

// Queue
const [n, k] = input.split(" ").map(Number);

const queue = new Array(n).fill(0).map((_, index) => index + 1);
const result = [];
while (queue.length > 0) {
  for (let i = 0; i < k - 1; i++) {
    queue.push(queue.shift());
  }
  result.push(queue.shift());
}
console.log(`<${result.join(", ")}>`);
