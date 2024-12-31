//1(https://www.acmicpc.net/problem/4375)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((line) => {
  const n = parseInt(line, 10);
  let count = 1; // 자리수 카운트
  let remainder = 1 % n; // 나머지 초기화

  while (remainder !== 0) {
    remainder = (remainder * 10 + 1) % n; // 새로운 나머지 계산
    count++; // 자리수 증가
  }

  console.log(count);
});

// 소수 찾기

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const fs = require("fs");
const input2 = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input2[0], 10); // 수의 개수
const numbers = input2[1].split(" ").map(Number); // 숫자 배열

let cnt = 0;

for (let i = 0; i < N; i++) {
  const n = numbers[i];
  if (isPrime(n)) cnt++;
}

console.log(cnt);

//소수 구하기(https://www.acmicpc.net/problem/1929) - 에라토스테네스의 체

const fs = require("fs");
const input3 = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let m = parseInt(input3[0], 10); // 시작 값
let n = parseInt(input3[1], 10); // 끝 값

// 에라토스테네스의 체를 사용하여 소수 구하기
const isPrime = Array(n + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
}

// M 이상 N 이하의 소수 출력
for (let i = m; i <= n; i++) {
  if (isPrime[i]) {
    console.log(i);
  }
}
