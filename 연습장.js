function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const n = parseInt(prompt());
const numbers = prompt().split(" ").map(Number);

let cnt = 0;

for (let i of numbers) {
  if (isPrime(i)) cnt++;
}

console.log(cnt);
