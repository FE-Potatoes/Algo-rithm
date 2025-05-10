const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answerList = []

for(let i = 1; i < input.length; i++) {
  const number = parseInt(input[i])
  if(number === 0) {
    answerList.pop()
    continue
  }

  answerList.push(number)
}

const sum = answerList.reduce((acc, cur) => acc + cur, 0)
console.log(sum)