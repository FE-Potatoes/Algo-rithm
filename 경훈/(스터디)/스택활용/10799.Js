const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

let answer = 0;
let openCount = 0;

for(let i = 0; i < input.length; i++) {
  const char = input[i];

  // 여는 괄호일 경우
  if(char === '(') {
    openCount++;
    continue;
  }

  // 레이저일 경우
  if(char ===')' && input[i-1] === '(') {
    openCount--;
    answer += openCount;
    continue;
  }

  // 닫는 괄호일 경우
  if(char === ')') {
    answer++;
    openCount--;
    continue;
  }
}

console.log(answer)
