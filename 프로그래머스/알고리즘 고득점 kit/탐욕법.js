// 체육복(https://school.programmers.co.kr/learn/courses/30/lessons/42862)

function solution(n, lost, reserve) {
  let realLost = lost.filter((student) => !reserve.includes(student));
  let realReserve = reserve.filter((student) => !lost.includes(student));

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  let answer = n - realLost.length;

  for (let i = 0; i < realLost.length; i++) {
    let curr = realLost[i];
    let idx = realReserve.findIndex(
      (student) => student === curr - 1 || student === curr + 1
    );

    if (idx !== -1) {
      answer++;
      realReserve.splice(idx, 1);
    }
  }

  return answer;
}

// 섬 연결하기(https://school.programmers.co.kr/learn/courses/30/lessons/42861) - 크루스칼 알고리즘

function solution(n, costs) {
  // 비용 기준으로 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 부모 배열 초기화
  const parent = Array.from({ length: n }, (_, i) => i); // [0,1,2,3 ..]

  // Find 함수: 경로 압축
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]); //재귀함수 호출
    }
    return parent[x];
  }

  // Union 함수
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootY] = rootX;
    }
  }

  let totalCost = 0;

  for (const [a, b, cost] of costs) {
    // 두 섬이 연결되어 있지 않으면 연결
    if (find(a) !== find(b)) {
      union(a, b);
      totalCost += cost;
    }
  }

  return totalCost;
}

// 큰 수 만들기(https://school.programmers.co.kr/learn/courses/30/lessons/42883)
// "1924", 2

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
