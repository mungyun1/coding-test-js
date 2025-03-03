function solution(n, lost, reserve) {
  let realLost = lost.filter((student) => !reserve.includes(student));
  let realReserve = reserve.filter((student) => !lost.includes(student));

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  let answer = n - realLost.length;

  for (let i = 0; i < realLost.length; i++) {
    let curr = realLost[i];
    let idx = realReserve.findIndex(
      (student) => student === curr - 1 || student === curr + 1
    );

    if (idx !== -1) {
      answer++;
      realReserve.splice(idx, 1);
    }
  }

  return answer;
}
