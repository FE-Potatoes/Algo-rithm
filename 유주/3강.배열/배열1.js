const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

const alphabetCount = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  const charCode = input.charCodeAt(i) - 97;
  alphabetCount[charCode]++;
}

console.log(alphabetCount.join(" "));
