const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [M, N, K] = input[0].split(" ").map(Number);

const [a, ...position] = input;
const graph = Array.from({ length: M }, () => Array(N).fill(0));

// 색칠 된 영역 구하기
for (let i = 1; i <= K; i++) {
  const [a, b, c, d] = input[i].split(" ").map(Number);
  console.log(a, b, c, d);
  for (let y = b; y < d; y++) {
    for (let x = a; x < c; x++) {
      graph[y][x] = 1;
    }
  }
}
console.log(graph);

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function dfs(y, x) {
  let stack = [[y, x]];
  let area = 1;
  graph[y][x] = 1;

  while (stack.length) {
    const [cy, cx] = stack.pop();
    for (let dir = 0; dir < 4; dir++) {
      const ny = cy + directions[dir][1];
      const nx = cx + directions[dir][0];
      if (ny >= 0 && ny < M && nx >= 0 && nx < N && graph[ny][nx] === 0) {
        graph[ny][nx] = 1;
        stack.push([ny, nx]);
        area++;
      }
    }
  }
  return area;
}
const areas = [];
for (let y = 0; y < M; y++) {
  for (let x = 0; x < N; x++) {
    if (graph[y][x] === 0) {
      areas.push(dfs(y, x));
    }
  }
}

areas.sort((a, b) => a - b);
console.log(areas.length);
console.log(areas.join(" "));
