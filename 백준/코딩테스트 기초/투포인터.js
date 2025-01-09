// 부분합 (https://www.acmicpc.net/problem/1806)

function solution(N, S, nums) {
  let start = 0,
    end = 0,
    currentSum = 0;
  let minLength = Infinity;

  while (end < N) {
    // 현재 합에 nums[end]를 더함
    currentSum += nums[end++];

    // 합이 S 이상이면 최소 길이를 갱신하고 start를 증가시켜 범위를 줄임
    while (currentSum >= S) {
      minLength = Math.min(minLength, end - start);
      currentSum -= nums[start++];
    }
  }

  // 불가능할 경우 0 반환
  return minLength === Infinity ? 0 : minLength;
}

// 테스트
const N = 10,
  S = 15;
const nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];
console.log(solution(N, S, nums)); // 2

//숫자 카드(https://www.acmicpc.net/problem/10815)

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
}

function solution1(N, cards, M, queries) {
  cards.sort((a, b) => a - b); // 숫자 카드 정렬
  const result = queries.map((query) => (binarySearch(cards, query) ? 1 : 0));
  return result.join(" ");
}
