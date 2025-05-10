const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answerList = []
const outputList = []

for (commands of input) {
  const [command, number] = commands.split(' ')
  
  if(command === 'push') {
    answerList.push(number)
    continue
  }

  if(command === 'pop') {
    if(answerList.length === 0) outputList.push(-1)
    else {
      outputList.push(answerList.at(-1))
      answerList.pop()
    }
    continue
  }

  if(command === 'size') {
    outputList.push(answerList.length)
    continue
  }

  if(command === 'empty') {
    if(answerList.length === 0) outputList.push(1)
    else outputList.push(0)
    continue
  }

  if(command === 'top') {
    if(answerList.length === 0) outputList.push(-1)
    else outputList.push(answerList.at(-1))
  }
}

console.log(outputList.join('\n'));
