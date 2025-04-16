// 카펫(https://school.programmers.co.kr/learn/courses/30/lessons/42842)

function find(n) {
  const arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arr.push([i, n / i]); // 세로(i), 가로(n / i)
    }
  }
  return arr;
}

function solution(brown, yellow) {
  const total = brown + yellow;
  const candidates = find(total);

  for (const [h, w] of candidates) {
    if (w >= h) {
      // 가로 >= 세로 조건 확인
      const border = 2 * (w + h - 2); // 테두리(갈색 격자) 계산
      const center = (w - 2) * (h - 2); // 중앙(노란색 격자) 계산
      if (border === brown && center === yellow) {
        return [w, h];
      }
    }
  }

  return [];
}

// 최소직사각형(https://school.programmers.co.kr/learn/courses/30/lessons/86491)
function solution(sizes) {
  // sizes: [[60, 50], [30, 70], [60, 30], [80, 40]]
  // 각 명함을 [긴 변, 짧은 변] 형태로 정렬
  const rotatedSizes = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

  // 긴 변 중 최댓값과 짧은 변 중 최댓값 찾기
  const maxWidth = Math.max(...rotatedSizes.map(([w]) => w));
  const maxHeight = Math.max(...rotatedSizes.map(([_, h]) => h));

  // 지갑의 최소 크기 계산
  return maxWidth * maxHeight;
}

// 소수 찾기(https://school.programmers.co.kr/learn/courses/30/lessons/42839)
// "17"

function solution(numbers) {
  const perSet = new Set(); // 중복 제거를 위한 Set

  // 순열 생성 함수
  function permutation(curr, remaining) {
    if (curr.length > 0) {
      perSet.add(parseInt(curr)); // 숫자로 변환 후 Set에 추가
    }

    for (let i = 0; i < remaining.length; i++) {
      permutation(
        curr + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }

  // 소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 모든 순열 생성 시작
  permutation("", numbers);

  // 소수 개수 카운팅
  let count = 0;
  for (let num of perSet) {
    if (isPrime(num)) {
      count++;
    }
  }

  return count;
}
