function fibo(n) {
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(solution(parseInt(input, 10)));
