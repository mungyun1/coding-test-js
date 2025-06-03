// 가장 먼 노드(https://school.programmers.co .kr/learn/courses/30/lessons/49189)

function solution1(n, vertex) {
  // 그래프 초기화 (인접 리스트 방식)
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of vertex) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // BFS를 위한 큐 및 거리 배열
  const dist = Array(n + 1).fill(-1); // -1로 초기화 (방문 여부 확인)
  const queue = [1]; // 1번 노드에서 시작
  dist[1] = 0; // 1번 노드의 거리는 0

  // BFS 탐색
  while (queue.length > 0) {
    const curr = queue.shift();
    for (const i of graph[curr]) {
      if (dist[i] === -1) {
        // 아직 방문하지 않은 경우
        dist[i] = dist[curr] + 1;
        queue.push(i);
      }
    }
  }

  // 가장 먼 거리 계산
  const maxDistance = Math.max(...dist);
  return dist.filter((d) => d === maxDistance).length;
}

//순위(https://school.programmers.co.kr/learn/courses/30/lessons/49191)

function solution(n, results) {
  // 그래프 초기화
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  // 결과 반영
  for (const [winner, loser] of results) {
    graph[winner][loser] = 1; // winner가 loser를 이김
    graph[loser][winner] = -1; // loser가 winner에게 짐
  }

  // 플로이드-워셜 알고리즘
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          graph[i][j] = 1; // i가 k를 이기고, k가 j를 이김 -> i가 j를 이김
        }
        if (graph[i][k] === -1 && graph[k][j] === -1) {
          graph[i][j] = -1; // i가 k에게 지고, k가 j에게 짐 -> i가 j에게 짐
        }
      }
    }
  }
  console.log(graph);

  // 정확한 순위를 알 수 있는 선수 수 계산
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] !== 0) count++; // 승패가 확정된 경우
    }
    if (count === n - 1) answer++; // 자신을 제외한 모든 노드와의 관계가 확정된 경우
  }

  return answer;
}

// 플로이드-워셜 알고리즘 예시 코드

function floydWarshall(graph) {
  const V = graph.length;
  const dist = Array.from({ length: V }, (_, i) => [...graph[i]]); // 거리 배열 초기화

  // 플로이드-워셜 알고리즘
  for (let k = 0; k < V; k++) {
    // 경유 노드
    for (let i = 0; i < V; i++) {
      // 출발 노드
      for (let j = 0; j < V; j++) {
        // 도착 노드
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  // 결과 반환
  return dist;
}

// 무한대를 나타내는 값
const INF = Infinity;

// 그래프 초기화 (인접 행렬)
const graph = [
  [0, 3, INF, INF],
  [2, 0, INF, INF],
  [INF, 7, 0, 1],
  [6, INF, INF, 0],
];

// 실행
const result = floydWarshall(graph);

// 결과 출력
console.log("최단 거리 행렬:");
result.forEach((row) => console.log(row));
