// 3239. 最少翻转次数使二进制矩阵回文 I
// https://leetcode.cn/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/

// 给你一个 m x n 的二进制矩阵 grid 。
// 如果矩阵中一行或者一列从前往后与从后往前读是一样的，那么我们称这一行或者这一列是 回文 的。
// 你可以将 grid 中任意格子的值 翻转 ，也就是将格子里的值从 0 变成 1 ，或者从 1 变成 0 。
// 请你返回 最少 翻转次数，使得矩阵 要么 所有行是 回文的 ，要么所有列是 回文的 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // 遍历计算每行变成回文数需要翻转的次数
  let answerRow = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n / 2; j++) {
      if (grid[i][j] !== grid[i][n - j - 1]) {
        answerRow++;
      }
    }
  }

  // 遍历计算每列变成回文数需要翻转的次数
  let answerCol = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m / 2; i++) {
      if (grid[i][j] !== grid[m - i - 1][j]) {
        answerCol++;
      }
    }
  }

  return Math.min(answerRow, answerCol);
};

// https://assets.leetcode.com/uploads/2024/07/07/screenshot-from-2024-07-08-00-20-10.png
// 将高亮的格子翻转，得到所有行都是回文的。
console.log(minFlips([[1, 0, 0], [0, 0, 0], [0, 0, 1]])); // 2

console.log(minFlips([[0, 1], [0, 1], [0, 0]])); // 1