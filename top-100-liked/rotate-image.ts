/**
 * 48. 旋转图像
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * https://leetcode.cn/problems/rotate-image/description/?envType=study-plan-v2&envId=top-100-liked
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  // 两次翻转
  const n = matrix.length;

  // 水平翻转←→
  // for (let row = 0; row < Math.floor(n / 2); row++) {
  //   for (let col = 0; col < n; col++) {
  //     const temp = matrix[row][col];
  //     matrix[row][col] = matrix[n - row - 1][col];
  //     matrix[n - row - 1][col] = temp;
  //   }
  // }

  // 斜向翻转↙↗
  for (let row = 0; row < n; row++) {
    for (let col = row; col < n; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  // 水平翻转←→
  for (let row = 0; row < n; row++) {
    matrix[row].reverse();
  }
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix);
console.log(matrix);