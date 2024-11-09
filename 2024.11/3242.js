// 3242. 设计相邻元素求和服务
// https://leetcode.cn/problems/design-neighbor-sum-service/

// 给你一个 n x n 的二维数组 grid，它包含范围 [0, n2 - 1] 内的不重复元素。
// 实现 neighborSum 类：
// neighborSum(int [][]grid) 初始化对象。
// int adjacentSum(int value) 返回在 grid 中与 value 相邻的元素之和，相邻指的是与 value 在上、左、右或下的元素。
// int diagonalSum(int value) 返回在 grid 中与 value 对角线相邻的元素之和，对角线相邻指的是与 value 在左上、右上、左下或右下的元素。

/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
  this.grid = grid
  // 哈希表，映射值->下标
  this.valueIndex = {};
  this.grid.forEach((row, i) => {
    row.forEach((num, j) => {
      this.valueIndex[num] = [i, j];
    });
  });
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
  // 矩阵求相邻位置的和
  const [i, j] = this.valueIndex[value];
  let answer = 0;
  answer += this.grid[i - 1]?.[j] ?? 0;
  answer += this.grid[i + 1]?.[j] ?? 0;
  answer += this.grid[i]?.[j - 1] ?? 0;
  answer += this.grid[i]?.[j + 1] ?? 0;
  return answer;
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
  // 矩阵求相邻对角线的和
  const [i, j] = this.valueIndex[value];
  let answer = 0;
  answer += this.grid[i - 1]?.[j - 1] ?? 0;
  answer += this.grid[i - 1]?.[j + 1] ?? 0;
  answer += this.grid[i + 1]?.[j - 1] ?? 0;
  answer += this.grid[i + 1]?.[j + 1] ?? 0;
  return answer;
};

const grid = [
  [1, 2, 0, 3],
  [4, 7, 15, 6],
  [8, 9, 10, 11],
  [12, 13, 14, 5],
];
var obj = new NeighborSum(grid);
var param_1 = obj.adjacentSum(15); // 23
var param_2 = obj.diagonalSum(9); // 45
console.log(param_1);
console.log(param_2);
