// 중복된 숫자 개수(https://school.programmers.co.kr/learn/courses/30/lessons/120583)

function solution(array, n) {
  return array.filter((num) => num === n).length;
}

// 할 일 목록(https://school.programmers.co.kr/learn/courses/30/lessons/181885)

function solution4(todo_list, finished) {
  return todo_list.filter((_, index) => !finished[index]);
}

// 순서 바꾸기(https://school.programmers.co.kr/learn/courses/30/lessons/181891)

function solution5(num_list, n) {
  // n 번째 원소 이후의 원소와 n 번째까지의 원소를 나눠 합침
  return num_list.slice(n).concat(num_list.slice(0, n));
}
// 참고: slice는 원 배열에 영향이 없음.

// 0 떼기(https://school.programmers.co.kr/learn/courses/30/lessons/181847)

function solution6(n_str) {
  // 정수로 변환 후 문자열로 다시 변환
  return String(Number(n_str));
}

// 예제 테스트
console.log(solution6("0010")); // "10"
console.log(solution6("854020")); // "854020"

// 정수 부분만 가져옴 (ex 1.14 -> 1)
function solution(flo) {
  return parseInt(flo);
}

// 문자열 뒤집기(https://school.programmers.co.kr/learn/courses/30/lessons/120822)

function solution7(my_string) {
  // 문자열을 거꾸로 뒤집어서 반환
  return my_string.split("").reverse().join("");
}

// 7의 개수

function solution8(array) {
  let count = 0;

  // 배열의 각 요소를 문자열로 변환하여 '7'의 개수를 셈
  for (let num of array) {
    // 숫자를 문자열로 변환하고, 그 안에 '7'이 몇 번 나오는지 셈
    count += num.toString().split("7").length - 1;
  }

  return count;
}

// 예제 테스트
console.log(solution8([7, 77, 17])); // 4
console.log(solution8([10, 29])); // 0

// 갸장 큰 수 찾기(https://school.programmers.co.kr/learn/courses/30/lessons/120899)

function solution10(array) {
  // 가장 큰 수를 구합니다.
  const maxNum = Math.max(...array);

  // 가장 큰 수의 인덱스를 구합니다.
  const index = array.indexOf(maxNum);

  // 결과 배열을 반환합니다.
  return [maxNum, index];
}

// 제일 작은 수 제거

function solution(arr) {
  if (arr.length === 1) return [-1]; // 배열 길이가 1이면 [-1] 리턴

  const min = Math.min(...arr); // 배열에서 가장 작은 값 찾기
  const answer = arr.filter((num) => num !== min); // 가장 작은 값을 제외한 배열 생성

  return answer;
}
