// H-Index(https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript)

function solution(citations) {
  // 논문의 인용 횟수를 내림차순으로 정렬
  citations.sort((a, b) => b - a);

  // h-Index 찾기
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
}

//가장 큰 수(https://school.programmers.co.kr/learn/courses/30/lessons/42746)

function solution(numbers) {
  // 숫자를 문자열로 변환 후 커스텀 정렬
  const result = numbers
    .map(String) // 숫자를 문자열로 변환
    .sort((a, b) => b + a - (a + b)) // 조합 결과를 비교해 내림차순 정렬
    .join(""); // 정렬된 문자열을 이어 붙임

  // 결과가 "000..."일 경우 "0" 반환
  return result[0] === "0" ? "0" : result;
}

// 테스트 케이스
console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
