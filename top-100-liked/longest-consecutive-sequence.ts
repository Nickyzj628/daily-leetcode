/**
 * 128. 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked
 */

function longestConsecutive(nums: number[]): number {
  let longestLength = 0;

  // O(nlogn) 去重 + 排序 + 遍历
  // const sortedDeduplicatedNums = Array.from(new Set(nums)).sort((a, b) => a - b);
  // let length = 0;
  // for (const [index, num] of sortedDeduplicatedNums.entries()) {
  //   if (num === sortedDeduplicatedNums[index - 1] + 1) {
  //     length++;
  //   } else {
  //     longestLength = Math.max(longestLength, length);
  //     length = 1;
  //   }
  // }
  // longestLength = Math.max(longestLength, length);

  // O(n) 哈希表 + 遍历
  const deduplicatedNumsSet = new Set(nums);
  for (const num of deduplicatedNumsSet) {
    if (deduplicatedNumsSet.has(num - 1)) {
      continue;
    }
    let length = 1;
    while (deduplicatedNumsSet.has(num + length)) {
      length++;
    }
    longestLength = Math.max(longestLength, length);
  }

  return longestLength;
};

// 4
// 最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// 9
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));