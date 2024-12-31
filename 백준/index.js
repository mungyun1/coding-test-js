function solution(n) {
  if (n === 0) return 1;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr.reduce((a, b) => a * b, 1);
}

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const N = Number(input);

let result = String(solution(N));
result = result.split("").reverse().join("");

let answer = 0;

for (let i of result) {
  if (i !== "0") {
    console.log(answer);
    break;
  }
  answer++;
}
