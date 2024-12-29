function dfs(graph, start, visited = new Set()) {
  // 방문한 노드를 기록
  visited.add(start);
  console.log(start);

  // 인접 노드를 재귀적으로 방문
  for (const i of graph[start]) {
    if (!visited.has(i)) {
      dfs(graph, i, visited);
    }
  }
}

// 예제 그래프 (인접 리스트 방식)
const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [6],
  4: [],
  5: [],
  6: [],
};

// DFS 실행
dfs(graph, 1);
