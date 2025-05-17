function solution(n) {
  const queue = Array.from({length: n}, (_, i) => i + 1)

  let front = 0;
  let tail = n

  while(tail - front > 1) {
    front++ // 첫 카드 버림
    queue[tail++] = queue[front++] // 카드 뒤로 보냄
  }

  return queue[front];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(solution(input));
