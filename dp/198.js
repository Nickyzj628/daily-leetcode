// 198. 打家劫舍
// https://leetcode.cn/problems/house-robber/

// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 最多只有2间房，偷其中最高金额的那间
  if (nums.length <= 2) {
    return Math.max(...nums);
  }
  // dp[i]: 偷到第i间房时能获得的最高金额 = max(偷i, 不偷i) = max(nums[i]+dp[i-2], dp[i-1])
  // const dp = new Array(nums.length);
  // dp[0] = nums[0];
  // dp[1] = Math.max(nums[0], nums[1]);
  // 长度为len(nums)的数组改成2个变量，空间复杂度O(1)
  let prepre = nums[0];
  let pre = Math.max(prepre, nums[1]);
  for (let i = 2; i < nums.length; i++) {
    // dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    const cur = Math.max(nums[i] + prepre, pre);
    prepre = pre;
    pre = cur;
  }
  // return dp.at(-1);
  return pre;
};

// 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
// 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
console.log(rob([2, 7, 9, 3, 1])); // 12

console.log(rob([2, 1, 1, 2])) // 4