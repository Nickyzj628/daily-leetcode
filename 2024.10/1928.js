// 1928. 规定时间内到达终点的最小花费
// https://leetcode.cn/problems/minimum-cost-to-reach-destination-in-time/

// 一个国家有 n 个城市，城市编号为 0 到 n - 1 ，题目保证 所有城市 都由双向道路 连接在一起 。道路由二维整数数组 edges 表示，其中 edges[i] = [xi, yi, timei] 表示城市 xi 和 yi 之间有一条双向道路，耗费时间为 timei 分钟。两个城市之间可能会有多条耗费时间不同的道路，但是不会有道路两头连接着同一座城市。
// 每次经过一个城市时，你需要付通行费。通行费用一个长度为 n 且下标从 0 开始的整数数组 passingFees 表示，其中 passingFees[j] 是你经过城市 j 需要支付的费用。
// 一开始，你在城市 0 ，你想要在 maxTime 分钟以内 （包含 maxTime 分钟）到达城市 n - 1 。旅行的 费用 为你经过的所有城市 通行费之和 （包括 起点和终点城市的通行费）。
// 给你 maxTime，edges 和 passingFees ，请你返回完成旅行的 最小费用 ，如果无法在 maxTime 分钟以内完成旅行，请你返回 -1 。

/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function (maxTime, edges, passingFees) {
    // dp[i][y]: 用i分钟从起点到y的最小费用 = min(dp[i][y], dp[i-timeXY][x]+passingFees[y])
    const { length } = passingFees
    const dp = Array.from({ length: maxTime + 1 }, () => new Array(length).fill(Infinity))
    dp[0][0] = passingFees[0]
    // 计算所有用时下的最优路径
    for (let i = 1; i <= maxTime; i++) {
        // 遍历每条路
        for (let [x, y, time] of edges) {
            if (time > i) continue
            // 同时计算2个点的最优路径，起点到y可以先到x再加上y，起点到x可以先绕到y再加上x
            dp[i][y] = Math.min(dp[i][y], dp[i - time][x] + passingFees[y])
            dp[i][x] = Math.min(dp[i][x], dp[i - time][y] + passingFees[x])
        }
    }
    // 寻找最短用时
    let answer = Infinity
    for (let i = 1; i <= maxTime; i++) {
        answer = Math.min(answer, dp[i][length - 1])
    }
    if (answer === Infinity) return -1
    return answer
}

// 最优路径为 0 -> 1 -> 2 -> 5 ，总共需要耗费 30 分钟，需要支付 11 的通行费。
console.log(
    minCost(
        30,
        [
            [0, 1, 10],
            [1, 2, 10],
            [2, 5, 10],
            [0, 3, 1],
            [3, 4, 10],
            [4, 5, 15],
        ],
        [5, 1, 2, 20, 20, 3]
    )
) // 11

console.log(minCost(100, [[0, 1, 100]], [2, 5])) // 7
