//더 맵게(https://school.programmers.co.kr/learn/courses/30/lessons/42626)

class MinHeap {
  constructor() {
    this.heap = []; // 최소 힙을 저장할 배열
  }

  // 힙에 값을 추가
  push(value) {
    this.heap.push(value); // 배열 끝에 값을 추가
    this.bubbleUp(); // 힙 구조를 유지하기 위해 위치 조정
  }

  // 힙에서 가장 작은 값을 제거하고 반환
  pop() {
    if (this.size() === 1) return this.heap.pop(); // 힙에 값이 하나뿐이면 바로 반환
    const min = this.heap[0]; // 가장 작은 값 저장
    this.heap[0] = this.heap.pop(); // 마지막 값을 루트로 이동
    this.bubbleDown(); // 힙 구조를 유지하기 위해 위치 조정
    return min; // 가장 작은 값 반환
  }

  // 힙의 가장 작은 값을 반환 (제거하지 않음)
  peek() {
    return this.heap[0];
  }

  // 힙 크기를 반환
  size() {
    return this.heap.length;
  }

  // 새로 추가된 값을 올바른 위치로 이동
  bubbleUp() {
    let index = this.heap.length - 1; // 새로 추가된 값의 인덱스
    const value = this.heap[index]; // 새로 추가된 값
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 인덱스 계산
      if (this.heap[parentIndex] <= value) break; // 부모 값이 더 작거나 같으면 중지
      this.heap[index] = this.heap[parentIndex]; // 부모 값을 현재 위치로 이동
      index = parentIndex; // 인덱스를 부모로 이동
    }
    this.heap[index] = value; // 최종 위치에 값을 저장
  }

  // 루트 값을 올바른 위치로 이동
  bubbleDown() {
    let index = 0; // 루트 노드의 인덱스
    const length = this.heap.length; // 힙 크기
    const value = this.heap[index]; // 루트 값
    while (true) {
      let leftChildIndex = 2 * index + 1; // 왼쪽 자식의 인덱스
      let rightChildIndex = 2 * index + 2; // 오른쪽 자식의 인덱스
      let smallest = index; // 가장 작은 값의 인덱스 (초기값은 루트)

      // 왼쪽 자식이 존재하고 더 작으면 갱신
      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }
      // 오른쪽 자식이 존재하고 더 작으면 갱신
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }
      // 더 이상 자리를 바꿀 필요가 없으면 중지
      if (smallest === index) break;
      this.heap[index] = this.heap[smallest]; // 더 작은 값을 현재 위치로 이동
      index = smallest; // 인덱스를 이동
    }
    this.heap[index] = value; // 최종 위치에 값을 저장
  }
}

function solution(scoville, K) {
  const heap = new MinHeap(); // 최소 힙 생성
  let mixCount = 0; // 섞은 횟수

  // 초기 힙에 스코빌 지수 추가
  for (const value of scoville) {
    heap.push(value);
  }

  while (heap.size() > 1) {
    const first = heap.pop(); // 가장 작은 값
    if (first >= K) return mixCount; // 가장 작은 값이 K 이상이면 종료

    const second = heap.pop(); // 두 번째로 작은 값
    const newScoville = first + second * 2; // 새로운 스코빌 지수 계산
    heap.push(newScoville); // 계산된 값을 힙에 추가
    mixCount++; // 섞은 횟수 증가
  }

  // 마지막으로 남은 값이 K 이상인지 확인
  return heap.pop() >= K ? mixCount : -1;
}
