//두 큐 합 같게 만들기(https://school.programmers.co.kr/learn/courses/30/lessons/118667)

function solution1(queue1, queue2) {
  // 두 큐의 총합 계산
  const totalSum = [...queue1, ...queue2].reduce(
    (sum, value) => sum + value,
    0
  );

  // 총합이 홀수라면 두 큐의 합을 같게 만들 수 없음
  if (totalSum % 2 !== 0) return -1;

  const targetSum = totalSum / 2; // 각 큐가 목표로 해야 할 합
  const mergedQueue = [...queue1, ...queue2]; // 두 큐를 병합하여 원형 큐처럼 활용
  let currentSum = queue1.reduce((sum, value) => sum + value, 0); // 초기 queue1의 합
  let start = 0,
    end = queue1.length; // 투 포인터 초기화
  const maxOperations = queue1.length * 3; // 최대 탐색 횟수
  let operations = 0;

  // 투 포인터 알고리즘 실행
  while (operations <= maxOperations) {
    if (currentSum === targetSum) {
      // 현재 합이 목표 합과 같다면 작업 횟수 반환
      return operations;
    }

    if (currentSum < targetSum) {
      // 현재 합이 목표보다 작으면, end 포인터의 값을 추가
      currentSum += mergedQueue[end % mergedQueue.length];
      end++;
    } else {
      // 현재 합이 목표보다 크면, start 포인터의 값을 제거
      currentSum -= mergedQueue[start % mergedQueue.length];
      start++;
    }

    operations++; // 작업 횟수 증가
  }

  return -1; // 목표 합을 만들 수 없는 경우
}
