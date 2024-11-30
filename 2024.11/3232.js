// 3232. 判断是否可以赢得数字游戏
// https://leetcode.cn/problems/find-if-digit-game-can-be-won/

// 给你一个 正整数 数组 nums。
// Alice 和 Bob 正在玩游戏。在游戏中，Alice 可以从 nums 中选择所有个位数 或 所有两位数，剩余的数字归 Bob 所有。如果 Alice 所选数字之和 严格大于 Bob 的数字之和，则 Alice 获胜。
// 如果 Alice 能赢得这场游戏，返回 true；否则，返回 false。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  // alice只有一种情况会输：个位数=两位数
  let single = 0;
  let double = 0;
  for (let num of nums) {
    if (num < 10) single += num;
    else double += num;
  }
  return single !== double;
};

// Alice 不管选个位数还是两位数都无法赢得比赛。
console.log(canAliceWin([1, 2, 3, 4, 10])); // false