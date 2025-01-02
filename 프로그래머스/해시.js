//폰켓몬(https://school.programmers.co.kr/learn/courses/30/lessons/1845)

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

// 전화번호 목록

function solution(phone_book) {
  // 전화번호부 정렬
  phone_book.sort();

  // 인접한 두 번호를 비교
  for (let i = 0; i < phone_book.length - 1; i++) {
    // 접두어인지 확인
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false; // 접두어 관계가 있으면 false 반환
    }
  }

  return true; // 접두어 관계가 없으면 true 반환
}

// 참고: 접미사는 endsWith로 boolean을 반환
