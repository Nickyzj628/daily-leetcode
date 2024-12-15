// 1338. 数组大小减半
// https://leetcode.cn/problems/reduce-array-size-to-the-half/

// 给你一个整数数组 arr。你可以从中选出一个整数集合，并删除这些整数在数组中的每次出现。
// 返回 至少 能删除数组中的一半整数的整数集合的最小大小。

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  // 哈希表，统计每个数字的出现次数
  const numCount = new Map();
  for (let num of arr) {
    const count = numCount.get(num) ?? 0;
    numCount.set(num, count + 1);
  }

  // 排序，按出现次数从多到少
  const sortedCounts = Array.from(numCount.values()).sort((a, b) => b - a);

  // 计算答案
  const targetLength = Math.ceil(arr.length / 2);
  let restLength = arr.length;
  for (let i = 0; i < sortedCounts.length; i++) {
    restLength -= sortedCounts[i];
    if (restLength <= targetLength) return i + 1;
  }
};

// 选择 {3,7} 使得结果数组为 [5,5,5,2,2]、长度为 5（原数组长度的一半）。
// 大小为 2 的可行集合有 {3,5},{3,2},{5,2}。
// 选择 {2,7} 是不可行的，它的结果数组为 [3,3,3,3,5,5,5]，新数组长度大于原数组的二分之一。
console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])); // 2