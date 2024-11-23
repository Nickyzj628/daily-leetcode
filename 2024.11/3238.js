// 3238. 求出胜利玩家的数目
// https://leetcode.cn/problems/find-the-number-of-winning-players/

// 给你一个整数 n ，表示在一个游戏中的玩家数目。同时给你一个二维整数数组 pick ，其中 pick[i] = [xi, yi] 表示玩家 xi 获得了一个颜色为 yi 的球。
// 如果玩家 i 获得的球中任何一种颜色球的数目 严格大于 i 个，那么我们说玩家 i 是胜利玩家。换句话说：
// 如果玩家 0 获得了任何的球，那么玩家 0 是胜利玩家。
// 如果玩家 1 获得了至少 2 个相同颜色的球，那么玩家 1 是胜利玩家。
// ...
// 如果玩家 i 获得了至少 i + 1 个相同颜色的球，那么玩家 i 是胜利玩家。
// 请你返回游戏中 胜利玩家 的数目。
// 注意，可能有多个玩家是胜利玩家。

/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {
  // 遍历
  let answer = 0;

  // 0 <= yi <= 10
  const counts = Array(n).fill().map(() => Array(11).fill(0));
  // 统计所有玩家获得的所有球数
  for (let [x, y] of pick) {
    counts[x][y]++;
  }
  // 统计获得n个相同球的玩家
  for (let i = 0; i < counts.length; i++) {
    if (counts[i].some((count) => count > i)) {
      answer++;
    }
  }

  return answer;
};

// 玩家 0 和玩家 1 是胜利玩家，玩家 2 和玩家 3 不是胜利玩家。
console.log(winningPlayerCount(5, [[0, 0], [1, 0], [1, 0], [2, 1], [2, 1], [2, 0]])); // 2