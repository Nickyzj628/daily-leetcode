// Q1. 检测相邻递增子数组 I
// https://leetcode.cn/contest/weekly-contest-423/problems/adjacent-increasing-subarrays-detection-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
  // 遍历，记录count>=k时的递增子数组的结束下标
  const indexes = [];
  let count = 1;
  // 题目保证“2 <= nums.length <= 100”
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    // 递增子数组长度超过k，记录进候选答案
    if (count >= k) {
      indexes.push(i);
    }
  }

  // 寻找下标差值=k的作为答案
  if (k === 1) {
    return indexes.length !== 0;
  }
  for (let i = 0; i < indexes.length; i++) {
    const startIdx = indexes[i];
    const endIdx = startIdx + k;
    if (indexes.indexOf(endIdx) !== -1) {
      return true;
    }
  }
  return false;
};

console.log(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3)); // true

console.log(hasIncreasingSubarrays([-15, 19], 1));  // true