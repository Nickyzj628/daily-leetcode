// Q1. 检测相邻递增子数组 II
// https://leetcode.cn/contest/weekly-contest-423/problems/adjacent-increasing-subarrays-detection-ii/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var maxIncreasingSubarrays = function (nums) {
  // 用例1069超时😭

  // 合并2个递增子数组
  const merge = (nums1, nums2) => {
    // 三指针，从后往前填充元素
    let i = nums1.length - 1; // 指向nums1待合并元素
    let j = nums2.length - 1; // 指向nums2待合并元素
    let k = nums1.length + nums2.length - 1;
    // 遍历nums2
    while (j >= 0) {
      // i>=0是在处理nums1元素更少的情况
      if (i >= 0 && nums1[i] >= nums2[j]) nums1[k--] = nums1[i--];
      else nums1[k--] = nums2[j--];
    }
  };

  // 遍历，记录所有递增子数组的最大长度和结束下标
  const indexesGroupByMaxCount = Array.from({ length: nums.length + 1 }, () => []);
  let count = 1;
  // 题目保证“2 <= nums.length <= 2 * 10^5”
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) count++;
    else count = 1;
    // 记录进候选答案
    if (count > 1) {
      indexesGroupByMaxCount[count].push(i);
    }
  }

  // 寻找长度>=2的候选答案
  // 从大到小遍历，这样可以直接返回答案
  for (let c = indexesGroupByMaxCount.length - 1; c > 1; c--) {
    // 先筛去空数组
    const indexes = indexesGroupByMaxCount[c];
    if (indexes.length === 0) continue;
    // 选中一个递增子数组结束下标，把它+c，判断对应下标是否存在
    for (let i = 0; i < indexes.length - 1; i++) {
      const startIdx = indexes[i];
      const endIdx = startIdx + c;
      for (let j = i + 1; j < indexes.length; j++) {
        if (indexes[j] === endIdx) return c;
        if (indexes[j] > endIdx) break;
      }
    }
    // 当前长度无答案就向下合并
    merge(indexesGroupByMaxCount[c - 1], indexes);
  }

  // 没有递增子数组，返回最小答案
  return 1;
};

console.log(maxIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1])); // 3

console.log(maxIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7])); // 2

console.log(maxIncreasingSubarrays([-15, 19]));  // 1

console.log(maxIncreasingSubarrays(19, 5));  //1

console.log(maxIncreasingSubarrays([5, 8, -2, -1])); // 2