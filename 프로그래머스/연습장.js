function solution(a, b, n) {
  var answer = 0;
  var remain = 0;

  while (n !== 0) {
    let num1 = parseInt(n / a);
    let num2 = n % a;

    answer += num1;

    if (num2 !== 0) {
      remain += num2;
    }

    if (n < a) {
      if (num2 + n >= a) {
        answer += (num2 + n) / a;
      }
    }

    n == parseInt(n / a);
  }
  return answer;
}
