function solution(number, k) {
  const stack = [];
  let removeCount = 0;

  for (const digit of number) {
    while (
      stack.length > 0 &&
      removeCount < k &&
      stack[stack.length - 1] < digit
    ) {
      stack.pop();
      removeCount++;
    }
    stack.push();
  }
}
