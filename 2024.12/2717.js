// 2717. 半有序排列
// https://leetcode.cn/problems/semi-ordered-permutation/

// 给你一个下标从 0 开始、长度为 n 的整数排列 nums 。
// 如果排列的第一个数字等于 1 且最后一个数字等于 n ，则称其为 半有序排列 。你可以执行多次下述操作，直到将 nums 变成一个 半有序排列 ：
// 选择 nums 中相邻的两个元素，然后交换它们。
// 返回使 nums 变成 半有序排列 所需的最小操作次数。
// 排列 是一个长度为 n 的整数序列，其中包含从 1 到 n 的每个数字恰好一次。

/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  // 模拟题
  // 找到1、n所在位置
  const n = nums.length;
  const a = nums.indexOf(1);
  const b = nums.indexOf(n);
  // 1在n前面，直接累加操作1和操作n的次数
  if (a < b) {
    return a + (n - 1 - b);
  }
  // 1在n后面，累加操作1和操作n的次数之后，还需要减去把n交换到1后面的一次
  return a + (n - 1 - b) - 1;
};

// 可以依次执行下述操作得到半有序排列：
// 1 - 交换下标 0 和下标 1 对应元素。排列变为 [1,2,4,3] 。
// 2 - 交换下标 2 和下标 3 对应元素。排列变为 [1,2,3,4] 。
// 可以证明，要让 nums 成为半有序排列，不存在执行操作少于 2 次的方案。
console.log(semiOrderedPermutation([2, 1, 4, 3])); // 2

// 可以依次执行下述操作得到半有序排列：
// 1 - 交换下标 1 和下标 2 对应元素。排列变为 [2,1,4,3] 。
// 2 - 交换下标 0 和下标 1 对应元素。排列变为 [1,2,4,3] 。
// 3 - 交换下标 2 和下标 3 对应元素。排列变为 [1,2,3,4] 。
// 可以证明，要让 nums 成为半有序排列，不存在执行操作少于 3 次的方案。
console.log(semiOrderedPermutation([2, 4, 1, 3])); // 3