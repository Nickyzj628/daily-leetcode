// 100478. 检查平衡字符串

// 给你一个仅由数字 0 - 9 组成的字符串 num。如果偶数下标处的数字之和等于奇数下标处的数字之和，则认为该数字字符串是一个 平衡字符串。
// 如果 num 是一个 平衡字符串，则返回 true；否则，返回 false。

/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  // 遍历
  const sum = [0, 0];
  const nums = num.split("").map(Number);
  for (let i = 0; i < nums.length; i++) {
    sum[i % 2] += nums[i];
  }
  return sum[0] === sum[1];
};

console.log(isBalanced("24123")); // true