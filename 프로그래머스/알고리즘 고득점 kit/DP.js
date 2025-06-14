// 연속된 부분수열의 합(https://school.programmers.co.kr/learn/courses/30/lessons/178870)
//투 포인터

function solution(sequence, k) {
  let start = 0;
  let end = 0;
  let sum = sequence[0];

  let answer = [0, sequence.length - 1]; // 가장 긴 구간 초기화

  while (start <= end && end < sequence.length) {
    if (sum < k) {
      end++;
      sum += sequence[end];
    } else if (sum > k) {
      sum -= sequence[start];
      start++;
    } else {
      // sum === k
      if (end - start < answer[1] - answer[0]) {
        answer = [start, end];
      }
      // 다음 가능한 케이스 찾기
      sum -= sequence[start];
      start++;
    }
  }

  return answer;
}

// 섬 연결하기(https://school.programmers.co.kr/learn/courses/30/lessons/42861)

function solution(n, costs) {
  const graph = Array.from({ length: n }, () => []);

  // 양방향 그래프 구성
  for (const [a, b, cost] of costs) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  const visited = Array(n).fill(false);
  let totalCost = 0;

  // 최소 비용 간선을 저장할 배열 (우선순위 큐 역할)
  const edges = [[0, 0]]; // [정점, 비용]

  while (edges.length) {
    // 비용이 가장 낮은 간선 선택
    edges.sort((a, b) => a[1] - b[1]);
    const [current, cost] = edges.shift();

    if (visited[current]) continue;

    visited[current] = true;
    totalCost += cost;

    for (const [next, nextCost] of graph[current]) {
      if (!visited[next]) {
        edges.push([next, nextCost]);
      }
    }
  }

  return totalCost;
}

// N으로 표현(https://school.programmers.co.kr/learn/courses/30/lessons/42895)

function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    // 같은 숫자 반복 (예: 5, 55, 555 ...)
    dp[i].add(Number(String(N).repeat(i)));

    // 이전 계산결과들과 사칙연산 조합
    for (let j = 1; j < i; j++) {
      for (const x of dp[j]) {
        for (const y of dp[i - j]) {
          dp[i].add(x + y);
          dp[i].add(x - y);
          dp[i].add(x * y);
          if (y !== 0) dp[i].add(Math.floor(x / y)); // 정수 나눗셈
        }
      }
    }

    // 정답 찾으면 바로 반환
    if (dp[i].has(number)) return i;
  }

  return -1;
}

// 등굣길(https://school.programmers.co.kr/learn/courses/30/lessons/42898)

function solution(m, n, puddles) {
  const MOD = 1_000000007;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  const isPuddle = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(false)
  );

  // 물 웅덩이 표시 (x, y → col, row → [y][x])
  for (const [x, y] of puddles) {
    isPuddle[y][x] = true;
  }

  dp[1][1] = 1; // 시작점

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;
      if (isPuddle[i][j]) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
      }
    }
  }

  return dp[n][m];
}
