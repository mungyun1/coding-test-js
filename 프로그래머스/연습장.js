function solution(maps) {
  let q = [[0, 0]];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  while (q.length > 0) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = x + dy[i];

      if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length) {
        continue;
      }
      if (maps[nx][ny] === 0 || (nx === 0 && ny === 0)) continue;
      if (maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
}
