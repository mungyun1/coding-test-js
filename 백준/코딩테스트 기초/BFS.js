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

// 입력 처리
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((line) => line.split("").map(Number));

console.log(bfsMaze(N, M, graph));
