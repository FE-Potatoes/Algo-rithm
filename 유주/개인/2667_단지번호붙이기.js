const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, ...graphArr] = input;

const graph = graphArr.map((ele) => ele.split("").map(Number));
const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const visited = Array.from({ length: Number(N) }, () =>
  new Array(Number(N)).fill(false)
);
const areas = [];

function dfs(sy, sx) {
  const stack = [[sy, sx]];
  visited[sy][sx] = true;
  let area = 1;

  while (stack.length > 0) {
    const [y, x] = stack.pop();
    for (let dir of direction) {
      const [dx, dy] = dir;
      let nx = x + dx,
        ny = y + dy;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < N &&
        !visited[ny][nx] &&
        graph[ny][nx] === 1
      ) {
        stack.push([ny, nx]);
        visited[ny][nx] = true;
        area++;
      }
    }
  }
  return area;
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (graph[y][x] === 1 && !visited[y][x]) {
      let sum = dfs(y, x);
      areas.push(sum);
    }
  }
}
console.log(areas.length);
areas.sort((a, b) => a - b).forEach((ele) => console.log(ele));
