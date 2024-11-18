// 3243. 新增道路查询后的最短距离 I
// https://leetcode.cn/problems/shortest-distance-after-road-addition-queries-i/

// 给你一个整数 n 和一个二维整数数组 queries。
// 有 n 个城市，编号从 0 到 n - 1。初始时，每个城市 i 都有一条单向道路通往城市 i + 1（ 0 <= i < n - 1）。
// queries[i] = [ui, vi] 表示新建一条从城市 ui 到城市 vi 的单向道路。每次查询后，你需要找到从城市 0 到城市 n - 1 的最短路径的长度。
// 返回一个数组 answer，对于范围 [0, queries.length - 1] 中的每个 i，answer[i] 是处理完前 i + 1 个查询后，从城市 0 到城市 n - 1 的最短路径的长度。

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  // 求最短路径长度，用BFS
  const answer = [];
  // 初始化路径，最后一个城市为空
  const neighbors = Array(n).fill().map((_, i) => [i + 1]);
  neighbors[n - 1] = [];

  const bfs = () => {
    const distance = Array(n).fill(-1);
    const queue = [0];
    distance[0] = 0;
    while (queue.length > 0) {
      const u = queue.shift();
      for (let v of neighbors[u]) {
        // 本次bfs已经计算过，说明已经拿到过更短的路径
        if (distance[v] >= 0) continue;
        // 准备下次循环
        queue.push(v);
        distance[v] = distance[u] + 1;
      }
    }
    return distance[n - 1];
  };

  // 从queries里追加路径，同时计算最短路径
  for (let [u, v] of queries) {
    neighbors[u].push(v);
    answer.push(bfs());
  }
  return answer;
};

// 新增一条从 2 到 4 的道路后，从 0 到 4 的最短路径长度为 3。
// 新增一条从 0 到 2 的道路后，从 0 到 4 的最短路径长度为 2。
// 新增一条从 0 到 4 的道路后，从 0 到 4 的最短路径长度为 1。
console.log(shortestDistanceAfterQueries(5, [[2, 4], [0, 2], [0, 4]])); // [3,2,1]