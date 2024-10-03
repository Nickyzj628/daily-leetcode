// 1014. 最佳观光组合
// https://leetcode.cn/problems/best-sightseeing-pair/

// 给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。
// 一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去 它们两者之间的距离。
// 返回一对观光景点能取得的最高分。

/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    // DP
    // 观光得分 = (values[i]+i) + (values[j]-j) = vi+vj
    // 状态转移方程 = max(vi) + vj
    let answer = 0
    let maxVi = values[0]
    for (let j = 1; j < values.length; j++) {
        answer = Math.max(answer, maxVi + values[j] - j)
        maxVi = Math.max(maxVi, values[j] + j)
    }
    return answer
}

// i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6])) // 11
