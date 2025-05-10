const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

// const list = {};

// for (let i = N; i <= K + 1; i++) {
//   list[i] = [i - 1, i + 1, 2 * i];
// }

function bfs(startNode, targetNode) {
  let visited = {};
  let queue = [];
  let distances = {};
  visited[startNode] = true;
  queue.push(startNode);
  distances[startNode] = 0;

  while (queue.length > 0) {
    let node = queue.shift();

    if (node === targetNode) {
      return distances[node];
    }
    let nextNodes = [node - 1, node + 1, node * 2];

    for (let adjNode of nextNodes) {
      if (adjNode >= 0 && adjNode <= 100000 && !visited[adjNode]) {
        visited[adjNode] = true;
        queue.push(adjNode);
        distances[adjNode] = distances[node] + 1;
      }
    }
  }
}

console.log(bfs(N, K));
