// Map 기본 문법

let map = new Map();
map.set(key, value); // 값 추가
let value = map.get(key); // 값 조회
map.has(key); // 키가 존재하는지 확인
map.delete(key); // 값 삭제
map.clear(); // 모든 값 삭제
let size = map.size; // 크기 확인

// 객체 정렬

const obj1 = { 1: 1, 2: 2, 3: 2, 4: 1, 5: 2 };

// 객체를 [키, 값] 쌍의 배열로 변환
const sortedEntries = Object.entries(obj1).sort((a, b) => a[1] - b[1]);

// 정렬된 배열을 다시 객체로 변환
const sortedObj = Object.fromEntries(sortedEntries);

// Object.keys() 사용

const obj = {
  name: "Leo",
  age: 30,
  city: "Seoul",
};

const keys = Object.keys(obj);
console.log(keys); // ['name', 'age', 'city']

// 두번째 요소로 정렬

const a2 = [
  [0, 1],
  [1, 9],
  [2, 3],
];

// 두 번째 요소로 정렬
a2.sort((x, y) => x[1] - y[1]);

console.log(a); // 출력: [[0, 1], [2, 3], [1, 9]]

// 특정 인덱스 요소 삭제하는 법

const a1 = [1, 2, 3, 4, 5];
a1.splice(3, 1); // 3번째 인덱스부터 1개의 요소 제거
console.log(a); // [1, 2, 3, 5]

// "ab"안에 "a"가 있는지 확인하는 코드

const str = "ab";
const check = str.includes("a");
console.log(check); //true

// 오름차순 정렬 (작은 값부터 큰 값으로)

let arr1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
arr1.sort((a, b) => a - b); // a - b를 사용하면 오름차순
console.log(arr1); // [1, 1, 2, 3, 4, 5, 5, 6, 9]

// 내림차순 정렬 (큰 값부터 작은 값으로)

let arr2 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
arr2.sort((a, b) => b - a); // b - a를 사용하면 내림차순
console.log(arr2); // [9, 6, 5, 5, 4, 3, 2, 1, 1]

// 문자열 정렬

const arr3 = ["apple", "banana", "cherry"];
console.log(arr3.sort()); // ["apple", "banana", "cherry"]

// 배열 두배
function solution9(numbers) {
  return numbers.map((num) => num * 2);
}

console.log(solution9([1, 2, 3, 4, 5]));
// [2, 4, 6, 8, 10]

console.log(solution9([1, 2, 100, -99, 1, 2, 3]));
// [2, 4, 200, -198, 2, 4, 6]

// 문자열 곱하기(https://school.programmers.co.kr/learn/courses/30/lessons/181940)

function solution1(my_string, k) {
  // my_string을 k번 반복한 문자열을 반환
  return my_string.repeat(k);
}

// 소문자로 바꾸기

function solution3(myString) {
  return myString.toLowerCase();
}

// 이진법 관련

console.log(parseInt("1111", 2)); // 2진수 -> 정수
console.log((15).toString(2)); // 정수 -> 2진수

//isNaN(숫자가 아닌지 확인)

console.log(isNaN(123)); // false (숫자)
console.log(isNaN("123")); // false (문자열로 표현된 숫자)
console.log(isNaN("hello")); // true  (문자열이 숫자가 아님)
//문자열로 표현된 숫자도 숫자로 판단

// pop(0)

const arr = [1, 3, 4, 5];
const firstElement = arr.shift(); // 첫 번째 요소를 제거하고 반환
console.log(firstElement); // 1
console.log(arr); // [3, 4, 5]

// 객체 안에 키가 존재하는지 검사

const a = {
  one: 1,
  two: 2,
};

console.log("two" in a); // true

// 소수 판별 함수

function isPrime(num) {
  if (num <= 1) return false; // 1 이하의 수는 소수가 아님
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
  }
  return true; // 나누어 떨어지지 않으면 소수
}

// nCr (조합) 계산 함수
function combination(n, r) {
  // nCr = n! / (r! * (n-r)!)
  if (r === 0 || r === n) return 1;
  return factorial(n) / (factorial(r) * factorial(n - r));
}

// 팩토리얼 계산 함수
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// reduce() 메서드를 사용한 방법
// reduce()는 배열의 각 요소를 순차적으로 처리하여 하나의 결과 값을 도출하는 메서드입니다. 배열의 합을 구할 때는 다음과 같이 사용합니다:

const sumEx = [1, 2, 3, 4, 5];

const sum = sumEx.reduce((a, b) => a + b, 0);

console.log(sum); // 15
