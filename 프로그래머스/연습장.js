function bfs(graph, start, visited = new Set()) {
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();

    for (const i of graph[node]) {
      if (!visited.has(i)) {
        visited.add(i);
        queue.push(i);
      }
    }
  }
}
