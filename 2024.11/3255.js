// 3255. 长度为 K 的子数组的能量值 II
// https://leetcode.cn/problems/find-the-power-of-k-size-subarrays-i/

// 给你一个长度为 n 的整数数组 nums 和一个正整数 k 。
// 一个数组的 能量值 定义为：
// 如果 所有 元素都是依次 连续 且 上升 的，那么能量值为 最大 的元素。
// 否则为 -1 。
// 你需要求出 nums 中所有长度为 k 的 子数组的能量值。
// 请你返回一个长度为 n - k + 1 的整数数组 results ，其中 results[i] 是子数组 nums[i..(i + k - 1)] 的能量值。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  // 同3254，遍历，统计连续上升个数
  const answer = new Array(nums.length - k + 1).fill(-1);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // 连续上升count+1，否则重新从1计数
    count = (i === 0 || nums[i] === nums[i - 1] + 1) ? count + 1 : 1;
    // 连续上升k个元素时更新答案
    if (count >= k) answer[i - k + 1] = nums[i];
  }
  return answer;
};

// nums 中总共有 5 个长度为 3 的子数组：
// [1, 2, 3] 中最大元素为 3 。
// [2, 3, 4] 中最大元素为 4 。
// [3, 4, 3] 中元素 不是 连续的。
// [4, 3, 2] 中元素 不是 上升的。
// [3, 2, 5] 中元素 不是 连续的。
console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)); // [3,4,-1,-1,-1]