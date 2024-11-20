// 3248. 矩阵中的蛇
// https://leetcode.cn/problems/snake-in-matrix/

// 大小为 n x n 的矩阵 grid 中有一条蛇。蛇可以朝 四个可能的方向 移动。矩阵中的每个单元格都使用位置进行标识： grid[i][j] = (i * n) + j。
// 蛇从单元格 0 开始，并遵循一系列命令移动。
// 给你一个整数 n 表示 grid 的大小，另给你一个字符串数组 commands，其中包括 "UP"、"RIGHT"、"DOWN" 和 "LEFT"。题目测评数据保证蛇在整个移动过程中将始终位于 grid 边界内。
// 返回执行 commands 后蛇所停留的最终单元格的位置。

/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  // 模拟+遍历
  const snake = [0, 0];
  for (let command of commands) {
    if (command === "UP") snake[0]--;
    else if (command === "DOWN") snake[0]++;
    else if (command === "LEFT") snake[1]--;
    else snake[1]++;
  }
  return snake[0] * n + snake[1];
};

console.log(finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP"])); // 1