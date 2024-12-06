// 999. 可以被一步捕获的棋子数
// https://leetcode.cn/problems/available-captures-for-rook/

// 给定一个 8 x 8 的棋盘，只有一个 白色的车，用字符 'R' 表示。棋盘上还可能存在白色的象 'B' 以及黑色的卒 'p'。空方块用字符 '.' 表示。
// 车可以按水平或竖直方向（上，下，左，右）移动任意个方格直到它遇到另一个棋子或棋盘的边界。如果它能够在一次移动中移动到棋子的方格，则能够 吃掉 棋子。
// 注意：车不能穿过其它棋子，比如象和卒。这意味着如果有其它棋子挡住了路径，车就不能够吃掉棋子。
// 返回白车将能 吃掉 的 卒的数量。

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const SIZE = 8;
  const isInBoard = (x, y) => {
    return x >= 0 && x < SIZE && y >= 0 && y <= SIZE;
  }

  // 模拟题
  // 找到车R的位置
  let rock = [-1, -1];
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (board[i][j] === 'R') {
        rock = [i, j];
        break;
      }
    }
  }
  // 遍历四个方向，寻找卒p
  let answer = 0;
  const d = [[0, -1], [0, 1], [-1, 0], [1, 0]];
  for (let [dx, dy] of d) {
    let x = rock[0] + dx;
    let y = rock[1] + dy;
    // 沿着同一方向一直走到有棋子的位置
    while (isInBoard(x, y) && board[x][y] === '.') {
      x += dx;
      y += dy;
    }
    // 车不能穿过其它棋子，只吃遇到的第一个卒，否则丢弃本次遍历
    if (isInBoard(x, y) && board[x][y] === 'p') {
      answer++;
    }
  }
  return answer;
};

// https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/1253_example_3_improved.PNG
// 车可以吃掉位置 b5，d6 和 f5 的卒。
console.log(numRookCaptures([
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  ["p", "p", ".", "R", ".", "p", "B", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "B", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]
]));