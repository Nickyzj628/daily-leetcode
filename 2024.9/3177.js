// 3177. 求出最长好子序列 II
// https://leetcode.cn/problems/find-the-maximum-length-of-a-good-subsequence-ii/

// 给你一个整数数组 nums 和一个 非负 整数 k 。如果一个整数序列 seq 满足在范围下标范围 [0, seq.length - 2] 中存在 不超过 k 个下标 i 满足 seq[i] != seq[i + 1] ，那么我们称这个整数序列为 好 序列。
// 请你返回 nums 中 好子序列 的最长长度

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
    // DP+哈希表，同3176题，但超时，需要优化掉一层遍历
    // https://leetcode.cn/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/2805142/dong-tai-gui-hua-ha-xi-biao-by-oamuuvyi-maj1/?envType=daily-question&envId=2024-09-07
    const numDp = new Map()
    const maxLength = new Array(k + 1).fill(0)
    for (let num of nums) {
        if (!numDp.has(num)) numDp.set(num, new Array(k + 1).fill(0))
        const dp = numDp.get(num)
        for (let i = k; i >= 0; i--) {
            dp[i]++
            if (i > 0) {
                dp[i] = Math.max(dp[i], maxLength[i - 1] + 1)
            }
            maxLength[i] = Math.max(maxLength[i], dp[i])
        }
    }
    return maxLength[k]
}

console.log(maximumLength([1, 2, 1, 1, 3], 2)) // 4
console.log(maximumLength([1, 2, 3, 4, 5, 1], 0)) // 2
