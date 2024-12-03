// 3274. 检查棋盘方格颜色是否相同
// https://leetcode.cn/problems/check-if-two-chessboard-squares-have-the-same-color/

// 给你两个字符串 coordinate1 和 coordinate2，代表 8 x 8 国际象棋棋盘上的两个方格的坐标。
// 以下是棋盘的参考图。
// https://assets.leetcode.com/uploads/2024/07/17/screenshot-2021-02-20-at-22159-pm.png
// 如果这两个方格颜色相同，返回 true，否则返回 false。
// 坐标总是表示有效的棋盘方格。坐标的格式总是先字母（表示列），再数字（表示行）。

/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  // 判断奇偶性
  const [x1, y1] = coordinate1;
  const [x2, y2] = coordinate2;
  return ((x1.charCodeAt() - x2.charCodeAt()) + (y1.charCodeAt() - y2.charCodeAt())) % 2 === 0;
};

// 两个方格均为黑色。
console.log(checkTwoChessboards('a1', 'c3'));  // true

// 方格 "a1" 是黑色，而 "h3" 是白色。
console.log(checkTwoChessboards('a1', 'h3'));  // false