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
console.log(solution(3, [1, 3, 2, 3, 2, 4, 1, 1, 2, 2]));
