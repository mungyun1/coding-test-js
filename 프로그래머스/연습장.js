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
