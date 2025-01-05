function solution(tickets) {
  const graph = {}; // 그래프 생성

  // 그래프 초기화 및 정렬
  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  });
  Object.keys(graph).forEach((key) => graph[key].sort());

  const result = [];

  const dfs = (node) => {
    while (graph[node] && graph[node].length > 0) {
      const next = graph[node].shift(); // 알파벳 순서대로 방문
      dfs(next);
    }
    result.push(node); // 역순으로 저장
  };

  dfs("ICN");

  return result.reverse(); // 역순 결과 반환
}
