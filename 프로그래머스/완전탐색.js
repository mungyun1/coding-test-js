// 소수 찾기(https://school.programmers.co.kr/learn/courses/30/lessons/42839)

function solution(numbers) {
  const permutations = new Set(); // 중복 제거를 위한 Set

  // 순열 생성 함수
  function permutations(curr, remaining) {
    if (curr.length > 0) {
      permutations.add(parseInt(curr)); // 숫자로 변환 후 Set에 추가
    }

    for (let i = 0; i < remaining.length; i++) {
      permutations(
        curr + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }

  // 소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 모든 순열 생성 시작
  permutations("", numbers);

  // 소수 개수 카운팅
  let count = 0;
  for (let num of permutations) {
    if (isPrime(num)) {
      count++;
    }
  }

  return count;
}
