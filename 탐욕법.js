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
