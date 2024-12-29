function bfs(graph, start, visited = new Set()) {
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    // 큐에 이웃 노드 추가
    for (const i of graph[node]) {
      if (!visited.has(i)) {
        visited.add(i);
        queue.push(i);
      }
    }
  }
}

const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [6],
  4: [],
  5: [],
  6: [],
};

// BFS 실행
bfs(graph, 1);
