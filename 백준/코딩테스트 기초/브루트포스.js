//부분수열의 합(https://www.acmicpc.net/problem/1182)

let count = 0;

function findSubsetSum(arr, index, currentSum, S) {
  if (index === arr.length) {
    if (currentSum === S) {
      count++;
    }
    return;
  }

  // 현재 원소를 포함하지 않는 경우
  findSubsetSum(arr, index + 1, currentSum, S);

  // 현재 원소를 포함하는 경우
  findSubsetSum(arr, index + 1, currentSum + arr[index], S);
}

findSubsetSum(arr, 0, 0, S);
