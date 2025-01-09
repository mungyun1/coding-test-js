// 숫자 변환하기(https://school.programmers.co.kr/learn/courses/30/lessons/154538)

function solution(x, y, n) {
  if (x === y) return 0; // 이미 x와 y가 같으면 연산 필요 없음

  const queue = [[x, 0]]; // [현재 값, 연산 횟수]
  const visited = new Set(); // 중복 연산 방지
  visited.add(x);

  while (queue.length > 0) {
    const [curr, count] = queue.shift();

    // 가능한 연산
    const nextValues = [curr + n, curr * 2, curr * 3];

    for (const next of nextValues) {
      if (next === y) return count + 1; // 목표 값에 도달하면 연산 횟수 반환
      if (next < y && !visited.has(next)) {
        visited.add(next); // 방문한 값 추가
        queue.push([next, count + 1]); // 다음 값과 연산 횟수 추가
      }
    }
  }

  return -1; // 모든 경우를 탐색했지만 y에 도달하지 못한 경우
}

// 기본 예제
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

// 게임 맵 최단거리(https://school.programmers.co.kr/learn/courses/30/lessons/1844)

function solution(maps) {
  let q = [[0, 0]];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i += 1) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length)
        continue;
      if (maps[nx][ny] === 0 || (nx === 0 && ny === 0)) continue;
      if (maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
  return maps[maps.length - 1][maps[0].length - 1] === 1
    ? -1
    : maps[maps.length - 1][maps[0].length - 1];
}
