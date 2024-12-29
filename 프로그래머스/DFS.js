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
