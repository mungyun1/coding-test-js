// 수 이어쓰기1(https://www.acmicpc.net/problem/1748)

function solution(n) {
  let answer = 0; // 결과값
  let idx = 1; // 자릿수
  let len = String(n).length; // 입력값 N의 자릿수 길이
  let sum = 0; // 누적 값

  while (idx < len) {
    // 현재 자릿수 범위의 숫자 개수 * 자릿수
    answer += 9 * Math.pow(10, idx - 1) * idx;
    sum += 9 * Math.pow(10, idx - 1);
    idx++;
  }

  // N에서 누적 합 이후 남은 값 처리
  answer += (n - sum) * len;
  return answer;
}

//부분수열의 합(https://www.acmicpc.net/problem/1182)

let count = 0;

function dfs(arr, index, currentSum, S) {
  if (index === arr.length) {
    if (currentSum === S) {
      count++;
    }
    return;
  }

  // 현재 원소를 포함하지 않는 경우
  dfs(arr, index + 1, currentSum, S);

  // 현재 원소를 포함하는 경우
  dfs(arr, index + 1, currentSum + arr[index], S);
}

dfs(arr, 0, 0, S);
