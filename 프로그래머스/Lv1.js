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
