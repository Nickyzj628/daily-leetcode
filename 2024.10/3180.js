// 3180. 执行操作可获得的最大总奖励 I
// https://leetcode.cn/problems/maximum-total-reward-using-operations-i/

// 给你一个整数数组 rewardValues，长度为 n，代表奖励的值。
// 最初，你的总奖励 x 为 0，所有下标都是 未标记 的。你可以执行以下操作 任意次 ：
//     从区间 [0, n - 1] 中选择一个 未标记 的下标 i。
//     如果 rewardValues[i] 大于 你当前的总奖励 x，则将 rewardValues[i] 加到 x 上（即 x = x + rewardValues[i]），并 标记 下标 i。
// 以整数形式返回执行最优操作能够获得的 最大 总奖励。

/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (rewardValues) {
    // 排序 + dp，背包容量=最高奖励*2-1，物品重量=价值
    // dp[i]: 总奖励i能否被获得
    rewardValues.sort((a, b) => a - b);
    const dp = new Array(rewardValues.at(-1) * 2);
    dp[0] = true;
    // 从小到大遍历奖励
    for (let value of rewardValues) {
        // 从大到小遍历背包容量
        for (let size = value * 2 - 1; size >= value; size--) {
            if (dp[size - value]) {
                dp[size] = true;
            }
        }
    }
    return dp.lastIndexOf(true);
};

console.log(maxTotalReward([1, 6, 4, 3, 2])); // 11
