// 3159. 查询数组中元素的出现位置
// https://leetcode.cn/problems/find-occurrences-of-an-element-in-an-array/

// 给你一个整数数组 nums ，一个整数数组 queries 和一个整数 x 。
// 对于每个查询 queries[i] ，你需要找到 nums 中第 queries[i] 个 x 的位置，并返回它的下标。如果数组中 x 的出现次数少于 queries[i] ，该查询的答案为 -1 。
// 请你返回一个整数数组 answer ，包含所有查询的答案。

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
  // 遍历，记录每个x的下标
  const indexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== x) continue;
    indexes.push(i);
  }

  // 遍历，判断每个查询
  const answer = [];
  for (let query of queries) {
    if (query > indexes.length) answer.push(-1);
    else answer.push(indexes[query - 1]);
  }
  return answer;
};

// 第 1 个查询，第一个 1 出现在下标 0 处。
// 第 2 个查询，nums 中只有两个 1 ，所以答案为 -1 。
// 第 3 个查询，第二个 1 出现在下标 2 处。
// 第 4 个查询，nums 中只有两个 1 ，所以答案为 -1 。
console.log(occurrencesOfElement([1, 3, 1, 7], [1, 3, 2, 4], 1)); // [0,-1,2,-1]