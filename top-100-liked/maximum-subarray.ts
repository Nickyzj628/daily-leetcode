/**
 * 53. 最大子数组和
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组是数组中的一个连续部分。
 * https://leetcode.cn/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-100-liked
 */

function maxSubArray(nums: number[]): number {
  // dp[i] = max(dp[i-1] + num, num) = max(dp[i-1], 0) + num
  let answer = -Infinity;

  // 优化空间复杂度
  let dp = 0;
  for (let num of nums) {
    dp = Math.max(dp, 0) + num;
    answer = Math.max(answer, dp);
  }

  // const dp: number[] = [];
  // for (const [i, num] of nums.entries()) {
  //   const prevDP = dp[i - 1] ?? -Infinity;
  //   dp[i] = Math.max(prevDP, 0) + num;
  //   answer = Math.max(answer, dp[i]);
  // }

  return answer;
};

// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));