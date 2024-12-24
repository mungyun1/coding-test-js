// 중복된 숫자 개수(https://school.programmers.co.kr/learn/courses/30/lessons/120583)

function solution(array, n) {
  return array.filter((num) => num === n).length;
}

// 스택

function solution11(arr) {
  return arr.filter((value, index) => value !== arr[index - 1]);
}

// 테스트
console.log(solution11([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]
console.log(solution11([4, 4, 4, 3, 3])); // [4, 3]
