// 최소직사각형(https://school.programmers.co.kr/learn/courses/30/lessons/86491)
function solution(sizes) {
  // 각 명함을 [긴 변, 짧은 변] 형태로 정렬
  const rotatedSizes = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

  // 긴 변 중 최댓값과 짧은 변 중 최댓값 찾기
  const maxWidth = Math.max(...rotatedSizes.map(([w]) => w));
  const maxHeight = Math.max(...rotatedSizes.map(([_, h]) => h));

  // 지갑의 최소 크기 계산
  return maxWidth * maxHeight;
}

// 모의고사(https://school.programmers.co.kr/learn/courses/30/lessons/42840) - forEach 부분 유심히 보기

function solution(answers) {
  let num1 = [1, 2, 3, 4, 5];
  let num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === num1[i % num1.length]) {
      cnt1++;
    }
    if (answers[i] === num2[i % num2.length]) {
      cnt2++;
    }
    if (answers[i] === num3[i % num3.length]) {
      cnt3++;
    }
  }

  const maxNum = Math.max(cnt1, cnt2, cnt3);
  console.log(maxNum);

  const indices = [];

  [cnt1, cnt2, cnt3].forEach((value, index) => {
    if (value === maxNum) {
      indices.push(index + 1);
    }
  });

  return indices;
}
console.log(solution([1, 3, 2, 4, 2]));

// 소수 찾기(https://school.programmers.co.kr/learn/courses/30/lessons/42839)

function solution(numbers) {
  const permutations = new Set(); // 중복 제거를 위한 Set

  // 순열 생성 함수
  function permutations(curr, remaining) {
    if (curr.length > 0) {
      permutations.add(parseInt(curr)); // 숫자로 변환 후 Set에 추가
    }

    for (let i = 0; i < remaining.length; i++) {
      permutations(
        curr + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }

  // 소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 모든 순열 생성 시작
  permutations("", numbers);

  // 소수 개수 카운팅
  let count = 0;
  for (let num of permutations) {
    if (isPrime(num)) {
      count++;
    }
  }

  return count;
}
