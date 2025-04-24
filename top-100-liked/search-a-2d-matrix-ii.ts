/**
 * 240. 搜索二维矩阵 II
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * https://leetcode.cn/problems/search-a-2d-matrix-ii/description/?envType=study-plan-v2&envId=top-100-liked
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  // 从右上角开始，根据规律逐行/逐列排除
  let row = 0;
  let col = n - 1;
  while (row < m && col > -1) {
    const num = matrix[row][col];
    if (num === target) return true;
    if (num < target) row++;
    else col--;
  }
  return false;

  // 平铺+遍历
  return matrix.flat().includes(target);

  // 双重遍历
  return matrix.some((items) => {
    return items.some((item) => item === target);
  });
};

// true
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5));

// true
console.log(searchMatrix([[-5]], -5));