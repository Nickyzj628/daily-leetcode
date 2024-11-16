// 312. 戳气球
// https://leetcode.cn/problems/burst-balloons/

// 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
// 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。
// 求所能获得硬币的最大数量。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length;

  // “如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球”
  nums = [1, ...nums, 1];

  // dp[i][j]: 戳破(i,j)所有气球能获得的最多硬币数 = 枚举k∈(i,j)，计算max(dp[i][j], dp[i][k] + 戳破k获取的硬币 + dp[k][j])
  // 首次遍历情况模拟，方便理解i、j、k初始值和条件：
  // [1, 3, 1, 5, 8, 1]
  //           i  k  j
  const dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j <= n + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        const coin = dp[i][k] + (nums[i] * nums[k] * nums[j]) + dp[k][j];
        dp[i][j] = Math.max(dp[i][j], coin);
      }
    }
  }
  return dp[0][n + 1];
};

// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
console.log(maxCoins([3, 1, 5, 8])); // 167