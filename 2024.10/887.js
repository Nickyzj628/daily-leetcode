// 887. 鸡蛋掉落
// https://leetcode.cn/problems/super-egg-drop/

// 给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。
// 已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。
// 每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。
// 请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    // 思路：猜数字（算法优化需要数学思维+二分查找）
    const memo = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
    /**
     * dp[k,n]: k个鸡蛋在n层楼找到不会碎的最高楼层f所需最少次数 = max(dp[k-1,i-1]:碎了就计算下一层鸡蛋-1的情况，dp[k][n-i]:没碎就计算上面楼层的情况) + 1, 1<=i<=n
     * @param {number} k 当前剩余鸡蛋
     * @param {number} n 当前楼层数
     * @returns {number}
     */
    const dp = (k, n) => {
        // 边界条件：0层楼不需要扔鸡蛋
        if (n === 0) return 0;
        // 边界条件：1个鸡蛋从下往上逐层扫描
        if (k === 1) return n;
        // 减少重复计算
        if (memo[k][n]) return memo[k][n];
        let answer = Infinity;
        // 穷举所有楼层
        for (let i = 1; i <= n; i++) {
            answer = Math.min(answer, Math.max(dp(k - 1, i - 1), dp(k, n - i)) + 1);
        }
        memo[k][n] = answer;
        return answer;
    };
    return dp(k, n);
};

console.log(superEggDrop(2, 6)); // 3
console.log(superEggDrop(5, 2000)); // 13（超时）
