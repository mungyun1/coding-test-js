function solution(n) {
  let arr = [0, 1, 2, 4];

  if (n > 3) {
    for (let i = 4; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
  }
  return arr[n];
}

const fs = require("fs");
const num = fs.readFileSync("/dev/stdin").toString().trim().split("");
let n = parseInt(num, 10);
while (n > 0) {
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

  console.log(solution(Number(input)));

  n--;
}

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
