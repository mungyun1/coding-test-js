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

// 이친수(https://www.acmicpc.net/problem/2193)

function solution1(N) {
  // dp 배열 초기화
  const dp = Array(N + 1).fill(0);

  // 초기값 설정
  dp[1] = 1;
  dp[2] = 1;

  // DP 점화식 적용
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // N자리 이친수 개수 반환
  return dp[N];
}

// 입력 처리
const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim(), 10);

// 결과 출력
console.log(solution1(input));
