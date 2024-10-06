// 134. 加油站
// https://leetcode.cn/problems/gas-station/

// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    // 贪心(?)
    // 1. 在sum(gas)能满足sum(cost)的理论前提下
    // 2. 寻找一个 途中油箱始终有油 && 行驶到数组中最后一站的剩余油量>=之前站点的耗油量 的站点
    let answer = 0
    let totalLeftGas = 0
    let currentLeftGas = 0
    for (let i = 0; i < gas.length; i++) {
        const refuel = gas[i] - cost[i]
        // 1.
        totalLeftGas += refuel
        // 2. 重新寻找符合条件的站
        if ((currentLeftGas += refuel) < 0) {
            answer = i + 1
            currentLeftGas = 0
        }
    }
    // 1.
    if (totalLeftGas < 0) answer = -1
    // 2. 可以确定这一站到数组最后一站剩的油能保证后续行驶到终点了
    return answer

    // 穷举，10w数据量会超时
    // 遍历起点
    // for (let start = 0; start < gas.length; start++) {
    //     let leftGas = 0
    //     // 判断经过的站点数
    //     for (let step = 0; step < gas.length; step++) {
    //         // 在每一站加油、行驶
    //         let i = (start + step) % gas.length
    //         leftGas += gas[i] - cost[i]
    //         // 无法到达下一站
    //         if (leftGas < 0) break
    //     }
    //     // 能够回到起点
    //     if (leftGas >= 0) return start
    // }
    // return -1
}

// 从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
// 开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
// 开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
// 开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
// 开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
// 开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
// 因此，3 可为起始索引。
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])) // 3

// 你不能从 0 号或 1 号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。
// 我们从 2 号加油站出发，可以获得 4 升汽油。 此时油箱有 = 0 + 4 = 4 升汽油
// 开往 0 号加油站，此时油箱有 4 - 3 + 2 = 3 升汽油
// 开往 1 号加油站，此时油箱有 3 - 3 + 3 = 3 升汽油
// 你无法返回 2 号加油站，因为返程需要消耗 4 升汽油，但是你的油箱只有 3 升汽油。
// 因此，无论怎样，你都不可能绕环路行驶一周。
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])) // -1

console.log(canCompleteCircuit([3, 3, 4], [3, 4, 4])) // -1
console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2])) // 0
