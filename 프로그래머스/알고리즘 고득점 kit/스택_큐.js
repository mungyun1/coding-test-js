//기능개발(https://school.programmers.co.kr/learn/courses/30/lessons/42586)

function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  ); // 각 작업이 완료되는 일수 계산
  let maxDay = days[0]; // 현재까지 배포 가능한 기준일
  let count = 0; // 배포할 기능 개수

  for (let day of days) {
    if (day <= maxDay) {
      count++; // 현재 기준일 내에서 배포 가능
    } else {
      answer.push(count); // 이전까지의 기능 배포 개수 저장
      count = 1; // 새로운 기준일 시작
      maxDay = day; // 기준 변경
    }
  }

  answer.push(count); // 마지막 배포 추가
  return answer;
}

// 햄버거 만들기(https://school.programmers.co.kr/learn/courses/30/lessons/133502)

function solution(ingredient) {
  let stack = [];
  let count = 0;

  for (let item of ingredient) {
    stack.push(item); // 스택에 재료 추가

    // 스택의 마지막 4개가 [1,2,3,1]인지 확인
    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      // 햄버거 완성 -> 4개 재료 제거
      stack.splice(-4);
      count++;
    }
  }

  return count;
}

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

//프로세스(https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript)
// [2, 1, 3, 2], 2

function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index }));
  // 	[{ priority: 2, index: 0 }, { priority: 1, index: 1 }...]

  let executionOrder = 0;

  while (queue.length > 0) {
    let current = queue.shift();

    // some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트
    if (queue.some((task) => task.priority > current.priority)) {
      queue.push(current);
    } else {
      executionOrder++;
      if (current.index === location) {
        return executionOrder;
      }
    }
  }
}
