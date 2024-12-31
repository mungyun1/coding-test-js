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
