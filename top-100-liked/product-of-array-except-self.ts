/**
 * 238. 除自身以外数组的乘积
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked
 */

function productExceptSelf(nums: number[]): number[] {
  // 前缀和 + 后缀和
  const n = nums.length;

  const prefix = [1];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  const suffix: number[] = new Array(n);
  suffix[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  const answer: number[] = [];
  for (let i = 0; i < n; i++) {
    answer[i] = prefix[i] * suffix[i];
  }
  return answer;
};

// [24,12,8,6]
console.log(productExceptSelf([1, 2, 3, 4]));