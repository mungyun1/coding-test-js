function solution(N, stages) {
  var answer = [];
  var len = stages.length;
  var graph = {};

  for (let i = 0; i < stages.length; i++) {
    if (stages[i] > N) continue;
    if (!graph[stages[i]]) graph[stages[i]] = 0;
    graph[stages[i]]++;
  }

  for (let i = 0; i < N; i++) {
    if (!graph[i + 1]) graph[i + 1] = 0;
  }

  let tempLen = stages.length;
  Object.keys(graph).forEach((key, index) => {
    answer.push([index + 1, graph[key] / tempLen]);
    tempLen -= graph[key];
  });

  return answer;
}
