function solution(s) {
  const s = s.split("");
  const stack = [];

  while (s.length > 0) {
    const curr = s.shift();
    if (stack.length > 0 && curr === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(curr);
    }
  }

  return stack.length !== 0 ? 1 : 0;
}
