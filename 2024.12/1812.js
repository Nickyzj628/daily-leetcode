// 1812. 判断国际象棋棋盘中一个格子的颜色
// https://leetcode.cn/problems/determine-color-of-a-chessboard-square/

// 给你一个坐标 coordinates ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。
// https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/03/chessboard.png
// 如果所给格子的颜色是白色，请你返回 true，如果是黑色，请返回 false 。
// 给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  // x+y为奇数的是白色，偶数的是黑色
  const x = coordinates[0].charCodeAt();
  const y = parseInt(coordinates[1]);
  return (x + y) % 2 === 1;
};

console.log(squareIsWhite("a1")); // false
console.log(squareIsWhite("h3")); // true