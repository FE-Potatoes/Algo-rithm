const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [a, ...b] = input;
const listArr = b.map((ele) => ele.split("").map(Number));

let directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const visited = Array.from({ length: N }, () => Array(M).fill(false));

// let distance = 0;
function bfs(sy, sx) {
  const queue = [];
  queue.push([sy, sx]);
  visited[sy][sx] = true;

  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (let dir of directions) {
      const [dy, dx] = dir;
      let ny = y + dy,
        nx = x + dx;

      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < N &&
        nx < M &&
        !visited[ny][nx] &&
        listArr[ny][nx] === 1
      ) {
        visited[ny][nx] = true;
        // listArr[ny][nx] = 0;
        listArr[ny][nx] = listArr[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }
  return listArr[N - 1][M - 1];
}

console.log(bfs(0, 0));
