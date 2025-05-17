const solution = (inputList) => {
  const n = Number(inputList[0]);

  const queue = [];
  const answerList = [];

  let head = 0;

  for (let i = 1; i <= n; i++) {
    const [command, value] = inputList[i].split(' ');

    if (command === 'push') {
      queue.push(Number(value));
      continue;
    }

    if (command === 'pop') {
      answerList.push(head === queue.length ? -1 : queue[head++]);
      continue;
    }

    if (command === 'size') {
      answerList.push(queue.length - head);
      continue;
    }

    if (command === 'empty') {
      answerList.push(head === queue.length ? 1 : 0);
      continue;
    }

    if (command === 'front') {
      answerList.push(head === queue.length ? -1 : queue[head]);
      continue;
    }

    answerList.push(head === queue.length ? -1 : queue[queue.length - 1]);
  }

  return answerList.join('\n')
};

const inputList = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(solution(inputList));
