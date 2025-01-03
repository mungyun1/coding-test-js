function solution(n) {
  answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += String(i).length;
  }
  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
console.log(solution(parseInt(input, 10)));
