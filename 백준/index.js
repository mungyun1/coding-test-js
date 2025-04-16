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
