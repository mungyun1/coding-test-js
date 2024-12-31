// 구명 보트(https://school.programmers.co.kr/learn/courses/30/lessons/42885)

function solution1(people, limit) {
  // 사람들의 몸무게를 오름차순으로 정렬
  people.sort((a, b) => a - b);

  let left = 0; // 가장 가벼운 사람
  let right = people.length - 1; // 가장 무거운 사람
  let boatCount = 0; // 사용한 구명보트의 수

  // 두 포인터가 교차할 때까지
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      // 가벼운 사람과 무거운 사람이 같이 탈 수 있으면 둘 다 태운다.
      left++;
      right--;
    } else {
      // 그렇지 않으면 무거운 사람은 혼자 태운다.
      right--;
    }
    // 보트를 하나 사용했으므로 카운트 증가
    boatCount++;
  }

  return boatCount;
}

// 큰 수 만들기(https://school.programmers.co.kr/learn/courses/30/lessons/42883)

function solution(number, k) {
  const stack = [];
  let removeCount = 0;

  for (const digit of number) {
    // 스택에서 숫자를 제거할 조건: 제거 가능 횟수가 남아있고, 스택의 마지막 숫자가 현재 숫자보다 작음
    while (
      stack.length > 0 &&
      removeCount < k &&
      stack[stack.length - 1] < digit
    ) {
      stack.pop();
      removeCount++;
    }
    stack.push(digit);
  }

  // 제거해야 할 숫자가 남아 있는 경우 뒤에서 자름
  while (removeCount < k) {
    stack.pop();
    removeCount++;
  }

  return stack.join(""); // 스택을 문자열로 합쳐 반환
}
