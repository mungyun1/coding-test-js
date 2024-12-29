function solution1(queue1, queue2) {
  const totalSum = [...queue1, ...queue2].reduce((a, b) => a + b, 0);

  if (totalSum % 2 !== 0) return -1;
}
