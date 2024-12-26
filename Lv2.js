// 피보나치 수(https://school.programmers.co.kr/learn/courses/30/lessons/12945)

function solution(n) {
  const MOD = 1234567; // 나눌 값
  let prev = 0; // F(0)
  let curr = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    const next = (prev + curr) % MOD; // 다음 피보나치 수 계산
    prev = curr; // 이전 값을 갱신
    curr = next; // 현재 값을 갱신
  }

  return curr; // n번째 피보나치 수 반환
}
