// 871. 最低加油次数
// https://leetcode.cn/problems/minimum-number-of-refueling-stops/

// 汽车从起点出发驶向目的地，该目的地位于出发位置东面 target 英里处。
// 沿途有加油站，用数组 stations 表示。其中 stations[i] = [positioni, fueli] 表示第 i 个加油站位于出发位置东面 positioni 英里处，并且有 fueli 升汽油。
// 假设汽车油箱的容量是无限的，其中最初有 startFuel 升燃料。它每行驶 1 英里就会用掉 1 升汽油。当汽车到达加油站时，它可能停下来加油，将所有汽油从加油站转移到汽车中。
// 为了到达目的地，汽车所必要的最低加油次数是多少？如果无法到达目的地，则返回 -1 。
// 注意：如果汽车到达加油站时剩余燃料为 0，它仍然可以在那里加油。如果汽车到达目的地时剩余燃料为 0，仍然认为它已经到达目的地。

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
    // dp[j]: 加j次油能行驶的最大英里数 = max(dp[j], dp[j-1] + stations[i][1]), i:当前加油站
    const dp = new Array(stations.length + 1).fill(0)
    dp[0] = startFuel
    // 遍历加油站
    for (let i = 0; i < stations.length; i++) {
        // 从大到小遍历加油次数
        for (let j = i; j >= 0; j--) {
            // 只加j次油到不了本站
            if (dp[j] < stations[i][0]) break
            // 计算在本站加油后能行驶的最大英里数
            dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1])
        }
    }
    // 寻找最低加油次数
    return dp.findIndex((distance) => distance >= target)
}

// 出发时有 10 升燃料。
// 开车来到距起点 10 英里处的加油站，消耗 10 升燃料。将汽油从 0 升加到 60 升。
// 然后，从 10 英里处的加油站开到 60 英里处的加油站（消耗 50 升燃料），
// 并将汽油从 10 升加到 50 升。然后开车抵达目的地。
// 沿途在两个加油站停靠，所以返回 2 。
console.log(
    minRefuelStops(100, 10, [
        [10, 60],
        [20, 30],
        [30, 30],
        [60, 40],
    ])
) // 2
