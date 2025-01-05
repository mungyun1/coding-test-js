function solution(s) {
  let stack = [];

  for (let i of s) {
    if (i === "\r") continue;
    if (stack.length > 0 && i === ")" && stack[stack.length - 1] === "(") {
      stack.pop(); //(())())
    } else {
      stack.push(i);
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0], 10);
for (let i = 1; i <= n; i++) {
  console.log(solution(input[i]));
}
