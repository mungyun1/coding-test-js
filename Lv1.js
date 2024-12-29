// 약수의 개수와 덧셈(https://school.programmers.co.kr/learn/courses/30/lessons/77884)
// 제곱근이 정수면 약수의 개수가 홀수다

function solution1(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 두 개 뽑아서 더하기(https://school.programmers.co.kr/learn/courses/30/lessons/68644)
function solution2(numbers) {
  const sum = new Set(); // 중복 제거를 위한 Set

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum.add(numbers[i] + numbers[j]); // 두 숫자의 합 추가
    }
  }

  return Array.from(sum).sort((a, b) => a - b); // Set을 배열로 변환 후 정렬
}
