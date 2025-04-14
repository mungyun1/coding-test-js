//ABCDE(https://www.acmicpc.net/problem/13023)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);

// 친구 관계 그래프 생성
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let visited = Array(N).fill(false);
let found = false;

// 깊이 우선 탐색 (DFS)
function dfs(node, depth) {
  if (depth === 4) {
    found = true;
    return;
  }

  visited[node] = true;
  for (const i of graph[node]) {
    if (!visited[i]) {
      dfs(i, depth + 1);
      if (found) return;
    }
  }
  visited[node] = false; // 백트래킹
}

// 모든 노드를 시작점으로 탐색
for (let i = 0; i < N; i++) {
  if (found) break;
  visited.fill(false); // 방문 초기화
  dfs(i, 0);
}

// 결과 출력
console.log(found ? 1 : 0);
