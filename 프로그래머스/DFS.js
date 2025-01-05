// 여행 경로(https://school.programmers.co.kr/learn/courses/30/lessons/43164)
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

//타겟넘버(https://school.programmers.co.kr/learn/courses/30/lessons/43165)

function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    // 모든 숫자를 탐색한 경우
    if (index === numbers.length) {
      if (sum === target) {
        answer++; // 타겟 넘버에 도달하면 경우의 수 증가
      }
      return;
    }

    // 현재 숫자를 더하거나 빼는 두 가지 선택
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0); // 탐색 시작: 첫 번째 숫자, 초기 합은 0
  return answer;
}
