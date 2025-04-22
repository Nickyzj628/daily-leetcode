/**
 * 54. 螺旋矩阵
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * https://leetcode.cn/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-100-liked
 */

function spiralOrder(matrix: number[][]): number[] {
  // 剥洋葱
  const answer: number[] = [];

  // 不断缩小边界
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (true) {
    // 从左到右
    for (let col = left; col <= right; col++) {
      answer.push(matrix[top][col]);
    }
    if (++top > bottom) break;
    // 从上到下
    for (let row = top; row <= bottom; row++) {
      answer.push(matrix[row][right]);
    }
    if (--right < left) break;
    // 从右到左
    for (let col = right; col >= left; col--) {
      answer.push(matrix[bottom][col]);
    }
    if (--bottom < top) break;
    // 从下到上
    for (let row = bottom; row >= top; row--) {
      answer.push(matrix[row][left]);
    }
    if (++left > right) break;
  }

  return answer;
};

// [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));