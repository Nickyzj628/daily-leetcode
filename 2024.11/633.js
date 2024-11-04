// 633. 平方数之和
// https://leetcode.cn/problems/sum-of-square-numbers/

// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  // 双指针
  let a = 0;
  let b = Math.floor(Math.sqrt(c));
  while (a <= b) {
    const sum = a ** 2 + b ** 2;
    if (sum === c) return true;
    if (sum < c) a++;
    else b--;
  }
  return false;
};

// 1 * 1 + 2 * 2 = 5
console.log(judgeSquareSum(5)); // true