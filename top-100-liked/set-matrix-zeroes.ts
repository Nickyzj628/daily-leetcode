/**
 * 73. 矩阵置零
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 * https://leetcode.cn/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-100-liked
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  const rowHasZero = new Array(m).fill(false);
  const colHasZero = new Array(n).fill(false);

  // 标记含 0 的行/列
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const num = matrix[row][col];
      if (num === 0) {
        rowHasZero[row] = true;
        colHasZero[col] = true;
      }
    }
  }

  // 逐个置 0
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (rowHasZero[row] || colHasZero[col]) {
        matrix[row][col] = 0;
      }
    }
  }
};

// [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix);
console.log(matrix);