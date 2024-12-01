// 51. N 皇后
// https://leetcode.cn/problems/n-queens/

// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // nxn的二维数组，全部填充空位“.”
  const board = Array(n).fill().map(() => Array(n).fill('.'));

  /**
   * 能否在r行c列放置皇后
   * @param {number} r 皇后所在行数
   * @param {number} c 皇后所在列数
   */
  const isValid = (r, c) => {
    // 检查列
    for (let i = 0; i < r; i++) {
      if (board[i][c] === 'Q') return false;
    }
    // 检查左上
    for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    // 检查右上
    for (let i = r - 1, j = c + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  };

  /**
   * 回溯
   * @param {number} i 在第i行任意位置放置皇后
   */
  const backtrack = (i) => {
    // 边界条件：找到一组放置方案
    if (i === n) {
      answer.push([...board.map((row) => row.join(''))]);
      return;
    }
    // 穷举放置方案：遍历当前行的每一列
    for (let j = 0; j < n; j++) {
      if (!isValid(i, j)) continue;
      // 选择
      board[i][j] = 'Q';
      backtrack(i + 1);
      // 撤销选择
      board[i][j] = '.';
    }
  };

  const answer = [];
  backtrack(0);
  return answer;
};

console.log(solveNQueens(4)); //  [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]