// 의상(https://school.programmers.co.kr/learn/courses/30/lessons/42578)

function solution(clothes) {
  const clothingMap = {};

  // 1. 의상 종류별로 개수 저장
  for (let [item, category] of clothes) {
    if (!clothingMap[category]) {
      clothingMap[category] = 0;
    }
    clothingMap[category]++;
  }

  // 2. 각 종류의 (개수 + 1)을 곱하고 -1
  let combinations = 1;
  for (let count of Object.values(clothingMap)) {
    combinations *= count + 1;
  }

  return combinations - 1; // 아무 것도 입지 않는 경우 제외
}

// 배스트 앨범(https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript)

function solution12(genres, plays) {
  // 1. 곡 정보를 배열로 저장
  const songs = [];
  for (let i = 0; i < plays.length; i++) {
    songs.push([genres[i], plays[i], i]); // [장르, 재생 수, 고유 번호]
  }

  // 2. 장르별로 곡 정보 저장
  const genreMap = {};
  for (let [genre, play, id] of songs) {
    if (!genreMap[genre]) {
      genreMap[genre] = [];
    }
    genreMap[genre].push([play, id]);
  }

  // 3. 장르별 총 재생 수 계산 및 정렬
  const genreOrder = Object.entries(genreMap).map(([genre, songList]) => {
    const totalPlays = songList.reduce((sum, [play]) => sum + play, 0);
    return [genre, totalPlays];
  });
  genreOrder.sort((a, b) => b[1] - a[1]); // 재생 수 내림차순 정렬

  // 4. 장르 내 곡 정렬 및 최대 두 곡 선택
  const result = [];
  for (let [genre] of genreOrder) {
    const songsInGenre = genreMap[genre];
    songsInGenre.sort((a, b) => b[0] - a[0] || a[1] - b[1]); // 재생 수 내림차순, 고유 번호 오름차순
    for (let i = 0; i < Math.min(2, songsInGenre.length); i++) {
      result.push(songsInGenre[i][1]); // 고유 번호 추가
    }
  }

  return result;
}

//폰켓몬(https://school.programmers.co.kr/learn/courses/30/lessons/1845)

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

// 전화번호 목록(https://school.programmers.co.kr/learn/courses/30/lessons/42577)

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
