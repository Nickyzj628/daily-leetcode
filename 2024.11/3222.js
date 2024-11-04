// 3222. 求出硬币游戏的赢家
// https://leetcode.cn/problems/find-the-winning-player-in-coin-game/

// 给你两个 正 整数 x 和 y ，分别表示价值为 75 和 10 的硬币的数目。
// Alice 和 Bob 正在玩一个游戏。每一轮中，Alice 先进行操作，Bob 后操作。每次操作中，玩家需要拿出价值 总和 为 115 的硬币。如果一名玩家无法执行此操作，那么这名玩家 输掉 游戏。
// 两名玩家都采取 最优 策略，请你返回游戏的赢家。

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function (x, y) {
  // 数学题，每次必须拿1x+4y，判断最后谁拿谁就是赢家
  return Math.floor(Math.min(x, y / 4)) % 2 ? "Alice" : "Bob";
};

// 游戏 2 次操作后结束：
// Alice 拿走 1 枚价值为 75 的硬币和 4 枚价值为 10 的硬币。
// Bob 拿走 1 枚价值为 75 的硬币和 4 枚价值为 10 的硬币。
console.log(losingPlayer(4, 11));  // Bob