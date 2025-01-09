//미로 탐색(https://www.acmicpc.net/problem/2178)

function bfsMaze(N, M, graph) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [[0, 0]]; // BFS를 위한 큐
  graph[0][0] = 1; // 시작점 방문 표시 및 거리 초기화

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 미로 범위를 벗어난 경우
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
        continue;
      }

      // 벽인 경우
      if (graph[nx][ny] === 0) {
        continue;
      }

      // 아직 방문하지 않은 경우
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  // 최단 거리 반환
  return graph[N - 1][M - 1];
}

//단지 번호 붙이기(https://www.acmicpc.net/problem/2667)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0]);
const map = input.slice(1).map((line) => line.split("").map(Number));

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const results = [];

function bfs(x, y) {
  const queue = [[x, y]];
  visited[x][y] = true;
  let count = 1;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    for (let [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        map[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        count++;
      }
    }
  }

  return count;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      const count = bfs(i, j);
      results.push(count);
    }
  }
}

results.sort((a, b) => a - b);

console.log(results.length);
results.forEach((count) => console.log(count));
