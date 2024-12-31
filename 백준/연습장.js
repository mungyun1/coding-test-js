function solution(n) {
  let cnt = 0;
  function dfs(k, num) {
    num += k;
    if (n === num.length) {
      cnt++;
      return;
    }
    if (num[num.length - 1] === "1") {
      dfs("0", num);
    } else {
      dfs("1", num) + dfs("0", num);
    }
  }

  dfs("1", "");
  return cnt;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
console.log(solution(Number(input)));
