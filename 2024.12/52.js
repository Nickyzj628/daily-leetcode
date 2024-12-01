// 52. N 皇后 II
// https://leetcode.cn/problems/n-queens-ii/

// n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let answer = 0;
  // nxn的棋盘，全部置为false，表示所有格子都没有放置皇后
  const board = Array(n).fill(null).map(() => Array(n).fill(false));

  const isValid = (r, c) => {
    // 检查列
    for (let i = 0; i < r; i++) {
      if (board[i][c]) return false;
    }
    // 检查左上
    for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j]) return false;
    }
    // 检查右上
    for (let i = r - 1, j = c + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j]) return false;
    }
    return true;
  };

  // 在第i行任意位置放置皇后
  const backtrack = (i) => {
    // 边界条件：找到一组方案
    if (i === n) {
      answer++;
      return;
    }
    // 遍历第i行的每一列，穷举放置方案
    for (let j = 0; j < n; j++) {
      if (!isValid(i, j)) continue;
      // 选择
      board[i][j] = true;
      backtrack(i + 1);
      // 撤销选择
      board[i][j] = false;
    }
  };

  backtrack(0);
  return answer;
};

// https://assets.leetcode.com/uploads/2020/11/13/queens.jpg
// 如上图所示，4 皇后问题存在两个不同的解法。
console.log(totalNQueens(4)); // 2