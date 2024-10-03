import { binarySearch } from "../essentials/binarySearch.js"

// 2555. 两个线段获得的最多奖品
// https://leetcode.cn/problems/maximize-win-from-two-segments/

// 在 X轴 上有一些奖品。给你一个整数数组 prizePositions ，它按照 非递减 顺序排列，其中 prizePositions[i] 是第 i 件奖品的位置。数轴上一个位置可能会有多件奖品。再给你一个整数 k 。
// 你可以同时选择两个端点为整数的线段。每个线段的长度都必须是 k 。你可以获得位置在任一线段上的所有奖品（包括线段的两个端点）。注意，两个线段可能会有相交。
// 比方说 k = 2 ，你可以选择线段 [1, 3] 和 [2, 4] ，你可以获得满足 1 <= prizePositions[i] <= 3 或者 2 <= prizePositions[i] <= 4 的所有奖品 i 。
// 请你返回在选择两个最优线段的前提下，可以获得的 最多 奖品数目。

/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function (prizePositions, k) {
    // DP + 二分查找
    // dp[j] = 右端点不超过prizePositions[j]，长度为k的线段最多能覆盖多少奖品
    // dp[j] = dp[j-1]  不选prizePositions[j]
    //         j-i+1    选prizePositions[j]，二分查找左端点prizePositions[i]=prizePositions[j]-k
    // 求max(dp[j-1], j-i+1)
    let answer = 0
    const { length } = prizePositions
    const dp = new Array(length).fill(0)
    for (let j = 0; j < length; j++) {
        let i = binarySearch(prizePositions, prizePositions[j] - k)
        answer = Math.max(answer, j - i + 1 + dp[i])
        dp[j + 1] = Math.max(dp[j], j - i + 1)
    }
    return answer
}

// 这个例子中，你可以选择线段 [1, 3] 和 [3, 5] ，获得 7 个奖品。
console.log(maximizeWin([1, 1, 2, 2, 3, 3, 5], 2)) // 7
