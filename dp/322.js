// 322. 零钱兑换
// https://leetcode.cn/problems/coin-change/

// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // 缓存DP计算结果，去除重复计算，从而优化时间复杂度到O(amount * coins.length)
    const memo = new Array(amount + 1);

    /**
     * dp(amount): 凑出amount所需的最少硬币个数 = min(this, dp(amount-coin)+1)
     * @param {number} amount
     */
    const dp = (amount) => {
        // 0 <= amount <= 104，为0时不用计算
        if (amount === 0) return 0;
        // 可能递归计算到负数
        if (amount < 0) return -1;
        // 避免重复计算
        if (memo[amount]) return memo[amount];

        let answer = Infinity;
        for (let coin of coins) {
            const subDP = dp(amount - coin);
            // 子问题无解
            if (subDP === -1) continue;
            // 选择最优解
            answer = Math.min(answer, subDP + 1);
        }

        memo[amount] = answer === Infinity ? -1 : answer;
        return memo[amount];
    };

    return dp(amount);
};

// 11 = 5 + 5 + 1
console.log(coinChange([1, 2, 5], 11)); // 3

console.log(coinChange([2], 3)); // -1
