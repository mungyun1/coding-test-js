// 문자열 나누기(https://school.programmers.co.kr/learn/courses/30/lessons/140108)

function solution(s) {
  let count = 0; // 분해된 문자열 개수
  let i = 0; // 현재 문자열의 시작 인덱스

  while (i < s.length) {
    let x = s[i]; // 첫 번째 문자
    let countX = 0,
      countOther = 0; // x의 개수와 x가 아닌 문자 개수
    let j = i;

    while (j < s.length) {
      if (s[j] === x) countX++;
      else countOther++;

      j++;

      if (countX === countOther) break; // 개수가 같아지는 순간 종료
    }

    count++; // 분해된 문자열 개수 증가
    i = j; // 다음 부분 문자열 시작 위치 설정
  }

  return count;
}

// 달리기 경주(https://school.programmers.co.kr/learn/courses/30/lessons/178871)

// Map은 key는 유일하지만, value는 중복될 수 있음.(Set은 둘다 중복X)
function solution(players, callings) {
  let playerMap = new Map();

  // 초기 선수들의 위치를 맵에 저장
  players.forEach((player, index) => {
    playerMap.set(player, index);
  });

  // callings에 따라 순위 변경
  for (let name of callings) {
    let idx = playerMap.get(name);
    if (idx > 0) {
      let prevName = players[idx - 1];

      // 선수 위치 변경
      players[idx - 1] = name;
      players[idx] = prevName;

      // 맵 업데이트
      playerMap.set(name, idx - 1);
      playerMap.set(prevName, idx);
    }
  }

  return players;
}

// 기사단원의 무기(https://school.programmers.co.kr/learn/courses/30/lessons/136798)

function solution(number, limit, power) {
  let totalPower = 0;

  // 1부터 number까지 각 수의 약수 개수 계산
  for (let i = 1; i <= number; i++) {
    let divisorsCount = 0;

    // i의 약수 개수 구하기
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisorsCount++;
        if (i / j !== j) divisorsCount++; // 약수 쌍을 고려
        // i = 36일 때 j = 2라면, i / j = 18이므로 2와 18은 서로 다른 두 약수
      }
    }

    // 약수 개수가 limit을 초과하면 power로 설정
    if (divisorsCount > limit) {
      totalPower += power;
    } else {
      totalPower += divisorsCount;
    }
  }

  return totalPower;
}

// 약수의 개수와 덧셈(https://school.programmers.co.kr/learn/courses/30/lessons/77884)
// 제곱근이 정수면 약수의 개수가 홀수다

function solution1(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 두 개 뽑아서 더하기(https://school.programmers.co.kr/learn/courses/30/lessons/68644)
function solution2(numbers) {
  const sum = new Set(); // 중복 제거를 위한 Set

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum.add(numbers[i] + numbers[j]); // 두 숫자의 합 추가
    }
  }

  return Array.from(sum).sort((a, b) => a - b); // Set을 배열로 변환 후 정렬
}

//문자열 내 마음대로 정렬하기(https://school.programmers.co.kr/learn/courses/30/lessons/12915)
//localeCompare: 문자열을 비교하여 사전순으로 정렬

function solution(strings, n) {
  return strings.sort((a, b) => {
    // n번째 문자를 기준으로 정렬
    if (a[n] === b[n]) {
      // n번째 문자가 같으면 사전순으로 정렬
      return a.localeCompare(b);
    }
    // n번째 문자를 기준으로 정렬
    return a[n].localeCompare(b[n]);
  });
}
