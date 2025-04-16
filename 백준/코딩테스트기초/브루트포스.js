//부분수열의 합(https://www.acmicpc.net/problem/14225) - 맞췄지만 다시보기

function solution(N, S) {
  S.sort((a, b) => a - b);
  const numbers = new Set();

  function dfs(index, sum) {
    if (index > N) return;
    numbers.add(sum);

    dfs(index + 1, sum + S[index]);
    dfs(index + 1, sum);
  }
  dfs(0, 0);

  answer = 1;
  while (true) {
    if (!numbers.has(answer)) {
      console.log(answer);
      break;
    }
    answer++;
  }
}

// 부분수열의 합(https://www.acmicpc.net/problem/1182)

function solution(N, S, numbers) {
  let count = 0;

  function dfs(index, sum) {
    if (index === N) {
      // 공집합은 제외
      if (sum === S) count++;
      return;
    }

    // 현재 인덱스의 숫자를 포함하는 경우
    dfs(index + 1, sum + numbers[index]);
    // 현재 인덱스의 숫자를 포함하지 않는 경우
    dfs(index + 1, sum);
  }

  dfs(0, 0);

  // 문제 조건: 크기가 양수인 부분수열만 허용하므로
  // 합이 0이고 모든 숫자를 포함하지 않은 경우 (공집합) 제거
  if (S === 0) count--;

  return count;
}

// N과 M(1)(https://www.acmicpc.net/problem/15649) - 백트래킹

function solution(N, M) {
  const result = [];
  const visited = Array(N + 1).fill(false);
  const current = [];

  function backtrack() {
    if (current.length === M) {
      result.push(current.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        current.push(i);
        backtrack();
        current.pop();
        visited[i] = false;
      }
    }
  }

  backtrack();
  console.log(result.join("\n"));
}

solution(N, M);

// 수 이어쓰기1(https://www.acmicpc.net/problem/1748)

function solution(n) {
  let answer = 0; // 결과값
  let idx = 1; // 자릿수
  let len = String(n).length; // 입력값 N의 자릿수 길이
  let sum = 0; // 누적 값

  while (idx < len) {
    // 현재 자릿수 범위의 숫자 개수 * 자릿수
    answer += 9 * Math.pow(10, idx - 1) * idx;
    sum += 9 * Math.pow(10, idx - 1);
    idx++;
  }

  // N에서 누적 합 이후 남은 값 처리
  answer += (n - sum) * len;
  return answer;
}

//부분수열의 합(https://www.acmicpc.net/problem/1182)

let count = 0;

function dfs(arr, index, currentSum, S) {
  if (index === arr.length) {
    if (currentSum === S) {
      count++;
    }
    return;
  }

  // 현재 원소를 포함하지 않는 경우
  dfs(arr, index + 1, currentSum, S);

  // 현재 원소를 포함하는 경우
  dfs(arr, index + 1, currentSum + arr[index], S);
}

dfs(arr, 0, 0, S);
