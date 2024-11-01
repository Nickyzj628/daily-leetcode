// 3259. 超级饮料的最大强化能量
// https://leetcode.cn/problems/maximum-energy-boost-from-two-drinks/

// 来自未来的体育科学家给你两个整数数组 energyDrinkA 和 energyDrinkB，数组长度都等于 n。这两个数组分别代表 A、B 两种不同能量饮料每小时所能提供的强化能量。
// 你需要每小时饮用一种能量饮料来 最大化 你的总强化能量。然而，如果从一种能量饮料切换到另一种，你需要等待一小时来梳理身体的能量体系（在那个小时里你将不会获得任何强化能量）。
// 返回在接下来的 n 小时内你能获得的 最大 总强化能量。
// 注意 你可以选择从饮用任意一种能量饮料开始。

/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function (energyDrinkA, energyDrinkB) {
    // dp[n,A]: 第n小时选A能获得的最大总能量 = max(dp[n-1][A]+A, dp[n-1][B])
    // dp[n,B]: 同理
    const dp = Array.from({ length: energyDrinkA.length + 1 }, () => [0, 0]);
    for (let i = 0; i < energyDrinkA.length; i++) {
        dp[i + 1][0] = Math.max(dp[i][0] + energyDrinkA[i], dp[i][1]);
        dp[i + 1][1] = Math.max(dp[i][1] + energyDrinkB[i], dp[i][0]);
    }
    return Math.max(...dp.at(-1));
};

// 第一个小时饮用能量饮料 A。
// 切换到能量饮料 B ，在第二个小时无法获得强化能量。
// 第三个小时饮用能量饮料 B ，并获得强化能量。
console.log(maxEnergyBoost([4, 1, 1], [1, 1, 3])); // 7
