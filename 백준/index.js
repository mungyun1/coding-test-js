const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

const [N, M] = input;

function solution(N, K) {
  const MAX = 100000;
  const visited = Array(MAX + 1).fill(false);
  const queue = [];

  queue.push({ pos: N, time: 0 });
  visited[N] = true;

  while (queue.length > 0) {
    const { pos, time } = queue.shift();

    if (pos === K) {
      return time;
    }

    const nextPositions = [pos - 1, pos + 1, pos * 2];

    for (const next of nextPositions) {
      if (next >= 0 && next <= MAX && !visited[next]) {
        visited[next] = true;
        queue.push({ pos: next, time: time + 1 });
      }
    }
  }
}

console.log(solution(N, M));
