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
