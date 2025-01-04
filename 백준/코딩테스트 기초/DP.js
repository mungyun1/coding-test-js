// RGB 거리(https://www.acmicpc.net/problem/1149)

function rgbStreet(n, costs) {
  const dp = Array.from({ length: n }, () => Array(3).fill(0));

  // 초기값 설정
  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  // dp 배열 채우기
  for (let i = 1; i < n; i++) {
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  // 마지막 집에서의 최소 비용 반환
  return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
}

// 이친수(https://www.acmicpc.net/problem/2193)

function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => [0, 0]);

  // 초기값 설정
  dp[1][0] = 0;
  dp[1][1] = 1;

  // DP 계산
  for (let i = 2; i <= n; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1]; //i자리 이친수에서 끝자리가 0인 수의 개수.
    dp[i][1] = dp[i - 1][0]; //i자리 이친수에서 끝자리가 1인 수의 개수.
  }

  // N자리 이친수의 개수
  return dp[n][0] + dp[n][1];
}

//가장 긴 증가하는 부분 수열(https://www.acmicpc.net/problem/11053)

function solution(arr) {
  const dp = Array(arr.length).fill(1); // 각 위치의 LIS 길이를 저장하는 배열

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp); // dp 배열 중 최댓값이 LIS의 길이
}

const fs = require("fs");
const input1 = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input1[0]);
const arr1 = input1[1].split(" ").map(Number);

console.log(solution(arr1));

// 이친수(https://www.acmicpc.net/problem/2193) - 풀어야함

//오르막 수(https://www.acmicpc.net/problem/11057)

function solution2(N) {
  const MOD = 10007;

  // DP 테이블 초기화
  const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

  // 초기 조건
  for (let j = 0; j < 10; j++) {
    dp[1][j] = 1;
  }

  // 점화식 적용
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j < 10; j++) {
      dp[i][j] = (j > 0 ? dp[i][j - 1] : 0) + dp[i - 1][j];
      dp[i][j] %= MOD;
    }
  }

  // 길이가 N인 오르막 수의 총합 계산
  return dp[N].reduce((sum, val) => (sum + val) % MOD, 0);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 입력 및 출력 예제
const N = parseInt(input, 10); // 사용자 입력
console.log(solution2(N));
