// 540. 有序数组中的单一元素
// https://leetcode.cn/problems/single-element-in-a-sorted-array/

// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。
// 请你找出并返回只出现一次的那个数。
// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  // 二分查找
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    // 偶数下标的值=后一个奇数下标的值，代表前半段数组都是一对的
    if (m % 2 === 0) {
      if (nums[m] === nums[m + 1]) l = m + 1;
      else r = m;
    }
    // 奇数下标的值=前一个偶数下标的值，代表前半段数组都是一对的
    else {
      if (nums[m] === nums[m - 1]) l = m + 1;
      else r = m;
    }
  }
  return nums[r];

  // 遍历
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2

console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));  // 10

console.log(singleNonDuplicate([1, 1, 2, 2, 3])); // 3