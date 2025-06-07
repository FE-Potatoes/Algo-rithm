const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const match = {')' : '(', ']' : '['};

for(str of input) {
  const stack = [];

  // 마지막(종료)
  if(str === '.') break;

  for(char of str) {
    // 문자열이 '.'일 경우
    if(char === '.') {
      stack.length === 0 ? console.log('yes') : console.log('no');
      break;
    }

    // 여는 괄호일 경우
    if(char === '(' || char === '[') {
      stack.push(char);
      continue;
    }

    // 닫는 괄호일 경우
    if(char ===')' || char === ']') {
      // 스택이 비었거나, 괄호가 일치하지 않는 경우
      if(stack.length === 0 || stack.at(-1) !== match[char]) {
        console.log('no')
        break;
      }else {
        stack.pop();
        continue;
      }
    }
  }
}