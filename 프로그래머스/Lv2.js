//

function solution(weights) {
  let count = 0;
  const map = new Map();

  // 각 몸무게에 대해 2m, 3m, 4m 위치에 따라 계산
  for (let w of weights) {
    for (let distance of [2, 3, 4]) {
      const torque = w * distance;
      if (map.has(torque)) {
        count += map.get(torque);
      }
      // 맵에 torque 값이 있으면 그만큼 짝을 찾을 수 있음
    }

    // 새로운 몸무게 추가
    for (let distance of [2, 3, 4]) {
      const torque = w * distance;
      map.set(torque, (map.get(torque) || 0) + 1);
    }
  }

  return count;
}

// 124나라의 숫자(https://school.programmers.co.kr/learn/courses/30/lessons/12899)

function solution(n) {
  let result = "";

  while (n > 0) {
    let remainder = n % 3;

    // 나머지가 0인 경우
    if (remainder === 0) {
      result = "4" + result; // '4' 추가
      n = Math.floor(n / 3) - 1; // 몫에서 1 감소
    } else {
      result = remainder + result; // 나머지 추가
      n = Math.floor(n / 3); // 몫만 계산
    }
  }

  return result;
}

// 귤 고르기(https://school.programmers.co.kr/learn/courses/30/lessons/138476)

function solution(k, tangerine) {
  var answer = 0;
  var temp = {};

  // tangerine 배열을 통해 temp 객체 구성
  for (let i of tangerine) {
    if (i in temp) {
      temp[i] += 1;
    } else {
      temp[i] = 1;
    }
  }

  // temp를 값으로 정렬하여 배열로 유지
  const sortedTemp = Object.entries(temp).sort((a, b) => b[1] - a[1]); // 값 기준 내림차순 정렬

  for (let i of sortedTemp) {
    k -= i[1];
    answer++;
    if (k <= 0) {
      break;
    }
  }

  return answer;
}

// k진수에서 소수 개수 구하기(https://school.programmers.co.kr/learn/courses/30/lessons/92335)

function solution(n, k) {
  // n을 k진법으로 변환
  const converted = n.toString(k);

  // 소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // '0'으로 분리하여 각 숫자를 소수인지 확인
  const parts = converted.split("0").filter((part) => part !== "");
  let count = 0;

  for (const part of parts) {
    const number = parseInt(part, 10);
    if (isPrime(number)) {
      count++;
    }
  }

  return count;
}

// 피보나치 수(https://school.programmers.co.kr/learn/courses/30/lessons/12945)

function solution1(n) {
  const MOD = 1234567; // 나눌 값
  let prev = 0; // F(0)
  let curr = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    const next = (prev + curr) % MOD; // 다음 피보나치 수 계산
    prev = curr; // 이전 값을 갱신
    curr = next; // 현재 값을 갱신
  }

  return curr; // n번째 피보나치 수 반환
}

// 둘만의 암호(https://school.programmers.co.kr/learn/courses/30/lessons/155652)

function solution2(s, skip, index) {
  let answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // 기본 알파벳 문자열
  const skipSet = new Set(skip); // skip에 포함된 문자
  const validChars = [...alphabet].filter((char) => !skipSet.has(char)); // skip을 제외한 유효한 알파벳

  for (let char of s) {
    // 현재 문자 위치 찾기
    const currentIndex = validChars.indexOf(char);
    // 이동한 인덱스 계산
    const newIndex = (currentIndex + index) % validChars.length;
    // 새 문자 추가
    answer += validChars[newIndex];
  }

  return answer;
}

// 연속 부분 수열 합의 개수(https://school.programmers.co.kr/learn/courses/30/lessons/131701)

function solution3(elements) {
  const n = elements.length;
  const extended = [...elements, ...elements]; // 원형 수열 시뮬레이션
  const sums = new Set();

  for (let length = 1; length <= n; length++) {
    // 부분 수열의 길이
    for (let start = 0; start < n; start++) {
      // 시작 위치
      const sum = extended
        .slice(start, start + length)
        .reduce((a, b) => a + b, 0);
      sums.add(sum);
    }
  }

  return sums.size; // 고유 합의 개수
}

//뒤에 있는 큰 수 찾기(https://school.programmers.co.kr/learn/courses/30/lessons/154539)

function solution4(numbers) {
  const result = new Array(numbers.length).fill(-1); // 결과 배열, 초기값은 -1
  const stack = []; // 스택 (인덱스를 저장)

  for (let i = 0; i < numbers.length; i++) {
    // 스택이 비어있지 않고, 현재 숫자가 스택의 맨 위 인덱스의 숫자보다 크면
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const index = stack.pop(); // 인덱스를 꺼냄
      result[index] = numbers[i]; // 해당 인덱스의 뒷 큰수 갱신
    }
    stack.push(i); // 현재 인덱스를 스택에 추가
  }

  return result;
}

// 롤케이크 자르기(https://school.programmers.co.kr/learn/courses/30/lessons/132265)

function count(arr) {
  let set = new Set(arr);
  return set.size;
}

function solution(topping) {
  let left = new Set(); // 왼쪽 고유 토핑 집합
  let right = new Map(); // 오른쪽 고유 토핑 집합 및 개수
  let result = 0;

  // 초기화: 모든 토핑을 오른쪽 집합에 추가
  topping.forEach((item) => {
    right.set(item, (right.get(item) || 0) + 1);
  });

  // 왼쪽 집합을 확장하면서 오른쪽 집합에서 요소 제거
  for (let item of topping) {
    left.add(item); // 왼쪽 집합에 추가
    right.set(item, right.get(item) - 1); // 오른쪽 집합에서 감소

    // 오른쪽 집합에서 개수가 0이 되면 삭제
    if (right.get(item) === 0) {
      right.delete(item);
    }

    // 고유 토핑 개수가 같으면 결과 증가
    if (left.size === right.size) {
      result++;
    }
  }

  return result;
}
