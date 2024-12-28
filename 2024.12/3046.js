// 3046. 分割数组
// https://leetcode.cn/problems/split-the-array/

// 给你一个长度为 偶数 的整数数组 nums 。你需要将这个数组分割成 nums1 和 nums2 两部分，要求：
// nums1.length == nums2.length == nums.length / 2 。
// nums1 应包含 互不相同 的元素。
// nums2也应包含 互不相同 的元素。
// 如果能够分割数组就返回 true ，否则返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  // 一个哈希表，统计相同数字的个数>2就不合题意
  const numCount = {};
  for (let num of nums) {
    const nextCount = (numCount[num] ?? 0) + 1;
    if (nextCount > 2) return false;
    numCount[num] = nextCount;
  }
  return true;

  // 两个哈希表，根据题意模拟分割数组
  // const nums1 = new Set();
  // const nums2 = new Set();
  // for (let num of nums) {
  //   if (nums1.has(num) && nums2.has(num)) return false;
  //   if (nums1.has(num)) nums2.add(num);
  //   else nums1.add(num);
  // }
  // return true;
};

console.log(isPossibleToSplit([6, 1, 3, 1, 1, 8, 9, 2]));  // false

console.log(isPossibleToSplit([8, 9, 8, 5, 9, 3, 3, 1, 2, 1]));  // true

console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]));  // true