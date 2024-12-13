// 3264. K 次乘运算后的最终数组 I
// https://leetcode.cn/problems/final-array-state-after-k-multiplication-operations-i/

// 给你一个整数数组 nums ，一个整数 k  和一个整数 multiplier 。
// 你需要对 nums 执行 k 次操作，每次操作中：
// 找到 nums 中的 最小 值 x ，如果存在多个最小值，选择最 前面 的一个。
// 将 x 替换为 x * multiplier 。
// 请你返回执行完 k 次乘运算之后，最终的 nums 数组。

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  // 模拟题，遍历len(nums)*k次，每次选出最小值*multiplier
  for (let i = 0; i < k; i++) {
    let minIdx = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }
    nums[minIdx] *= multiplier;
  }
  return nums;
};

// 1 次操作后	[2, 2, 3, 5, 6]
// 2 次操作后	[4, 2, 3, 5, 6]
// 3 次操作后	[4, 4, 3, 5, 6]
// 4 次操作后	[4, 4, 6, 5, 6]
// 5 次操作后	[8, 4, 6, 5, 6]
console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));  // [8,4,6,5,6]