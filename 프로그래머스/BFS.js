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

// 네트워크(https://school.programmers.co.kr/learn/courses/30/lessons/43162)

function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false); // 방문 여부 추적용 배열

  function bfs(start) {
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();

      for (let i = 0; i < n; i++) {
        if (computers[node][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 새로운 네트워크 발견
      bfs(i);
      answer++; // 네트워크 개수 증가
    }
  }

  return answer;
}
