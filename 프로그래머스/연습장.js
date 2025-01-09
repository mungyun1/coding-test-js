// 시소 짝꿍 (Lv.2)

function GCD(a, b) {
  if (b === 0) return a;
  if (b > a) return GCD(b, a);
  return GCD(b, a % b);
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

function solution(weights) {
  var answer = 0;
  var result = [2, 3, 4];
  var visited = new Set();

  for (let i = 0; i < weights.length - 1; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      if (
        !visited.has([weights[i], weights[j]]) &&
        !visited.has([weights[i], weights[j]])
      ) {
        if (weights[i] === weights[j]) {
          visited.add([i, j]);
          console.log([weights[i], weights[j]]);
          answer++;
        } else {
          let temp = LCM(weights[i], weights[j]);

          if (
            result.includes(temp / weights[i]) &&
            result.includes(temp / weights[j])
          ) {
            visited.add([weights[i], weights[j]]);
            console.log([weights[i], weights[j]]);
            answer++;
          }
        }
      } else {
        continue;
      }
    }
  }

  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
console.log(LCM(180, 360));
